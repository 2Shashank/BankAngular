import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-fetchempbyid',
  standalone: false,
  templateUrl: './fetchempbyid.html',
  styleUrl: './fetchempbyid.css'
})
export class Fetchempbyid {
  empID:number = 0;
  emp:any;
  constructor(private uu:Apiservice) {
    
  }
  getEmp(){
    if(!this.empID || this.empID < 0){
        alert("Enter valid emp id");
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
}
