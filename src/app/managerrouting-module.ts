import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Managerportal } from './managerportal/managerportal';
import { Managerhome } from './managerportal/managerhome/managerhome';
import { Createuser } from './managerportal/createuser/createuser';
import { Createtransac } from './managerportal/createtransac/createtransac';

const routes: Routes = [
  {path:'',component:Managerportal,
    children:[
    {path:'mhome',component:Managerhome},
    {path:'adduser',component:Createuser},
    {path:'createtransac',component:Createtransac}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]

})
export class ManagerroutingModule { }
