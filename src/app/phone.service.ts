import { Phone } from './phone';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PhoneService {

  public nav_cart = {
    cart_sum: 0,
    cart_counts: 0
  };

  cart_phones = [];
  private phonesUrl = 'api/phones';

  constructor(private http: Http) { }


  getHeroes(): Promise<Phone[]> {
    return this.http.get(this.phonesUrl)
      .toPromise()
      .then(response => response.json().data as Phone[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  buy_phone(phone: Phone): void {
    this.nav_cart.cart_sum += phone.counts * phone.price;
    this.nav_cart.cart_counts += phone.counts;
    for (let i = 0; i < phone.counts; i++){
      this.cart_phones.push(phone);
    }
    phone.counts = 0;
  }

  delete_from_cart(phone): void {
    this.cart_phones.splice(this.cart_phones.indexOf(phone),1);
    this.nav_cart.cart_sum -= phone.price;
    this.nav_cart.cart_counts -= 1;
  }
}

