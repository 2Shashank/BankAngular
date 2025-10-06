import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bbb-updatecust',
  standalone: false,
  templateUrl: './updatecust.html',
  styleUrl: './updatecust.css'
})
export class Updatecust {
  submit(userForm: NgForm){
    console.log(userForm.value);
    userForm.resetForm();
  }
}
