import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UberBalzer } from './über-balzer';

@NgModule({
  declarations: [
    UberBalzer,
  ],
  imports: [
    IonicPageModule.forChild(UberBalzer),
  ],
  exports: [
    UberBalzer
  ]
})
export class UberBalzerModule {}
