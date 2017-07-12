import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './nav/app.nav.component';
import { PhoneComponent } from './phone/app.phone.component';
import { CartComponent } from './cart/app.cart.component';
import { ModalComponent } from './modal/app.modal.component';
import { ModalContentComponent } from './modal/app.modal.content';
import { PhoneService } from './phone.service';

import { AppRoutingModule } from './app-routing.module';
import { CurrencyFormatPipe } from './currency-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    CartComponent,
    ModalComponent,
    ModalContentComponent,
    CurrencyFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [PhoneService],
  entryComponents: [ModalContentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
