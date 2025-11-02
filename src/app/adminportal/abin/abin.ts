import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'bbb-abin',
  standalone: false,
  templateUrl: './abin.html',
  styleUrl: './abin.css'
})
export class Abin {
  employees:any[] = [];
  searchtext:any;
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private api:Apiservice,private toast:ToastService) {
    
  }

  ngOnInit():void{
    this.getDeletedEmps();
  }
  permanentlyDelete(emp:Number){
    console.log(emp)
    // let empId = parseInt(emp);
    console.log(emp);
    this.api.permanentlyDeleteEmp(emp).subscribe({
      next : (res:any) => {
        // alert("Successfully deleted");
        console.log(res)
        this.toast.show(res.message || "Successfully deleted employee",'success')
        this.getDeletedEmps();
      },
      error: (err) => {
        console.error("Error deleting employee , please try again later",err);
        this.toast.show(err.error?.message || "Error deleting Employee",'danger');
      }
    })
  }
  getDeletedEmps(){
    this.api.getDeletedEmp().subscribe({
      next : (res:any) => {
        console.log(res);
        this.employees = res.data;
      },
      error:(err) => {
        console.error("Error fetching deleted employess");
        this.toast.show(err.eooro?.message || "Error fetching deleted employees or No record found");
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
