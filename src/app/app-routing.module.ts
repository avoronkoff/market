import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhoneComponent } from './phone/app.phone.component';
import { CartComponent } from './cart/app.cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/phones', pathMatch: 'full' },
  { path: 'phones',  component: PhoneComponent },
  { path: 'cart',  component: CartComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
