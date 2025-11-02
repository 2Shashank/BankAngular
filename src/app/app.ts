import { Component, OnInit, signal } from '@angular/core';
import { ToastService } from './services/toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App{
  constructor(public toastService: ToastService) {
    
  }
  
}
