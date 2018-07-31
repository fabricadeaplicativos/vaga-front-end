import { Component, OnInit, EventEmitter, OnChanges } from '@angular/core';
import { ShoppingCartService } from '../../resources/services/shopping-cart.service';
import { Comic } from '../../resources/class/comic';
import { DetailService } from '../../resources/services/detail.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  public shoppingCart = new EventEmitter;
  public comics: Array<Comic>;

  constructor(private shoppingCartService: ShoppingCartService, private datail: DetailService) { }

  ngOnInit() {
    this.comics = [];
    this.shoppingCartService.shoppingCart = [];
    this.comics = this.shoppingCartService.getShoppingcartItem();
  }

  ngOnChanges() {
    this.comics = this.shoppingCartService.getShoppingcartItem();
  }

  public returnToHome() {
    this.datail.returnToHome();
  }

}
