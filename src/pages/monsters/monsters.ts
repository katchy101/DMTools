import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-monsters',
  templateUrl: 'monsters.html'
})
export class MonstersPage {
  activeBg: string = "";
  splitCheck = true;

  constructor(public navCtrl: NavController) {
    this.activeBg = "./assets/images/testAssets/dark_town.jpg";
  }

  changeBg(image) {
    this.activeBg = image;
  }



}
