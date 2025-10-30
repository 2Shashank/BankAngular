import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-updatecust',
  standalone: false,
  templateUrl: './updatecust.html',
  // styleUrl: './updatecust.css'
})
export class Updatecust {
  userId:number = 0;
  user:any;
  @Output() updateSuccess = new EventEmitter<void>();
  constructor(private uu:Apiservice,private router:Router) {
    
  }
  getUser(){
    if(!this.userId || this.userId < 0){
      alert("Enter valid userId");
      return;
    }
    this.uu.MgetUserByID(this.userId).subscribe({
      next: (res)=>{
        this.user = res;
      },
      error: (err) => {
        console.error("Error fetching User",err);
        alert("No user data found with id"+this.userId);
        this.user = '';
      }
    })
  }
  submit(userForm: NgForm){
    console.log(userForm.value);
    // userForm.resetForm();
    this.uu.MupdateUser(this.userId,userForm.value).subscribe({
      next: (res) => {
        alert("User updated successfully");
        // this.router.navigate(['/manager/customers']);
        this.updateSuccess.emit();
      },
      error: (err) => {
        console.log("Error updating user");
        alert("Error occured while updating");
      }
    });
  }
  
}
