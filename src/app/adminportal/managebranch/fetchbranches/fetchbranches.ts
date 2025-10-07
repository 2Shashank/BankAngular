import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-fetchbranches',
  standalone: false,
  templateUrl: './fetchbranches.html',
  styleUrl: './fetchbranches.css'
})
export class Fetchbranches implements OnInit {
  branches: any[] = [];

  constructor(private api: Apiservice) {}

  ngOnInit(): void {
    this.api.getBranches().subscribe({
      next: (data: any) => {
        console.log('Branches:', data);
        this.branches = data;
      },
      error: (err) => {
        console.error('Error fetching branches:', err);
      }
    });
  }
}
