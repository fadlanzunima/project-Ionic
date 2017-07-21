import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../../pages/register/register';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public userData: UserData, public loadingCtrl: LoadingController) {}

  loginProses() {
    this.userData.login();
    this.navCtrl.setRoot(TabsPage);
  }
  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }
  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3500,
      dismissOnPageChange: true
    }).present();
  }
  }
