import { Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast';

@Component({
  selector: 'bbb-adminportal',
  standalone: false,
  templateUrl: './adminportal1.html',
  // styleUrl: './adminportal.css'
})
export class Adminportal {
  User:any;
  // User:any = {"empId" : 100000,'empName':'Sam',"empRole":"BankAdmin",'empMobile':'6965845353','empEmail':'sam.admin@bugb.com','branchId':1,'branchName':'KPMG','bAddress':'Eco World'};
  constructor(private api: Apiservice, private router: Router,private toast:ToastService) {}

  ngOnInit(){
    this.getProfile();
  }
  getProfile(){
    this.api.getAdminProfile().subscribe({
      next:(res :any) =>{
        this.User = res;
      },
      error : (err) => {
        console.error("Error getting profile",err);
        this.toast.show(err.error?.message || "Error fetching Profile",'danger');
      }
    })
  }
  AdminLogout() {
    const confirmLogout = confirm("Are you sure you want to logout?");
  
    if (!confirmLogout) {
      return;
    }

    this.api.logout().subscribe({
      next: (res:any) => {
        sessionStorage.clear();
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error("Error logging out:", err);
        alert("Error logging out. Please try again.");
      }
    });
  }
}
