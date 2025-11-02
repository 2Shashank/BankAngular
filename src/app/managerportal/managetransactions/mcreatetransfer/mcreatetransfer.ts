import { Component, EventEmitter, Output } from '@angular/core';
import { Apiservice } from '../../../apiservice';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast';

@Component({
  selector: 'bbb-mcreatetransfer',
  standalone: false,
  templateUrl: './mcreatetransfer.html',
  styleUrl: './mcreatetransfer.css'
})
export class Mcreatetransfer {
  @Output() transfrMsg = new EventEmitter<void>();
  constructor(private ct:Apiservice , private router:Router, private toast : ToastService){}
  submit(fd:NgForm){
    console.log(fd.value);
    this.ct.MdoTransTransfer(fd.value).subscribe({
      next:(res)=>{
        // alert("Transaction successfully completed");
        this.toast.show('Transfer successfully completed','success');
        this.transfrMsg.emit();
      },
      error: (err)=>{
        // alert("May be you gave invalid account numbers \nfromAcc:"+fd.value.fromAcc+" or \ntoAcc: "+fd.value.toAcc);
        this.toast.show('Some error occured','danger');
        console.error("Error creating transactions");
      }
    })
  }
  cancel(){
    this.transfrMsg.emit();
    this.toast.show('Trasaction closed');
  }
}
