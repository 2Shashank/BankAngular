import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';

@Component({
  selector: 'bbb-managecustomer',
  standalone: false,
  templateUrl: './managecustomer1.html',
  styleUrl: './managecustomer.css'
})
export class Managecustomer {
  customers:any []=[];
  searchtext:any;
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  editId: number | null = null;

  constructor(private cd:Apiservice) {
    // this.getCustomers();
  }

  ngOnInit(): void {
  this.getCustomers();
  }

  cancelEdit() {
    this.editId = null;
    this.getCustomers(); 
  }

  getCustomers(){
    this.cd.MgetUser().subscribe({
      next:(res:any) => {
        this.customers = res;
        console.log(res);
      },
      error : (err) => {
        console.error("Error fetching customers",err);
        alert("Error fetching Users");
        this.customers = [];
      }
    })
  }

  saveCust(data:any){
    console.log(data);
    this.editId = null;
    this.cd.MupdateUser(data.userId,data).subscribe({
      next: (res) => {
        alert("User updated successfully");
      },
      error: (err) => {
        console.log("Error updating user");
        alert("Error occured while updating");
      }
    })
  }
  deleteCust(userId:any){
    console.log("Deleted customer");
  }

  sortData(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.customers.sort((a: any, b: any) => {
      const valA = a[column]?.toString().toLowerCase();
      const valB = b[column]?.toString().toLowerCase();

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }
  activeView: 'table' | 'createUser' | 'updateUser' | 'fetchUser' = 'table';

  show(view: 'table' | 'createUser' | 'updateUser' | 'fetchUser') {
    this.activeView = view;
  }
  onSuccessUpdate(){
    this.show('table');
    this.getCustomers();
  }
  onSuccessCreate(){
    this.show('table');
    this.getCustomers();
  }

  selectedUserId: number | null = null;
  openFetchView(userId: number) {
    this.selectedUserId = userId;
    this.activeView = 'fetchUser';
  }
  openUpdateView(userId:number){
    this.selectedUserId = userId;
    this.activeView = 'updateUser';
  }
}
