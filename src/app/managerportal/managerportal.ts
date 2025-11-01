import { Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-managerportal',
  standalone: false,
  templateUrl: './managerportal.html',
  styleUrl: './managerportal.css'
})
export class Managerportal {
  User:any = {"empId" : 100000,'empName':'Dhiveashwar',"empRole":"BankAdmin",'empMobile':'6965845353','empEmail':'sam.admin@bugb.com','branchId':1,'branchName':'KPMG2','bAddress':'Eco World'};
  constructor(private api: Apiservice, private router: Router) {}

  ManagerLogout() {
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
