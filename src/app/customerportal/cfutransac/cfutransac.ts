import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-cfutransac',
  standalone: false,
  templateUrl: './cfutransac.html',
  styleUrl: './cfutransac.css'
})
export class Cfutransac {
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

  constructor(private api: Apiservice) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    // this.api.CGetScheduledTransactions().subscribe({
    //   next: (data: any) => {
    //     console.log('Scheduled Transactions:', data);
    //     this.transactions = data;
    //   },
    //   error: (err) => {
    //     console.error('Error fetching scheduled transactions:', err);
    //   },
    // });
      this.transactions = [
      {
        scheduleTransactionId: 1,
        fromAccount: '1234567890',
        toAccount: '9876543210',
        amount: 5000.0,
        scheduleTime: new Date('2025-10-31T15:30:00'),
        createdAt: new Date('2025-10-30T11:00:00'),
        transactionStatus: 'Scheduled'
      },
      {
        scheduleTransactionId: 2,
        fromAccount: '1111222233',
        toAccount: '9999888877',
        amount: 12000.5,
        scheduleTime: new Date('2025-11-01T09:15:00'),
        createdAt: new Date('2025-10-31T09:45:00'),
        transactionStatus: 'Scheduled'
      },
      {
        scheduleTransactionId: 3,
        fromAccount: '2222333344',
        toAccount: '5555666677',
        amount: 2500.75,
        scheduleTime: new Date('2025-11-01T13:00:00'),
        createdAt: new Date('2025-10-31T09:30:00'),
        transactionStatus: 'Executed'
      }
    ];
    
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    this.newSchedule = {
      fromAccount: '',
      toAccount: '',
      amount: null,
      scheduleTime: '',
      txnPassword: '',
    };
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

  saveNewSchedule() {
    if (
      !this.newSchedule.fromAccount ||
      !this.newSchedule.toAccount ||
      !this.newSchedule.amount ||
      !this.newSchedule.scheduleTime
    ) {
      alert('Please fill all required fields.');
      return;
    }

    this.api.CScheduleTransaction(this.newSchedule).subscribe({
      next: (res) => {
        alert('Transaction scheduled successfully!');
        this.toggleAddForm();
        this.getTransactions();
      },
      error: (err) => {
        console.error('Error scheduling transaction:', err);
      },
    });
  }
}



    