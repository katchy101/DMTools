import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { WelcomePage, MonstersPage } from "../pages/pages";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  sections: Array<any> = []
  loginImg: string;
  tests = [{}, {}, {}];
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;



  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.loginImg = "http://i.imgur.com/4LWwYU2.jpg";

    this.initializeApp();
    this.sections = [
      {
        "title": "Campaign",
        "bgImage": "",
        "pages": [
          { title: 'Home', component: HomePage },
        ]
      },
      {
        "title": "Monsters",
        "bgImage": "",
        "pages": [
          { title: 'List', component: MonstersPage }
        ]
      },
      {
        "title": "Characters",
        "bgImage": "",
        "pages": [
          { title: 'List', component: MonstersPage }
        ]
      },
      {
        "title": "Characters",
        "bgImage": "",
        "pages": [
          { title: 'List', component: MonstersPage }
        ]
      },

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


  splitCheck() {
    return false;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
