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
  acount: number=0;
      kcount: number=0;
      bcount: number=0;
      tcount: number=0;
      pcount: number=0;
      ocount: number=0;
      oncount: number=0;
      test: number=3;
      count: number=0;
     // map: HashMap<string, number>=new HashMap<string, number>();

      cartdata(type: string)
      {
      }

     groceries: Grocery=new Grocery();
    grocerydata(x:any, y:any)
    {
      this.groceries.vegetables=x;
      this.groceries.fruits=y;
    }

    veggrocerycount()
    {
    return this.groceries.vegetables;
    }
    fruitgrocerycount()
        {
        return this.groceries.fruits;
        }


}
