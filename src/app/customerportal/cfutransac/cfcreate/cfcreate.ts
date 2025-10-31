import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';


@Component({
  selector: 'bbb-cfcreate',
  standalone: false,
  templateUrl: './cfcreate.html',
  styleUrl: './cfcreate.css'
})
export class Cfcreate {
  constructor(private cft:Apiservice,private router:Router){}
  submit(formData:NgForm){
    this.cft.CScheduleTransaction(formData.value).subscribe({
      next: (res:any)=>{
        console.log('Transaction Scheduled Successfully',res);
        alert('Transaction Scheduled Successfully');
        this.router.navigate(['scheduletransaction']);
      },
      error: (err: any)=>{
        console.log('Error Scheduling a Transaction',err);
        alert('Failed to schedule a transaction');
        this.router.navigate(['scheduletransaction']);
      }
    });
  }
}
