import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-mgettransacs',
  standalone: false,
  templateUrl: './mgettransacs1.html',
  styleUrl: './mgettransacs.css'
})
export class Mgettransacs {
  transacs:any[] = [];
  accNo:number = 0;
  searchtext: string = '';
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  constructor(private gt:Apiservice) {
 
  }
  getTransactions(){
    if(!this.accNo || this.accNo < 0){
      alert("Enter valid account number");
      return;
    }
    this.gt.MgetTransofAcc(this.accNo).subscribe({
      next: (res:any) => {
        console.log(res);
        this.transacs = res;
      },
      error: (err) => {
        alert("Transactions not found for this account :"+this.accNo);
        console.error("Error fetching transactions",err);
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
}
