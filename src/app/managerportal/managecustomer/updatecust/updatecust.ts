import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-updatecust',
  standalone: false,
  templateUrl: './updatecust.html',
  styleUrl: './updatecust.css'
})
export class Updatecust {
  userId:number = 0;
  user:any;
  constructor(private uu:Apiservice,private router:Router) {
    
  }
  getUser(){
    this.uu.MgetUserByID(this.userId).subscribe({
      next: (res)=>{
        this.user = res;
      },
      error: (err) => {
        console.error("Error fetching User",err);
        this.user = '';
      }
    })
  }
  submit(userForm: NgForm){
    console.log(userForm.value);
    // userForm.resetForm();
    this.uu.MupdateUser(this.userId,userForm.value).subscribe({
      next: (res) => {
        alert("Update user successfully");
        this.router.navigate(['/manager/customers']);
      }
    })
  }
}
