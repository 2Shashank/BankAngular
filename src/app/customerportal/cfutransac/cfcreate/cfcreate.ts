import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast';


@Component({
  selector: 'bbb-cfcreate',
  standalone: false,
  templateUrl: './cfcreate.html',
  styleUrl: './cfcreate.css'
})
export class Cfcreate implements OnInit{
  errMsg:any;
  accounts:any[]=[];
  @Output() createFTmessage = new EventEmitter<void>();
  constructor(private cft:Apiservice,private router:Router,private toast:ToastService){}
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
        // alert("Accounts are not loaded")
        this.toast.show("Accounts are not loaded",'danger');
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
      // alert("You cannot transfer to you");
      this.errMsg = 'You cannot transfer to yourself';
      this.toast.show(this.errMsg,'danger');
      return;
    }
    this.cft.CScheduleTransaction(formData.value).subscribe({
      next: (res:any)=>{
        console.log('Transaction Scheduled Successfully',res);
        // alert('Transaction Scheduled Successfully');
        this.toast.show('Transaction Scheduled Successfully','success');
        this.createFTmessage.emit();
      },
      error: (err: any)=>{
        console.log('Error Scheduling a Transaction',err.message);
        // alert('Failed to schedule a transaction');
        this.toast.show("Failed to schedule a transaction",'danger')
        formData.controls['transactionPass'].reset();
      }
    });
  }
  cancelTxn(){
    this.createFTmessage.emit();
    this.toast.show('Transaction cancelled','info');
  }
}
