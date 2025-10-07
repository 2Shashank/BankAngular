import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-addbranch',
  standalone: false,
  templateUrl: './addbranch.html',
  styleUrl: './addbranch.css'
})
export class Addbranch {
  constructor(private adbr:Apiservice,private router:Router){}
  submit(formData:NgForm){
    console.log(formData.value);
    this.adbr.addBranch(formData.value).subscribe({
      next: (res: any) => {
        console.log('Branch added successfully:', res);
        alert('Branch added successfully');
        // formData.reset();
        this.router.navigate(['/admin/branch'])
      },
      error: (err) => {
        console.error('Error adding branch:', err);
        alert('Failed to add branch');
        this.router.navigate(['/admin/branch'])
      }
    });
  }
}
