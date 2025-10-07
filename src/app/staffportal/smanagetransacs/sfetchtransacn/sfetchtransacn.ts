import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-sfetchtransacn',
  standalone: false,
  templateUrl: './sfetchtransacn.html',
  styleUrl: './sfetchtransacn.css'
})
export class Sfetchtransacn {
  transac:any;
    traId:number = 0;
    constructor(private ft:Apiservice) {
      
    }
    getTransacById(){
      this.ft.SgetTransByID(this.traId).subscribe({
        next: (res) => {
          console.log(res);
          this.transac = res;
        },
        error: (err) => {
          console.error("Error fetching transactions",err);
          this.transac = null;
        }
      })
    }
}
