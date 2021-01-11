import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CleanListPageRoutingModule } from './clean-list-routing.module';

import { CleanListPage } from './clean-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CleanListPageRoutingModule
  ],
  declarations: [CleanListPage]
})
export class CleanListPageModule {}
