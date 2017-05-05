import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SyaratPendaftaran page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-syarat-pendaftaran',
  templateUrl: 'syarat-pendaftaran.html'
})
export class SyaratPendaftaranPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyaratPendaftaranPage');
  }

}
