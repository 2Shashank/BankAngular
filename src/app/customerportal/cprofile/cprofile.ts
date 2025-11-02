import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'bbb-cprofile',
  standalone: false,
  templateUrl: './cprofile.html',
  styleUrl: './cprofile.css',
})
export class Cprofile implements OnInit {
  customer: any;
  activeForm: 'login' | 'transaction' | null = null;

  passwordForm = {
    previousPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  constructor(private api: Apiservice, private r: Router,private toast:ToastService) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.api.CGetCustInfo().subscribe({
      next: (res: any) => {
        this.customer = res;
      },
      error: (err) => {
        // alert(err.error);
        this.toast.show(err.error||"Something went wrong",'danger');
        console.error('Something went wrong', err);

      }
    });
  }

  backHome() {
    this.r.navigate(['customer']);
  }

  // Show / Hide the password update form
  toggleForm(type: 'login' | 'transaction') {
    this.activeForm = this.activeForm === type ? null : type;
    this.passwordForm = { previousPassword: '', newPassword: '', confirmPassword: '' };
  }

  // Cancel the form
  cancelForm() {
    this.activeForm = null;
  }

  errMsg:any;
  // Submit password change form
  submitPasswordChange() {
    if (this.passwordForm.newPassword !== this.passwordForm.confirmPassword) {
      this.errMsg = 'New password and Confirm password do not match!'
      // alert(this.errMsg);
      this.toast.show(this.errMsg,'danger')
      return;
    }

    if (!this.customer?.userId) {
      // alert('Customer not found!');
      this.errMsg = 'Customer not found!';
      this.toast.show(this.errMsg,'warning');
      return;
    }

    if (this.activeForm === 'login') {
      this.api.CUpdateLgPass(this.passwordForm).subscribe({
        next: (res: any) => {
          // alert('Login password updated successfully!');
          this.toast.show('Login password updated successfully!','success');
          this.cancelForm();
        },
        error: (err) => {
          // alert(err.error || 'Error updating login password');
          this.errMsg = err.error || 'Error updating login password'
          this.toast.show(this.errMsg , 'danger');
          console.error(err);
        }
      });

    } else if (this.activeForm === 'transaction') {
      this.api.CUpdatetxnPass(this.passwordForm).subscribe({
        next: (res: any) => {
          // alert('Transaction password updated successfully!');
          this.toast.show('Transaction password updated successfully!','success');
          this.cancelForm();
        },
        error: (err) => {
          // alert(err.error || 'Error updating transaction password');
          this.errMsg = err.error || 'Error updating transaction password';
          this.toast.show(this.errMsg,'danger')
          console.error(err);
        }
      });
    }
  }
}
