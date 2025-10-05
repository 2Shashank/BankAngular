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
import { Createuser } from './managerportal/createuser/createuser';
import { Createtransac } from './managerportal/createtransac/createtransac';
import { Managebranch } from './adminportal/managebranch/managebranch';
import { Manageemp } from './adminportal/manageemp/manageemp';
import { Fetchemps } from './adminportal/manageemp/fetchemps/fetchemps';
import { Fetchbranches } from './adminportal/managebranch/fetchbranches/fetchbranches';
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
    Createtransac,
    Managebranch,
    Manageemp,
    Fetchemps,
    Fetchbranches
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
