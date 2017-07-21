import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';


/*
  Generated class for the SyaratPendaftaran page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-syarat-pendaftaran',
  templateUrl : 'syarat-pendaftaran.html'
})
export class SyaratPendaftaranPage {
  shownGroup = null;
  public informasi1 : FirebaseListObservable<any[]>;
  public informasi2 : FirebaseListObservable<any[]>;
  public originalData=[];
  public data: any;



  constructor(public navCtrl: NavController, public navParams: NavParams,public af: AngularFireDatabase) {
    this.informasi1= af.list('/Informasi Umum/SNMPTN')
    this.informasi2= af.list('/Informasi Umum/SBMPTN')
    this.informasi1.forEach((value)=> {
        console.log("my list is :", value);
    });
  }
diseases = [
    { title: "Syarat Jalur SNMPTN" },
    { title: "Syarat Jalur SBMPTN" }
  ];
  ionViewDidLoad() {
    console.log('ionViewDidLoad SyaratPendaftaranPage');
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
    console.log(this.informasi1);
  }

  isGroupShown(group) {
      return this.shownGroup === group;
  }

}
