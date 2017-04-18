import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Favoriten } from './favoriten';

@NgModule({
  declarations: [
    Favoriten,
  ],
  imports: [
    IonicPageModule.forChild(Favoriten),
  ],
  exports: [
    Favoriten
  ]
})
export class FavoritenModule {}
