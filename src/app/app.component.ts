import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;
  activePage;

  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(private headerColor: HeaderColor, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: TabsPage, icon: "home" },
      { title: 'My Balzer', component: "MyBalzer", icon: "person" },
      { title: 'Favoriten', component: "Favoriten", icon: "heart" },
      { title: 'Jobs', component: "Jobs", icon: "" },
      { title: 'Kontakt', component: "Kontakt", icon: "call" },
      { title: 'Aktuelles', component: "Aktuelles", icon: "" },
      { title: 'Über Balzer', component: "UberBalzer", icon: "" },
      { title: 'AGB/Impressum', component: "AgbImpressum", icon: "" },
      { title: 'Einstellungen', component: "Einstellungen", icon: "settings" }
    ];
    this.activePage = this.pages[0];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.headerColor.tint("#74BD0D");
      // There must be a way to use our primary color form themes>variables.scss
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page
  }

  checkActive(page) {
    return page == this.activePage;
  }
}