import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'bbb-addemp',
  standalone: false,
  templateUrl: './addemp.html',
  styleUrl: './addemp.css'
})
export class Addemp {
  branchDt:any[] = [];
  branchId:number = 0;
  constructor(private st: Apiservice,private router:Router){
    this.getBranches();
  }

  getBranches(){
    this.st.getBranches().subscribe({
      next: (data: any) => {
        console.log('Branches:', data);
        this.branchDt = data;
      },
      error: (err) => {
        console.error('Error fetching branches:', err);
      }
    });
  }

  submit(formData:NgForm){
    console.log(formData.value);
    this.st.addEmp(formData.value).subscribe({
      next: (res: any) => {
        console.log('Branch added successfully:', res);
        alert('Employee added successfully');
        // formData.reset();
        this.router.navigate(['/admin/emp'])
      },
      error: (err) => {
        console.error('Error adding emp:', err);
        alert('Failed to add employee');
        this.router.navigate(['/admin/emp'])
      }
    });
  }
}
