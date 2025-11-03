import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Managerportal } from './managerportal/managerportal';
import { Managerhome } from './managerportal/managerhome/managerhome';
import { Createuser } from './managerportal/managecustomer/createuser/createuser';
import { Managecustomer } from './managerportal/managecustomer/managecustomer';
import { Manageaccounts } from './managerportal/manageaccounts/manageaccounts';
import { Createaccount } from './managerportal/manageaccounts/createaccount/createaccount';
import { Fetchaccount } from './managerportal/manageaccounts/fetchaccounts/fetchaccounts';
import { Updateaccount } from './managerportal/manageaccounts/updateaccount/updateaccount';
import { Updatecust } from './managerportal/managecustomer/updatecust/updatecust';
import { Deletecustomer } from './managerportal/managecustomer/deletecustomer/deletecustomer';
import { Getcusts } from './managerportal/managecustomer/getcusts/getcusts';
import { Fetchcustomer } from './managerportal/managecustomer/fetchcustomer/fetchcustomer';
import { Mmanageemp } from './managerportal/mmanageemp/manageemp';
import { Getallemps } from './managerportal/mmanageemp/getallemps/getallemps';
import { Fetchemp } from './managerportal/mmanageemp/fetchemp/fetchemp';
import { Managetransactions } from './managerportal/managetransactions/managetransactions';
import { Mcreatetransfer } from './managerportal/managetransactions/mcreatetransfer/mcreatetransfer';
import { Mcreatetransac } from './managerportal/managetransactions/mcreatetransac/mcreatetransac';
import { Mfetchtransac } from './managerportal/managetransactions/mfetchtransac/mfetchtransac';
import { Mgettransacs } from './managerportal/managetransactions/mgettransacs/mgettransacs';
import { Mdeletetransac } from './managerportal/managetransactions/mdeletetransac/mdeletetransac';
import { Mprofile } from './managerportal/mprofile/mprofile';
import { Mpnf } from './managerportal/mpnf/mpnf';
import { Mbin } from './managerportal/mbin/mbin';

const routes: Routes = [
  {path:'',component:Managerportal,
    children:[
    {path:'home',component:Managerhome},
    {path:'customers',component:Managecustomer},
    {path:'accounts',component:Manageaccounts},
    {path:'employees',component:Mmanageemp},
    // {path:'customers/add',component:Createuser},
    // {path:'customers/update',component:Updatecust},
    // {path:'customers/delete',component:Deletecustomer},
    // {path:'customers/getall',component:Getcusts},
    // {path:'customers/fetchcust',component:Fetchcustomer},
    // {path:'accounts/create',component:Createaccount},
    // {path:'accounts/get',component:Fetchaccount},
    // {path:'accounts/update',component:Updateaccount},
    // {path:'employees/getemps',component:Getallemps},
    // {path:'employees/fetchemp',component:Fetchemp},
    {path:'transactions',component:Managetransactions},
    // {path:'transactions/createtransfer',component:Mcreatetransfer},
    // {path:'transactions/createtransac',component:Mcreatetransac},
    // {path:'transactions/fetch',component:Mfetchtransac},
    // {path:'transactions/getall',component:Mgettransacs},
    // {path:'transactions/delete',component:Mdeletetransac},
    {path:'profile',component:Mprofile},
    {path:'bin',component:Mbin},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',component:Mpnf}
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
