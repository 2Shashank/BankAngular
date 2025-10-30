import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bbb-smanageaccounts',
  standalone: false,
  templateUrl: './smanageaccounts.html',
  styleUrl: './smanageaccounts.css',
})
export class Smanageaccounts {
  accounts: any[] = [];
  editId: number | null = null;
  searchtext: string = '';
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  branchId: number;

  constructor(private ac: Apiservice) {
    const branchIdStr = sessionStorage.getItem('BranchId');
    this.branchId = branchIdStr ? parseInt(branchIdStr, 10) : 0;
    this.getAccounts();
  }

  getAccounts() {
    // const branchId = sessionStorage.getItem('BranchId');
    this.ac.SGetAccsByBranch().subscribe({
      next: (res: any) => {
        console.log(res);
        this.accounts = res;
      },
      error: (err) => {
        console.log('Error fetching accounts', err);
        alert(err.error.message);
      },
    });
  }
  deleteAcc(accNo: any) {}
  saveAcc(account: any) {
    console.log('Updated', account);
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
  submit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    const accData = form.value;
    console.log(accData);
    this.ac.Screateacc(accData).subscribe({
      next: (res: any) => {
        console.log('Account added successfully:', res);
        alert('Account created successfully');
        // formData.reset();
        form.resetForm();
        this.showForm = false;
        this.getAccounts();
      },
      error: (err) => {
        console.error('Error create account:', err);
        alert('Failed to create account');

      }
    });
  }
}
