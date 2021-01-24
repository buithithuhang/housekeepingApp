import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'job-list',
    loadChildren: () => import('./job-list/job-list.module').then( m => m.JobListPageModule)
  },
  {
    path: 'detail-cleaning-job',
    loadChildren: () => import('./detail-cleaning-job/detail-cleaning-job.module').then( m => m.DetailCleaningJobPageModule)
  },
  {
    path: 'detail-cleaning-check',
    loadChildren: () => import('./detail-cleaning-check/detail-cleaning-check.module').then( m => m.DetailCleaningCheckPageModule)
  },
  {
    path: 'notify',
    loadChildren: () => import('./notify/notify.module').then( m => m.NotifyPageModule)
  },
  {
    path: 'hotel-list',
    loadChildren: () => import('./hotel-list/hotel-list.module').then( m => m.HotelListPageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedBackPageModule)
  },
  {
    path: 'clean-list',
    loadChildren: () => import('./clean-list/clean-list.module').then( m => m.CleanListPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
