import { Component } from '@angular/core';

@Component({
  selector: 'bbb-aprofile',
  standalone: false,
  templateUrl: './aprofile.html',
  styleUrl: './aprofile.css',
})
export class Aprofile {
  isEditing: boolean = false;
  showPasswordForm: boolean = false;
  passwordData = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  User: any = {
    empId: 100000,
    empName: 'Sam',
    empRole: 'BankAdmin',
    empMobile: '6965845353',
    empEmail: 'sam.admin@bugb.com',
    branchId: 1,
    branchName: 'KPMG',
    bAddress: 'Eco World',
  };

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
    console.log('Password updated successfully:', this.passwordData);
    alert('Password updated successfully!');
    this.togglePasswordForm();
  }
}
