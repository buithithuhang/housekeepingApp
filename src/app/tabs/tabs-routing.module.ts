import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'job-list',
        loadChildren: () => import('../job-list/job-list.module').then(m => m.JobListPageModule)
      },
      {
        path: 'clean-list',
        loadChildren: () => import('../clean-list/clean-list.module').then(m => m.CleanListPageModule)
      },
      {
        path: 'detail-cleaning-job',
        loadChildren: () => import('../detail-cleaning-job/detail-cleaning-job.module').then(m => m.DetailCleaningJobPageModule)
      },
      {
        path: 'detail-cleaning-check',
        loadChildren: () => import('../detail-cleaning-check/detail-cleaning-check.module').then(m => m.DetailCleaningCheckPageModule)
      },
      {
        path: 'notify',
        loadChildren: () => import('../notify/notify.module').then(m => m.NotifyPageModule)
      },
      {
        path: 'feedback',
        loadChildren: () => import('../feedback/feedback.module').then(m => m.FeedBackPageModule)
      },
      {
        path: 'hotel-list',
        loadChildren: () => import('../hotel-list/hotel-list.module').then(m => m.HotelListPageModule)
      },
      
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
