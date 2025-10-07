import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-createaccount',
  standalone: false,
  templateUrl: './createaccount.html',
  styleUrl: './createaccount.css'
})
export class Createaccount {
  constructor(private acc:Apiservice,private router:Router){}
  submit(accData:NgForm){
    console.log(accData.value);
    this.acc.Mcreateacc(accData.value).subscribe({
      next: (res: any) => {
        console.log('Account added successfully:', res);
        alert('Account created successfully');
        // formData.reset();
        this.router.navigate(['/manager/accounts'])
      },
      error: (err) => {
        console.error('Error create account:', err);
        alert('Failed to create account');
        this.router.navigate(['/manager/accounts'])
      }
    });
  }
}
