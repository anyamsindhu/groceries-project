import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { NewapiComponent } from './newapi/newapi.component';
import {PaymentComponent} from './payment/payment.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {AddcardComponent} from './addcard/addcard.component';
import { PaymentoptionsComponent } from './payment/paymentoptions/paymentoptions.component';
const routes: Routes = [
{path: 'cart' , component: CartComponent},
{path: 'payment' , component:PaymentComponent},
{path: 'newapi' , component: NewapiComponent },
{path: 'checkout', component:CheckoutComponent},
{path: 'confirm', component:ConfirmationComponent},
{path: 'addcard', component:AddcardComponent},
{path: '' , redirectTo : '/newapi' , pathMatch: 'full'},
{path: 'options', component: PaymentoptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
