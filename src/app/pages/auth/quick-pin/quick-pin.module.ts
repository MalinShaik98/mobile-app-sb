import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { QuickPinPageRoutingModule } from "./quick-pin-routing.module";

import { QuickPinPage } from "./quick-pin.page";
import { OtpPageModule } from "../otp/otp.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuickPinPageRoutingModule,
    OtpPageModule,
  ],
  exports: [OtpPageModule],
  declarations: [QuickPinPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QuickPinPageModule {}
