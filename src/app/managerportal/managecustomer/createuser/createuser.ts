import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-createuser',
  standalone: false,
  templateUrl: './createuser1.html',
  // styleUrl: './createuser.css'
})
export class Createuser {
  @Output() createSuccess = new EventEmitter<void>();
  constructor(private au:Apiservice,private router :Router){}
  submit(userForm: NgForm){
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
  

}
