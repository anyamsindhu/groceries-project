import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import {Grocery} from '../model/grocery';
import { Router } from '@angular/router';;

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent implements OnInit {

  groceries: Grocery=new Grocery();
     constructor(private ap: ApiserviceService,private router: Router) {
       this.groceries.vegetables=this.ap.veggrocerycount();
       this.groceries.fruits=this.ap.fruitgrocerycount();
      }

      cardnumber:string=this.ap.cardnumber;
      name:string=this.ap.name;
  ngOnInit(): void {
  }

  proceedToCheckout()
           {
           this.router.navigate(['/checkout']);

           }

}
