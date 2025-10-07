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
    this.uu.SgetUserByID(this.userId).subscribe({
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
    this.uu.SupdateUser(this.userId,userForm.value).subscribe({
      next: (res) => {
        alert("User updated successfully");
        this.router.navigate(['/staff/customers']);
      }
    })
  }
}
