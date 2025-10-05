import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bbb-createtransac',
  standalone: false,
  templateUrl: './createtransac.html',
  styleUrl: './createtransac.css'
})
export class Createtransac {
  submit(transacs:NgForm){
    console.log(transacs.value);
    transacs.resetForm();
  }
}
