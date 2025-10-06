import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-manageemp',
  standalone: false,
  templateUrl: './manageemp.html',
  styleUrl: './manageemp.css'
})
export class Manageemp {
  constructor(private r:Router){}
  navigate(){
    this.r.navigate(['/manager/employees/getemps']);
  }
  navigatetofetch(){
    this.r.navigate(['/manager/employees/fetchemp']);
  }
}
