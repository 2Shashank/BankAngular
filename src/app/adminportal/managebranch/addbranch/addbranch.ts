import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bbb-addbranch',
  standalone: false,
  templateUrl: './addbranch.html',
  styleUrl: './addbranch.css'
})
export class Addbranch {
  submit(formData:NgForm){
    console.log(formData.value);
  }
}
