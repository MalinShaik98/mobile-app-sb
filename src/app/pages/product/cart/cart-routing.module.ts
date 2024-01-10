import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { LoginPage } from "./login.page";
import { CartPage } from "./cart.page";

const routes: Routes = [
  {
    path: "",
    component: CartPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartPageRoutingModule {}
