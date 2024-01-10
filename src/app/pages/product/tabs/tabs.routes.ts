// // import { Routes } from "@angular/router";
// // import { TabsComponent } from "./tabs.component";

// import { Route, Routes } from "@angular/router";
// import { RegisterComponent } from "../register/register.component";
// import { routes } from "src/app/app.routes";
// import { TabsComponent } from "./tabs.component";
// // import { routes } from "src/app/app.routes";

// // // export const routes: Routes = [
// // // //   {
// // // //     path: "home",
// // // //     loadComponent: () => import("./home/home.page").then((m) => m.HomePage),
// // // //   },
// // //   {
// // //     path: "",
// // //     component:TabsComponent,
// // //     children:[
// // //         path:'register',
// // //      loadComponent: () => import("./").then((m) => m.HomePage),

// // //     ]
// // //     // loadComponent: () =>
// // //     //   import().then((m) => m.TabsComponent),
// // //   },
// // //   // {
// // //   //   path:'register',
// // //   //   loadComponent:()

// // //   // },

// //   {
// //     path: "",
// //     redirectTo: "tabs",
// //     pathMatch: "full",
// //   },
// // ];
// // export default [{ path: "register", component: RegisterComponent }] as Route[];
// export const sideRoutes: Routes = [
//   {
//     path: "Register",
//     //    loadComponent:()=>import('./tabs.component/')
//     component: RegisterComponent,
//   },
// ];
// // const routes: Routes = [
// //   {
// //     path:"",
// //     component: TabsComponent,
// //     children: [
// //         path:'register',

// //     ]}]

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsComponent } from "./tabs.component";

export const routes: Routes = [
  {
    path: "",
    component: TabsComponent,
    children: [
      {
        path: "Register",
        loadChildren: () =>
          import("../register/register.module").then((m) => m.RegisterModule),
      },
      {
        path: "home",
        loadComponent: () =>
          import("../../home/home.page").then((m) => m.HomePage),
      },
      {
        path: "",
        redirectTo: "/folder/Register",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
