import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
/*
  Generated class for the Admin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {

  ipbList : FirebaseListObservable<any>;
  uiList : FirebaseListObservable<any>;
  itbList : FirebaseListObservable<any>;
  unpadList : FirebaseListObservable<any>;
  unjList : FirebaseListObservable<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
    this.ipbList = af.database.list('/Daftar Prodi/IPB');
    this.uiList = af.database.list('/Daftar Prodi/UI');
    this.itbList = af.database.list('/Daftar Prodi/ITB');
    this.unpadList = af.database.list('/Daftar Prodi/UNPAD');
    this.unjList = af.database.list('/Daftar Prodi/UNJ');
  }

  TambahProdi(nama_prodi,akreditasi,kuota){
    this.uiList.push({
      nama_prodi : nama_prodi,
      akreditasi : akreditasi,
      kuota : kuota
    }).then( newProdi =>{
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

}
