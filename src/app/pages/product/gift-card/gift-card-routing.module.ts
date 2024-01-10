import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GiftCardComponent } from "./gift-card.component";
// import { LoginPage } from "./login.page";

const routes: Routes = [
  {
    path: "",
    component: GiftCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftCardPageRoutingModule {}
