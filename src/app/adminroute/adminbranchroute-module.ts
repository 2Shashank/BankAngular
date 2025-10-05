import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Managebranch } from "../adminportal/managebranch/managebranch";
import { Addbranch } from "../adminportal/managebranch/addbranch/addbranch";
import { AdminrouteModule } from "./adminroute-module";

const routes : Routes = [
    {path:'',component:Managebranch,
        children:[
            {path:'addbranch',component:Addbranch},
            {path:'updatebranch'},
            {path:'getbranches'},
            {path:'addemp'},
            {path:'updateemp'},
            {path:'deleteemp'},
            {path:'getemps'}
        ]
    },
    // {path:'addbranch',component:Addbranch}
]

@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AdminbranchRouteModule{}