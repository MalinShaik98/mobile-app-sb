import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "folder",
    loadChildren: () =>
      import("./pages/product/tabs/tabs.module").then((m) => m.TabsModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/auth/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "forgotpassword",
    loadChildren: () =>
      import("./pages/auth/forgotpassword/forgotpassword.module").then(
        (m) => m.ForgotpasswordPageModule
      ),
  },
  {
    path: "otp",
    loadChildren: () =>
      import("./pages/auth/otp/otp.module").then((m) => m.OtpPageModule),
  },
  {
    path: "resetpassword",
    loadChildren: () =>
      import("./pages/auth/resetpassword/resetpassword.module").then(
        (m) => m.ResetpasswordPageModule
      ),
  },
  {
    path: "quick-pin",
    loadChildren: () =>
      import("./pages/auth/quick-pin/quick-pin.module").then(
        (m) => m.QuickPinPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
