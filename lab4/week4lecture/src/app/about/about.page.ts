import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public router: Router, public navCtrl: NavController) {}

  goToHome(){
    this.navCtrl.navigateForward('/home');
  };
  goToSettings(){
    this.navCtrl.navigateForward('/settings');
  };

  ngOnInit() {
  }

}
