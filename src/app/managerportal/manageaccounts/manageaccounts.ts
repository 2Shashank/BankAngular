import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { NgForm } from '@angular/forms';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'bbb-manageaccounts',
  standalone: false,
  templateUrl: './manageaccounts1.html',
  styleUrl: './manageaccounts.css'
})
export class Manageaccounts {
  accounts:any[] = [];
  editId: number | null = null;
  searchtext: string = '';
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private ac: Apiservice,private toast:ToastService) {
    this.getAccounts()
  }


  getAccounts(){
    this.ac.MgetAccountsbyBranch().subscribe({
      next:(res:any) => {
        console.log(res);
        this.accounts = res.accounts;
      },
      error:(err)=> {
        console.log("Error fetching accounts",err);
        // alert(err.error.message);
        this.toast.show(err.error?.message || err.error || "Error fetching accounts", 'danger')
      }
    })
  }
  deleteAcc(accNo:any){

  }
  saveAcc(account:any){
    console.log("Updated",account);
    console.log(account.accNo);
    console.log(account.accountStatus);
    let status = {"accountStatus": account.accountStatus};
    this.ac.MupdateAcc(account.accNo,status).subscribe({
      next: (res:any) => {
        console.log(res);
        this.toast.show(res.message,'success');
        this.getAccounts();
      },
      error : (err) => {
        console.error("Error occured",err);
        this.toast.show(err.error?.message || "Error to update account",'danger');
      }
    })
    this.editId = null;
  }
  cancelEdit() {
    this.editId = null;
    this.getAccounts(); // refresh data
  }
  sortData(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.accounts.sort((a: any, b: any) => {
      const valA = a[column]?.toString().toLowerCase();
      const valB = b[column]?.toString().toLowerCase();

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }
  showForm = false; 
  submit(form:NgForm){
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    const accData = form.value;
    console.log(accData);
    this.ac.Mcreateacc(accData).subscribe({
      next: (res: any) => {
        console.log('Account added successfully:', res);
        // alert('Account created successfully');
        let msg = `${res.message} Account No.: ${res.accountDetails.accountNumber}`
        this.toast.show( msg || res.message || 'Account created successfully','success');
        form.resetForm();
        this.showForm = false;
        this.getAccounts();
      },
      error: (err) => {
        console.error('Error create account:', err);
        // alert('Failed to create account');
        this.toast.show('Failed to create account','danger');
      }
    });
  }
}
