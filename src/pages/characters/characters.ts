import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html'
})
export class CharactersPage {
  activeBg: string = "";
  splitCheck = true;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
  }

  changeBg(image) {
  }


}
