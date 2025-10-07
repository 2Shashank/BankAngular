import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-aupdateemp',
  standalone: false,
  templateUrl: './aupdateemp.html',
  styleUrl: './aupdateemp.css'
})
export class Aupdateemp {
  empID:number = 0;
  emp:any;
  constructor(private uu:Apiservice,private router:Router) {
    
  }
  getEmp(){
    if(!this.empID || this.empID < 0){
        alert("Enter valid user id");
        return;
      }
    this.uu.getEmpById(this.empID).subscribe({
      next: (res)=>{
        this.emp = res;
      },
      error: (err) => {
        console.error("Error fetching employee",err);
        alert("No employee found with id :"+this.empID);
        this.emp = '';
      }
    })
  }
  submit(upd:NgForm){
    console.log(upd.value);
    this.uu.updateEmp(this.empID,upd.value).subscribe({
      next: (res)=> {
        alert("Employee updated successfully");
        this.router.navigate(['/admin/emp']);
      },
      error : (err) => {
        console.log("Error updating employee data",err);
        alert("Error while updating employee");
      }
    })
  }
}
