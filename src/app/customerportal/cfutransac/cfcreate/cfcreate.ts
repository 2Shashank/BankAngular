import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast';

@Component({
  selector: 'bbb-cfcreate',
  standalone: false,
  templateUrl: './cfcreate.html',
  styleUrl: './cfcreate.css'
})
export class Cfcreate implements OnInit {
  errMsg: any;
  accounts: any[] = [];
  minDateTime!: string;
  maxDateTime!: string;

  @Output() createFTmessage = new EventEmitter<void>();

  constructor(
    private cft: Apiservice,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.getAccounts();
    this.setDateTimeLimits();
  }

  /** 🔹 Load account list */
  getAccounts() {
    this.cft.CGetAccounts().subscribe({
      next: (res: any) => {
        console.log("Accounts loaded:", res);
        this.accounts = res;
      },
      error: (err) => {
        console.error("Error fetching accounts:", err);
        this.toast.show("Accounts are not loaded", 'danger');
      }
    });
  }

  /** 🔹 Limit datetime picker within 24 hours */
  setDateTimeLimits() {
    const now = new Date();
    const max = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    // HTML input uses local ISO format (YYYY-MM-DDTHH:mm)
    this.minDateTime = now.toISOString().slice(0, 16);
    this.maxDateTime = max.toISOString().slice(0, 16);
  }

  /** 🔹 Submit future transaction */
  submit(formData: NgForm) {
  const formValue = formData.value;

  if (formValue.fromAccountId === formValue.toAccountId) {
    this.toast.show('You cannot transfer to yourself', 'danger');
    return;
  }

  console.log("Form Value:", formValue);
  console.log("Local selected (IST):", formValue.scheduledTime);

  // 🕒 Just convert to UTC ISO (same as Swagger)
  const utcString = new Date(formValue.scheduledTime).toISOString();

  console.log("Converted to UTC:", utcString);

  const payload = {
    fromAccountId: formValue.fromAccountId,
    toAccountId: formValue.toAccountId,
    amount: formValue.amount,
    scheduledTime: utcString,
    transactionPass: formValue.transactionPass
  };

  console.log("Payload being sent to backend:", payload);

  this.cft.CScheduleTransaction(payload).subscribe({
    next: (res: any) => {
      console.log('✅ Transaction Scheduled Successfully:', res);
      this.toast.show('Transaction Scheduled Successfully', 'success');
      this.createFTmessage.emit();
      formData.resetForm();
    },
    error: (err: any) => {
      console.error('❌ Error Scheduling Transaction:', err);
      const msg = err.error?.message || "Failed to schedule a transaction";
      this.toast.show(msg, 'danger');
      formData.controls['transactionPass'].reset();
    }
  });
}


  /** 🔹 Cancel transaction creation */
  cancelTxn() {
    this.createFTmessage.emit();
    this.toast.show('Transaction cancelled', 'info');
  }
} 