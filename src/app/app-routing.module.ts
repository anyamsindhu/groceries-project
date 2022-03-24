import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import {ApirequestComponent} from './apirequest/apirequest.component';
import { NewapiComponent } from './newapi/newapi.component';
import {PaymentComponent} from './payment/payment.component';
const routes: Routes = [
{path: 'cart' , component: CartComponent},
{path: 'payment' , component:PaymentComponent},
{path: 'newapi' , component: NewapiComponent },
{path: '' , redirectTo : '/newapi' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
