import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bbb-adduser',
  standalone: false,
  templateUrl: './adduser.html',
  styleUrl: './adduser.css'
})
export class Adduser {
  submit(userForm: NgForm){
    console.log(userForm.value);
    userForm.resetForm();
  }
}
