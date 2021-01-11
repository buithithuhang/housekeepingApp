import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedBackPage } from './feedback.page';

const routes: Routes = [
  {
    path: '',
    component: FeedBackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedBackPageRoutingModule {}
