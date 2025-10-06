import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Staffportal } from "./staffportal";
import { Smanagecustomer } from "./smanagecustomer/smanagecustomer";
import { Screatecust } from "./smanagecustomer/screatecust/screatecust";
import { Supdatecust } from "./smanagecustomer/supdatecust/supdatecust";
import { Sfetchcust } from "./smanagecustomer/sfetchcust/sfetchcust";
import { Sdeletecust } from "./smanagecustomer/sdeletecust/sdeletecust";
import { Smanageaccounts } from "./smanageaccounts/smanageaccounts";
import { Screateacc } from "./smanageaccounts/screateacc/screateacc";
import { Sfetchacc } from "./smanageaccounts/sfetchacc/sfetchacc";
import { Supdateacc } from "./smanageaccounts/supdateacc/supdateacc";
import { Smanagetransacs } from "./smanagetransacs/smanagetransacs";
import { Fetchtransacs } from "./smanagetransacs/fetchtransacs/fetchtransacs";
import { Sfetchtransacn } from "./smanagetransacs/sfetchtransacn/sfetchtransacn";
import { Screatetransacs } from "./smanagetransacs/screatetransacs/screatetransacs";
import { Screatetranfers } from "./smanagetransacs/screatetranfers/screatetranfers";
import { Sdeletetransacs } from "./smanagetransacs/sdeletetransacs/sdeletetransacs";

const routes:Routes = [
    {path:'',component:Staffportal,
        children:[
            {path:'home',component:Staffportal},
            {path:'customers',component:Smanagecustomer},
            {path:'customers/add',component:Screatecust},
            {path:'customers/update',component:Supdatecust},
            {path:'customers/fetchcust',component:Sfetchcust},
            {path:'customers/delete',component:Sdeletecust},
            {path:'account',component:Smanageaccounts},
            {path:'account/create',component:Screateacc},
            {path:'account/fetch',component:Sfetchacc},
            {path:'account/update',component:Supdateacc},
            {path:'transactions',component:Smanagetransacs},
            {path:'transactions/getall',component:Fetchtransacs},
            {path:'transactions/fetch',component:Sfetchtransacn},
            {path:'transactions/createtransac',component:Screatetransacs},
            {path:'transactions/createtransfer',component:Screatetranfers},
            {path:'transactions/delete',component:Sdeletetransacs}
        ]
    }
]
@NgModule({
    declarations:[],
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class StaffRoutingModule{}