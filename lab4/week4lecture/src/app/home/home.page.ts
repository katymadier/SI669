import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public router: Router, public navCtrl: NavController) {}
  // onClick() {
  //   this.router.navigateByUrl('/about');
  // }
  goToAbout(){
    this.navCtrl.navigateForward('/about');
  };
  goToSettings(){
    this.navCtrl.navigateForward('/settings');
  };

}
