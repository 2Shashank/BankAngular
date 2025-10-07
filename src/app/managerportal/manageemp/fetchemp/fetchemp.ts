import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-fetchemp',
  standalone: false,
  templateUrl: './fetchemp.html',
  styleUrl: './fetchemp.css'
})
export class Fetchemp {
  empId: number = 0;
    employees: any;
  
    constructor(private femp: Apiservice) {}
  
    getEmployees() {
      if (!this.empId) {
        alert("Please enter a Employee ID");
        return;
      }
  
      this.femp.MgetEmpById(this.empId).subscribe({
        next: (res: any) => {
          console.log(res);
          this.employees = res;
        },
        error: (err) => {
          console.error("Error fetching employees:", err);
          alert("Employee not found in this branch");
          this.employees = '';
        }
      });
    }
}
