import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
/*
  Generated class for the Onboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-onboard',
  templateUrl: 'onboard.html'
})
export class OnboardPage {
  slides = [
    {
      title: "Selamat Datang di PTN INFO!",
      description: "Aplikasi informasi untuk siswa SMA mengenai PTN.",
      image: "assets/img/splash.jpg",
    },
    {
      title: "Kalender Event",
      description: "<b>Kalender</b> berguna untuk melihat event yang ada pada PTN.",
      image: "assets/img/calendar.png",
    },
    {
      title: "Compare",
      description: "<b>Compare</b> adalah melakukan pembandingan terhadap jurusan antar PTN.",
      image: "assets/img/globe.png",
    }
  ];
  goToTabs(){
    this.navCtrl.push(TabsPage);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardPage');
  }

}
