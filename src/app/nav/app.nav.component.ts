import {Component, OnInit} from '@angular/core';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.nav.component.html'
})
export class AppComponent implements OnInit {

  public nav_cart;

  constructor(
    private phoneService: PhoneService) { }

  ngOnInit() {
      this.nav_cart = this.phoneService.nav_cart;
  }
}
