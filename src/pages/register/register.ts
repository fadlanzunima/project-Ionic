import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  public siswaList: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, 
  public af: AngularFire, public actionSheetCtrl: ActionSheetController, 
  public navParams: NavParams)
  {
  this.siswaList = af.database.list('/siswa');
  }

  regisSiswa(nama,asal_sekolah,email){
      this.siswaList.push({
      nama : nama,
      asal_sekolah : asal_sekolah,
      email : email
    }).then( newSiswi =>{
      this.navCtrl.pop();
    },  error => {
      console.log(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
