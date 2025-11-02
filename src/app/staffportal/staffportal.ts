import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apiservice } from '../apiservice';
import { ToastService } from '../services/toast';


@Component({
  selector: 'bbb-staffportal',
  standalone: false,
  templateUrl: './staffportal.html',
  styleUrl: './staffportal.css'
})
export class Staffportal {
  User:any = {"empId" : 100000,'empName':'Shashank',"empRole":"Staff",'empMobile':'6965845353','empEmail':'shashank.staff@bugb.com','branchId':2,'branchName':'KPMG2','bAddress':'Eco World'};
constructor(private api:Apiservice,private router:Router, private toast : ToastService){}
  StaffLogout() {
    const confirmLogout = confirm("Are you sure you want to logout?");
  
    if (!confirmLogout) {
      return;
    }

    this.api.logout().subscribe({
      next: (res:any) => {
        sessionStorage.clear();
        this.toast.show('Logging out....','success');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error("Error logging out:", err);
        // alert("Error logging out. Please try again.");
        this.toast.show('Error logging out','danger');
      }
    });
  }
}
