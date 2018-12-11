webpackJsonp([7],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the PendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PendingPage = (function () {
    function PendingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PendingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendingPage');
    };
    PendingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pending',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\pending\pending.html"*/'<!--\n\n  Generated template for the PendingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header text-center>\n\n\n\n  <ion-navbar>\n\n    <ion-title>PENDING UPLOADS</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\pending\pending.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PendingPage);
    return PendingPage;
}());

//# sourceMappingURL=pending.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_save_save__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_view_view__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PicklistPage = (function () {
    function PicklistPage(navCtrl, navParams, data, storage, alertCtrl, loadingCtrl, save) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.save = save;
        this.picks = new Array();
        this.show = true;
    }
    PicklistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.presentLoading();
        console.log(this.save.id);
        this.data.pendingPickUp(this.save.id).subscribe(function (data) {
            _this.picks = data;
            _this.loader.dismiss();
        });
    };
    PicklistPage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    PicklistPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 5000
        });
        this.loader.present();
    };
    PicklistPage.prototype.open = function (id) {
        var data = {
            id: id
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_view_view__["a" /* ViewPage */], data);
    };
    PicklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-picklist',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\picklist\picklist.html"*/'<!--\n\n  Generated template for the PicklistPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar text-center>\n\n    <ion-title>PENDING PICKUP(S)</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding *ngIf="show">\n\n  <ion-card *ngFor="let pick of picks" (click)="open(pick.id)">\n\n    <div text-right style="padding-right: 5px; font-weight: 500;">\n\n      #{{pick.id}}\n\n    </div>\n\n    <ion-card-header style="font-weight: 500;">\n\n      {{pick.ref}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <div>\n\n        Customer Name : {{pick.customer}}\n\n      </div>\n\n      Ready Time : {{pick.redy_time}}\n\n      <div style="color: red;">\n\n        Close Time : {{pick.close_time}}\n\n      </div>\n\n\n\n    </ion-card-content>\n\n    <div style="height: 10px; width: 100%;background-color: rgb(253, 161, 56);">\n\n\n\n    </div>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-content padding *ngIf="!show">\n\n  <div text-center style="font-size: 18px; font-weight: 500; margin-top: 170px;">\n\n    NO MORE PICKUPS\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\picklist\picklist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_save_save__["a" /* SaveProvider */]])
    ], PicklistPage);
    return PicklistPage;
}());

