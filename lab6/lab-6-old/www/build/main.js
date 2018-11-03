webpackJsonp([1],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/leaderboard/leaderboard.module": [
		275,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_button_model__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.moleHoles = [];
        this.showHitMessage = false;
        this.timeLeft = 0;
        /**
         * Create an observer to be passed to the new MoleHoles
         */
        this.moleObservable = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.moleObserver = observer;
        });
        /**
         * Subscribe to the observer created above to update the score
         */
        this.moleObservable.subscribe(function (score) {
            _this.score++;
        });
        for (var i = 0; i < 9; i++) {
            this.moleHoles.push(new __WEBPACK_IMPORTED_MODULE_2__models_button_model__["a" /* MoleHole */](i, this.moleObserver));
        }
        var timerUpdate = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.timerObserver = observer;
        });
        timerUpdate.subscribe(function (val) {
            _this.timeLeft = val;
        });
        this.startGame();
    }
    HomePage.prototype.startGame = function () {
        var _this = this;
        var that = this;
        this.score = 0;
        this.gameDriver = setInterval(function () {
            var randomMole = Math.floor(Math.random() * 9);
            _this.moleHoles[randomMole].showMole(700);
        }, 800);
        this.timeLeft = 10;
        this.gameTimer = setInterval(function () {
            that.timeLeft = that.timeLeft - 1;
            that.timerObserver.next(that.timeLeft);
            if (that.timeLeft <= 0) {
                clearInterval(that.gameTimer);
                _this.stopGame();
                _this.saveScore();
            }
        }, 1000);
    };
    HomePage.prototype.stopGame = function () {
        clearInterval(this.gameDriver);
        clearInterval(this.gameTimer);
        this.timerObserver.next(0);
    };
    HomePage.prototype.saveScore = function () {
        //This is the old ionic 3.9 syntax, get rid of it.
        //use ionic 4; use Angular routing across the project.
        this.navCtrl.push('LeaderboardPage', {
            score: this.score,
        });
        this.storage.set('score', this.score);
    };
    HomePage.prototype.resetGame = function () {
        this.stopGame();
        this.startGame();
    };
    HomePage.prototype.hit = function (hole) {
        var _this = this;
        var success = hole.hit();
        if (success) {
            this.showHitMessage = true;
            setTimeout(function () {
                _this.showHitMessage = false;
            }, 300);
        }
    };
    HomePage.prototype.stateToClass = function (state) {
        switch (state) {
            case 0: {
                return "hid";
            }
            case 1: {
                return "out";
            }
            case 2: {
                return "hit";
            }
            default: {
                return "";
            }
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/katymadier/Github/lab-6-whack-a-mole-katymadier/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      whack-a-mole\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4 *ngFor="let hole of moleHoles">\n        <button ion-button \n          [class]="stateToClass(hole.moleState)"\n          (click)="hit(hole)"></button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <h3>{{timeLeft}}s left</h3>\n        <h3>Your Score: {{score}}</h3>\n      </ion-col>\n      <ion-col col-4>\n          <button ion-button color="dark" outline (click)="stopGame()">Stop Game</button>\n      </ion-col>\n      <ion-col col-4>\n          <button ion-button color="dark" outline (click)="resetGame()">Reset Game</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <h2 class="hit-message" [class.active]="showHitMessage">Hit!!</h2>\n\n</ion-content>\n'/*ion-inline-end:"/Users/katymadier/Github/lab-6-whack-a-mole-katymadier/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataProvider = /** @class */ (function () {
    function DataProvider(storage) {
        this.storage = storage;
    }
    DataProvider.prototype.getData = function () {
        return this.storage.get('leaderboard');
    };
    DataProvider.prototype.save = function (data) {
        var saveData = [];
        //Remove observables
        data.forEach(function (entry) {
            saveData.push({
                score: entry.score,
                time: entry.time
            });
        });
        var newData = JSON.stringify(saveData);
        this.storage.set('leaderboard', newData);
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_data_data__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/leaderboard/leaderboard.module#LeaderboardPageModule', name: 'LeaderboardPage', segment: 'leaderboard', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__provider_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__["a" /* NativeAudio */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/katymadier/Github/lab-6-whack-a-mole-katymadier/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/katymadier/Github/lab-6-whack-a-mole-katymadier/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoleHole; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_audio__ = __webpack_require__(194);

var MoleHole = /** @class */ (function () {
    function MoleHole(num, observer) {
        this.num = num;
        this.observer = observer;
        this.nativeAudio = new __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_audio__["a" /* NativeAudio */]();
        this.moleState = 0;
        this.holeNumber = num;
        this.nativeAudio.preloadSimple('squish', '../assets/squish.mp3');
        //.then(onSuccess, onError);
    }
    MoleHole.prototype.showMole = function (duration) {
        // If the mole is already out,
        if (this.moleState === 0) {
            this.moleState = 1;
            var that_1 = this;
            setTimeout(function () {
                that_1.hideMole();
            }, duration);
        }
        else {
            return false;
        }
    };
    MoleHole.prototype.hit = function () {
        if (this.moleState === 1) {
            this.moleState = 2;
            console.log("hit ", this.moleState);
            this.observer.next(true);
            this.nativeAudio.play('squish');
            var that_2 = this;
            setTimeout(function () {
                that_2.moleState = 0;
            }, 1000);
            return true;
        }
        else {
            return false;
        }
    };
    MoleHole.prototype.hideMole = function () {
        if (this.moleState === 1) {
            this.moleState = 0;
        }
    };
    MoleHole.prototype.isOut = function () {
        return this.moleState;
    };
    return MoleHole;
}());

//# sourceMappingURL=button-model.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map