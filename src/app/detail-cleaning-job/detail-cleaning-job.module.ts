import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCleaningJobPageRoutingModule } from './detail-cleaning-job-routing.module';

import { DetailCleaningJobPage } from './detail-cleaning-job.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCleaningJobPageRoutingModule
  ],
  declarations: [DetailCleaningJobPage]
})
export class DetailCleaningJobPageModule {}
