import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbb-caccount',
  standalone: false,
  templateUrl: './caccount.html',
  styleUrl: './caccount.css'
})
export class Caccount implements OnInit{
  accounts: any[] = [];
  selectedAccount: any = null;
  transactions: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Simulate API call for accounts
    this.fetchAccounts();
  }

  // Simulate fetching accounts from API
  fetchAccounts() {
    this.accounts = [
      {
        AccNo: 'ACC1001',
        AccType: 'Savings',
        Balance: 50000,
        AccountStatus: 'Active',
        DateOfJoining: '2020-05-15'
      },
      {
        AccNo: 'ACC1002',
        AccType: 'Current',
        Balance: 100000,
        AccountStatus: 'Active',
        DateOfJoining: '2021-03-20'
      },
      {
        AccNo: 'ACC1003',
        AccType: 'Fixed Deposit',
        Balance: 200000,
        AccountStatus: 'Inactive',
        DateOfJoining: '2022-07-10'
      }
    ];
  }

  // Simulate fetching transactions for selected account
  fetchTransactions(accNo: string) {
    this.transactions = [
      { transactionId: 'TX1001', amount: 5000, date: '2025-10-20', type: 'Credit' },
      { transactionId: 'TX1002', amount: 2000, date: '2025-10-19', type: 'Debit' },
      { transactionId: 'TX1003', amount: 3000, date: '2025-10-18', type: 'Credit' },
      { transactionId: 'TX1004', amount: 1000, date: '2025-10-17', type: 'Debit' },
      { transactionId: 'TX1005', amount: 4000, date: '2025-10-16', type: 'Credit' }
    ];
  }

  // Handle account click
  onAccountClick(account: any) {
    this.selectedAccount = account;
    this.fetchTransactions(account.AccNo);
  }
}
