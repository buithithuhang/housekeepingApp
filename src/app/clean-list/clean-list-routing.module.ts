import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CleanListPage } from './clean-list.page';

const routes: Routes = [
  {
    path: '',
    component: CleanListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CleanListPageRoutingModule {}
