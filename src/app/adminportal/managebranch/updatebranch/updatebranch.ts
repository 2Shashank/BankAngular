import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-updatebranch',
  standalone: false,
  templateUrl: './updatebranch.html',
  styleUrl: './updatebranch.css'
})
export class Updatebranch {
  branchId:number = 0;
  branch:any;
  constructor(private fb:Apiservice,private router:Router){

  }
  getBranch(){
    if(!this.branchId){
      alert("Please enter a Branch ID");
      return;
    }
    this.fb.gerBr(this.branchId).subscribe({
      next: (res) => {
        console.log(res);
        this.branch = res;
      },
      error: (err) => {
        console.error("Error fetching branch",err);
        this.branch = '';
      }
    });
  }
  submit(upBr:NgForm){
    console.log(upBr.value);
    this.fb.updateBranch(this.branchId,upBr.value).subscribe({
      next: (res) => {
        console.log("Updated successfully");
        this.router.navigate(['/admin/branch'])
      },
      error:(err) => {
        console.error("Error updating branch",err);
      }
    })
  }
}
