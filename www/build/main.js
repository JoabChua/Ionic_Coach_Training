webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the CoachdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoachdetailPage = (function () {
    function CoachdetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.detail = this.navParams.get('detail');
        // console.log(this.detail);
    }
    return CoachdetailPage;
}());
CoachdetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-coachdetail',template:/*ion-inline-start:"C:\Users\JoabChua\Documents\Ionic_training\myCoach\src\pages\coachdetail\coachdetail.html"*/'<!--\n  Generated template for the CoachdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Coach\'s Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n      <ion-card-content>\n          <img src="{{detail.picURL}}"/>\n        <ion-card-title>\n          {{detail.name}}\n          </ion-card-title>\n        <p>{{detail.description}}</p>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\JoabChua\Documents\Ionic_training\myCoach\src\pages\coachdetail\coachdetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], CoachdetailPage);

//# sourceMappingURL=coachdetail.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__newcoach_newcoach__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coachdetail_coachdetail__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CoachesPage = (function () {
    function CoachesPage(navCtrl, navParams, http, lc, mc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.lc = lc;
        this.mc = mc;
        //  console.log(this.token);
        this.token = this.navParams.get('token');
        var load = this.lc.create({
            content: 'Loading . . .'
        });
        // console.log(this.token);
        load.present();
        load.dismiss();
    }
    CoachesPage.prototype.ionViewDidEnter = function () {
        this.getApi();
    };
    CoachesPage.prototype.AuthHead = function (headers) {
        headers.append('Authorization', 'Bearer ' +
            this.token);
    };
    CoachesPage.prototype.getApi = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        this.AuthHead(headers);
        // console.log(headers);
        return this.http.get('https://haunted-crypt-78964.herokuapp.com/loggedInCoach', {
            headers: headers
        })
            .subscribe(function (data) {
            _this.api = data.json();
            // console.log(this.api);
        });
    };
    CoachesPage.prototype.onLogout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CoachesPage.prototype.selectedItem = function (info) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__coachdetail_coachdetail__["a" /* CoachdetailPage */], { detail: info });
    };
    CoachesPage.prototype.onAdd = function () {
        var _this = this;
        var modal = this.mc.create(__WEBPACK_IMPORTED_MODULE_0__newcoach_newcoach__["a" /* NewcoachPage */]);
        modal.present();
        modal.onDidDismiss(function () {
            _this.ionViewDidEnter();
        });
    };
    return CoachesPage;
}());
CoachesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-coaches',template:/*ion-inline-start:"C:\Users\JoabChua\Documents\Ionic_training\myCoach\src\pages\coaches\coaches.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n        <button ion-button outline small (click)="onLogout()">\n            <!-- <ion-icon name="log-out"></ion-icon> -->\n            Log Out\n        </button>\n    </ion-buttons>\n\n    <ion-title>List of Coaches</ion-title>\n\n    <ion-buttons end>\n        <button ion-button icon-only (click)="onAdd()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <button ion-button block (click)="getApi()">Load Api</button> -->\n  <ion-card *ngFor="let i of api; let i = index" (click)="selectedItem(i)" style="cursor:pointer">\n    <ion-card-content>\n        <img src="{{i.picURL}}"/>\n      <ion-card-title>\n        {{i.name}}\n        </ion-card-title>\n      <p>{{i.description}}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\JoabChua\Documents\Ionic_training\myCoach\src\pages\coaches\coaches.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* ModalController */]])
], CoachesPage);