//# sourceMappingURL=picklist.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pickup_pickup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(31);
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
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewPage = (function () {
    function ViewPage(navCtrl, navParams, data, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.loadingCtrl = loadingCtrl;
        this.show = false;
        this.presentLoading();
        this.id = this.navParams.get('id');
        this.data.getOnePick(this.id).subscribe(function (data) {
            _this.fid = data[0].id;
            _this.ref = data[0].ref;
            _this.pickup_date = data[0].pickup_date;
            _this.redy_time = data[0].redy_time;
            _this.close_time = data[0].close_time;
            _this.rekarks = data[0].rekarks;
            _this.address = data[0].address;
            _this.name = data[0].name;
            _this.city = data[0].city;
            _this.phone = data[0].phone;
            _this.customer = data[0].customer;
            _this.show = true;
            _this.loader.dismiss();
        });
    }
    ViewPage.prototype.ionViewDidLoad = function () {
    };
    ViewPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 10000
        });
        this.loader.present();
    };
    ViewPage.prototype.next = function () {
        var data = {
            id: this.id,
            ref: this.ref
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_pickup_pickup__["a" /* PickupPage */], data);
    };
    ViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\view\view.html"*/'<!--\n\n  Generated template for the ViewPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center>VIEW DISPATCH</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div *ngIf="show">\n\n\n\n\n\n    <ion-toolbar no-border class="head">\n\n      <div>\n\n        PACKAGE ID\n\n      </div>\n\n    </ion-toolbar>\n\n    <div class="body">\n\n      {{ref}}\n\n    </div>\n\n\n\n    <br>\n\n\n\n    <ion-toolbar no-border class="head">\n\n      <div>\n\n        CUSTOMER\n\n      </div>\n\n    </ion-toolbar>\n\n    <div class="body">\n\n      {{customer}}\n\n    </div>\n\n\n\n    <br>\n\n\n\n    <ion-toolbar no-border class="head">\n\n      <div>\n\n        ADDRESS\n\n      </div>\n\n    </ion-toolbar>\n\n    <div class="body">\n\n      {{address}}\n\n    </div>\n\n\n\n    <br>\n\n\n\n    <ion-toolbar no-border class="head">\n\n      <div>\n\n        INFORMATIONS\n\n      </div>\n\n    </ion-toolbar>\n\n    <div class="body">\n\n      Ready Time - {{redy_time}}\n\n      <br> Close Time - {{close_time}}\n\n      <br> Pickup Date - {{pickup_date}}\n\n      <br>\n\n    </div>\n\n\n\n    <br>\n\n\n\n    <ion-toolbar no-border class="head">\n\n      <div>\n\n        PHONE\n\n      </div>\n\n    </ion-toolbar>\n\n    <div class="body">\n\n      {{phone}}\n\n    </div>\n\n\n\n    <br>\n\n\n\n    <ion-toolbar no-border class="head">\n\n      <div>\n\n        CONTACT\n\n      </div>\n\n    </ion-toolbar>\n\n    <div class="body">\n\n      {{name}}\n\n    </div>\n\n\n\n    <br>\n\n\n\n    <ion-toolbar no-border class="head">\n\n      <div>\n\n        {{rekarks}}\n\n      </div>\n\n    </ion-toolbar>\n\n\n\n    <br>\n\n\n\n    <div padding>\n\n      <button ion-button full (click)="next()" color="dark">NEXT</button>\n\n    </div>\n\n\n\n\n\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\view\view.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _d || Object])
    ], ViewPage);
    return ViewPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=view.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_picktwo_picktwo__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(42);
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
 * Generated class for the PickupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PickupPage = (function () {
    function PickupPage(navCtrl, navParams, barcodeScanner, alertCtrl, actionSheetCtrl, data, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.data = data;
        this.loadingCtrl = loadingCtrl;
        this.exceptions = new Array();
        this.picks = new Array();
        this.expshow = false;
        //one
        this.onet = undefined;
        this.onei = undefined;
        this.one = true;
        //two
        this.twot = undefined;
        this.twoi = undefined;
        this.two = false;
        //three
        this.threet = undefined;
        this.threei = undefined;
        this.three = false;
        //one
        this.fourt = undefined;
        this.fouri = undefined;
        this.four = false;
        //one
        this.fivet = undefined;
        this.fivei = undefined;
        this.five = false;
        this.index = 1;
        this.pickid = "";
        this.fid = "";
        this.pid = this.navParams.get('id');
        this.ref = this.navParams.get('ref');
    }
    PickupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //console.log('ionViewDidLoad PickupPage');
        this.presentLoading();
        this.data.getExceptions('1').subscribe(function (data) {
            _this.exceptions = data;
            _this.loader.dismiss();
        });
    };
    PickupPage.prototype.scan = function (num) {
        var _this = this;
        this.option = {
            prompt: 'SCAN BARCODE CODE',
            resultDisplayDuration: 0,
            showTorchButton: true,
            orientation: 'landscape'
        };
        this.barcodeScanner.scan(this.option).then(function (barcodeData) {
            var data = barcodeData.text;
            _this.array = data.toString();
            if (_this.array.length == 13) {
                if (num == 1) {
                    _this.onet = _this.array.substring(2, 10);
                    _this.onei = '';
                }
                else if (num == 2) {
                    _this.twot = _this.array.substring(2, 10);
                    _this.twoi = '';
                }
                else if (num == 3) {
                    _this.threet = _this.array.substring(2, 10);
                    _this.threei = '';
                }
                else if (num == 4) {
                    _this.fourt = _this.array.substring(2, 10);
                    _this.fouri = '';
                }
                else if (num == 5) {
                    _this.fivet = _this.array.substring(2, 10);
                    _this.fivei = '';
                }
            }
            else if (_this.array.length == 16) {
                if (num == 1) {
                    _this.onet = _this.array.substring(0, 12);
                    _this.onei = _this.array.substring(12, 16);
                }
                else if (num == 2) {
                    _this.twot = _this.array.substring(0, 12);
                    _this.twoi = _this.array.substring(12, 16);
                }
                else if (num == 3) {
                    _this.threet = _this.array.substring(0, 12);
                    _this.threei = _this.array.substring(12, 16);
                }
                else if (num == 4) {
                    _this.fourt = _this.array.substring(0, 12);
                    _this.fouri = _this.array.substring(12, 16);
                }
                else if (num == 5) {
                    _this.fivet = _this.array.substring(0, 12);
                    _this.fivei = _this.array.substring(12, 16);
                }
            }
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    PickupPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 10000
        });
        this.loader.present();
    };
    PickupPage.prototype.add = function () {
        if (this.index < 5) {
            this.index += 1;
            if (this.index == 2) {
                this.two = true;
            }
            else if (this.index == 3) {
                this.three = true;
            }
            else if (this.index == 4) {
                this.four = true;
            }
            else if (this.index == 5) {
                this.five = true;
            }
        }
    };
    //pickup_id, fid, pack, description, tracking_id
    PickupPage.prototype.next = function () {
        if (this.onet != undefined) {
            this.pickid += this.onet + ",";
        }
        if (this.twot != undefined) {
            this.pickid += this.twot + ",";
        }
        if (this.threet != undefined) {
            this.pickid += this.threet + ",";
        }
        if (this.fourt != undefined) {
            this.pickid += this.fourt + ",";
        }
        if (this.fivet != undefined) {
            this.pickid += this.fivet + ",";
        }
        if (this.onei != undefined) {
            this.fid += this.onei + ",";
        }
        if (this.twoi != undefined) {
            this.fid += this.twoi + ",";
        }
        if (this.threei != undefined) {
            this.fid += this.threei + ",";
        }
        if (this.fouri != undefined) {
            this.fid += this.fouri + ",";
        }
        if (this.fivei != undefined) {
            this.fid += this.fivei + ",";
        }
        var data = {
            pickup_id: this.pid,
            fid: this.fid,
            pack: this.index,
            tracking_id: this.pickid
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_picktwo_picktwo__["a" /* PicktwoPage */], data);
    };
    PickupPage.prototype.showAlert = function (topic, msg) {
        var alert = this.alertCtrl.create({
            title: topic,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    PickupPage.prototype.no = function () {
        this.expshow = true;
    };
    PickupPage.prototype.yes = function () {
        this.expshow = false;
    };
    PickupPage.prototype.itemSelected = function (item) {
        this.exp = item;
    };
    PickupPage.prototype.submit = function () {
        var _this = this;
        this.presentLoading();
        this.data.addError(this.pid, this.exp).subscribe(function (data) {
            _this.showAlert("Added", "Completely add to pending uploads");
            _this.loader.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.showAlert("Error", "Not submited");
            _this.loader.dismiss();
        });
    };
    PickupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pickup',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\pickup\pickup.html"*/'<ion-header>\n\n\n\n  <ion-navbar text-center>\n\n    <ion-title>PICKUP DETAILS</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-toolbar no-border>\n\n    <div style="margin-left: 10px; font-size: 16px;">\n\n      PACKAGE(S) PICKED UP\n\n    </div>\n\n  </ion-toolbar>\n\n  <div>\n\n    <ion-list radio-group [(ngModel)]="pickup">\n\n      <ion-item no-lines>\n\n        <ion-label color="dark">Yes</ion-label>\n\n        <ion-radio (click)="yes()" value="yes" color="dark"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="dark">No</ion-label>\n\n        <ion-radio (click)="no()" color="dark" value="no"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n\n\n  <div padding *ngIf="expshow">\n\n    <ion-list style="border-style: solid; color: red;">\n\n      <button style="color: rgb(236, 89, 89);" ion-item *ngFor="let exp of exceptions" (click)="itemSelected(exp.id)">\n\n        {{ exp.message }}\n\n      </button>\n\n    </ion-list>\n\n\n\n    <ion-toolbar no-border style="margin-top: 20px;">\n\n      <div style="margin-left: 10px; font-size: 16px;">\n\n        EXCEPTION\n\n      </div>\n\n    </ion-toolbar>\n\n    <div class="exp">\n\n      {{exp}}\n\n      <br>\n\n      <br>\n\n    </div>\n\n\n\n    <div text-center>\n\n      <button ion-button color="dark" style="width: 200px;" (click)="submit()" [disabled]="!exp">Submit</button>\n\n    </div>\n\n  </div>\n\n\n\n  <div *ngIf="!expshow">\n\n    <ion-toolbar no-border style="margin-top: 20px;">\n\n      <div style="margin-left: 10px; font-size: 16px;">\n\n        TRACKING NUMBER(S) & FORM ID(S)\n\n      </div>\n\n    </ion-toolbar>\n\n    <div style="font-size: 12px;" text-center padding>\n\n      Enter the tracking number manually or click on barcode scanner icon\n\n    </div>\n\n\n\n    <div padding>\n\n      <ion-grid>\n\n        <div *ngIf="one">\n\n          <ion-row>\n\n            <ion-col col-2 style="font-size: 30px;">\n\n              <ion-icon ios="ios-barcode" md="md-barcode" (click)="scan(1)"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-7>\n\n              <div class="textbox">\n\n                <ion-input [(ngModel)]="onet" placeholder="TRACKING NO." class="inside-text" type="text"></ion-input>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              <div class="textbox">\n\n                <ion-input [(ngModel)]="onei" placeholder="FID" class="inside-text" type="text"></ion-input>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n        <div *ngIf="two">\n\n          <ion-row>\n\n            <ion-col col-2 style="font-size: 30px;">\n\n              <ion-icon ios="ios-barcode" md="md-barcode" (click)="scan(2)"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-7>\n\n              <div class="textbox">\n\n                <ion-input [(ngModel)]="twot" placeholder="TRACKING NO." class="inside-text" type="text"></ion-input>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              <div class="textbox">\n\n                <ion-input [(ngModel)]="twoi" placeholder="FID" class="inside-text" type="text"></ion-input>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n        <div *ngIf="three">\n\n          <ion-row>\n\n            <ion-col col-2 style="font-size: 30px;">\n\n              <ion-icon ios="ios-barcode" md="md-barcode" (click)="scan(3)"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-7>\n\n              <div class="textbox">\n\n                <ion-input [(ngModel)]="threet" placeholder="TRACKING NO." class="inside-text" type="text"></ion-input>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              <div class="textbox">\n\n                <ion-input [(ngModel)]="threei" placeholder="FID" class="inside-text" type="text"></ion-input>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n        <div *ngIf="four">\n\n          <ion-row>\n\n            <ion-col col-2 style="font-size: 30px;">\n\n              <ion-icon ios="ios-barcode" md="md-barcode" (click)="scan(4)"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-7>\n\n              <div class="textbox">\n\n                <ion-input [(ngModel)]="fourt" placeholder="TRACKING NO." class="inside-text" type="text"></ion-input>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              <div class="textbox">\n\n                <ion-input [(ngModel)]="fouri" placeholder="FID" class="inside-text" type="text"></ion-input>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n        <div *ngIf="five">\n\n          <ion-row>\n\n            <ion-col col-2 style="font-size: 30px;">\n\n              <ion-icon ios="ios-barcode" md="md-barcode" (click)="scan( )"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-7>\n\n              <div class="textbox">\n\n                <ion-input [(ngModel)]="fivet" placeholder="TRACKING NO." class="inside-text" type="text"></ion-input>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              <div class="textbox">\n\n                <ion-input [(ngModel)]="fivei" placeholder="FID" class="inside-text" type="text"></ion-input>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n      </ion-grid>\n\n\n\n      <div text-right style="padding-right: 10px;">\n\n        <button color="dark" (click)="add()" ion-button icon-only style="border-radius: 100px;">\n\n          <ion-icon name="add"></ion-icon>\n\n        </button>\n\n      </div>\n\n    </div>\n\n\n\n    <ion-toolbar no-border style="margin-top: 20px; margin-bottom: 20px;">\n\n      <div style="margin-left: 10px; font-size: 16px;">\n\n        NUMBER OF PACKAGE - {{index}}\n\n      </div>\n\n    </ion-toolbar>\n\n\n\n    <div text-center>\n\n      <button ion-button color="dark" style="width: 200px;" (click)="next()" [disabled]="!pickup || !onet">Next</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\pickup\pickup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], PickupPage);
    return PickupPage;
}());

