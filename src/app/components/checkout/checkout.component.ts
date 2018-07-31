import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Comic } from '../../resources/class/comic';
import { ShoppingCartService } from '../../resources/services/shopping-cart.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public shoppingCart: Array<Comic> = [];
  public caption: string;
  public total = 0;
  public cardNumber: string;
  public f: FormGroup;
  public ok: boolean;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private route: Router,
    private formbuilder: FormBuilder,
    public snackbar: MatSnackBar
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.ok = false;
    if (this.shoppingCartService.shoppingCart.length) {
      this.shoppingCart = this.shoppingCartService.shoppingCart.slice();
      this.caption = 'Verifique os ítens.';
    } else {
      this.route.navigate(['/home']);
    }
  }

  public removeItem(item: Comic): Array<Comic> {
    this.shoppingCartService.decreaseQty(item);
    if (item.quantity === 0) {
      this.shoppingCartService.removeItem(item);
    }
    if (!this.shoppingCartService.shoppingCart.length) {
      this.caption = 'Você não tem mais ítens no carrinho';
    }
    return this.shoppingCart = this.shoppingCartService.shoppingCart.slice();
  }

  public calcTotal(items: Array<Comic>): number {
    this.total = 0;
    items.forEach(item => {
      this.total += (item.prices[0].price * item.quantity);
    });
    return this.total;
  }


  public saveOrder() {
    if (this.validateCard()) {
      this.snackbar.open(`Pedido concluído. Você receberá um e-mail com os detalhes do pedido.`, 'Ok', {
        duration: 3000
      });
      this.shoppingCartService.shoppingCart = [];
      this.route.navigate(['/home']);
    } else {
      this.snackbar.open(`Cartão de crédito inválido.`, 'Ok', {
        duration: 3000
      });
      this.f.reset();
    }
  }

  public validateCard() {
    const n = this.f.get('cardNumber').value.replace(/[^0-9]+/g, '');
    const number = n.split('');
    if (number[0] === '4') {
      return true;
    } else if (number[0] === '5') {
      return true;
    }
    return false;
  }

  public buildForm() {
    this.f = this.formbuilder.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/\d{4}([ -]\d{4}){3}/), Validators.maxLength(19)]],
    });
  }


}
