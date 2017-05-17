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
  shownGroup = null;
  diseases = [
    { title: "Syarat Jalur SNMPTN", description: "Type 1 diabetes is an autoimmune disease in which the body’s immune system attacks and destroys the beta cells in the pancreas that make insulin." },
    { title: "Syarat Jalur SBMPTN", description: "Multiple sclerosis (MS) is an autoimmune disease in which the body's immune system mistakenly attacks myelin, the fatty substance that surrounds and protects the nerve fibers in the central nervous system." },
    { title: "Syarat Jalur Mandiri", description: "Syaratnya liat di PTN masing-masing." }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyaratPendaftaranPage');
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  }

  isGroupShown(group) {
      return this.shownGroup === group;
  }

}
