import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { ToastService } from '../../services/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'bbb-interests',
  standalone: false,
  templateUrl: './interests.html',
  styleUrl: './interests.css'
})
export class Interests implements OnInit {
  fdDisabled = false;
  saDisabled = false;

  constructor(private api:Apiservice,private toast:ToastService,private rou : Router) {
    
  }
  ngOnInit() {
    this.checkCooldowns();
  }
  private checkCooldowns() {
    const now = new Date().getTime();

    const fdNextAllowed = localStorage.getItem('fdNextAllowed');
    const saNextAllowed = localStorage.getItem('saNextAllowed');

    if (fdNextAllowed && now < +fdNextAllowed) this.fdDisabled = true;
    if (saNextAllowed && now < +saNextAllowed) this.saDisabled = true;
  }
  addInterestForFD(){
    console.log("Clicked");
    this.api.interestsForFd().subscribe({
      next:(res:any) => {
        console.log(res);
        this.setCooldown('fdNextAllowed');
        this.rou.navigate(['admin/home']);
        this.toast.show(res.message ,'success');
      },
      error : (err) => {
        console.error("Error to apply fd interest",err);
        this.toast.show(err.error?.message,'danger')
      }
    });
  }
  addInterestsForSa(){
    console.log("Clicked");
    this.api.interestsForSavings().subscribe({
      next:(res:any) => {
        console.log(res);
        this.setCooldown('saNextAllowed');
        this.rou.navigate(['admin/home']);
        this.toast.show(res.message ,'success');
      },
      error : (err) => {
        console.error("Error to apply fd interest",err);
        this.toast.show(err.error?.message,'danger')
      }
    });
  }
  private setCooldown(key: string) {
    const cooldownDays = 60; // you can change this
    const nextAllowedTime = new Date().getTime() + cooldownDays * 24 * 60 * 60 * 1000;
    localStorage.setItem(key, nextAllowedTime.toString());
  }
}
