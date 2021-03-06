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
  public unjList: FirebaseListObservable<any>;
  prodi = {
    id: '',
    nama_prodi : '',
    akreditasi : '',
    kuota : ''
  };

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, 
  public af: AngularFire, public actionSheetCtrl: ActionSheetController, 
  public navParams: NavParams)
  {
  this.unjList = af.database.list('/Daftar Prodi/UNJ');
  this.prodi.id = this.navParams.get('key');
  this.prodi.nama_prodi = this.navParams.get('nama_prodi');
  this.prodi.akreditasi = this.navParams.get('akreditasi');
  this.prodi.kuota = this.navParams.get('kuota');
  }

  UpdateProdi(id,nama_prodi,akreditasi,kuota){
    this.unjList.update(id, {
     nama_prodi : nama_prodi,
      akreditasi : akreditasi,
      kuota : kuota
    }).then( newProdi =>{
      this.navCtrl.pop();
    },  error => {
      console.log(error);
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
