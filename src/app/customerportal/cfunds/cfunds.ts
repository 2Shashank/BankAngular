import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { NgForm } from '@angular/forms';
import { UrlCodec } from '@angular/common/upgrade';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'bbb-cfunds',
  standalone: false,
  templateUrl: './cfunds.html',
  styleUrl: './cfunds.css'
})
export class Cfunds {
  accounts:Account[] = [];
  constructor(private tr:Apiservice,private r:Router,private toast:ToastService) {
    
  }
  ngOnInit() {
    this.getAccounts();
  }
  getAccounts(){
    this.tr.CGetAccounts().subscribe({
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
    if(formData == null){
      alert("Please enter data");
      return
    }
    console.log(formData.value);
    this.tr.CTransfer(formData.value).subscribe({
      next: (res:any)=> {
        console.log(res);
        // alert(res.message); // change to this after json format
        this.toast.show(res,'success');       
        formData.reset();
        this.r.navigate(['transactions']);
      },
      error:(err) => {
        console.error("Some error occured to transfer",err);
        // alert(err.error);
        this.toast.show(err.error || err.error?.message,'danger');
      }
    })
    
  }
  cancel(){
    this.r.navigate(['customer']);
  }
}

export interface Account{
  accNo:number,
  accType:string,
  accountStatus:string,
  balance:any,
  branchAddress:string,
  branchName:string,
  dateOfJoining:string,
  ifscCode:string
}

