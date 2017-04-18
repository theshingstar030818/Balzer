import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Einstellungen } from './einstellungen';

@NgModule({
  declarations: [
    Einstellungen,
  ],
  imports: [
    IonicPageModule.forChild(Einstellungen),
  ],
  exports: [
    Einstellungen
  ]
})
export class EinstellungenModule {}
