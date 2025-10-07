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
  getBr(branchId:any){
    return this.http.get(`${this.url}/Admin/GetBranchById/${branchId}`,{withCredentials:true})
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
    return this.http.get(`${this.url}/Manager/GetStaffByID/${empId}`,{withCredentials:true})
  }
  Mcreateacc(data:any){
    return this.http.post(`${this.url}/Manager/CreateAccount`,data,{withCredentials:true,responseType:'text'})
  }
  MgetAcc(accno:any){
    return this.http.get(`${this.url}/Manager/Accounts/${accno}`,{withCredentials:true})
  }
  
}
