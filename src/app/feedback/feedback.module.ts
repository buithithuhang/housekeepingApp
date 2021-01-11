import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedBackPageRoutingModule } from './feedback-routing.module';

import { FeedBackPage } from './feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedBackPageRoutingModule
  ],
  declarations: [FeedBackPage]
})
export class FeedBackPageModule {}
