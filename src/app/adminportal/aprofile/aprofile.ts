import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { ToastService } from '../../services/toast';
import { httpResource } from '@angular/common/http';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'bbb-aprofile',
  standalone: false,
  templateUrl: './aprofile.html',
  styleUrl: './aprofile.css',
})
export class Aprofile {
  isEditing: boolean = false;
  showPasswordForm: boolean = false;
  User:any;
  constructor(private api: Apiservice,private toast: ToastService) {
    
  }
  ngOnInit(){
    this.getProfile();
  }
  getProfile(){
    this.api.getAdminProfile().subscribe({
      next:(res :any) =>{
        this.User = res;
      },
      error : (err) => {
        console.error("Error getting profile",err);
        this.toast.show(err.error?.message || "Error fetching Profile",'danger');
      }
    })
  }
  passwordData = {
    previousPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  // User: any = {
  //   empId: 100000,
  //   empName: 'Sam',
  //   empRole: 'BankAdmin',
  //   empMobile: '6965845353',
  //   empEmail: 'sam.admin@bugb.com',
  //   branchId: 1,
  //   branchName: 'KPMG',
  //   bAddress: 'Eco World',
  // };

  editProfile() {
    this.isEditing = true;
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
    
    this.api.updateAdminPass(this.passwordData).subscribe({
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
  }
}
