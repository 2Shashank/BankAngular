import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../apiservice';
import { ToastService } from '../../services/toast';
// import { Router } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'bbb-cfutransac',
  standalone: false,
  templateUrl: './cfutransac.html',
  styleUrl: './cfutransac.css',
})
export class Cfutransac implements OnInit {
  transactions: any[] = [];
  searchtext: any;
  showAddForm = false;
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  newSchedule = {
    fromAccount: '',
    toAccount: '',
    amount: null,
    scheduleTime: '',
    txnPassword: '',
  };

  constructor(private api: Apiservice,private toast:ToastService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.api.CGetScheduledTransactions().subscribe({
      next: (data: any) => {
        console.log('Scheduled Transactions:', data);
        this.transactions = data;
      },
      error: (err) => {
        console.error('Error fetching scheduled transactions:', err);
        this.toast.show('No rocerd found','danger');
      },
    });
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  sortData(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.transactions.sort((a: any, b: any) => {
      const valA = a[column]?.toString().toLowerCase();
      const valB = b[column]?.toString().toLowerCase();

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }


  showCancelModal = false;
  selectedTxId: number | null = null;
  cancelDto = { transactionPass: '' };

  openCancelPopup(tx: any) {
    this.selectedTxId = tx.stId;
    this.cancelDto.transactionPass = '';
    this.showCancelModal = true;
  }
  closeCancelPopup() {
    this.showCancelModal = false;
  }
  confirmCancel() {
    if (!this.cancelDto.transactionPass) {
      // alert('Please enter your transaction password.');
      this.toast.show('Please enter your transaction password.','warning');
      return;
    }
    console.log(this.cancelDto);
    this.api.CCancelSchTxn(this.selectedTxId!, this.cancelDto).subscribe({
      next: (res: any) => {
        // alert('Transaction cancelled successfully!');
        this.toast.show('Transaction cancelled successfully!','success');
        this.showCancelModal = false;
        this.getTransactions(); // refresh table
      },
      error: (err) => {
        console.error(err);
        // alert(err.error?.message || 'Failed to cancel transaction.');
        this.toast.show(err.error?.message || 'Failed to cancel transaction.','danger');
      },
    });
  }
  emitTxMsg() {
    this.toggleAddForm();
    this.getTransactions();
  }

  currentPage: number = 1;
  itemsPerPage: number = 5;

  get paginatedTransactions() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.transactions.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.transactions.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
