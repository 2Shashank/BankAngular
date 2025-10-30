import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';

@Component({
  selector: 'bbb-smanagetransacs',
  standalone: false,
  templateUrl: './smanagetransacs1.html',
  styleUrl: './smanagetransacs.css'
})
export class Smanagetransacs {
  transacs:any[] = [];
  accounts:any[] = [];
  accNo:number = 0;
  searchtext: string = '';
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private gt:Apiservice) {
    this.getAccounts();
  }

  getAccounts(){
    const branchId = sessionStorage.getItem('BranchId');
    this.gt.MgetAccountsbyBranch(branchId).subscribe({
      next:(res:any) => {
        console.log(res);
        this.accounts = res;
      },
      error:(err)=> {
        console.log("Error fetching accounts",err);
        alert(err.error.message);
      }
    })
  }

  getTransactions(){
      if(!this.accNo || this.accNo < 0){
        alert("Enter valid account number");
        return;
      }
      this.gt.SgetTransofAcc(this.accNo).subscribe({
        next: (res:any) => {
          console.log(res);
          this.transacs = res;
        },
        error: (err) => {
          console.error("Error fetching transactions",err);
          alert("No transactions found in provided account number :"+this.accNo);
          this.transacs = [];
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

    this.transacs.sort((a: any, b: any) => {
      const valA = a[column]?.toString().toLowerCase();
      const valB = b[column]?.toString().toLowerCase();

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  activeView: 'table' | 'tbi' | 'tba' | 'createTransac' | 'createTransfer' = 'table';

  show(view: 'table' | 'tbi' | 'tba' | 'createTransac' | 'createTransfer') {
    this.activeView = view;
  }
  afterTransac(){
    this.show('table');
  }
}
