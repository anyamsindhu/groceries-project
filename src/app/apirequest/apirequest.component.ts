import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../apiservice.service';
import { CartComponent } from '../cart/cart.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apirequest',
  templateUrl: './apirequest.component.html',
  styleUrls: ['./apirequest.component.css']
})
export class ApirequestComponent implements OnInit {

  constructor(private http: HttpClient , private ap: ApiserviceService, private router: Router) {


  }

  data: any;
  tomatoes: boolean =false;
  onions:  boolean =false;
  potatoes: boolean =false;
  kiwi: boolean =false;
  apples: boolean =false;
  bananas: boolean =false;
  oranges: boolean=false;
  cart=0;
  vegetableslist: any;
  fruits: any;
  vegmap = new Map<string, number>();
  frumap = new Map<string, number>();


  ngOnInit(): void {
  this.http.get("https://mockservertradein.herokuapp.com/groceries").subscribe(Response =>
  {
  this.data=Response;
  console.log(this.data);
 this.vegetableslist=this.data['vegetables'];
 this.fruits=this.data['fruits'];
 for (var value in this.vegetableslist) {
     this.vegmap.set(value,this.vegetableslist[value]);
     }
     console.log("vegmap:" + this.vegmap.size);
  for(let val of this.vegmap.keys())
  {
   if ( val=='tomatoes')
   {
     this.tomatoes= true;
   }
   if ( val=='onions')
      {
        this.onions= true;
      }
    if ( val=='patatoes')
        {
          console.log("this is in potatoes");
              this.potatoes= true;
        }
  }

  for (var val in this.fruits) {
       this.frumap.set(val,this.fruits[val]);
       }
       console.log("frumap:" + this.frumap.size);

  for(let val of this.frumap.keys())
    {
     if ( val=='apples')
     {
       this.apples= true;
     }
     if ( val=='kiwi')
        {
          this.kiwi= true;
        }
        if ( val=='bananas')
                {
                  this.bananas= true;
                }
          if ( val=='oranges')
                        {
                          this.oranges= true;
                        }
     }
  })

  }

  qupdate(name: string)
  {
  this.data.vegetables[name]-=1;
  this.data.fruits[name]-=1;
  this.cart+=1;
  this.ap.cartdata(name);
  }
sendtocart()
  {
  this.router.navigate(['/cart']);
  }

}
