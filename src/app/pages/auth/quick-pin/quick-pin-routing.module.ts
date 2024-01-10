import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuickPinPage } from './quick-pin.page';

const routes: Routes = [
  {
    path: '',
    component: QuickPinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuickPinPageRoutingModule {}
