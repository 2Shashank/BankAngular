import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bbb-supdatecust',
  standalone: false,
  templateUrl: './supdatecust.html',
  styleUrl: './supdatecust.css'
})
export class Supdatecust {
  submit(fd:NgForm){
    console.log(fd.value);
    fd.resetForm();
  }
}
