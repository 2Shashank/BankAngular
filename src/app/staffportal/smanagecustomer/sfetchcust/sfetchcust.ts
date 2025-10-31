import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-sfetchcust',
  standalone: false,
  templateUrl: './sfetchcust.html',
  styleUrl: './sfetchcust.css'
})
export class Sfetchcust implements OnChanges{
  userId1:number = 0;
  cust:any;
  @Input() userId: number | null = null; 

  constructor(private fu:Apiservice) {
    // this.userId1 = this.userId;
  }
  ngOnChanges(changes: SimpleChanges): void {
      if (changes['userId'] && this.userId !== null) {
      this.getCustomer();
    }
  }
  getCustomer(){
    if(!this.userId){
      alert("Enter valid userid");
    }
    this.fu.SgetUserByID(this.userId).subscribe({
      next: (res)=>{
        this.cust = res;
      },
      error: (err) => {
        console.error("Error fetching User");
        alert("Error fetching customer");
        this.cust = null;
      }
    })
  }
}
