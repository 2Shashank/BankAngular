import { Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast';

@Component({
  selector: 'bbb-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  logindt: any;
  errMsg:any;
  constructor(private lg: Apiservice, private router: Router,private toast:ToastService) {
  }

  onLogin(formData: any) {
    // this.logindt = formData.value;
    // console.log('Form Data:', formData);a
    if (!formData) {
      this.toast.show('Invalid Data', 'danger');
      return;
    }

    this.lg.verifyLogin(formData).subscribe({
      next: (res: any) => {
        console.log('Login Response:', res);
        this.toast.show('Login successful!', 'success');

        sessionStorage.setItem('EmpId', res.userId);
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('Role', res.role);
        sessionStorage.setItem('BranchId', res.branchId);

        if (res.role == 'BankAdmin') {
          this.router.navigate(['/admin']);
        } else if (res.role == 'BranchManager') {
          this.router.navigate(['/manager']);
        } else if (res.role == 'Staff') {
          this.router.navigate(['/staff']);
        }
        this.errMsg=null;
      },
      error: (err) => {
        console.error('Login Failed:', err);
        this.errMsg = err.error.message;
        // alert(this.errMsg);
        this.toast.show('Invalid Employee Id or Password', 'danger');
      },
    });
  }
}


