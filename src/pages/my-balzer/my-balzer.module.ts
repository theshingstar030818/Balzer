import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyBalzer } from './my-balzer';

@NgModule({
  declarations: [
    MyBalzer,
  ],
  imports: [
    IonicPageModule.forChild(MyBalzer),
  ],
  exports: [
    MyBalzer
  ]
})
export class MyBalzerModule {}
