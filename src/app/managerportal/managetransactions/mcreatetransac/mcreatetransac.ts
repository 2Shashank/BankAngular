import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Apiservice } from '../../../apiservice';
import { NgForm } from '@angular/forms';
import { ToastService } from '../../../services/toast';

@Component({
  selector: 'bbb-mcreatetransac',
  standalone: false,
  templateUrl: './mcreatetransac.html',
  // styleUrl: './mcreatetransac.css'
})
export class Mcreatetransac {
  @Output() transacStat = new EventEmitter<void>()
  constructor(private ct:Apiservice,private toast: ToastService) {
    
  }
  submit(fdt:NgForm){
    console.log(fdt.value);
    this.ct.MdoTransCreditorDebit(fdt.value).subscribe({
      next:(res)=>{
        // alert("Transaction successfully completed");
        this.toast.show('Transaction successfully completed','success');
        this.transacStat.emit();
        // this.router.navigate(['/manager/transactions'])
      },
      error: (err)=>{
        // alert("May be you gave invalid \naccount number :"+fdt.value.AccNo+" or \ninvalid amount :"+fdt.value.Amount);
        this.toast.show('Some error occured, check properly','danger');
        console.error("Error creating transactions");
      }

    })
  }
  Cancel(){
    this.transacStat.emit();
    this.toast.show('Transaction closed');
  }
}
