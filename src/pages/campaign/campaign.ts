import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-campaign',
  templateUrl: 'campaign.html'
})
export class CampaignPage {
  activeBg: string = "";
  splitCheck = true;

  campaign = [];

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.campaign = navParams.get('campaign');
    this.activeBg = this.campaign['locationImage']
  }

  changeBg(image) {
  }

  goBack() {
    this.navCtrl.pop();
  }

}
