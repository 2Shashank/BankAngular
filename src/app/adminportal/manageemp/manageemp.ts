import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bbb-manageemp',
  standalone: false,
  templateUrl: './manageemp1.html',
  styleUrl: './manageemp.css',
})
export class Manageemp implements OnInit{
  branchId: number = 0;
  employees: any[] = [];
  // searchtext:any;
  searchtext: string = '';

  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  editId: number | null = null;
  originalEmpData: any = {};

  

  constructor(private femp: Apiservice, private router: Router) {
    
  }
  ngOnInit(): void {
    this.getBranches();
  }

  navigate(link: string) {
    if (link) {
      this.router.navigate(['emp/' + link]);
    }
  }

  cancelEdit() {
    this.editId = null;
    this.getEmployees(); // refresh data
  }

  getEmployees() {
    if (!this.branchId || this.branchId < 0) {
      alert('Please enter a valid Emp ID');
      return;
    }

    this.femp.listEmp(this.branchId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.employees = res;
      },
      error: (err) => {
        console.error('Error fetching employees:', err);
        alert('No record found');
        this.employees = [];
      },
    });
  }
  deleteEmp(stfId: any) {}

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

  saveEmp(emp: any) {
    // call PUT API here
    console.log('Updated:', emp);
    this.femp.updateEmp(emp.empID,emp).subscribe({
      next:(res) => {
        alert("Employee updated successfully");
        this.getEmployees();
      },
      error:(err) => {
        console.log("Error updating Employee",err);
        alert("Error while updaing employee");
        this.getEmployees();
      }
    })
    this.editId = null;
  }
  showAddEmployeeForm: boolean = false;
  toggleAddEmp() {
    this.showAddEmployeeForm = !this.showAddEmployeeForm;
  }
  submit(form: NgForm) {
    if (form.valid) {
      console.log('New Employee Data:', form.value);
      // Logic to call your API to add the employee
      this.femp.addEmp(form.value).subscribe({
        next:(res)=> {
          alert("Employee added successfully");
          this.showAddEmployeeForm = false;
          form.reset();
        },
        error:(err) => {
          alert("Failed to add employee");
        }
      })
      // Close the form and reset it
      
    }
  }

  branchDt:any[] = [];
  getBranches(){
    this.femp.getBranches().subscribe({
      next: (data: any) => {
        console.log('Branches:', data);
        this.branchDt = data;
      },
      error: (err) => {
        console.error('Error fetching branches:', err);
      }
    });
  }
  // branchDt = [
  //   { branchId: 101, branchName: 'Main Branch' },
  //   { branchId: 102, branchName: 'North Branch' },
  //   { branchId: 103, branchName: 'South Branch' }
  // ];

}
