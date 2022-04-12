import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Grocery} from './model/grocery';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }


 apiresult()
 {
 return this.http.get("https://mockservertradein.herokuapp.com/groceries");
 }

cardnumber:string="";
name:string="";
cart:number=0;
      cartdata()
      {
      return this.cart;
      }

     groceries: Grocery=new Grocery();
    grocerydata(x:any, y:any, cart:number)
    {
      this.groceries.vegetables=x;
      this.groceries.fruits=y;
      this.cart=cart;
    }

    veggrocerycount()
    {
    return this.groceries.vegetables;
    }
    fruitgrocerycount()
        {
        return this.groceries.fruits;
        }

    cardDetails(cardnumber:string,name:string)
    {
     this.cardnumber=cardnumber;
     this.name=name;
    }
}
