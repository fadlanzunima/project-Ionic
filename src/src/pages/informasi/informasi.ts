import { Component } from '@angular/core';
import { NavController, NavParams , AlertController} from 'ionic-angular';
import { SyaratPendaftaranPage } from '../../pages/syarat-pendaftaran/syarat-pendaftaran';
import { JadwalSbmptnPage } from '../../pages/jadwal-sbmptn/jadwal-sbmptn';
import { JadwalMandiriPage } from '../../pages/jadwal-mandiri/jadwal-mandiri';
import { IpbPage } from '../../pages/kampus/ipb/ipb';
import { UiPage } from '../../pages/kampus/ui/ui';
import { ItbPage } from '../../pages/kampus/itb/itb';
import { UnpadPage } from '../../pages/kampus/unpad/unpad';
import { UnjPage } from '../../pages/kampus/unj/unj';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';


/*
  Generated class for the Informasi page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-informasi',
  templateUrl: 'informasi.html'
})

export class InformasiPage {
  public segmen= "daftarptn";
   public informasi: FirebaseListObservable<any[]>;
  public originalData=[];
 public data:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
  public alertCtrl: AlertController) {
   
}
addlist() {
  let prompt = this.alertCtrl.create({
    inputs: [
      {
        name: 'title',
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.informasi = this.af.list('/Informasi Umum/Jadwal SBMPTN');
    this.originalData = [];
   /*for(let a of this.data){
      this.originalData.push(a);
  }*/
          this.informasi.push({
            title: data.title
          });
        }
      }
    ]
});
 prompt.present();
}   

  goToSyarat(){
      this.navCtrl.push(SyaratPendaftaranPage);
    }
  goToMandiri(){
    this.navCtrl.push(JadwalMandiriPage);
  }
  goToSbmtpn(){
    this.navCtrl.push(JadwalSbmptnPage);
  }
  goToIpbPage(){
    this.navCtrl.push(IpbPage);
  }
  goToUiPage(){
    this.navCtrl.push(UiPage);
  }
  goToItbPage(){
    this.navCtrl.push(ItbPage);
  }
  goToUnpadPage(){
    this.navCtrl.push(UnpadPage);
  }
  goToUnjPage(){
    this.navCtrl.push(UnjPage);
  }
}