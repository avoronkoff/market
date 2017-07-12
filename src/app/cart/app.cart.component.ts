import { Component } from '@angular/core';
import {PhoneService} from '../phone.service';

@Component({
  selector: 'app-cart',
  templateUrl: './app.cart.component.html',
})
export class CartComponent {
  cart_phones = this.phoneService.cart_phones;
  constructor(
    private phoneService: PhoneService) {}

  delete_from_cart(phone): void {
    this.phoneService.delete_from_cart(phone);
  }
}
