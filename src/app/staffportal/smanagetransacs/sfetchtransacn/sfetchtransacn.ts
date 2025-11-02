import { Component, OnChanges } from '@angular/core';
import { Apiservice } from '../../../apiservice';
import { ToastService } from '../../../services/toast';

@Component({
  selector: 'bbb-sfetchtransacn',
  standalone: false,
  templateUrl: './sfetchtransacn.html',
  // styleUrl: './sfetchtransacn.css'
})
export class Sfetchtransacn {
  transac:any;
    traId:number = 0;
    constructor(private ft:Apiservice , private toast: ToastService) {
      
    }
    getTransacById(){
      if(!this.traId || this.traId < 0){
      // alert("Enter valid transaction id");
        this.toast.show('Enter valid transaction Id','danger');
      return;
    }
      this.ft.SgetTransByID(this.traId).subscribe({
        next: (res:any) => {
          console.log(res);
          this.transac = res.transaction;
        },
        error: (err) => {
          console.error("Error fetching transaction",err);
          // alert("No transaction found with transaction id :"+this.traId);
          this.toast.show(err.error?.message || "Error fetching transaction",'danger');
          this.transac = null;
        }
      })
    }
}
