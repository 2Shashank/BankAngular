import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastService } from '../../services/toast';

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

  

  constructor(private femp: Apiservice, private router: Router,private toast:ToastService) {
    
  }
  ngOnInit(): void {
    this.getBranches();
    this.loadEmps();
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
      this.loadEmps();
      // alert('Please enter a valid Emp ID');
      this.toast.show("Please select")

      return;
    }

    this.femp.listEmp(this.branchId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.employees = res;
      },
      error: (err) => {
        console.error('Error fetching employees:', err);
        // alert('No record found');
        this.toast.show("No records found",'danger');
        this.employees = [];
      },
    });
  }
  deleteEmp(stfId: any) {
    const confirmDelete = confirm("Are you sure you want to delete?");
    if(!confirmDelete){
      return;
    }
    this.femp.deleteEmp(stfId).subscribe({
      next:(res) => {
        // alert("Deleted successfully");
        this.toast.show("Employee deleted successfully",'success');
        this.getEmployees();
      },
      error : (err) => {
        console.error("Somthing went wrong",err);
        this.toast.show("Error deleting employee",'danger');
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
  loadEmps(){
    this.femp.listAllEmp().subscribe({
      next: (res:any) => {
        console.log(res);
        this.employees = res;
      },
      error:(err) => {
        console.error("Somthing went wrong",err);
        this.toast.show("Error fetching employees",'danger');
      }
    })
  }

  saveEmp(emp: any) {
    console.log('Updated:', emp);
    this.femp.updateEmp(emp.empID,emp).subscribe({
      next:(res) => {
        // alert("Employee updated successfully");
        this.toast.show("Employee updated successfully",'success');
        this.getEmployees();
      },
      error:(err) => {
        console.log("Error updating Employee",err);
        // alert("Error while updaing employee");
        this.toast.show("Error updating employee",'danger')
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
      this.femp.addEmp(form.value).subscribe({
        next:(res)=> {
          // alert("Employee added successfully");
          this.toast.show('Employee added successfully','success');
          this.showAddEmployeeForm = false;
          form.reset();
        },
        error:(err) => {
          // alert("Failed to add employee");
          this.toast.show('Failed to add employee','danger');
        }
      })      
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
        this.toast.show('Error fetching branches','danger');
      }
    });
  }
  
  currentPage: number = 1;
  itemsPerPage: number = 10;

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.employees.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.employees.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  private branchChangeTimeout: any;

onBranchChange(value: any) {
  clearTimeout(this.branchChangeTimeout);

  this.branchChangeTimeout = setTimeout(() => {
    if (!value || value <= 0) {
      this.loadEmps();
    } else {
      this.getEmployees();
    }
  }, 500);
}

}
