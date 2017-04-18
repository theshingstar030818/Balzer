import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Kontakt } from './kontakt';

@NgModule({
  declarations: [
    Kontakt,
  ],
  imports: [
    IonicPageModule.forChild(Kontakt),
  ],
  exports: [
    Kontakt
  ]
})
export class KontaktModule {}
