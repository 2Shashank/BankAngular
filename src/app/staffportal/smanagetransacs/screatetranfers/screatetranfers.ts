import { Component, EventEmitter, Output } from '@angular/core';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bbb-screatetranfers',
  standalone: false,
  templateUrl: './screatetranfers.html',
  // styleUrl: './screatetranfers.css'
})
export class Screatetranfers {
  @Output() transferMsg = new EventEmitter<void>();
  constructor(private ct:Apiservice , private router:Router){}
  submit(fd:NgForm){
    console.log(fd.value);
    this.ct.SdoTransTransfer(fd.value).subscribe({
      next:(res)=>{
        alert("Transaction successfully completed");
        // this.router.navigate(['/staff/transactions']);
        this.transferMsg.emit();
      },
      error: (err)=>{
        console.error("Error creating transactions");
        alert("Error creating transactions");
      }
    })
  }
  cancel(){
    this.transferMsg.emit();
  }
}
