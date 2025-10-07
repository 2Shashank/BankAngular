import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Apiservice {
  url = 'https://localhost:7260/api';
  constructor(private http :HttpClient){}
  getBranches(){
    return this.http.get(`${this.url}/Admin/GetAllBranches`,{ withCredentials: true });
  }
  verifyLogin(data:any){
    return this.http.post(`${this.url}/Login`,data,{ withCredentials: true });
  }
  logout(){
    return this.http.post(`${this.url}/Login/Logout`,{},{ withCredentials: true,responseType:'text' });
  }
  addBranch(data:any){
    return this.http.post(`${this.url}/Admin/BranchRegister`,data,{withCredentials : true,responseType:'text'});
  }
  // updateBranch(data:string){
  //   return this.http.put(``)
  // }
  listEmp(BranchId:any){
    return this.http.get(`${this.url}/Admin/GetStaffByBranchId/${BranchId}`,{withCredentials:true});
  }
  addEmp(data:any){
    return this.http.post(`${this.url}/Admin/AddStaff`,data,{withCredentials:true,responseType:'text'});
  }


  MgetEmp(){
    return this.http.get(`${this.url}/Manager/GetAllStaff`,{withCredentials:true});
  }
  MgetEmpById(empId:any){
    return this.http.get(`${this.url}/Manager/GetStaffByID/${empId}`,{withCredentials:true});
  }
  Mcreateacc(data:any){
    return this.http.post(`${this.url}/Manager/CreateAccount`,data,{withCredentials:true,responseType:'text'});
  }
  MgetAcc(accno:any){
    return this.http.get(`${this.url}/Manager/Accounts/${accno}`,{withCredentials:true});
  }
  MgetUser(){
    return this.http.get(`${this.url}/Manager/Users`,{withCredentials:true});
  }
  MgetUserByID(userId:any){
    return this.http.get(`${this.url}/Manager/Users/${userId}`,{withCredentials:true});
  }
  MaddUser(data:any){
    return this.http.post(`${this.url}/Manager/AddUser`,data,{withCredentials:true,responseType:'text'});
  }
  MupdateUser(Id:any,data:any){
    return this.http.put(`${this.url}/Manager/UpdateUser/${Id}`,data,{withCredentials:true,responseType:'text'});
  }
  MdeleteUser(Id:any){
    return this.http.delete(`${this.url}/Manager/DeleteUser/${Id}`,{withCredentials:true,responseType:'text'});
  }
  MgetTransofAcc(accno:any){
    return this.http.get(`${this.url}/Manager/Transactions?accNo=${accno}`,{withCredentials:true});
  }
  MgetTransByID(tansId:any){
    return this.http.get(`${this.url}/Manager/Transactions/${tansId}`,{withCredentials:true});
  }
  MdoTransCreditorDebit(data:any){
    return this.http.post(`${this.url}/Manager/Transactions/CreditOrDebit`,data,{withCredentials:true,responseType:'text'});
  }
  MdoTransTransfer(data:any){
    return this.http.post(`${this.url}/Manager/Transactions/Tranfer`,data,{withCredentials:true,responseType:'text'});
  }
  MdeleteFailTrans(tansId:any){
    return this.http.delete(`${this.url}/Manager/Transactions/${tansId}`,{withCredentials:true,responseType:'text'});
  }


  Screateacc(data:any){
    return this.http.post(`${this.url}/Staff/CreateAccount`,data,{withCredentials:true,responseType:'text'});
  }
  SgetAcc(accno:any){
    return this.http.get(`${this.url}/Staff/Accounts/${accno}`,{withCredentials:true});
  }
  SgetUser(){
    return this.http.get(`${this.url}/Staff/Users`,{withCredentials:true});
  }
  SgetUserByID(userId:any){
    return this.http.get(`${this.url}/Staff/Users/${userId}`,{withCredentials:true});
  }
  SaddUser(data:any){
    return this.http.post(`${this.url}/Staff/AddUser`,data,{withCredentials:true,responseType:'text'});
  }
  SupdateUser(Id:any,data:any){
    return this.http.put(`${this.url}/Staff/UpdateUser/${Id}`,data,{withCredentials:true,responseType:'text'});
  }
  SdeleteUser(Id:any){
    return this.http.delete(`${this.url}/Staff/DeleteUser/${Id}`,{withCredentials:true,responseType:'text'});
  }
  SgetTransofAcc(accno:any){
    return this.http.get(`${this.url}/Staff/Transactions?accNo=${accno}`,{withCredentials:true});
  }
  SgetTransByID(tansId:any){
    return this.http.get(`${this.url}/Staff/Transactions/${tansId}`,{withCredentials:true});
  }
  SdoTransCreditorDebit(data:any){
    return this.http.post(`${this.url}/Staff/Transactions/CreditOrDebit`,data,{withCredentials:true,responseType:'text'});
  }
  SdoTransTransfer(data:any){
    return this.http.post(`${this.url}/Staff/Transactions/Tranfer`,data,{withCredentials:true,responseType:'text'});
  }
  SdeleteFailTrans(tansId:any){
    return this.http.delete(`${this.url}/Staff/Transactions/${tansId}`,{withCredentials:true,responseType:'text'});
  }
}
