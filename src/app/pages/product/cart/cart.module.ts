import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { LoginPage } from "./login.page";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
// import { LoginPageRoutingModule } from "./login-routing.module";
import { CartPage } from "./cart.page";
import { CartPageRoutingModule } from "./cart-routing.module";
import { CheckoutPage } from "../checkout/checkout.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CartPageRoutingModule,
  ],
  // declarations: [CartPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class cartModule {}
