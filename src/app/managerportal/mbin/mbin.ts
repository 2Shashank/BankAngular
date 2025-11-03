import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'bbb-mbin',
  standalone: false,
  templateUrl: './mbin.html',
  styleUrl: './mbin.css'
})
export class Mbin {
  users:any[] = [];
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
      this.api.MgetDeletedUsers().subscribe({
        next : (res:any) => {
          console.log(res);
          this.users = res.users;
        },
        error:(err) => {
          console.error("Error fetching deleted users");
          this.toast.show(err.error?.message || "Error fetching deleted users or No record found");
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
  
      this.users.sort((a: any, b: any) => {
        const valA = a[column]?.toString().toLowerCase();
        const valB = b[column]?.toString().toLowerCase();
  
        if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }
}
