import { Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-adminportal',
  standalone: false,
  templateUrl: './adminportal.html',
  styleUrl: './adminportal.css'
})
export class Adminportal {
  constructor(private api: Apiservice, private router: Router) {}

  AdminLogout() {
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
