import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-create-character',
  templateUrl: 'createCharacter.html'
})
export class CreateCharacterPage {
  activeBg: string = "";
  splitCheck = true;

  campaign = [];

  constructor(public navCtrl: NavController, private navParams: NavParams) {
  }

  changeBg(image) {
  }


}