//# sourceMappingURL=pickup.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicktwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var PicktwoPage = (function () {
    function PicktwoPage(navCtrl, navParams, actionSheetCtrl, camera, platform, file, filePath, toastCtrl, loadingCtrl, alertCtrl, transfer, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.platform = platform;
        this.file = file;
        this.filePath = filePath;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.data = data;
        this.images = new Array();
        this.lastImage = null;
        this.imageUrls = [];
        this.tempimages = new Array();
        this.pickup_id = this.navParams.get('pickup_id');
        this.fid = this.navParams.get('fid');
        this.pack = this.navParams.get('pack');
        this.tracking_id = this.navParams.get('tracking_id');
    }
    PicktwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PicktwoPage');
    };
    // Image upload code sector
    PicktwoPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    PicktwoPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 70,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    PicktwoPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            if (_this.platform.is('ios')) {
                newFileName = newFileName.replace(/^file:\/\//, '');
            }
            _this.images.push({ "url": newFileName });
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    PicktwoPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    PicktwoPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    PicktwoPage.prototype.uploadImage = function (vehicle_id) {
        // Destination URL
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        var imageUrls = [];
        for (var i = 0; i < this.images.length; i++) {
            var filename = this.images[i]["url"] + '';
            imageUrls.push(filename);
        }
        this.imageUrls = imageUrls;
        this.runUpload(vehicle_id);
    };
    PicktwoPage.prototype.runUpload = function (vehicle_id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var promisesArray, filesToUpload, _i, filesToUpload_1, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promisesArray = [];
                        filesToUpload = this.imageUrls;
                        for (_i = 0, filesToUpload_1 = filesToUpload; _i < filesToUpload_1.length; _i++) {
                            file = filesToUpload_1[_i];
                            console.log("Starting upload: %s", file);
                            promisesArray.push(this.upload(file, vehicle_id));
                        }
                        return [4 /*yield*/, Promise.all(promisesArray)
                                .then(function (res) {
                                console.log("All uploads done");
                                _this.loading.dismiss();
                                _this.showAlert("Added", "Completely add to pending uploads");
                                //this.navCtrl.setRoot(TabsPage);
                            }, function (firstErr) {
                                console.error("Error uploading file.", firstErr);
                                _this.loading.dismiss();
                                _this.showAlert("Error", "Error while uploading image");
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PicktwoPage.prototype.upload = function (file, vehicle_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = "vehicle/upload?vehicle_id=" + vehicle_id;
            var options = {
                fileKey: "file",
                fileName: 'image.jpg',
                chunkedMode: false,
                mimeType: "multipart/form-data",
            };
            var fileTransfer = _this.transfer.create();
            // File for Upload
            var targetPath = _this.pathForImage(file);
            if (_this.platform.is('ios')) {
                targetPath = targetPath.replace(/^file:\/\//, '');
            }
            // Use the FileTransfer to upload the image
            fileTransfer.upload(targetPath, url, options).then(function (data) {
                if (data) {
                    console.log("Upload %s done", file);
                    resolve(file);
                }
            }, function (err) {
                console.error("Upload %s failed", file);
                console.log(err);
                reject(file);
            });
        });
    };
    PicktwoPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    PicktwoPage.prototype.showAlert = function (topic, msg) {
        var alert = this.alertCtrl.create({
            title: topic,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    PicktwoPage.prototype.deleteNew = function (image) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Delete image?',
            message: 'Are you sure you need to delete this image?',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.presentLoading();
                        _this.tempimages = new Array();
                        for (var i = 0; i < _this.images.length; i++) {
                            if (_this.images[i]['url'] !== image) {
                                _this.tempimages.push(_this.images[i]);
                            }
                        }
                        _this.loader.dismiss();
                        _this.images = _this.tempimages;
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    PicktwoPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 10000
        });
        this.loader.present();
    };
    //pickup_id, fid, pack, description, tracking_id
    PicktwoPage.prototype.submit = function () {
        var _this = this;
        this.presentLoading();
        this.data.addPickup(this.pickup_id, this.fid, this.pack, this.description, this.tracking_id).subscribe(function (data) {
            _this.showAlert("Added", "Completely add to pending uploads");
            _this.loader.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.showAlert("Error", "Not submited");
            _this.loader.dismiss();
        });
    };
    PicktwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-picktwo',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\picktwo\picktwo.html"*/'<ion-header>\n\n\n\n  <ion-navbar text-center>\n\n    <ion-title>PACKAGE PICKUP</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-toolbar no-border>\n\n    <div style="margin-left: 10px; font-size: 16px;">\n\n      DESCRIPTION\n\n    </div>\n\n  </ion-toolbar>\n\n  <br>\n\n  <div class="textbox">\n\n    <ion-textarea [(ngModel)]="description" rows="10" class="inside-text" type="text"></ion-textarea>\n\n  </div>\n\n\n\n  <ion-toolbar no-border style="margin-top: 10px;">\n\n    <div style="margin-left: 10px; font-size: 16px;">\n\n      IMAGES\n\n    </div>\n\n  </ion-toolbar>\n\n  <br>\n\n  <div *ngFor="let image of images" padding>\n\n    <img src="{{pathForImage(image.url)}}">\n\n    <div>\n\n      <ion-icon (click)="deleteNew(image.url)" class="delete" name="trash"></ion-icon>\n\n    </div>\n\n  </div>\n\n\n\n  <div text-right style="padding-right: 10px;">\n\n    <button color="dark" (click)="presentActionSheet()" ion-button icon-only style="border-radius: 100px;">\n\n      <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n\n    </button>\n\n  </div>\n\n\n\n  <div text-center>\n\n    <button ion-button color="dark" style="width: 200px;" (click)="submit()">Next</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\picktwo\picktwo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */]])
    ], PicktwoPage);
    return PicktwoPage;
}());

