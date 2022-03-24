import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import {Grocery} from '../model/grocery';
import { Router } from '@angular/router';;
@Component({
  selector: 'app-newapi',
  templateUrl: './newapi.component.html',
  styleUrls: ['./newapi.component.css']
})
export class NewapiComponent implements OnInit {

  constructor(private service: ApiserviceService , private router: Router) { }

groceries: Grocery=new Grocery();
  data: any;
  cart: number=0;
  instock: string= 'in stock';
  outstock: string='out of stock';

  ngOnInit(): void {

   this.service.apiresult().subscribe( Response =>{
   console.log(Response);
   this.data=Response;
   this.groceries.vegetables=this.data['vegetables'];
   this.groceries.fruits=this.data['fruits'];
   for( let v of this.groceries.vegetables)
   {
   v.chosencount=0;
   }
   for( let v of this.groceries.fruits)
      {
      v.chosencount=0;
      }
   console.log(this.groceries.vegetables[0].chosencount);

   })
}

vegaddtocart(index: number)
{
this.cart+=1;
this.groceries.vegetables[index].chosencount+=1;

}
vegremovefromcart(index: number)
{
this.groceries.vegetables[index].chosencount-=1;
this.cart-=1;
}

fruitaddtocart(index: number)
{
this.cart+=1;
this.groceries.fruits[index].chosencount+=1;

}
fruitremovefromcart(index: number)
{
this.groceries.fruits[index].chosencount-=1;
this.cart-=1;
}

sendtocart()
  {
  this.service.grocerydata(this.groceries.vegetables, this.groceries.fruits);
  this.router.navigate(['/payment']);

  }

}
