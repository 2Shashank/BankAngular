import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Adminportal } from './adminportal/adminportal';
import { Managerportal } from './managerportal/managerportal';
import { Staffportal } from './staffportal/staffportal';

const routes: Routes = [
  {path:'home',component:Home},
  {path:'login',component:Login},
  {path:'admin',loadChildren:()=>import('./adminroute/adminroute-module').then(m => m.AdminrouteModule)},
  {path:'manager',loadChildren:()=>import('./managerrouting-module').then(m => m.ManagerroutingModule)},
  {path:'staff',loadChildren:() => import('./staffportal/staffrouting-module').then(m=>m.StaffRoutingModule)},
  {path:'',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
