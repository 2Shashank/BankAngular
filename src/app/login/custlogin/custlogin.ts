import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'bbb-custlogin',
  standalone: false,
  templateUrl: './custlogin.html',
  styleUrl: './custlogin.css'
})
export class Custlogin {
  logindt: any;
  constructor(private lg: Apiservice, private router: Router , private toast:ToastService) {}

  onLogin(formData: any) {
    // this.logindt = formData.value;
    console.log('Form Data:', formData);

    this.lg.verifyCustLogin(formData).subscribe({
      next: (res: any) => {
        console.log('Login Response:', res);
        // alert(res.message || 'Login Successful');
        this.toast.show(res.message ||'Login Successfully','success')

        sessionStorage.setItem('EmpId', res.userId);
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('Role', res.role);
        // sessionStorage.setItem('BranchId', res.branchId);

        // Redirect to dashboard or home page
        // this.router.navigate(['/home']);
        if (res.role == 'Customer') {
          this.router.navigate(['/customer']);
        }
        else{
          alert("role is not matching");
        } 
      },
      error: (err) => {
        console.error('Login Failed:', err);
        // alert(err.error.message || 'Invalid User ID or Password');
        this.toast.show(err.error?.message || "Error logging in", 'danger');
      },
    });
  }
}
