import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Comic } from '../../resources/class/comic';
import { ShoppingCartService } from '../../resources/services/shopping-cart.service';
import { DetailService } from '../../resources/services/detail.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() selectedComic: Comic;
  @Output() closeDetails = new EventEmitter;

  constructor(
    private shoppingCartService: ShoppingCartService,
    public snackbar: MatSnackBar,
    private detail: DetailService
  ) { }

  ngOnInit() {

  }

  public setShoppingCart(comic: Comic) {
    this.shoppingCartService.setShoppingCartItem(comic);
    this.snackbar.open(`O ítem "${comic.title}" foi adicionado ao carrinho.`, '', {
      duration: 3000
    });

  }

  public close() {
    this.selectedComic = undefined;
    this.detail.returnToHome(this.selectedComic);
  }

}
