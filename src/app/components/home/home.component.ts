import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../resources/services/comics.service';
import { Comic, Price } from '../../resources/class/comic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public comics: Array<Comic> = [];
  public offset: number;
  public load: boolean;
  public selectedComic: Comic;
  public shoppingCart: Array<Price>;

  public color = '#E92E2C';

  constructor(private comicsService: ComicsService) { }

  ngOnInit() {
    this.shoppingCart = [];
    this.selectedComic = undefined;
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
        console.log(this.comics);
      }, err => {
        this.comics = [];
        console.log(err);
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
        console.log('carregar mais', this.comics);
      }, err => {
        console.log(err);
        this.comics = this.comics;
        this.load = false;
      }
    );
  }

  private randomRare(origin: Array<Comic>) {
    const percent = Math.round((10 * origin.length) / 100);
    console.log('10% de ' , origin.length, 'é', percent);
    const random = Math.floor(Math.random() * origin.length);
    for (let i = 0; i < percent; i++) {
      origin[random].rare = true;
    }
    return origin;
  }

  public setShoppingCart(value: Price, id: number) {
    this.shoppingCart.push(value);
    console.log(this.shoppingCart);

  }

  public reset(c: Comic) {
    this.selectedComic = c;
  }

}
