import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbb-cprofile',
  standalone: false,
  templateUrl: './cprofile.html',
  styleUrl: './cprofile.css'
})
export class Cprofile implements OnInit{
  customer: any;

  constructor() { }

  ngOnInit(): void {
    // Replace with your actual service call
    this.customer = {
      UserId: 'CUST001',
      Uname: 'John Doe',
      DoB: '1990-05-15',
      Uaddress: '123 Main Street, New York, NY 10001',
      Gender: 'Male',
      Mobile: '+1-234-567-8900',
      Email: 'john.doe@example.com',
      PANCard: 'ABCDE1234F',
      AadharCard: '1234 5678 9012'
    };
  }
}
