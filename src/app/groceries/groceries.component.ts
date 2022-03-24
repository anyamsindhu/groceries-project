import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {


  constructor() { }
  cprice: number  = 12;
  cavailable: number = 10;
  cart: number=0 ;
  ngOnInit(): void {
  }
  cupdate()
  {
  this.cavailable=this.cavailable-1;
 this.cart=this.cart+1;
  }
}
