import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-manageemp',
  standalone: false,
  templateUrl: './manageemp1.html',
  styleUrl: './manageemp.css',
})
export class Mmanageemp {
  employees: any[] = [];
  // searchtext:any;
  searchtext: string = '';

  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  constructor(private r:Router,private emp:Apiservice){
    this.getEmployees();
  }
  navigate(){
    this.r.navigate(['/manager/employees/getemps']);
  }
  navigatetofetch(){
    this.r.navigate(['/manager/employees/fetchemp']);
  }

  getEmployees() {
    const branchId = sessionStorage.getItem('BranchId');
    // const role = sessionStorage.getItem('Role');
    console.log(branchId);
    this.emp.MgetEmp().subscribe({
      next: (res: any) => {
        console.log(res);
        this.employees = res;
      },
      error: (err) => {
        console.error("Error fetching employees:", err.error.message);
        // alert("Error fetching employees");
        alert(err.error.message);
        this.employees = [];
      }
    })
    
  }

  sortData(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.employees.sort((a: any, b: any) => {
      const valA = a[column]?.toString().toLowerCase();
      const valB = b[column]?.toString().toLowerCase();

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }
}
