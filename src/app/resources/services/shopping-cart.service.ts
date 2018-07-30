import { Injectable } from '@angular/core';
import { Comic } from '../class/comic';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public shoppingCart: Array<Comic> = [];
  constructor() { }

  public setShoppingCartItem(item: Comic) {
    if (item) {
      const foundItem = this.shoppingCart.find((comic) => comic.id === item.id);
      if (foundItem) {
        this.increaseQty(foundItem);
      } else {
        this.shoppingCart.push(item);
      }
    }
  }

  public getShoppingcartItem(): Array<Comic> {
      return this.shoppingCart;
  }

  public increaseQty(item: Comic) {
    item.quantity = item.quantity + 1;
  }

  public decreaseQty(item: Comic) {
    item.quantity = item.quantity - 1;
  }

  public removeItem(item: Comic) {
    this.shoppingCart.splice(this.shoppingCart.indexOf(item), 1);
  }

}
