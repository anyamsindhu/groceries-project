import { Component, OnInit } from '@angular/core';
import {Grocery} from '../model/grocery';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';;
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  cardnumber: string="";
  name: string="";


  groceries: Grocery=new Grocery();
   constructor(private ap: ApiserviceService,private router: Router) {
     this.groceries.vegetables=this.ap.veggrocerycount();
     this.groceries.fruits=this.ap.fruitgrocerycount();
     this.cardnumber="";
     this.name="";
    }

   addcard()
         {
         this.router.navigate(['/addcard']);
         this.ap.cardDetails(this.cardnumber,this.name);
         console.log(this.name);
         console.log(this.cardnumber);
         }


  ngOnInit(): void {
  }
  home()
  {
  this.router.navigate(['/newapi']);
  }

}
