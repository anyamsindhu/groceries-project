import { Component, OnInit } from '@angular/core';
import {Grocery} from '../model/grocery';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

   groceries: Grocery=new Grocery();
   constructor(private ap: ApiserviceService, private router: Router) {
     this.groceries.vegetables=this.ap.veggrocerycount();
     this.groceries.fruits=this.ap.fruitgrocerycount();
    }

  ngOnInit(): void {
  }
  confirm()
  {
  this.router.navigate(['/confirm']);
  }

}
