import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Jobs } from './jobs';

@NgModule({
  declarations: [
    Jobs,
  ],
  imports: [
    IonicPageModule.forChild(Jobs),
  ],
  exports: [
    Jobs
  ]
})
export class JobsModule {}
