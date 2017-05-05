import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SyaratPendaftaranPage } from '../../pages/syarat-pendaftaran/syarat-pendaftaran';
import { JadwalSbmptnPage } from '../../pages/jadwal-sbmptn/jadwal-sbmptn';
import { JadwalMandiriPage } from '../../pages/jadwal-mandiri/jadwal-mandiri';
import { IpbPage } from '../../pages/kampus/ipb/ipb';
import { UiPage } from '../../pages/kampus/ui/ui';
import { ItbPage } from '../../pages/kampus/itb/itb';
import { UnpadPage } from '../../pages/kampus/unpad/unpad';
import { UnjPage } from '../../pages/kampus/unj/unj';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformasiPage');
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