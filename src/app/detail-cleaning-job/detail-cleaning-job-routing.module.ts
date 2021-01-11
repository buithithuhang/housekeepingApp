import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCleaningJobPage } from './detail-cleaning-job.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCleaningJobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCleaningJobPageRoutingModule {}
