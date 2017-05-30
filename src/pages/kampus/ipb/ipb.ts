import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdminPage } from '../../../pages/admin/admin';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
/*
  Generated class for the Ipb page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ipb',
  templateUrl: 'ipb.html'
})
export class IpbPage {
  shownGroup = null;
  diseases = [
    { title: "Syarat Jalur SNMPTN", description: "Type 1 diabetes is an autoimmune disease in which the body’s immune system attacks and destroys the beta cells in the pancreas that make insulin." },
    { title: "Syarat Jalur SBMPTN", description: "Multiple sclerosis (MS) is an autoimmune disease in which the body's immune system mistakenly attacks myelin, the fatty substance that surrounds and protects the nerve fibers in the central nervous system." },
    { title: "Syarat Jalur Mandiri", description: "Syaratnya liat di PTN masing-masing." }
  ];

  public ipbList : FirebaseListObservable<any>;
  public segmen= "daftarprodi";

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public af: AngularFireDatabase) {
    this.ipbList = af.list('/Daftar Prodi/IPB');
    this.ipbList.forEach((value)=> {
        console.log("my list is :", value);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IpbPage');
  }

  goToAdmin(){
    this.navCtrl.push(AdminPage);
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
