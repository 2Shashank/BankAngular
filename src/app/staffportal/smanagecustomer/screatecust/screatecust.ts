import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-screatecust',
  standalone: false,
  templateUrl: './screatecust.html',
  styleUrl: './screatecust.css'
})
export class Screatecust {
  constructor(private au:Apiservice,private router :Router){}
  submit(userForm: NgForm){
    console.log(userForm.value);
    this.au.SaddUser(userForm.value).subscribe({
      next: (res) =>{
        alert("User created successfully");
        this.router.navigate(['/staff/customers']);
      },
      error: (err) => {
        console.error("Error adding users",err);
        alert("Error creating user");
        this.router.navigate(['/staff/customers']);
      }
    })
  }
}
