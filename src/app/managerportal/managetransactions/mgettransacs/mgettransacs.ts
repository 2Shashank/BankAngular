import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';
import { ToastService } from '../../../services/toast';

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
  constructor(private gt:Apiservice, private toast:ToastService) {
 
  }
  getTransactions(){
    if(!this.accNo || this.accNo < 0){
      // alert("Enter valid account number");
      this.toast.show('Enter valid account number','danger');
      return;
    }
    this.gt.MgetTransofAcc(this.accNo).subscribe({
      next: (res:any) => {
        console.log(res);
        this.transacs = res;
      },
      error: (err) => {
        // alert("Transactions not found for this account :"+this.accNo);
        this.toast.show(`Transactions not found for this account : ${this.accNo}`,'danger');
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