//# sourceMappingURL=picktwo.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(55);
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
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.open = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\menu\menu.html"*/'<ion-content padding>\n\n  <div text-center style="margin-top: 50px;">\n\n    <img src="assets/imgs/MPAD.png" />\n\n  </div>\n\n\n\n  <div style="margin-top: 20px;">\n\n    <div class="tab" (click)="open()">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <img src="assets/imgs/eight.jpeg" class="image">\n\n          </ion-col>\n\n          <ion-col col-9 class="text" text-center>\n\n            <div>\n\n              INTERNATIONAL MPAD\n\n            </div>\n\n            <div class="sub-text">\n\n              FedEx & TNT\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <div class="tab">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <img src="assets/imgs/six.jpeg" class="image">\n\n          </ion-col>\n\n          <ion-col col-9 class="text" text-center>\n\n            <div>\n\n              DOMESTIC MPAD\n\n            </div>\n\n            <div class="sub-text">\n\n\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <div class="tab">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <img src="assets/imgs/one.jpeg" class="image">\n\n          </ion-col>\n\n          <ion-col col-9 class="text" text-center>\n\n            <div>\n\n              AUTOMATION\n\n            </div>\n\n            <div class="sub-text">\n\n\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		294,
		6
	],
	"../pages/menu/menu.module": [
		295,
		5
	],
	"../pages/pending/pending.module": [
		296,
		4
	],
	"../pages/picklist/picklist.module": [
		297,
		3
	],
	"../pages/picktwo/picktwo.module": [
		298,
		2
	],
	"../pages/pickup/pickup.module": [
		299,
		1
	],
	"../pages/view/view.module": [
		300,
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
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>MY ACTIVITIES</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  \n\n</ion-content>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pickup_pickup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_picktwo_picktwo__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pending_pending__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_picklist_picklist__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_view_view__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_path__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_transfer__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_barcode_scanner__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_api_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_save_save__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_onesignal__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pickup_pickup__["a" /* PickupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_picktwo_picktwo__["a" /* PicktwoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pending_pending__["a" /* PendingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_picklist_picklist__["a" /* PicklistPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_view_view__["a" /* ViewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pending/pending.module#PendingPageModule', name: 'PendingPage', segment: 'pending', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/picklist/picklist.module#PicklistPageModule', name: 'PicklistPage', segment: 'picklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/picktwo/picktwo.module#PicktwoPageModule', name: 'PicktwoPage', segment: 'picktwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pickup/pickup.module#PickupPageModule', name: 'PickupPage', segment: 'pickup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view/view.module#ViewPageModule', name: 'ViewPage', segment: 'view', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pickup_pickup__["a" /* PickupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_picktwo_picktwo__["a" /* PicktwoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pending_pending__["a" /* PendingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_picklist_picklist__["a" /* PicklistPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_view_view__["a" /* ViewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_21__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_save_save__["a" /* SaveProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_onesignal__["a" /* OneSignal */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = {
    //192.168.1.49
    apiUrl: "http://139.59.72.230/index.php/api/",
    siteUrl: "http://speevo.me/",
    brandName: "BuySell",
    brandLogo: "assets/img/logo.png",
    openPageText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //contact us
    address_head: "Central Finance Company PLC",
    address: "Lorem ipsum dolor sit amet",
    email: "email@email.com",
    hotline: "+94 777123234"
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(44);
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
    function MyApp(platform, statusBar, splashScreen, events, storage) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.events = events;
        this.storage = storage;
        this.initializeApp();
        //user name and id 
        events.subscribe('setname', function () {
            storage.get('NAME').then(function (val) {
                _this.name = val;
            });
        });
        events.subscribe('setid', function () {
            storage.get('ID').then(function (val) {
                _this.id = val;
            });
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'HOME', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'md-home' },
            { title: 'MY ACTIVITES', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], icon: 'ios-person' },
            { title: 'LIVE CHAT', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], icon: 'md-send' },
            { title: 'ESGR', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'md-globe' },
            { title: 'SIGN OUT', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], icon: 'log-out' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.storage.get('NAME').then(function (val) {
                if (val) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */];
                }
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            var notificationOpenedCallback = function (jsonData) {
                console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
            };
            // window["plugins"].OneSignal
            //   .startInit("bd6adb16-be61-4dea-93b4-727e69944c3a", "320924028204")
            //   .handleNotificationOpened(notificationOpenedCallback)
            //   .endInit();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-content>\n\n    <diV>\n\n      <div padding text-center>\n\n        <img src="assets/imgs/profile.png" style="border-radius: 180px; height: 80px; margin: 0 auto;" />\n\n      </div>\n\n      <div text-center style="font-size: 16px;">\n\n        {{name}}\n\n        <br> {{id}}\n\n      </div>\n\n      <hr>\n\n    </diV>\n\n    <ion-list>\n\n      <button menuClose ion-item icon-left *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon name="{{p.icon}}" style="font-size: 19px;"></ion-icon>\n\n        &nbsp;&nbsp; {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]) === "function" && _f || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_save_save__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiProvider = (function () {
    function ApiProvider(http, save) {
        this.http = http;
        this.save = save;
        this.url_head = __WEBPACK_IMPORTED_MODULE_2__providers_config__["a" /* AppConfig */].apiUrl;
        this.header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': "application/json", "X-API-KEY": "x#KTjR{+9'9=x2#r" });
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: this.header });
        console.log('Hello ApiProvider Provider');
    }
    ApiProvider.prototype.login = function (id) {
        return this.http.get(this.url_head + 'mpad/courier/courier/id/' + id)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.pendingPickUp = function (id) {
        return this.http.get(this.url_head + 'mpad/courier/cpickup/id/' + id)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.getExceptions = function (id) {
        return this.http.get(this.url_head + 'mpad/settings/execption/id/' + '1')
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.getOnePick = function (id) {
        return this.http.get(this.url_head + 'mpad/pickup/pickup/id/' + id)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.addPickup = function (pickup_id, fid, pack, description, tracking_id) {
        var data = {
            pickup_id: pickup_id,
            fid: fid,
            pack: pack,
            description: description,
            tracking_id: tracking_id,
            exception: '-999',
            courier: this.save.id,
            date: ''
        };
        console.log(data);
        return this.http.put(this.url_head + 'mpad/pickup/pickupsummary', data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.addError = function (pickup_id, exception) {
        var data = {
            pickup_id: pickup_id,
            fid: '',
            pack: '',
            description: '',
            tracking_id: '',
            exception: exception,
            courier: this.save.id,
            date: ''
        };
        return this.http.put(this.url_head + 'mpad/pickup/pickupsummary', data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.adDeviceId = function (fid, deviceid) {
        var data = {
            fedexid: fid,
            device: deviceid
        };
        return this.http.put(this.url_head + 'mpad/courier/device', data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_save_save__["a" /* SaveProvider */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pending_pending__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_picklist_picklist__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_save_save__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_api__ = __webpack_require__(31);
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
    function HomePage(navCtrl, save, storage, events, one, alertCtrl, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.save = save;
        this.storage = storage;
        this.events = events;
        this.one = one;
        this.alertCtrl = alertCtrl;
        this.api = api;
        storage.get('NAME').then(function (val) {
            _this.save.name = val;
            _this.events.publish('setname');
        });
        storage.get('ID').then(function (val) {
            _this.save.id = val;
            _this.events.publish('setid');
            _this.one.getIds().then(function (data) {
                _this.id = data.userId;
                _this.saveDeviceId();
            });
        });
    }
    HomePage.prototype.pick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_picklist_picklist__["a" /* PicklistPage */]);
    };
    HomePage.prototype.pending = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_pending_pending__["a" /* PendingPage */]);
    };
    HomePage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.saveDeviceId = function () {
        this.api.adDeviceId(this.save.id, this.id).subscribe(function (err) {
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div style="font-size: 25px; font-weight: 500; margin-left: 50px;">\n\n      MPAD MHEL\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6 text-left>\n\n          <img src="assets/imgs/fedex.png" style="height: 40px;" />\n\n        </ion-col>\n\n        <ion-col col-6 text-right>\n\n          <img src="assets/imgs/tnt.svg" style="height: 40px;" />\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <div padding style="padding-top: 40px;">\n\n    <div class="tab">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <img src="assets/imgs/one.jpeg" class="image">\n\n          </ion-col>\n\n          <ion-col col-9 class="text">DELIVERY</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <div class="tab" (click)="pick()">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <img src="assets/imgs/two.jpeg" class="image">\n\n          </ion-col>\n\n          <ion-col col-9 class="text">PICKUP</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <div class="tab">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <img src="assets/imgs/three.jpeg" class="image">\n\n          </ion-col>\n\n          <ion-col col-9 class="text">INBOUND</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <div class="tab">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <img src="assets/imgs/four.jpeg" class="image">\n\n          </ion-col>\n\n          <ion-col col-9 class="text">OUTBOUND</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <div class="tab">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <img src="assets/imgs/five.jpeg" class="image">\n\n          </ion-col>\n\n          <ion-col col-9 class="text">PAYMENT</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <div class="tab" (click)="pending()">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <img src="assets/imgs/six.jpeg" class="image">\n\n          </ion-col>\n\n          <ion-col col-9 class="text">PENDING UPLOADES</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <div class="tab">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <img src="assets/imgs/seven.jpeg" class="image">\n\n          </ion-col>\n\n          <ion-col col-9 class="text">SETTINGS</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_save_save__["a" /* SaveProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_api_api__["a" /* ApiProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the SaveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SaveProvider = (function () {
    function SaveProvider() {
        console.log('Hello SaveProvider Provider');
    }
    SaveProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SaveProvider);
    return SaveProvider;
}());

//# sourceMappingURL=save.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_save_save__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, data, alertCtrl, loadingCtrl, storage, events, save) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.events = events;
        this.save = save;
        this.login = true;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.create = function () {
        this.login = false;
    };
    LoginPage.prototype.log = function () {
        var _this = this;
        this.presentLoading();
        this.data.login(this.id).subscribe(function (data) {
            if (data.password == _this.password) {
                _this.storage.set('NAME', data.first_name + " " + data.last_name);
                _this.storage.set('ID', data.fedexid);
                _this.save.name = data.first_name + " " + data.last_name;
                _this.save.id = data.id;
                _this.events.publish('setname');
                _this.events.publish('setid');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
                _this.loader.dismiss();
            }
            else {
                _this.loader.dismiss();
                _this.showAlert('Error', 'Invalid login details');
            }
        }, function (err) {
            _this.loader.dismiss();
            _this.showAlert('Error', 'Invalid login details');
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 5000
        });
        this.loader.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\login\login.html"*/'<ion-content padding>\n\n  <div text-center style="margin-top: 80px;">\n\n    <img src="assets/imgs/fedex.png" style="height: 60px;" />\n\n  </div>\n\n\n\n  <div padding *ngIf="login">\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label  class="tag" floating>FedEx ID</ion-label>\n\n        <ion-input color="dark" [(ngModel)]="id" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label class="tag" floating>Password</ion-label>\n\n        <ion-input color="dark" [(ngModel)]="password" type="password"></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <div padding>\n\n      <button ion-button full (click)="log()" color="dark">Sign In</button>\n\n    </div>\n\n  </div>\n\n\n\n  <div padding *ngIf="!login">\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Username</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <div padding>\n\n      <button ion-button full (click)="register()">Register</button>\n\n    </div>\n\n\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_save_save__["a" /* SaveProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map