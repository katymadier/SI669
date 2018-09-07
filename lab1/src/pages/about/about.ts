import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  now: Date;
  author: string;

  constructor(public navCtrl: NavController) {
    this.now = new Date();
    this.author = 'Katy Madier'; 
  }

}
