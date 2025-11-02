import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'bbb-ctransacs',
  standalone: false,
  templateUrl: './ctransacs.html',
  styleUrl: './ctransacs.css',
})
export class Ctransacs {
  transacs: any[] = [];
  searchtext: string = '';
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private api: Apiservice,private r: Router, private toast: ToastService) {
    
  }
  ngOnInit(){
    this.fetchTrax();
  }
  fetchTrax(){
    this.api.CTxnHistory().subscribe({
      next: (res: any) => {
        this.transacs = res;
      },
      error: (err) => {
        console.error('Error fetching transactions', err);
        this.toast.show('Error fetching transactions','danger');
        this.r.navigate(['customer']);
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

  currentPage: number = 1;
  itemsPerPage: number = 10;

  get paginatedTransactions() {
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
