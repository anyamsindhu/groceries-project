import { Component, OnInit } from '@angular/core';
import {Grocery} from '../model/grocery';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {



  groceries: Grocery=new Grocery();
   constructor(private ap: ApiserviceService) {
     this.groceries.vegetables=this.ap.veggrocerycount();
     this.groceries.fruits=this.ap.fruitgrocerycount();
    }


  ngOnInit(): void {
  }

}
