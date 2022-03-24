import { Component, OnInit } from '@angular/core';
import { ApirequestComponent } from '../apirequest/apirequest.component';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private ap: ApiserviceService) { }

  ngOnInit(): void {
  }


  acount: number=this.ap.acount;
    kcount: number=this.ap.kcount;
    bcount: number=this.ap.bcount;
    tcount: number=this.ap.tcount;
    pcount: number=this.ap.pcount;
    ocount: number=this.ap.ocount;
    oncount: number=this.ap.oncount;
    test: number=3;


}
