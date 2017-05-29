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

  public ipbList : FirebaseListObservable<any>;

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

}
