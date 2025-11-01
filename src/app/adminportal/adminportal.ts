import { Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-adminportal',
  standalone: false,
  templateUrl: './adminportal1.html',
  // styleUrl: './adminportal.css'
})
export class Adminportal {
  User:any = {"empId" : 100000,'empName':'Sam',"empRole":"BankAdmin",'empMobile':'6965845353','empEmail':'sam.admin@bugb.com','branchId':1,'branchName':'KPMG','bAddress':'Eco World'};
  constructor(private api: Apiservice, private router: Router) {}

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
