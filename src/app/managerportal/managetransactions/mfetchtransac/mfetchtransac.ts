import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-mfetchtransac',
  standalone: false,
  templateUrl: './mfetchtransac1.html',
  styleUrl: './mfetchtransac.css'
})
export class Mfetchtransac {
  transac:any;
  traId:number = 0;
  constructor(private ft:Apiservice) {
    
  }
  getTransacById(){
    if(!this.traId || this.traId < 0){
      alert("Enter valid transaction id");
      return;
    }
    this.ft.MgetTransByID(this.traId).subscribe({
      next: (res) => {
        console.log(res);
        this.transac = res;
      },
      error: (err) => {
        alert("Transactions not found for this Id "+this.traId);
        console.error("Error fetching transactions",err);
        this.transac = null;
      }
    })
  }
}
