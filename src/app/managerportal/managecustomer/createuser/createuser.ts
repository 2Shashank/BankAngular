import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bbb-createuser',
  standalone: false,
  templateUrl: './createuser.html',
  styleUrl: './createuser.css'
})
export class Createuser {
  submit(userForm: NgForm){
    console.log(userForm.value);
    userForm.resetForm();
  }
}
