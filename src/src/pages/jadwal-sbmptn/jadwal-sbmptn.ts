import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';


/*
  Generated class for the JadwalSbmptn page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-jadwal-sbmptn',
  templateUrl: 'jadwal-sbmptn.html'
})
export class JadwalSbmptnPage { 
   public jadwalSBM : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af : AngularFireDatabase) {
     this.jadwalSBM= af.list('/Informasi Umum/Jadwal SBMPTN');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JadwalSbmptnPage');
  }

}
