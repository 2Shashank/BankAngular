import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bbb-addemp',
  standalone: false,
  templateUrl: './addemp.html',
  styleUrl: './addemp.css'
})
export class Addemp {
  submit(formData:NgForm){
    console.log(formData.value);
  }
}
