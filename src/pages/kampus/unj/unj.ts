import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdminPage } from '../../../pages/admin/admin';
import { RegisterPage } from '../../../pages/register/register';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
/*
  Generated class for the Unj page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-unj',
  templateUrl: 'unj.html'
})
export class UnjPage {
  public unjList : FirebaseListObservable<any>;
  public segmen= "daftarprodi";

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {
    this.unjList = af.list('/Daftar Prodi/UNJ');
  }

   editProdi(prodi){
    console.log(prodi);
    this.navCtrl.push(RegisterPage, {
      key : prodi.$key,
      nama_prodi : prodi.nama_prodi,
      akreditasi : prodi.akreditasi,
      kuota : prodi.kuota
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UnjPage');
  }

   goToAdmin(){
    this.navCtrl.push(AdminPage);
  }


}
