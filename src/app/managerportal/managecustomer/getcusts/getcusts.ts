import { Component } from '@angular/core';
import { Apiservice } from '../../../apiservice';

@Component({
  selector: 'bbb-getcusts',
  standalone: false,
  templateUrl: './getcusts.html',
  styleUrl: './getcusts.css'
})
export class Getcusts {
  custs:any[] = [];
  constructor(private gu:Apiservice) {
    gu.MgetUser().subscribe({
      next:(res:any) => {
        this.custs = res;
        console.log(res);
      },
      error : (err) => {
        console.error("Error fetching customers",err);
      }
    })
  }

}
