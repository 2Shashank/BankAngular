import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-getallemps',
  standalone: false,
  templateUrl: './getallemps.html',
  styleUrl: './getallemps.css'
})
export class Getallemps {
  employees : any[] = [];
  constructor(private emp:Apiservice){
    emp.MgetEmp().subscribe({
      next: (res: any) => {
        console.log(res);
        this.employees = res;
      },
      error: (err) => {
        console.error("Error fetching employees:", err);
        this.employees = [];
      }
    })
  }
}
