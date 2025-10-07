import { Component } from '@angular/core';
<<<<<<< HEAD
import { Apiservice } from '../apiservice';
import { Router } from '@angular/router';
=======
import { Router } from '@angular/router';
import { Apiservice } from '../apiservice';
>>>>>>> 01996da0c78e17b5b81a988639bbfe565655a094

@Component({
  selector: 'bbb-staffportal',
  standalone: false,
  templateUrl: './staffportal.html',
  styleUrl: './staffportal.css'
})
export class Staffportal {
constructor(private api:Apiservice,private router:Router){}
  StaffLogout() {
    const confirmLogout = confirm("Are you sure you want to logout?");
  
    if (!confirmLogout) {
      return;
    }

<<<<<<< HEAD
=======
  constructor(private api:Apiservice,private router:Router){}
  StaffLogout() {
    const confirmLogout = confirm("Are you sure you want to logout?");
  
    if (!confirmLogout) {
      return;
    }

>>>>>>> 01996da0c78e17b5b81a988639bbfe565655a094
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
