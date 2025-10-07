import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-fetchtransacs',
  standalone: false,
  templateUrl: './fetchtransacs.html',
  styleUrl: './fetchtransacs.css'
})
export class Fetchtransacs {
  transacs: any[] = [];
    tdata:any;
    accNo:number = 0;
    constructor(private gt:Apiservice) {
      
    }
    getTransactions(){
      if(!this.accNo || this.accNo < 0){
        alert("Enter valid account number");
        return;
      }
      this.gt.SgetTransofAcc(this.accNo).subscribe({
        next: (res:any) => {
          console.log(res);
          this.tdata = res;
        },
        error: (err) => {
          console.error("Error fetching transactions",err);
          alert("No transactions found in provided account number :"+this.accNo);
          this.tdata = null;
        }
      })
    }
}
