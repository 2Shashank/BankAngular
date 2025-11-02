import { Component, EventEmitter, Output } from '@angular/core';
import { Apiservice } from '../../../apiservice';
import { NgForm } from '@angular/forms';
import { ToastService } from '../../../services/toast';

@Component({
  selector: 'bbb-screatetransacs',
  standalone: false,
  templateUrl: './screatetransacs.html',
  // styleUrl: './screatetransacs.css'
})
export class Screatetransacs {
  @Output() transacStatus = new EventEmitter<void>();
  constructor(private ct:Apiservice,private toastService:ToastService) {
    
  }
  submit(fdt:NgForm){
    console.log(fdt.value);
    this.ct.SdoTransCreditorDebit(fdt.value).subscribe({
      next:(res)=>{
        // alert("Transaction successfully completed");
        this.toastService.show("Transaction successfully completed",'success')
        this.transacStatus.emit();
      },
      error: (err)=>{
        console.error("Error creating transactions");
        // alert("Error creating transfers, please check account numbers");
        this.toastService.show( err.error?.message||'Error creating transaction','danger');
      }

    })
  }
  Cancel(){
    this.transacStatus.emit();
  }
}
