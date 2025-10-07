import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apiservice } from '../../../apiservice';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bbb-mcreatetransac',
  standalone: false,
  templateUrl: './mcreatetransac.html',
  styleUrl: './mcreatetransac.css'
})
export class Mcreatetransac {
  constructor(private ct:Apiservice,private router: Router) {
    
  }
  submit(fdt:NgForm){
    console.log(fdt.value);
    this.ct.MdoTransCreditorDebit(fdt.value).subscribe({
      next:(res)=>{
        alert("Transaction successfully completed");
        this.router.navigate(['/manager/transactions'])
      },
      error: (err)=>{
        alert("May be you gave invalid \naccount number :"+fdt.value.AccNo+" or \ninvalid amount :"+fdt.value.Amount);
        console.error("Error creating transactions");
      }

    })
  }
}
