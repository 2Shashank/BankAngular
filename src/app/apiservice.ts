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

  getAdminProfile(){
    return this.http.get(`${this.url}/Admin/GetProfile`);
  }
  updateAdminPass(data:any){
    return this.http.patch(`${this.url}/Admin/UpdateLoginPassword`,data);
  }

  addBranch(data: any) {
    return this.http.post(`${this.url}/Admin/BranchRegister`, data);
  }
  gerBr(branchId: any) {
    return this.http.get(`${this.url}/Admin/GetBranchById/${branchId}`);
  }
  getBranches() {
    return this.http.get(`${this.url}/Admin/GetAllBranches`);
  }
  updateBranch(branchId: any, data: any) {
    return this.http.put(`${this.url}/Admin/UpdateBranch/${branchId}`, data);
  }
  addEmp(data: any) {
    return this.http.post(`${this.url}/Admin/AddStaff`, data);
  }
  updateEmp(id: any, data: any) {
    return this.http.put(`${this.url}/Admin/UpdateStaff/${id}`, data);
  }
  deleteEmp(id: any) {
    return this.http.patch(`${this.url}/Admin/RemoveStaff/${id}`,{});
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
  interestsForFd(){
    return this.http.put(`${this.url}/Admin/ApplyFDInterest`,{});
  }
  interestsForSavings(){
    return this.http.put(`${this.url}/Admin/ApplySavingsInterest`,{});
  }
  /// Admin services ends ///

  /// Manager services starts ///
  getManagerProfile(){
    return this.http.get(`${this.url}/Manager/GetProfile`);
  }
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
    return this.http.post(`${this.url}/Manager/AddUser`, data);
  }
  MupdateUser(Id: any, data: any) {
    return this.http.put(`${this.url}/Manager/UpdateUser/${Id}`, data);
  }
  MdeleteUser(Id: any) {
    return this.http.put(`${this.url}/Manager/DeleteUser/${Id}`,{});
  }
  MgetTransofAcc(accno: any) {
    return this.http.get(`${this.url}/Manager/Transactions?accNo=${accno}`);
  }
  MgetTransByID(tansId: any) {
    return this.http.get(`${this.url}/Manager/Transactions/${tansId}`);
  }
  MdoTransCreditorDebit(data: any) {
    return this.http.post(`${this.url}/Manager/Transactions/CreditOrDebit`, data);
  }
  MdoTransTransfer(data: any) {
    return this.http.post(`${this.url}/Manager/Transactions/Transfer`, data);
  }
  MgetAccountsbyBranch() {
    return this.http.get(`${this.url}/Manager/AccountsByBranch`);
  }
  MgetAcc(accno: any) {
    return this.http.get(`${this.url}/Manager/Accounts/${accno}`);
  }
  MupdateAcc(accNo:any,status:any){
    return this.http.patch(`${this.url}/Manager/UpdateAccountStatus/${accNo}`,status);
  }
  Mcreateacc(data: any) {
    return this.http.post(`${this.url}/Manager/CreateAccount`, data);
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
  getStaffProfile(){
    return this.http.get(`${this.url}/Staff/GetProfile`);
  }
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
    return this.http.post(`${this.url}/Staff/AddUser`, data);
  }
  SupdateUser(Id: any, data: any) {
    return this.http.put(`${this.url}/Staff/UpdateUser/${Id}`, data);
  }
  SdeleteUser(Id: any) {
    return this.http.delete(`${this.url}/Staff/DeleteUser/${Id}`);
  }

  SgetTransofAcc(accno: any) {
    return this.http.get(`${this.url}/Staff/Transactions?accNo=${accno}`);
  }
  SgetTransByID(tansId: any) {
    return this.http.get(`${this.url}/Staff/Transactions/${tansId}`);
  }

  SdoTransCreditorDebit(data: any) {
    return this.http.post(`${this.url}/Staff/Transactions/CreditOrDebit`, data);
  }
  SdoTransTransfer(data: any) {
    return this.http.post(`${this.url}/Staff/Transactions/Transfer`, data);
  }
  SgetAcc(accno: any) {
      return this.http.get(`${this.url}/Staff/Accounts/${accno}`);
    }
  Screateacc(data: any) {
    return this.http.post(`${this.url}/Staff/CreateAccount`, data);
  }
  SGetAccsByBranch(){
    return this.http.get(`${this.url}/Staff/AccountsByBranch`);
  }
  SupdateAcc(userId:any,status:any){
    return this.http.patch(`${this.url}/Staff/UpdateAccountStatus/${userId}`,status);
  }

  /// Staff services starts ///

  CGetCustInfo(){
    return this.http.get(`${this.url}/Customer/GetProfile`);
  }
  CUpdateLgPass(password:any){
    return this.http.patch(`${this.url}/Customer/UpdateLoginPassword`,password);
  }
  CUpdatetxnPass(password:any){
    return this.http.patch(`${this.url}/Customer/UpdateTransacPassword`,password)
  }
  CGetAccounts(){
    return this.http.get(`${this.url}/Customer/GetYourAccounts`);
  }
  CTxnHistory(){
    return this.http.get(`${this.url}/Customer/GetTransactionHistory`);
  }
  CTransfer(data:any){
    return this.http.post(`${this.url}/Customer/Transactions/Transfer`,data)
  }
  CScheduleTransaction(data:any){
    return this.http.post(`${this.url}/Customer/ScheduleTransaction`,data);
  }
  CGetScheduledTransactions(){
    return this.http.get(`${this.url}/Customer/ScheduledTransactions`)
  }
  CCancelSchTxn(txId:any ,update:any){
    return this.http.patch(`${this.url}/Customer/CancelScheduledTransaction/${txId}`,update);
  }

  newRegister(data:any){
    return this.http.post(`${this.url}/Register/RegisterUser`,data);
  }
}
