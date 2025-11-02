import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apiservice } from '../../apiservice';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'bbb-managetransactions',
  standalone: false,
  templateUrl: './managetransactions1.html',
  styleUrl: './managetransactions.css',
})
export class Managetransactions {
  transacs: any[] = [];
  accounts: any[] = [];
  accNo: number = 0;
  searchtext: string = '';
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  constructor(private r: Router, private gt: Apiservice, private toast:ToastService) {
    this.getAccounts();
  }

  getTransactions() {
    if (!this.accNo || this.accNo < 0) {
      // alert('Enter valid account number');
      this.toast.show('Select valid account number');
      return;
    }
    this.gt.MgetTransofAcc(this.accNo).subscribe({
      next: (res: any) => {
        console.log(res);
        this.transacs = res;
      },
      error: (err) => {
        // alert('Transactions not found for this account :' + this.accNo);
        this.toast.show(`Transactions not found for this account : '${this.accNo}`,'danger')
        console.error('Error fetching transactions', err);
        this.transacs = [];
      },
    });
  }
  getAccounts() {
    this.gt.MgetAccountsbyBranch().subscribe({
      next: (res: any) => {
        console.log(res);
        this.accounts = res;
      },
      error: (err) => {
        console.log('Error fetching accounts', err);
        // alert(err.error.message);
        this.toast.show(err.error.message ||'Error fetching transactions','danger')
      },
    });
  }

  sortData(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.transacs.sort((a: any, b: any) => {
      const valA = a[column]?.toString().toLowerCase();
      const valB = b[column]?.toString().toLowerCase();

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  /*showtab:boolean = true;
  showtbi:boolean = false;
  showtba:boolean = false;
  createtransacpath:boolean = false;
  createtransferpath:boolean = false;
  showTable(){
    this.showtab = true;
    this.showtbi = false;
    this.showtba = false;
    this.createtransacpath = false;
    this.createtransferpath = false;
  }
  showTbi(){
    this.showtab = false;
    this.showtbi = true;
    this.showtba = false;
    this.createtransacpath = false;
    this.createtransferpath = false;
  }
  showTba(){
    this.showtab = false;
    this.showtbi = false;
    this.showtba = true;
    this.createtransacpath = false;
    this.createtransferpath = false;
  }
  showCtransac(){
    this.showtab = false;
    this.showtbi = false;
    this.showtba = false;
    this.createtransacpath = true;
    this.createtransferpath = false;
  }
  showCtransfer(){
    this.showtab = false;
    this.showtbi = false;
    this.showtba = false;
    this.createtransacpath = false;
    this.createtransferpath = true;
  }
    */
  activeView: 'table' | 'tbi' | 'tba' | 'createTransac' | 'createTransfer' = 'table';

  show(view: 'table' | 'tbi' | 'tba' | 'createTransac' | 'createTransfer') {
    this.activeView = view;
  }

  afterTransac(){
    this.show('table');
    
  }
}
