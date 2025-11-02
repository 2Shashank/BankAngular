import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';
import { ToastService } from '../../../services/toast';

@Component({
  selector: 'bbb-mfetchtransac',
  standalone: false,
  templateUrl: './mfetchtransac1.html',
  styleUrl: './mfetchtransac.css'
})
export class Mfetchtransac {
  transac:any;
  traId:number = 0;
  constructor(private ft:Apiservice, private toast: ToastService) {
    
  }
  getTransacById(){
    if(!this.traId || this.traId < 0){
      // alert("Enter valid transaction id");
      this.toast.show("Enter valid transaction Id",'danger');
      return;
    }
    this.ft.MgetTransByID(this.traId).subscribe({
      next: (res) => {
        console.log(res);
        this.transac = res;
      },
      error: (err) => {
        // alert("Transactions not found for this Id "+this.traId);
        this.toast.show(`Transactions not found for this Id : ${this.traId}`,'danger');
        console.error("Error fetching transactions",err);
        this.transac = null;
      }
    })
  }
}
