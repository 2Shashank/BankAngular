import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-caccount',
  standalone: false,
  templateUrl: './caccount.html',
  styleUrl: './caccount.css',
})
export class Caccount implements OnInit {
  accounts: any[] = [];
  selectedAccount: any = null;
  transactions: any[] = [];
  transacs: any[] = [];

  constructor(private api: Apiservice, private r: Router) {}

  ngOnInit(): void {
    this.fetchAccounts();
    this.fetchTrxn();
  }

  // Simulate fetching accounts from API
  fetchAccounts() {
    this.api.CGetAccounts().subscribe({
      next: (res: any) => {
        console.log(res);
        this.accounts = res;
      },
      error: (err) => {
        console.error('Error fetching accounts', err);
        alert(err.error);
        this.r.navigate(['customer']);
      },
    });
  }

  fetchTrxn() {
    this.api.CTxnHistory().subscribe({
      next: (res: any) => {
        console.log(res);
        this.transacs = res;
      },
      error: (err) => {
        console.error('Error fetching transactions', err);
        this.r.navigate(['customer']);
      },
    });
  }
  // Simulate fetching transactions for selected account
  fetchTransactions(accNo: number) {
    if (!this.transacs || this.transacs.length === 0) return;

    const filtered = this.transacs
      .filter((t: any) => t.accNo === accNo || t.toAcc === accNo)
      .slice(0, 5);

    this.transactions = filtered.map((t: any) => {
    let type = '';

    if (t.transacType === 'Credit') type = 'Credit';
    else if (t.transacType === 'Debit') type = 'Debit';
    else if (t.transacType === 'Transfer') {
      // if current acc is sender → Debit, else Credit
      type = t.accNo === accNo ? 'Debit' : 'Credit';
    }

    return { ...t, type };
  });

    console.log(`Latest 5 transactions for account ${accNo}:`, this.transactions);
  }

  // Handle account click
  onAccountClick(account: any) {
    this.selectedAccount = account;
    this.fetchTransactions(account.accNo);
  }
}
