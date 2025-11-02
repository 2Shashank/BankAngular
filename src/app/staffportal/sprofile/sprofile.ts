import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'bbb-sprofile',
  standalone: false,
  templateUrl: './sprofile.html',
  styleUrl: './sprofile.css'
})
export class Sprofile {
  isEditing: boolean = false;
  showPasswordForm: boolean = false;
  User:any;
  passwordData = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  // User: any = {
  //   empId: 100000,
  //   empName: 'Shashank',
  //   empRole: 'Staff',
  //   empMobile: '6965845353',
  //   empEmail: 'shashank.staff@bugb.com',
  //   branchId: 1,
  //   branchName: 'KPMG',
  //   bAddress: 'Eco World',
  // };
  constructor(private api: Apiservice, private toast:ToastService) {
      
    }
    ngOnInit(){
      this.getProfile();
    }
    getProfile(){
      this.api.getStaffProfile().subscribe({
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
    this.passwordData = { oldPassword: '', newPassword: '', confirmPassword: '' };
  }

  updatePassword() {
    const { oldPassword, newPassword, confirmPassword } = this.passwordData;

    if (!oldPassword || !newPassword || !confirmPassword) {
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
    this.api.SUpdatePass(this.passwordData).subscribe({
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
