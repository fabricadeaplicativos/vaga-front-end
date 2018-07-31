import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ComicsService } from '../../resources/services/comics.service';
import { Comic } from '../../resources/class/comic';
import { ShoppingCartService } from '../../resources/services/shopping-cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DetailService } from '../../resources/services/detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public comics: Array<Comic> = [];
  public offset: number;
  public load: boolean;

  constructor(
    private comicsService: ComicsService,
    private shoppingCartService: ShoppingCartService,
    public snackbar: MatSnackBar,
    public detail: DetailService
  ) { }

  ngOnInit() {
    this.detail.selectedComic = undefined;
    this.load = false;
    this.offset = 0;
    this.comicsList();
  }

  public comicsList() {
    this.comics = undefined;
    this.comicsService.listComics()
    .subscribe(
      payload => {
        this.comics = this.randomRare(payload);
      },
       (err: HttpErrorResponse) => {
         this.comics = [];
          const body = err.error.status;
          this.snackbar.open(body, 'close');
      }
    );
  }

  public loadMore() {
    this.load = true;
    this.offset = this.comics.length;

    this.comicsService.listComics(this.offset)
    .subscribe(
      payload => {
        this.comics = this.comics.concat(this.randomRare(payload));
        this.load = false;
      },
      (err: HttpErrorResponse | any) => {
        this.comics = this.comics;
        const body = err.error.status;
        this.snackbar.open(body, 'close');
      }
    );
  }

  private randomRare(origin: Array<Comic>) {
    const percent = Math.round((10 * origin.length) / 100);
    const random = Math.floor(Math.random() * origin.length);
    for (let i = 0; i < percent; i++) {
      origin[random].rare = true;
    }
    return origin;
  }

  public setShoppingCart(comic: Comic) {
    this.shoppingCartService.setShoppingCartItem(comic);
    this.snackbar.open(`O ítem "${comic.title}" foi adicionado ao carrinho.`, '', {
      duration: 3000
    });

  }


}
