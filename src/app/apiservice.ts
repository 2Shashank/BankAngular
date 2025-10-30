import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  url = 'https://localhost:7260/api';
  constructor(private http: HttpClient) {}
  verifyLogin(data: any) {
    return this.http.post(`${this.url}/Login/Staff`, data);
  }
  logout() {
    return this.http.post(`${this.url}/Login/Logout`, {});
  }
  verifyCustLogin(data:any){
    return this.http.post(`${this.url}/Login/Customer`,data)
  }
  RegisterUser(data:any){
    return this.http.post(`${this.url}/Register/RegisterUser`,data);
  }
  /// Admin services starts ///

  addBranch(data: any) {
    return this.http.post(`${this.url}/Admin/BranchRegister`, data, {
      responseType: 'text',
    });
  }
  gerBr(branchId: any) {
    return this.http.get(`${this.url}/Admin/GetBranchById/${branchId}`);
  }
  getBranches() {
    return this.http.get(`${this.url}/Admin/GetAllBranches`);
  }
  updateBranch(branchId: any, data: any) {
    return this.http.put(`${this.url}/Admin/UpdateBranch/${branchId}`, data, {
      responseType: 'text',
    });
  }
  addEmp(data: any) {
    return this.http.post(`${this.url}/Admin/AddStaff`, data, {
      responseType: 'text',
    });
  }
  updateEmp(id: any, data: any) {
    return this.http.put(`${this.url}/Admin/UpdateStaff/${id}`, data, {
      responseType: 'text',
    });
  }
  deleteEmp(id: any) {
    return this.http.delete(`${this.url}/Admin/RemoveStaff/${id}`, {
      responseType: 'text',
    });
  }
  listAllEmp() {
    return this.http.get(`${this.url}/Admin/GetAllStaff`);
  }
  listEmp(BranchId: any) {
    return this.http.get(`${this.url}/Admin/GetStaffByBranchId/${BranchId}`);
  }
  getEmpById(id: any) {
    return this.http.get(`${this.url}/Admin/GetStaffByID/${id}`);
  }
  getDeletedEmp() {
    return this.http.get(`${this.url}/Admin/GetDeletedStaff`);
  }
  permanentlyDeleteEmp(userId: any) {
    return this.http.delete(`${this.url}/Admin/PermanantDeleteStaff/${userId}`);
  }
  /// Admin services ends ///

  /// Manager services starts ///
  updateEmpPass(data: any) {
    return this.http.patch(`${this.url}/Manager/UpdateLoginPassword`, data);
  }
  MgetUser() {
    return this.http.get(`${this.url}/Manager/Users`);
  }
  MgetUserByID(userId: any) {
    return this.http.get(`${this.url}/Manager/Users/${userId}`);
  }
  MaddUser(data: any) {
    return this.http.post(`${this.url}/Manager/AddUser`, data, {
      responseType: 'text',
    });
  }
  MupdateUser(Id: any, data: any) {
    return this.http.put(`${this.url}/Manager/UpdateUser/${Id}`, data, {
      responseType: 'text',
    });
  }
  MdeleteUser(Id: any) {
    return this.http.put(`${this.url}/Manager/DeleteUser/${Id}`, {
      responseType: 'text',
    });
  }
  MgetTransofAcc(accno: any) {
    return this.http.get(`${this.url}/Manager/Transactions?accNo=${accno}`);
  }
  MgetTransByID(tansId: any) {
    return this.http.get(`${this.url}/Manager/Transactions/${tansId}`);
  }
  MdoTransCreditorDebit(data: any) {
    return this.http.post(`${this.url}/Manager/Transactions/CreditOrDebit`, data, {
      responseType: 'text',
    });
  }
  MdoTransTransfer(data: any) {
    return this.http.post(`${this.url}/Manager/Transactions/Transfer`, data, {
      responseType: 'text',
    });
  }
  MgetAccountsbyBranch(branchId: any) {
    return this.http.get(`${this.url}/Manager/AccountsByBranch`);
  }
  MgetAcc(accno: any) {
    return this.http.get(`${this.url}/Manager/Accounts/${accno}`);
  }
  Mcreateacc(data: any) {
    return this.http.post(`${this.url}/Manager/CreateAccount`, data, {
      responseType: 'text',
    });
  }
  MgetEmp() {
    return this.http.get(`${this.url}/Manager/GetAllStaff`);
  }
  MgetEmpById(empId: any) {
    return this.http.get(`${this.url}/Manager/GetStaffByID/${empId}`);
  }
  MgetDeletedUsers(){
    return this.http.get(`${this.url}/Manager/GetDeletedUsers`);
  }
  MPermDelUser(userId:any){
    return this.http.delete(`${this.url}/Manager/PermanantDeleteUser/${userId}`);
  }
  /// Manager api's end ///

  /// Staff services starts ///
  SUpdatePass(data: any){
    return this.http.patch(`${this.url}/Staff/UpdateLoginPassword`,data);
  }
  SgetUser() {
    return this.http.get(`${this.url}/Staff/Users`);
  }
  SgetUserByID(userId: any) {
    return this.http.get(`${this.url}/Staff/Users/${userId}`);
  }
  SaddUser(data: any) {
    return this.http.post(`${this.url}/Staff/AddUser`, data, {
      responseType: 'text',
    });
  }
  SupdateUser(Id: any, data: any) {
    return this.http.put(`${this.url}/Staff/UpdateUser/${Id}`, data, {
      responseType: 'text',
    });
  }
  SdeleteUser(Id: any) {
    return this.http.delete(`${this.url}/Staff/DeleteUser/${Id}`, {
      responseType: 'text',
    });
  }

  SgetTransofAcc(accno: any) {
    return this.http.get(`${this.url}/Staff/Transactions?accNo=${accno}`);
  }
  SgetTransByID(tansId: any) {
    return this.http.get(`${this.url}/Staff/Transactions/${tansId}`);
  }

  SdoTransCreditorDebit(data: any) {
    return this.http.post(`${this.url}/Staff/Transactions/CreditOrDebit`, data, {
      responseType: 'text',
    });
  }
  SdoTransTransfer(data: any) {
    return this.http.post(`${this.url}/Staff/Transactions/Transfer`, data, {
      responseType: 'text',
    });
  }
  SgetAcc(accno: any) {
      return this.http.get(`${this.url}/Staff/Accounts/${accno}`);
    }
  Screateacc(data: any) {
    return this.http.post(`${this.url}/Staff/CreateAccount`, data, {
      responseType: 'text',
    });
  }
  SGetAccsByBranch(){
    return this.http.get(`${this.url}/Staff/AccountsByBranch`);
  }

  /// Staff services starts ///
}
