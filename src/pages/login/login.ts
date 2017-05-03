import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../../pages/register/register';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public userData: UserData) {}

  loginProses() {
    this.userData.login();
    this.navCtrl.push(TabsPage);
  }
  goToRegister(){
    this.navCtrl.push(RegisterPage);
    }
  }
