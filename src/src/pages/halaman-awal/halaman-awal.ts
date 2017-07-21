import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { LoginPage , ComparePage } from '../pages';

/*
  Generated class for the HalamanAwal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-halaman-awal',
  templateUrl: 'halaman-awal.html'
})
export class HalamanAwalPage {
  public segmen= "registrasi";
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  constructor(public nav: NavController) {}

  goToLogin(){
      this.nav.push(LoginPage);
    }
  goToCompare(){
      this.nav.push(ComparePage);
    }
}
