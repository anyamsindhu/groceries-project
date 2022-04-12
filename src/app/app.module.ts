import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { NewapiComponent } from './newapi/newapi.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AddcardComponent } from './addcard/addcard.component';
import { PaymentoptionsComponent } from './payment/paymentoptions/paymentoptions.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    NewapiComponent,
    PaymentComponent,
    CheckoutComponent,
    ConfirmationComponent,
    AddcardComponent,
    PaymentoptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
