import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';;
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paymentoptions',
  templateUrl: './paymentoptions.component.html',
  styleUrls: ['./paymentoptions.component.css']
})
export class PaymentoptionsComponent implements OnInit {
cardnumber: string="";
  name: string="";



   constructor(private router: Router) {
    }

   addcard()
         {
         this.router.navigate(['/payment']);
         }


  ngOnInit(): void {
  }
  home()
  {
  this.router.navigate(['/newapi']);
  }

}
