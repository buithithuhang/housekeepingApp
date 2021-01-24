import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobListPageRoutingModule } from './job-list-routing.module';

import { JobListPage } from './job-list.page';
import { JobListService } from './job-list.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobListPageRoutingModule,
    HttpClientModule
  ],
  declarations: [JobListPage],
  providers: [JobListService]
})
export class JobListPageModule {}
