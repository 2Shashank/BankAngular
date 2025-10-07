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
  constructor(private api: Apiservice, private router: Router) {}

  ManagerLogout() {
    this.api.logout().subscribe({
      next: (res:any) => {
        console.log("Logout successful:", res);
        sessionStorage.clear();
        alert("Logged out successfully!");
        this.router.navigate(['/login']); // navigate to login page
      },
      error: (err) => {
        console.error("Error logging out:", err);
        alert("Error logging out. Please try again.");
      }
    });
  }
}
