import {Component, OnInit} from '@angular/core';

import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './app.phone.component.html',
  styleUrls: [ './app.phone.component.css' ]
})
export class PhoneComponent implements OnInit {
  phones: Phone[];
  constructor( private phoneService: PhoneService ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.phoneService.getHeroes().then(heroes => this.phones = heroes);
  }
}
