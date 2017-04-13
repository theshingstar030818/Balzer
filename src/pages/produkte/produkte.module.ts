import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Produkte } from './produkte';

@NgModule({
  declarations: [
    Produkte,
  ],
  imports: [
    IonicPageModule.forChild(Produkte),
  ],
  exports: [
    Produkte
  ]
})
export class ProdukteModule { }
