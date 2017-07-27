import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  loginImg: string = "";
  constructor(public navCtrl: NavController) {

    this.loginImg = "http://i.imgur.com/4LWwYU2.jpg";


  }

}
