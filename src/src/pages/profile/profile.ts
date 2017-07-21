import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { UserData } from '../../providers/user-data';
import { LoginPage } from '../../pages/login/login';
import { EditProfilePage } from '../../pages/edit-profile/edit-profile';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  siswaList: FirebaseListObservable<any>;
  siswi = {
    nama:'',
    asal_sekolah : '',
    email : ''
  };

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, 
  public af: AngularFire, public actionSheetCtrl: ActionSheetController, 
  public navParams: NavParams)
  {
  this.siswaList = af.database.list('/siswa');
  }

  
  feedback(nama,asal_sekolah,email){
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
  
  doAlert() {
    let alert = this.alertCtrl.create({
      message: 'Terima Kasih!',
      buttons: ['Ok']
    });
    alert.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  // logoutProses(){
  //   this.userData.logout();
  //   this.app.getRootNav().setRoot(LoginPage);
  // }
  goToEditProfile(){
    this.navCtrl.push(EditProfilePage);
  }
  
}
