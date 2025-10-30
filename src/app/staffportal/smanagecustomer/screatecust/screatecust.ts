import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-screatecust',
  standalone: false,
  templateUrl: './screatecust.html',
  // styleUrl: './screatecust.css'
})
export class Screatecust {
  @Output() createSuccess = new EventEmitter<void>();
  constructor(private au:Apiservice,private router :Router){}
  submit1(userForm: NgForm){
    console.log(userForm.value);
    this.au.MaddUser(userForm.value).subscribe({
      next: (res) =>{
        alert("User created successfully");
        // this.router.navigate(['/manager/customers']);
        this.createSuccess.emit();
      },
      error: (err) => {
        console.error("Error adding users",err);
        alert("Error creating user");
        // this.router.navigate(['/manager/customers']);
      }
    })
    userForm.resetForm();
  }
  submit(userForm: NgForm){
    console.log(userForm.value);
    this.au.SaddUser(userForm.value).subscribe({
      next: (res) =>{
        alert("User created successfully");
        this.createSuccess.emit();
      },
      error: (err) => {
        console.error("Error adding users",err);
        alert("Error creating user");
        this.router.navigate(['/staff/customers']);
      }
    })
  }
}
