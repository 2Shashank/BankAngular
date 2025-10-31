import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Customerportal } from '../customerportal';
import { Chome } from '../chome/chome';
import { Cprofile } from '../cprofile/cprofile';
import { Caccount } from '../caccount/caccount';
import { Ctransacs } from '../ctransacs/ctransacs';
import { Cfunds } from '../cfunds/cfunds';
import { Cfutransac } from '../cfutransac/cfutransac';
import { Cfcreate } from '../cfutransac/cfcreate/cfcreate';

const routes: Routes = [
  {path:'',component:Customerportal,
    children:[
      {path:'home',component:Chome},
      {path:'profile',component:Cprofile},
      {path:'account',component:Caccount},
      {path:'transactions',component:Ctransacs},
      {path:'fund',component:Cfunds},
      {path:'scheduletransaction',component:Cfutransac},
      {path:'scheduletransaction/create',component:Cfcreate},
      {path:'',redirectTo:'home',pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustRoutingModule { }
