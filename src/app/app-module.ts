import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './login/login';
import { Home } from './home/home';
import { Adminportal } from './adminportal/adminportal';
import { FormsModule, NgForm } from '@angular/forms';
import { Addbranch } from './adminportal/managebranch/addbranch/addbranch';
import { Adminhome } from './adminportal/adminhome/adminhome';
import { Addemp } from './adminportal/manageemp/addemp/addemp';
import { Managerportal } from './managerportal/managerportal';
import { Managerhome } from './managerportal/managerhome/managerhome';
import { Createuser } from './managerportal/managecustomer/createuser/createuser';
// import { Createtransac } from './managerportal/createtransac/createtransac';
import { Managebranch } from './adminportal/managebranch/managebranch';
import { Manageemp } from './adminportal/manageemp/manageemp';
import { Fetchemps } from './adminportal/manageemp/fetchemps/fetchemps';
import { Fetchbranches } from './adminportal/managebranch/fetchbranches/fetchbranches';
import { Managecustomer } from './managerportal/managecustomer/managecustomer';
import { Manageaccounts } from './managerportal/manageaccounts/manageaccounts';
import { Createaccount } from './managerportal/manageaccounts/createaccount/createaccount';
import { Updateaccount } from './managerportal/manageaccounts/updateaccount/updateaccount';
import { Fetchaccount } from './managerportal/manageaccounts/fetchaccounts/fetchaccounts';
import { Updatecust } from './managerportal/managecustomer/updatecust/updatecust';
import { Getcusts } from './managerportal/managecustomer/getcusts/getcusts';
import { Fetchcustomer } from './managerportal/managecustomer/fetchcustomer/fetchcustomer';
import { Deletecustomer } from './managerportal/managecustomer/deletecustomer/deletecustomer';
import { Getallemps } from './managerportal/manageemp/getallemps/getallemps';
import { Fetchemp } from './managerportal/manageemp/fetchemp/fetchemp';
import { Staffportal } from './staffportal/staffportal';
import { Smanageaccounts } from './staffportal/smanageaccounts/smanageaccounts';
import { Smanagetransacs } from './staffportal/smanagetransacs/smanagetransacs';
import { Screatecust } from './staffportal/smanagecustomer/screatecust/screatecust';
import { Sfetchcust } from './staffportal/smanagecustomer/sfetchcust/sfetchcust';
import { Supdatecust } from './staffportal/smanagecustomer/supdatecust/supdatecust';
import { Sdeletecust } from './staffportal/smanagecustomer/sdeletecust/sdeletecust';
import { Smanagecustomer } from './staffportal/smanagecustomer/smanagecustomer';
import { provideHttpClient } from '@angular/common/http';
import { Updatebranch } from './adminportal/managebranch/updatebranch/updatebranch';


// import { Adminhome } from './adminhome/adminhome';

@NgModule({
  declarations: [
    App,
    Login,
    Home,
    Adminportal,
    Addbranch,
    Adminhome,
    Addemp,
    Managerportal,
    Managerhome,
    Createuser,
    Managebranch,
    Manageemp,
    Fetchemps,
    Fetchbranches,
    Managecustomer,
    Manageaccounts,
    Createaccount,
    Updateaccount,
    Fetchaccount,
    Updatecust,
    Getcusts,
    Fetchcustomer,
    Deletecustomer,
    Manageemp,
    Getallemps,
    Fetchemp,
    Staffportal,
    Smanageaccounts,
    Smanagetransacs,
    Smanagecustomer,
    Screatecust,
    Sfetchcust,
    Supdatecust,
    Sdeletecust,
    Updatebranch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
