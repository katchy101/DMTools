import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { HomePage } from "../pages";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  split: boolean;
  loginImg: string = "";
  constructor(public navCtrl: NavController, private ViewCtrl: ViewController) {
    this.loginImg = "./assets/images/welcome/test-bg.jpeg";
    this.splitCheck();
  }

  splitCheck() {
    if (this.ViewCtrl.name === "Welcome") {
      this.split = true;
    } else {
      this.split = false;
    }
  }

  openPage() {
    this.navCtrl.setRoot(HomePage, );
  }
}
