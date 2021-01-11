import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCleaningCheckPageRoutingModule } from './detail-cleaning-check-routing.module';

import { DetailCleaningCheckPage } from './detail-cleaning-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCleaningCheckPageRoutingModule
  ],
  declarations: [DetailCleaningCheckPage]
})
export class DetailCleaningCheckPageModule {}
