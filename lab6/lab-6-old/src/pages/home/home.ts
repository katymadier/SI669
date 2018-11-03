import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoleHole } from '../../models/button-model';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  moleHoles: MoleHole[] = [];
  moleObservable: any;
  moleObserver: any;
  showHitMessage: Boolean = false;
  gameDriver: any;
  gameTimer: any;
  timeLeft: number = 0;
  timerObserver: any;
  score: 0;


  constructor(public navCtrl: NavController, public storage: Storage ) {

    /**
     * Create an observer to be passed to the new MoleHoles
     */
     this.moleObservable = Observable.create(observer =>{
       this.moleObserver = observer;
     })

    /**
     * Subscribe to the observer created above to update the score
     */
     this.moleObservable.subscribe((score)=>{
       this.score++;
    })

    for(let i = 0; i<9; i++) {
      this.moleHoles.push(new MoleHole(i, this.moleObserver))
    }

    let timerUpdate = Observable.create(observer => {
      this.timerObserver = observer;
    });

    timerUpdate.subscribe(val => {
      this.timeLeft = val;
    })

    this.startGame()
  }



  startGame(){
    const that = this;
    this.score = 0;

    this.gameDriver = setInterval(() => {
      let randomMole = Math.floor(Math.random() * 9)
      this.moleHoles[randomMole].showMole(700);
    }, 800);

    this.timeLeft = 10;

    this.gameTimer = setInterval(() => {
      that.timeLeft = that.timeLeft - 1;
      that.timerObserver.next(that.timeLeft);
      if(that.timeLeft <= 0) {
        clearInterval(that.gameTimer);
        this.stopGame();
        this.saveScore();
      }
    }, 1000)

  }

  stopGame() {
    clearInterval(this.gameDriver);
    clearInterval(this.gameTimer);
    this.timerObserver.next(0);
  }

  saveScore() {
    //This is the old ionic 3.9 syntax, get rid of it.
    //use ionic 4; use Angular routing across the project.
    this.navCtrl.push('LeaderboardPage', {
      score: this.score,
    })
    this.storage.set('score', this.score)
  }

  resetGame() {
    this.stopGame();
    this.startGame();
  }

  hit(hole: MoleHole) {
    const success = hole.hit();
    if(success) {
      this.showHitMessage = true;
      setTimeout(() => {
        this.showHitMessage = false;
      }, 300);
    }
  }

  stateToClass(state: number) {
    switch(state) {
      case 0:{
          return "hid";
        }
        case 1: {
          return "out";
        }
        case 2: {
          return "hit";
        }
        default:{
          return "";
        }
    }
}

}
