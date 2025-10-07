import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-sfetchcust',
  standalone: false,
  templateUrl: './sfetchcust.html',
  styleUrl: './sfetchcust.css'
})
export class Sfetchcust {
  userId:number = 0;
    cust:any;
    constructor(private fu:Apiservice) {
      
    }
    getCustomer(){
      this.fu.SgetUserByID(this.userId).subscribe({
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
