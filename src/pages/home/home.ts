import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  activeBg: string = "";
  splitCheck = true;

  tests: Array<any> = [{
    "title": "The Fallen",
    "locationImage": "./assets/images/testAssets/dark_town.jpg",
    "party": [
      {
        "name": "Elf 1",
        "memberImg": "./assets/images/testAssets/elf_01.jpg"
      },
      {
        "name": "Halfling 1",
        "memberImg": "./assets/images/testAssets/halfling_01.jpg"
      }
    ]
  }, {
    "title": "Elvendale",
    "locationImage": "./assets/images/testAssets/elf_city.jpg",
    "party": [
      {
        "name": "Halfling 1",
        "memberImg": "../assets/images/testAssets/halfling_01.jpg"
      }
    ]
  }, {
    "title": "The Cursed Town",
    "locationImage": "./assets/images/testAssets/dark_town.jpg",
    "party": [
      {
        "name": "Elf 1",
        "memberImg": "./assets/images/testAssets/elf_01.jpg"
      },
      {
        "name": "Dwarf 1",
        "memberImg": "./assets/images/testAssets/dwarf_01.jpg"
      },
      {
        "name": "Human 1",
        "memberImg": "./assets/images/testAssets/human_01.jpg"
      },
      {
        "name": "Halfling 1",
        "memberImg": "./assets/images/testAssets/halfling_01.jpg"
      }
    ]
  }];


  constructor(public navCtrl: NavController) {
    this.activeBg = "./assets/images/testAssets/dark_town.jpg";
  }

  changeBg(image) {
    this.activeBg = image;
  }



}
