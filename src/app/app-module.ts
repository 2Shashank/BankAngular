import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './login/login';
import { Home } from './home/home';
import { Adminportal } from './adminportal/adminportal';
import { FormsModule, NgForm } from '@angular/forms';
import { Addbranch } from './adminportal/addbranch/addbranch';
import { Adminhome } from './adminportal/adminhome/adminhome';
import { Addemp } from './adminportal/addemp/addemp';
import { Adduser } from './adminportal/adduser/adduser';
import { Managerportal } from './managerportal/managerportal';
import { Managerhome } from './managerportal/managerhome/managerhome';
import { Createuser } from './managerportal/createuser/createuser';
import { Createtransac } from './managerportal/createtransac/createtransac';
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
    Adduser,
    Managerportal,
    Managerhome,
    Createuser,
    Createtransac,
    // Adminhome
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
