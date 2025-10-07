import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-fetchemps',
  standalone: false,
  templateUrl: './fetchemps.html',
  styleUrl: './fetchemps.css'
})
export class Fetchemps {
  branchId: number = 0;
  employees: any[] = [];

  constructor(private femp: Apiservice) {}

  getEmployees() {
    if (!this.branchId) {
      alert("Please enter a Branch ID");
      return;
    }

    this.femp.listEmp(this.branchId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.employees = res;
      },
      error: (err) => {
        console.error("Error fetching employees:", err);
        this.employees = [];
      }
    });
  }
}
