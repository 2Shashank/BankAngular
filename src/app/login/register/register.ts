import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../apiservice';
import { ToastService } from '../../services/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  constructor(private api: Apiservice, private toast: ToastService, private router:Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const userData = form.value;
    console.log('Form Data:', userData);

    this.api.newRegister(userData).subscribe({
      next: (res: any) => {
        let msg = `${res.message} UserId: ${res.userDetails.userId}\nTx and Login Password: ${res.userDetails.loginPassword}`
        this.toast.show(msg || res.message || 'User registered successfully', 'success');
        this.router.navigate(['/custlogin']);
        form.resetForm();
      },
      error: (err) => {
        console.error('Registration failed', err);
        this.toast.show(err.error?.message || 'Registration failed', 'danger');
      },
    });
  }
}
