import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Adminportal } from '../adminportal/adminportal';
import { Adminhome } from '../adminportal/adminhome/adminhome';
import { Managebranch } from '../adminportal/managebranch/managebranch';
import { AdminbranchRouteModule } from './adminbranchroute-module';
import { Addbranch } from '../adminportal/managebranch/addbranch/addbranch';
import { Manageemp } from '../adminportal/manageemp/manageemp';
import { Addemp } from '../adminportal/manageemp/addemp/addemp';
import { Fetchemps } from '../adminportal/manageemp/fetchemps/fetchemps';
import { Fetchbranches } from '../adminportal/managebranch/fetchbranches/fetchbranches';
import { Updatebranch } from '../adminportal/managebranch/updatebranch/updatebranch';
import { Aupdateemp } from '../adminportal/manageemp/aupdateemp/aupdateemp';
import { Fetchempbyid } from '../adminportal/manageemp/fetchempbyid/fetchempbyid';
import { Adeleteemp } from '../adminportal/manageemp/adeleteemp/adeleteemp';

const routes: Routes = [
  {path:'',component:Adminportal,
    children:[
      {path:'home',component:Adminhome},
      {path:'branch',component:Managebranch},
      {path:'emp',component:Manageemp},
      {path:'branch/addbranch',component:Addbranch},
      {path:'branch/getbranches',component:Fetchbranches},
      {path:'branch/updatebranch',component:Updatebranch},
      {path:'emp/addemp',component:Addemp},
      {path:'emp/getemps',component:Fetchemps},
      {path:'emp/getempbyid',component:Fetchempbyid},
      {path:'emp/updateemp',component:Aupdateemp},
      {path:'emp/deleteemp',component:Adeleteemp},
      {path:'',redirectTo:'home',pathMatch:'full'}


    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class AdminrouteModule { }
