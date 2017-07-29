import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {
  HomePage,
  ListPage,
  WelcomePage,
  MonstersPage,
  CreateCharacterPage,
  TestPage
} from "../pages/pages";

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

  split: boolean = true;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.loginImg = "http://i.imgur.com/4LWwYU2.jpg";
    this.initializeApp();
    this.splitCheck();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.readyPages();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.splitCheck();

    });
  }

  readyPages() {
    this.sections = [
      {
        "title": "Welcome",
        "bgImage": "./assets/images/static/compass.png",
        "pages": [
          { title: 'Login', component: WelcomePage },
          { title: 'Test', component: TestPage },

        ]
      },
      {
        "title": "Campaign",
        "bgImage": "./assets/images/static/compass.png",
        "pages": [
          { title: 'Home', component: HomePage },
        ]
      },
      {
        "title": "Monsters",
        "bgImage": "./assets/images/static/dragon.png",
        "pages": [
          { title: 'List', component: MonstersPage }
        ]
      },
      {
        "title": "Characters",
        "bgImage": "",
        "pages": [
          { title: 'Create', component: CreateCharacterPage },
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




  splitCheck() {
  }
  openPage(page) {
    this.nav.push(page.component);
  }
}
