import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-supdatecust',
  standalone: false,
  templateUrl: './supdatecust.html',
  styleUrl: './supdatecust.css'
})
export class Supdatecust {
  userId:number = 0;
  user:any;
  constructor(private uu:Apiservice,private router:Router) {
    
  }
  getUser(){
    if(!this.userId || this.userId < 0){
        alert("Enter valid user id");
        return;
      }
    this.uu.SgetUserByID(this.userId).subscribe({
      next: (res)=>{
        this.user = res;
      },
      error: (err) => {
        console.error("Error fetching User",err);
        alert("No customer found with id :"+this.userId);
        this.user = '';
      }
    })
  }
  submit(userForm: NgForm){
    console.log(userForm.value);
    // userForm.resetForm();
    this.uu.SupdateUser(this.userId,userForm.value).subscribe({
      next: (res) => {
        alert("User updated successfully");
        this.router.navigate(['/staff/customers']);
      },
      error: (err) => {
        console.log("Error occured while updating",err);
        alert("Error occured while updating");
      }
    })
  }
}
