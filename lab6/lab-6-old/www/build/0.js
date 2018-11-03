webpackJsonp([0],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardPageModule", function() { return LeaderboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaderboard__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LeaderboardPageModule = /** @class */ (function () {
    function LeaderboardPageModule() {
    }
    LeaderboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__leaderboard__["a" /* LeaderboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__leaderboard__["a" /* LeaderboardPage */]),
            ],
        })
    ], LeaderboardPageModule);
    return LeaderboardPageModule;
}());

//# sourceMappingURL=leaderboard.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_data_data__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LeaderboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeaderboardPage = /** @class */ (function () {
    function LeaderboardPage(navCtrl, navParams, dataService, storage, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.storage = storage;
        this.platform = platform;
        this.scoreList = [];
        // this.score = this.navParams.get('score');
        this.storage.get('score').then(function (val) {
            _this.score = val;
        });
    }
    LeaderboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LeaderboardPage');
        // Platform.ready isn't required in the new Ionic
        this.platform.ready().then(function () {
            _this.storage.get('leaderboard').then(function (result) {
                var res;
                if (!result) {
                    res = [];
                }
                else {
                    res = JSON.parse(result);
                }
                res.push({
                    score: _this.score,
                    time: Date.now()
                });
                _this.scoreList = res.sort(function (a, b) {
                    if (a.score > b.score) {
                        console.log("a score bigger", a.score);
                        return -1;
                    }
                    else {
                        console.log("b score bigger", b.score);
                        return 1;
                    }
                });
                _this.storage.set('leaderboard', JSON.stringify(_this.scoreList));
            });
        });
    };
    LeaderboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leaderboard',template:/*ion-inline-start:"/Users/katymadier/Github/lab-6-whack-a-mole-katymadier/src/pages/leaderboard/leaderboard.html"*/'<!--\n  Generated template for the LeaderboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>leaderboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h1>You score is {{score}}</h1>\n<h2>Leaderboard</h2>\n<ion-item *ngFor="let score of scoreList; let i=index">\n  <div *ngIf="i<10">\n    <span>{{score.score}}</span> : <span>{{score.time | date :\'short\'}}</span>\n  </div>\n</ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/katymadier/Github/lab-6-whack-a-mole-katymadier/src/pages/leaderboard/leaderboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__provider_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], LeaderboardPage);
    return LeaderboardPage;
}());

//# sourceMappingURL=leaderboard.js.map

/***/ })

});
//# sourceMappingURL=0.js.map