import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-adeleteemp',
  standalone: false,
  templateUrl: './adeleteemp.html',
  styleUrl: './adeleteemp.css'
})
export class Adeleteemp {
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
    delEmp(empID:any){
      const abc = confirm("Are you sure you want to delete?");
      if(!abc){
        return;
      }
      this.uu.deleteEmp(empID).subscribe({
        next: (res) => {
          console.log("Deleted successfully");
          this.router.navigate(['/admin/emp']);
        },
        error : (err) => {
          console.log("Some error occurred while deleting");
          alert("Some error occurred");
        }
      })
    }
}
