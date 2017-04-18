import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Aktuelles } from './aktuelles';

@NgModule({
  declarations: [
    Aktuelles,
  ],
  imports: [
    IonicPageModule.forChild(Aktuelles),
  ],
  exports: [
    Aktuelles
  ]
})
export class AktuellesModule {}
