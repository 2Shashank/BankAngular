import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { ToastService } from '../../services/toast';

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

  constructor(private gt:Apiservice, private toast:ToastService) {
    this.getAccounts();
  }

  getAccounts(){
    this.gt.SGetAccsByBranch().subscribe({
      next:(res:any) => {
        console.log(res);
        this.accounts = res.accounts;
      },
      error:(err)=> {
        console.log("Error fetching accounts",err);
        // alert(err.error.message);
        this.toast.show(err.error?.message || 'Error fetching accounts','danger')
      }
    })
  }

  getTransactions(){
      if(!this.accNo || this.accNo < 0){
        // alert("Enter valid account number");
        this.toast.show('Select valid account number','warning');
        return;
      }
      this.gt.SgetTransofAcc(this.accNo).subscribe({
        next: (res:any) => {
          console.log(res);
          this.transacs = res.transactions;
        },
        error: (err) => {
          console.error("Error fetching transactions",err);
          // alert("No transactions found in provided account number :"+this.accNo);
          this.toast.show(err.error?.message||'Error fetching transacrions','danger');
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

  currentPage: number = 1;
  itemsPerPage: number = 10;

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.transacs.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.transacs.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
