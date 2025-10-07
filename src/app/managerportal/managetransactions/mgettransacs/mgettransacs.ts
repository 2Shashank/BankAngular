import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-mgettransacs',
  standalone: false,
  templateUrl: './mgettransacs.html',
  styleUrl: './mgettransacs.css'
})
export class Mgettransacs {
  transacs: any[] = [];
  tdata:any;
  accNo:number = 0;
  constructor(private gt:Apiservice) {
    
  }
  getTransactions(){
    if(!this.accNo || this.accNo < 0){
      alert("Enter valid account number");
    }
    this.gt.MgetTransofAcc(this.accNo).subscribe({
      next: (res:any) => {
        console.log(res);
        this.tdata = res;
      },
      error: (err) => {
        alert("Transactions not found for this account :"+this.accNo);
        console.error("Error fetching transactions",err);
        this.tdata = null;
      }
    })
  }
}
