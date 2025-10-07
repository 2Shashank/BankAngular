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
      if(!this.userId || this.userId < 0){
        alert("Enter valid user id");
        return;
      }
      this.fu.SgetUserByID(this.userId).subscribe({
        next: (res)=>{
          this.cust = res;
        },
        error: (err) => {
          console.error("Error fetching User",err);
          alert("Error fetching customer with id :"+this.userId);
          this.cust = null;
        }
      })
    }
}
