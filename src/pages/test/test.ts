import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
  activeBg: string = "";
  splitCheck = true;

  constructor(public navCtrl: NavController) {
    this.activeBg = "./assets/images/testAssets/dark_town.jpg";
  }

  changeBg(image) {
    this.activeBg = image;
  }



}
