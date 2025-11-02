import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast';

@Component({
  selector: 'bbb-screatecust',
  standalone: false,
  templateUrl: './screatecust.html',
  // styleUrl: './screatecust.css'
})
export class Screatecust {
  @Output() createSuccess = new EventEmitter<void>();
  constructor(private au:Apiservice,private toast:ToastService){}
  
  submit(userForm: NgForm){
    console.log(userForm.value);
    this.au.SaddUser(userForm.value).subscribe({
      next: (res) =>{
        // alert("User created successfully");
        this.toast.show('User created successfully','success');
        this.createSuccess.emit();
      },
      error: (err) => {
        console.error("Error adding users",err);
        // alert("Error creating user");
        this.toast.show(err.error?.message || 'Error creating customer','danger');
      }
    })
  }
}
