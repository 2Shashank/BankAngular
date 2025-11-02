import { Component, EventEmitter, Output } from '@angular/core';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastService } from '../../../services/toast';

@Component({
  selector: 'bbb-screatetranfers',
  standalone: false,
  templateUrl: './screatetranfers.html',
  // styleUrl: './screatetranfers.css'
})
export class Screatetranfers {
  @Output() transferMsg = new EventEmitter<void>();
  constructor(private ct:Apiservice , private toast:ToastService){}
  submit(fd:NgForm){
    console.log(fd.value);
    this.ct.SdoTransTransfer(fd.value).subscribe({
      next:(res:any)=>{
        // alert("Transaction successfully completed");
        this.toast.show( res.message || 'Transaction successfully completed','success')
        this.transferMsg.emit();
      },
      error: (err)=>{
        console.error("Error creating transactions");
        // alert("Error creating transactions");
        this.toast.show(err.error?.message || "Error creating transfer",'danger');
      }
    })
  }
  cancel(){
    this.transferMsg.emit();
    this.toast.show('Transaction cancelled','info');
  }
}
