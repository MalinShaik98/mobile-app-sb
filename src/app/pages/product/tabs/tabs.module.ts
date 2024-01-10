import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabsRoutingModule } from "./tabs-routing.module";
@NgModule({
  declarations: [],
  imports: [CommonModule, TabsRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsModule {}
