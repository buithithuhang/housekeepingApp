import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCleaningCheckPage } from './detail-cleaning-check.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCleaningCheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCleaningCheckPageRoutingModule {}
