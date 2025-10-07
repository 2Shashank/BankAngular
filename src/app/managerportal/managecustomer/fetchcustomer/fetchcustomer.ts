import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-fetchcustomer',
  standalone: false,
  templateUrl: './fetchcustomer.html',
  styleUrl: './fetchcustomer.css'
})
export class Fetchcustomer {
  userId:number = 0;
  cust:any;
  constructor(private fu:Apiservice) {
    
  }
  getCustomer(){
    this.fu.MgetUserByID(this.userId).subscribe({
      next: (res)=>{
        this.cust = res;
      },
      error: (err) => {
        console.error("Error fetching User",err);
        this.cust = null;
      }
    })
  }
}
