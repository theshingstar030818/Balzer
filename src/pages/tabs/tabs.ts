import { Component, ViewChild } from '@angular/core';
import { Tabs } from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
@ViewChild('tabs') tabRef: Tabs;

  tab1Root = "Home";
  tab2Root = "Produkte";
  tab3Root = "Filialfinder";

  constructor() { }

  clicked(){
    //this.tabRef.select(3);
    console.log("clicked!");
  }
}