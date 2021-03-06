import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import {Grocery} from '../model/grocery';
import { Router } from '@angular/router';;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    groceries: Grocery=new Grocery();
    cart:number=0;
     constructor(private ap: ApiserviceService,private router: Router) {
       this.groceries.vegetables=this.ap.veggrocerycount();
       this.groceries.fruits=this.ap.fruitgrocerycount();
       this.cart=ap.cartdata();
       }

  ngOnInit(): void {
  }

  sendtopayment()
    {
    this.router.navigate(['/options']);

    }

    home()
    {
    this.router.navigate(['/newapi']);
    }


}
