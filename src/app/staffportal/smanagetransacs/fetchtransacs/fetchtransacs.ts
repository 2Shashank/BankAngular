import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';
import { ToastService } from '../../../services/toast';

@Component({
  selector: 'bbb-fetchtransacs',
  standalone: false,
  templateUrl: './fetchtransacs.html',
  styleUrl: './fetchtransacs.css',
})
export class Fetchtransacs {
  transacs: any[] = [];
  accNo: number = 0;
  searchtext: string = '';
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  constructor(private gt: Apiservice , private toast:ToastService) {}
  getTransactions() {
    if (!this.accNo || this.accNo < 0) {
      // alert('Enter valid account number');
      this.toast.show('Enter valid accoun number','danger');
      return;
    }
    this.gt.SgetTransofAcc(this.accNo).subscribe({
      next: (res: any) => {
        console.log(res);
        this.transacs = res.transactions;
      },
      error: (err) => {
        console.error('Error fetching transactions', err);
        // alert('No transactions found in provided account number :' + this.accNo);
        this.toast.show(err.error?.message || "Error fetching transactions",'danger');
        this.transacs = [];
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
}
