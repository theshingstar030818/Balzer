import { Component,ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;

  pages: Array<{title: string, component: string, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: "Home", icon: "home" },
      { title: 'My Balzer', component: "MyBalzer", icon: "person" },
      { title: 'Produkte', component: "Produkte", icon: "" },
      { title: 'Filialfinder', component: "Filialfinder", icon: "pin" },
      { title: 'Favoriten', component: "Favoriten", icon: "heart" },
      { title: 'Jobs', component: "Jobs", icon: "" },
      { title: 'Kontakt', component: "Kontakt", icon: "call" },
      { title: 'Aktuelles', component: "Bread", icon: "" },
      { title: 'Über Balyer', component: "ÜberBalyer", icon: "" },
      { title: 'AGB/Impressum', component: "Bread", icon: "" },
      { title: 'Einstellungen', component: "Einstellungen", icon: "settings" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}