import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apiservice } from '../../../apiservice';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast';

@Component({
  selector: 'bbb-updatecust',
  standalone: false,
  templateUrl: './updatecust.html',
  // styleUrl: './updatecust.css'
})
export class Updatecust implements OnChanges{
  userId1:number = 0;
  user:any;
  @Output() updateSuccess = new EventEmitter<void>();
  @Input() userId: number | null = null
  constructor(private uu:Apiservice,private router:Router, private toast:ToastService) {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
      if (changes['userId'] && this.userId !== null){
        this.getUser();
      }
  }
  getUser(){
    if(!this.userId || this.userId < 0){
      // alert("Enter valid userId");
      this.toast.show('Enter valid user id','danger');
      return;
    }
    this.uu.MgetUserByID(this.userId).subscribe({
      next: (res)=>{
        this.user = res;
      },
      error: (err) => {
        console.error("Error fetching User",err);
        // alert("No user data found with id"+this.userId);
        let msg = `No user data found with id ${this.userId}`
        this.toast.show(err.error?.message || msg,'danger');
        this.user = '';
      }
    })
  }
  submit(userForm: NgForm){
    console.log(userForm.value);
    // userForm.resetForm();
    this.uu.MupdateUser(this.userId,userForm.value).subscribe({
      next: (res:any) => {
        // alert("User updated successfully");
        this.toast.show(res.message || 'User updated successfully','success');
        this.updateSuccess.emit();
      },
      error: (err) => {
        console.log("Error updating user",err);
        // alert("Error occured while updating");
        this.getUser();
        this.toast.show( err.error?.message || 'Error occured while updating','danger');
      }
    });
  }
  Cancel(){
    this.updateSuccess.emit();
    this.userId = null;
  }
  
}