//# sourceMappingURL=coaches.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewcoachPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewcoachPage = (function () {
    function NewcoachPage(navCtrl, navParams, vc, http, lc, ac) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vc = vc;
        this.http = http;
        this.lc = lc;
        this.ac = ac;
    }
    NewcoachPage.prototype.goBack = function () {
        this.vc.dismiss();
    };
    NewcoachPage.prototype.onCreate = function (form) {
        var _this = this;
        var load = this.lc.create({
            content: 'Creating New Coach. . .'
        });
        load.present();
        var alert = this.ac.create({
            title: 'System not availble',
            subTitle: 'Please Try Again Later!',
            buttons: ['Try Again!']
        });
        // console.log(form.value);
        var body = { name: form.value.name, picURL: form.value.picURL, description: form.value.desc };
        this.http.post('https://haunted-crypt-78964.herokuapp.com/coaches', body)
            .subscribe(function (data) {
            load.dismiss();
            _this.detail = data.json();
            console.log(_this.detail);
            _this.vc.dismiss();
        }, function (err) {
            load.dismiss();
            alert.present();
            _this.vc.dismiss();
        });
    };
    return NewcoachPage;
}());
NewcoachPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-newcoach',template:/*ion-inline-start:"C:\Users\JoabChua\Documents\Ionic_training\myCoach\src\pages\newcoach\newcoach.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>New Coach Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onCreate(f)">\n    <ion-item>\n        <ion-label floating>Name</ion-label>\n        <ion-input type="text" name="name" ngModel required></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Picture URL</ion-label>\n        <ion-input type="text" name="picURL" ngModel required></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Description</ion-label>\n        <ion-textarea type="text" name="desc" ngModel required></ion-textarea>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n            <button ion-button block type="submit" [disabled]="!f.valid">Create</button>\n        </ion-col>\n        <ion-col col-6>\n            <button ion-button block type="button" (click)="goBack()">Cancel</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\JoabChua\Documents\Ionic_training\myCoach\src\pages\newcoach\newcoach.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], NewcoachPage);

//# sourceMappingURL=newcoach.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/coachdetail/coachdetail.module": [
		266,
		2
	],
	"../pages/coaches/coaches.module": [
		267,
		1
	],
	"../pages/newcoach/newcoach.module": [
		268,
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
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_coachdetail_coachdetail__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_newcoach_newcoach__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_coaches_coaches__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_coaches_coaches__["a" /* CoachesPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_newcoach_newcoach__["a" /* NewcoachPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_coachdetail_coachdetail__["a" /* CoachdetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/coachdetail/coachdetail.module#CoachdetailPageModule', name: 'CoachdetailPage', segment: 'coachdetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/coaches/coaches.module#CoachesPageModule', name: 'CoachesPage', segment: 'coaches', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newcoach/newcoach.module#NewcoachPageModule', name: 'NewcoachPage', segment: 'newcoach', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_coaches_coaches__["a" /* CoachesPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_newcoach_newcoach__["a" /* NewcoachPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_coachdetail_coachdetail__["a" /* CoachdetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\JoabChua\Documents\Ionic_training\myCoach\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\JoabChua\Documents\Ionic_training\myCoach\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coaches_coaches__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, http, lc, ac) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.lc = lc;
        this.ac = ac;
        this.token = '';
    }
    HomePage.prototype.onSubmit = function (form) {
        var _this = this;
        var load = this.lc.create({
            content: 'Authenticating in progress. . .'
        });
        load.present();
        var alert = this.ac.create({
            title: 'Log In Failed',
            subTitle: 'Invalid Password or Email',
            buttons: ['Try Again!']
        });
        var email = form.value.username;
        var pw = form.value.password;
        var body = { email: email, password: pw };
        // console.log(body);
        this.http.post('https://haunted-crypt-78964.herokuapp.com/login', body)
            .subscribe(function (data) {
            load.dismiss();
            _this.token = data.json().token;
            // console.log(this.token);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__coaches_coaches__["a" /* CoachesPage */], { token: _this.token });
        }, function (err) {
            load.dismiss();
            alert.present();
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\JoabChua\Documents\Ionic_training\myCoach\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login - My Coaches\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" name="username" ngModel required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" name="password" ngModel required></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button block type="submit" [disabled]="!f.valid">Log In</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\JoabChua\Documents\Ionic_training\myCoach\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map