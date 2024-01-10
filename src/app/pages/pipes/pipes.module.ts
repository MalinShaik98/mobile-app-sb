import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MypipePipe } from "./mypipe.pipe";

@NgModule({
  declarations: [MypipePipe],
  imports: [CommonModule],

  exports: [MypipePipe],
})
export class PipesModule {}
