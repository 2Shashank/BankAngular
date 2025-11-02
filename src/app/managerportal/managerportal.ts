import { Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast';

@Component({
  selector: 'bbb-managerportal',
  standalone: false,
  templateUrl: './managerportal.html',
  styleUrl: './managerportal.css'
})
export class Managerportal {
  // User:any = {"empId" : 100000,'empName':'Dhiveashwar',"empRole":"BankAdmin",'empMobile':'6965845353','empEmail':'sam.admin@bugb.com','branchId':1,'branchName':'KPMG2','bAddress':'Eco World'};
  User:any;
  constructor(private api: Apiservice, private router: Router, private toast: ToastService) {}

  ngOnInit(){
    this.getProfile();
  }
  getProfile(){
    this.api.getManagerProfile().subscribe({
      next: (res) => {
        console.log(res);
        this.User = res;
      },
      error: (err) => {
        console.error("Something went wrong",err);
        this.toast.show(err.error?.message || "Something went wrong", 'danger');
      }
    })
  }
  ManagerLogout() {
    const confirmLogout = confirm("Are you sure you want to logout?");
  
    if (!confirmLogout) {
      return;
    }

    this.api.logout().subscribe({
      next: (res:any) => {
        sessionStorage.clear();
        this.toast.show('Logging out...','success');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error("Error logging out:", err);
        // alert("Error logging out. Please try again.");
        this.toast.show( err.error?.message || 'Error logging out. Please try again.','danger');
      }
    });
  }
}
