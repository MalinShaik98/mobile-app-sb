import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsComponent } from "./tabs.component";

export const routes: Routes = [
  {
    path: "",
    component: TabsComponent,
    children: [
      // {
      //   path: 'Register',
      //   loadChildren: () => import('../register/register.module').then((m)=> m.RegisterModule)
      // },
      {
        path: "home",
        loadComponent: () =>
          import("../home/home.page").then((m) => m.HomePage),
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
