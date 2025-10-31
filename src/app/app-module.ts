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
import { Getallemps } from './managerportal/mmanageemp/getallemps/getallemps';
import { Fetchemp } from './managerportal/mmanageemp/fetchemp/fetchemp';
import { Staffportal } from './staffportal/staffportal';
import { Smanageaccounts } from './staffportal/smanageaccounts/smanageaccounts';
import { Smanagetransacs } from './staffportal/smanagetransacs/smanagetransacs';
import { Screatecust } from './staffportal/smanagecustomer/screatecust/screatecust';
import { Sfetchcust } from './staffportal/smanagecustomer/sfetchcust/sfetchcust';
import { Supdatecust } from './staffportal/smanagecustomer/supdatecust/supdatecust';
import { Sdeletecust } from './staffportal/smanagecustomer/sdeletecust/sdeletecust';
import { Smanagecustomer } from './staffportal/smanagecustomer/smanagecustomer';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { Updatebranch } from './adminportal/managebranch/updatebranch/updatebranch';
import { Mgettransacs } from './managerportal/managetransactions/mgettransacs/mgettransacs';
import { Mfetchtransac } from './managerportal/managetransactions/mfetchtransac/mfetchtransac';
import { Mcreatetransac } from './managerportal/managetransactions/mcreatetransac/mcreatetransac';
import { Mcreatetransfer } from './managerportal/managetransactions/mcreatetransfer/mcreatetransfer';
import { Screateacc } from './staffportal/smanageaccounts/screateacc/screateacc';
import { Sfetchacc } from './staffportal/smanageaccounts/sfetchacc/sfetchacc';
import { Screatetranfers } from './staffportal/smanagetransacs/screatetranfers/screatetranfers';
import { Screatetransacs } from './staffportal/smanagetransacs/screatetransacs/screatetransacs';
import { Fetchtransacs } from './staffportal/smanagetransacs/fetchtransacs/fetchtransacs';
import { Sfetchtransacn } from './staffportal/smanagetransacs/sfetchtransacn/sfetchtransacn';
import { Fetchempbyid } from './adminportal/manageemp/fetchempbyid/fetchempbyid';
import { Aupdateemp } from './adminportal/manageemp/aupdateemp/aupdateemp';
import { Adeleteemp } from './adminportal/manageemp/adeleteemp/adeleteemp';
import { Staffhome } from './staffportal/staffhome/staffhome';
import { FilterPipe } from './filter-pipe';
import { Mmanageemp } from './managerportal/mmanageemp/manageemp';
import { Managetransactions } from './managerportal/managetransactions/managetransactions';
import { Customerportal } from './customerportal/customerportal';
import { Chome } from './customerportal/chome/chome';
import { Cprofile } from './customerportal/cprofile/cprofile';
import { Caccount } from './customerportal/caccount/caccount';
import { Ctransacs } from './customerportal/ctransacs/ctransacs';
import { Cfunds } from './customerportal/cfunds/cfunds';
import { authInterceptor } from './services/auth-interceptor';
import { Cfutransac } from './customerportal/cfutransac/cfutransac';
import { Cfcreate } from './customerportal/cfutransac/cfcreate/cfcreate';


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
    Fetchempbyid,
    Aupdateemp,
    Adeleteemp,
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
    Mmanageemp,
    Managetransactions,
    Getallemps,
    Fetchemp,
    Staffportal,
    Staffhome,
    Smanageaccounts,
    Smanagetransacs,
    Smanagecustomer,
    Screatecust,
    Sfetchcust,
    Supdatecust,
    Sdeletecust,
    Updatebranch,
    Mgettransacs,
    Mfetchtransac,
    Mcreatetransac,
    Mcreatetransfer,
    Screateacc,
    Sfetchacc,
    Screatetranfers,
    Screatetransacs,
    Fetchtransacs,
    Sfetchtransacn,
    FilterPipe,
    Customerportal,
    Chome,
    Cprofile,
    Caccount,
    Ctransacs,
    Cfunds,
    Cfutransac,
    Cfcreate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
  bootstrap: [App]
})
export class AppModule { }
