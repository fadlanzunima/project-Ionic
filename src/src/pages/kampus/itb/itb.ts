import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdminPage } from '../../../pages/admin/admin';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Itb page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-itb',
  templateUrl: 'itb.html'
})
export class ItbPage {
  public itbList : FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public af: AngularFireDatabase) {
     this.itbList = af.list('/Daftar Prodi/ITB');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItbPage');
  }

  goToAdmin(){
    this.navCtrl.push(AdminPage);
  }
}
