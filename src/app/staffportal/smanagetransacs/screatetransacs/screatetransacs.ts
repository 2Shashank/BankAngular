import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bbb-screatetransacs',
  standalone: false,
  templateUrl: './screatetransacs.html',
  styleUrl: './screatetransacs.css'
})
export class Screatetransacs {
  constructor(private ct:Apiservice,private router: Router) {
    
  }
  submit(fdt:NgForm){
    console.log(fdt.value);
    this.ct.SdoTransCreditorDebit(fdt.value).subscribe({
      next:(res)=>{
        alert("Transaction successfully completed");
        this.router.navigate(['/staff/transactions']);
      },
      error: (err)=>{
        console.error("Error creating transactions");
      }

    })
  }
}
