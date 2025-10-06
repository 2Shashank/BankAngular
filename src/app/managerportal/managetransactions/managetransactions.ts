import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-managetransactions',
  standalone: false,
  templateUrl: './managetransactions.html',
  styleUrl: './managetransactions.css'
})
export class Managetransactions {
  constructor(private r: Router){}
  createtransfer(){
    this.r.navigate(['/manager/transactions/createtransfer']);
  }
  createtransac(){
    this.r.navigate(['/manager/transactions/createtransac']);
  }
  fettransac(){
    this.r.navigate(['/manager/transactions/fetch']);
  }
  getalltransacs(){
    this.r.navigate(['/manager/transactions/getall']);
  }
  deletetransacs(){
    this.r.navigate(['/manager/transactions/delete'])
  }
}
