import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-mcreatetransfer',
  standalone: false,
  templateUrl: './mcreatetransfer.html',
  styleUrl: './mcreatetransfer.css'
})
export class Mcreatetransfer {
  constructor(private ct:Apiservice , private router:Router){}
  submit(fd:NgForm){
    console.log(fd.value);
    this.ct.MdoTransTransfer(fd.value).subscribe({
      next:(res)=>{
        alert("Transaction successfully completed");
        this.router.navigate(['/manager/transactions']);
      },
      error: (err)=>{
        alert("May be you gave invalid account numbers \nfromAcc:"+fd.value.fromAcc+" or \ntoAcc: "+fd.value.toAcc);
        console.error("Error creating transactions");
      }
    })
  }
}
