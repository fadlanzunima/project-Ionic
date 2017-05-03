import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { LoginPage } from '../../pages/login/login';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public userData: UserData, public app: App) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  logoutProses(){
    this.userData.logout();
    this.app.getRootNav().setRoot(LoginPage);
  }
  
}
