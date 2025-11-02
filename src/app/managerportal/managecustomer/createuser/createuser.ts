import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast';

@Component({
  selector: 'bbb-createuser',
  standalone: false,
  templateUrl: './createuser1.html',
  // styleUrl: './createuser.css'
})
export class Createuser {
  @Output() createSuccess = new EventEmitter<void>();
  constructor(private au:Apiservice,private router :Router,private toast:ToastService){}
  submit(userForm: NgForm){
    console.log(userForm.value);
    this.au.MaddUser(userForm.value).subscribe({
      next: (res:any) =>{
        // alert("User created successfully");
        let msg = `${res.message} UserId: ${res.userDetails.userId}\n Password: ${res.userDetails.loginPassword}`;
        this.toast.show(msg ||"User succesfully created",'success');
        userForm.resetForm();
        this.createSuccess.emit();
      },
      error: (err) => {
        console.error("Error adding users",err);
        // alert("Error creating user");
        this.toast.show( err.error?.message || 'Error creating user','danger');
      }
    });
    
  }
  

}
