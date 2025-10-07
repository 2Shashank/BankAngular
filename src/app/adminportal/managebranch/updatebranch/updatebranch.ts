import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-updatebranch',
  standalone: false,
  templateUrl: './updatebranch.html',
  styleUrl: './updatebranch.css'
})
export class Updatebranch {
  branchId:number = 0;
  branch:any;
  constructor(private fb:Apiservice){

  }
  getBranch(){
    if(!this.branchId){
      alert("Please enter a Branch ID");
      return;
    }
    this.fb.getBr(this.branchId).subscribe({
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
  }
}
