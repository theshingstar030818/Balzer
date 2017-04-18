import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgbImpressum } from './agb-impressum';

@NgModule({
  declarations: [
    AgbImpressum,
  ],
  imports: [
    IonicPageModule.forChild(AgbImpressum),
  ],
  exports: [
    AgbImpressum
  ]
})
export class AgbImpressumModule {}
