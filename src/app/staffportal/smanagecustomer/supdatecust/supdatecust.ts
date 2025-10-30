import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-supdatecust',
  standalone: false,
  templateUrl: './supdatecust.html',
  // styleUrl: './supdatecust.css'
})
export class Supdatecust implements OnChanges{
  userId1:number = 0;
  user:any;
  @Output() updateSuccess = new EventEmitter<void>();
  // @Output() cancelUpdate = new EventEmitter<void>();
  @Input() userId: number | null = null; 
  constructor(private uu:Apiservice,private router:Router) {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
      if (changes['userId'] && this.userId !== null){
        this.getUser();
      }
  }
  getUser(){
    if(!this.userId || this.userId < 0){
      alert("Enter valid userId");
      return;
    }
    this.uu.SgetUserByID(this.userId).subscribe({
      next: (res)=>{
        this.user = res;
      },
      error: (err) => {
        console.error("Error fetching User",err);
        alert("No user data found with id"+this.userId);
        this.user = '';
      }
    })
  }
  submit(userForm: NgForm){
    console.log(userForm.value);
    // userForm.resetForm();
    this.uu.SupdateUser(this.userId,userForm.value).subscribe({
      next: (res) => {
        alert("User updated successfully");
        // this.router.navigate(['/manager/customers']);
        this.updateSuccess.emit();
      },
      error: (err) => {
        console.log("Error updating user");
        alert("Error occured while updating");
      }
    });
  }
  Cancel(){
    this.updateSuccess.emit();
  }
}
