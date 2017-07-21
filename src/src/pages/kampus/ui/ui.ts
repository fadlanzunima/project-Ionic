import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdminPage } from '../../../pages/admin/admin';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Ui page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ui',
  templateUrl: 'ui.html'
})

export class UiPage {
  public uiList : FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public af: AngularFireDatabase) {
    this.uiList = af.list('/Daftar Prodi/UI');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UiPage');
  }
  goToAdmin(){
    this.navCtrl.push(AdminPage);
  }
}
