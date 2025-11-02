import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'bbb-mprofile',
  standalone: false,
  templateUrl: './mprofile.html',
  styleUrl: './mprofile.css',
})
export class Mprofile {
  isEditing: boolean = false;
  showPasswordForm: boolean = false;
  User:any;
  passwordData = {
    previousPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  constructor(private api: Apiservice, private toast:ToastService) {
    
  }
  ngOnInit(){
    this.getProfile();
  }
  getProfile(){
    this.api.getManagerProfile().subscribe({
      next: (res) => {
        console.log(res);
        this.User = res;
      },
      error: (err) => {
        console.error("Something went wrong",err);
        this.toast.show(err.error?.message || "Something went wrong", 'danger');
      }
    })
  }
  


  editProfile() {
    this.isEditing = false;
  }

  saveProfile() {
    this.isEditing = false;
    console.log('Profile saved:', this.User);
    alert('Profile details updated successfully!');
  }

  cancelEdit() {
    this.isEditing = false;
  }

  togglePasswordForm() {
    this.showPasswordForm = !this.showPasswordForm;
    this.passwordData = { previousPassword: '', newPassword: '', confirmPassword: '' };
  }

  updatePassword() {
    const { previousPassword, newPassword, confirmPassword } = this.passwordData;

    if (!previousPassword || !newPassword || !confirmPassword) {
      alert('Please fill all password fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('New and Confirm Password do not match!');
      return;
    }

    // TODO: call API here later
    // console.log('Password updated successfully:', this.passwordData);
    // alert('Password updated successfully!');
    this.api.updateEmpPass(this.passwordData).subscribe({
      next: (res:any) => {
        console.log(res);
        this.toast.show( res.message || 'Password Updated successfully','success');
        this.togglePasswordForm();
      },
      error: (err) => {
        console.error("Error occured",err);
        this.toast.show(err.error?.message || "Some error occured",'danger');
      }
    })
    this.togglePasswordForm();
  }
}
