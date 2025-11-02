import { Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast';

@Component({
  selector: 'bbb-customerportal',
  standalone: false,
  templateUrl: './customerportal.html',
  styleUrl: './customerportal.css'
})
export class Customerportal {
  customer:any;
  constructor(private api : Apiservice,private r:Router, private toast:ToastService ) {
    
  }
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
        this.toast.show(err.error,'danger');
        console.error('Something went wrong', err);
      }
    });
  }
  Logout(){
    const confirmLoguot = confirm("Are you sure you want to logout?");
    if(!confirmLoguot){
      return;
    }
    this.api.logout().subscribe({
      next:(res:any) => {
        sessionStorage.clear();
        this.toast.show('Logging out...','info')
        this.r.navigate(['/home']);
      },
      error:(err) => {
        console.error("Error loggin out:", err);
        // alert("Error looging out. Please try again or close the window");
        this.toast.show('Error looging out. Please try again or close the window','danger');
      }
    })
  }
}
