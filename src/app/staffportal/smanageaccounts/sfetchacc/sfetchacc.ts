import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-sfetchacc',
  standalone: false,
  templateUrl: './sfetchacc.html',
  styleUrl: './sfetchacc.css'
})
export class Sfetchacc {
  accno:number = 0;
    acc:any;
  
    constructor(private ac:Apiservice){}
  
    getAccount(){
      if(!this.accno){
        alert("Please enter account number");
        return;
      }
      this.ac.SgetAcc(this.accno).subscribe({
        next: (res: any) => {
            console.log(res);
            this.acc = res;
          },
          error: (err) => {
            console.error("Error fetching employees:", err);
            this.acc = '';
          }
      })
    }
}
