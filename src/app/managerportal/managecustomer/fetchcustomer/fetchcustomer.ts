import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Apiservice } from '../../../apiservice';
import { ToastService } from '../../../services/toast';

@Component({
  selector: 'bbb-fetchcustomer',
  standalone: false,
  templateUrl: './fetchcustomer.html',
  styleUrl: './fetchcustomer.css'
})
export class Fetchcustomer implements OnChanges{
  userId1:number = 0;
  cust:any;
  @Input() userId: number | null = null; 

  constructor(private fu:Apiservice, private toast:ToastService) {
    // this.userId1 = this.userId;
  }
  ngOnChanges(changes: SimpleChanges): void {
      if (changes['userId'] && this.userId !== null) {
      this.getCustomer();
    }
  }
  getCustomer(){
    if(!this.userId){
      // alert("Enter valid userid");
      this.toast.show('Enter Valid User Id','danger');
    }
    this.fu.MgetUserByID(this.userId).subscribe({
      next: (res)=>{
        this.cust = res;
      },
      error: (err) => {
        console.error("Error fetching User");
        // alert("Error fetching customer");
        this.toast.show('Error fetching customer','danger');
        this.cust = null;
      }
    })
  }
}
