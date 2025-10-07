import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-mfetchtransac',
  standalone: false,
  templateUrl: './mfetchtransac.html',
  styleUrl: './mfetchtransac.css'
})
export class Mfetchtransac {
  transac:any;
  traId:number = 0;
  constructor(private ft:Apiservice) {
    
  }
  getTransacById(){
    this.ft.MgetTransByID(this.traId).subscribe({
      next: (res) => {
        console.log(res);
        this.transac = res;
      },
      error: (err) => {
        alert("Transactions not found for this Id");
        console.error("Error fetching transactions",err);
        this.transac = null;
      }
    })
  }
}
