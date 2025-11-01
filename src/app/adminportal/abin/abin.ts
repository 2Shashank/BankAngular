import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';

@Component({
  selector: 'bbb-abin',
  standalone: false,
  templateUrl: './abin.html',
  styleUrl: './abin.css'
})
export class Abin {
  employees:any;
  searchtext:any;
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private api:Apiservice) {
    
  }

  ngOnInit():void{
    this.getDeletedEmps();
  }
  permanentlyDelete(emp:any){
    this.api.permanentlyDeleteEmp(emp).subscribe({
      next : (res) => {
        alert("Successfully deleted");
        this.getDeletedEmps();
      },
      error: (err) => {
        console.error("Error deleting employee , please try again later");
      }
    })
  }
  getDeletedEmps(){
    this.api.getDeletedEmp().subscribe({
      next : (res:any) => {
        console.log(res);
        this.employees = res;
      },
      error:(err) => {
        console.error("Error fetching deleted employess");
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
