import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { authguardGuard } from './authguard-guard';
import { Customerportal } from './customerportal/customerportal';
import { Custlogin } from './login/custlogin/custlogin';

const routes: Routes = [
  {path:'home',component:Home},
  {path:'login',component:Login},
  {path:'custlogin',component:Custlogin},
  {path:'customer',loadChildren:()=>import('./customerportal/cust/cust-routing-module').then(m => m.CustRoutingModule),canActivate:[authguardGuard]},
  {path:'admin',loadChildren:()=>import('./adminroute/adminroute-module').then(m => m.AdminrouteModule),canActivate:[authguardGuard]},
  {path:'manager',loadChildren:()=>import('./managerrouting-module').then(m => m.ManagerroutingModule),canActivate:[authguardGuard]},
  {path:'staff',loadChildren:() => import('./staffportal/staffrouting-module').then(m=>m.StaffRoutingModule),canActivate:[authguardGuard]},
  // {path:'customer',component:Customerportal},
  {path:'',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
