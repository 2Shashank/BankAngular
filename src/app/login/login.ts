import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  logindt: any;
  constructor(private lg: Apiservice, private router: Router) {}

  onLogin(formData: any) {
    // this.logindt = formData.value;
    console.log('Form Data:', formData);

    this.lg.verifyLogin(formData).subscribe({
      next: (res: any) => {
        console.log('Login Response:', res);
        alert(res.message || 'Login Successful');

        // ✅ Store safe info (never password)
        sessionStorage.setItem('EmpId', res.userId);
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('Role', res.role);
        sessionStorage.setItem('BranchId', res.branchId);

        // Redirect to dashboard or home page
        // this.router.navigate(['/home']);
        if (res.role == 'BankAdmin') {
          this.router.navigate(['/admin']);
        } else if (res.role == 'BranchManager') {
          this.router.navigate(['/manager']);
        } else if (res.role == 'Staff') {
          this.router.navigate(['/staff']);
        }
      },
      error: (err) => {
        console.error('Login Failed:', err);
        alert(err.error.message || 'Invalid Employee ID or Password');
      },
    });
  }
  // Login(logindt:any){
  //   this.lg.verifyLogin(logindt).subscribe(s => {
  //     console.log(s);
  //   })
  // }
}
