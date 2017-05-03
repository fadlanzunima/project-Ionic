import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KalenderPage } from '../kalender/kalender';
import { ProfilePage } from '../profile/profile';
import { ComparePage } from '../compare/compare';
import { InformasiPage } from '../informasi/informasi';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = KalenderPage;
  tab2Root: any = ComparePage;
  tab3Root: any = InformasiPage;
  tab4Root: any = ProfilePage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
}
