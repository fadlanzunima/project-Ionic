import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdminPage } from '../../../pages/admin/admin';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Unpad page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-unpad',
  templateUrl: 'unpad.html'
})
export class UnpadPage {
  public unpadList : FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public af: AngularFireDatabase) {
    this.unpadList = af.list('/Daftar Prodi/UNPAD');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnpadPage');
  }
  
  goToAdmin(){
    this.navCtrl.push(AdminPage);
  }
}
