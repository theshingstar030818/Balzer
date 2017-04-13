import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Filialfinder } from './filialfinder';

@NgModule({
  declarations: [
    Filialfinder,
  ],
  imports: [
    IonicPageModule.forChild(Filialfinder),
  ],
  exports: [
    Filialfinder
  ]
})
export class FilialfinderModule {}
