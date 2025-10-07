import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bbb-screateacc',
  standalone: false,
  templateUrl: './screateacc.html',
  styleUrl: './screateacc.css'
})
export class Screateacc {
  constructor(private acc:Apiservice,private router:Router){}
  submit(accData:NgForm){
    console.log(accData.value);
    this.acc.Screateacc(accData.value).subscribe({
      next: (res: any) => {
        console.log('Account added successfully:', res);
        alert('Account created successfully');
        this.router.navigate(['/staff/account'])
      },
      error: (err) => {
        console.error('Error create account:', err);
        alert('Failed to create account');
        // this.router.navigate(['/staff/account'])
      }
    });
  }
}
