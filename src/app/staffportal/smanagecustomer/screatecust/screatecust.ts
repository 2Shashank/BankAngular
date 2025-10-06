import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bbb-screatecust',
  standalone: false,
  templateUrl: './screatecust.html',
  styleUrl: './screatecust.css'
})
export class Screatecust {
  submit(fdata:NgForm){
    console.log(fdata.value);
    fdata.resetForm();
  }
}
