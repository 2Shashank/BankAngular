import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';


@Component({
  selector: 'bbb-cfcreate',
  standalone: false,
  templateUrl: './cfcreate.html',
  styleUrl: './cfcreate.css'
})
export class Cfcreate implements OnInit{
  accounts:any[]=[];
  @Output() createFTmessage = new EventEmitter<void>();
  constructor(private cft:Apiservice,private router:Router){}
  ngOnInit() {
    this.getAccounts();
  }
  getAccounts(){
    this.cft.CGetAccounts().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.accounts = res;
      },
      error:(err)=>{
        console.error("Error fetching accounts");
        alert("Accounts are not loaded")
      }
    })
  }
  submit(formData:NgForm){
    console.log(formData.value);
    const fromAc = formData.value.fromAccountId
    console.log(fromAc);
    const toAc = formData.value.toAccountId
    console.log(toAc);
    if(fromAc === toAc){
      alert("You cannot transfer to you");
      return;
    }
    this.cft.CScheduleTransaction(formData.value).subscribe({
      next: (res:any)=>{
        console.log('Transaction Scheduled Successfully',res);
        alert('Transaction Scheduled Successfully');
        this.createFTmessage.emit();
        // this.router.navigate(['scheduletransaction']);
      },
      error: (err: any)=>{
        console.log('Error Scheduling a Transaction',err.message);
        alert('Failed to schedule a transaction');
        formData.controls['transactionPass'].reset();
        // this.router.navigate(['scheduletransaction']);
      }
    });
  }
  cancelTxn(){
    this.createFTmessage.emit();
  }
}
