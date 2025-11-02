import { Component, OnInit } from '@angular/core';
import { ToastMessage, ToastService } from '../services/toast';

@Component({
  selector: 'bbb-toast',
  standalone: false,
  templateUrl: './toast.html',
  styleUrl: './toast.css'
})
export class Toast implements OnInit {

  message: ToastMessage | null = null;
  visible = false;
  timeoutHandle: any;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.toast$.subscribe((msg) => {
      if (msg) {
        this.message = msg;
        this.visible = true;

        // Auto hide after 3 seconds
        clearTimeout(this.timeoutHandle);
        this.timeoutHandle = setTimeout(() => this.close(), 3000);
      }
    });
  }

  close() {
    this.visible = false;
    this.message = null;
  }
}
