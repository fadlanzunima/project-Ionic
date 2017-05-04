import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { LoginPage } from '../../pages/login/login';
import { EditProfilePage } from '../../pages/edit-profile/edit-profile';
import { FIREBASE_PROVIDERS, FirebaseListObservable, defaultFirebase, AngularFire, AuthMethods, AuthProviders, firebaseAuthConfig } from 'angularfire2';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public userData: UserData, public app: App, public af: AngularFire) {
    this.siswaList = af.database.list('/siswa');
  }
      

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  logoutProses(){
    this.userData.logout();
    this.app.getRootNav().setRoot(LoginPage);
  }
  goToEditProfile(){
    this.navCtrl.push(EditProfilePage);
  }
  
}
