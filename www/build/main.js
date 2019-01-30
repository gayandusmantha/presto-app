webpackJsonp([13],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliverydonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(35);
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
 * Generated class for the DeliverydonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DeliverydonePage = (function () {
    function DeliverydonePage(navCtrl, navParams, data, loadingCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.exceptions = new Array();
        this.expshow = false;
        this.tracking = new Array();
        this.number = 1;
        this.id = this.navParams.get('id');
        this.data.trackingDelivery(this.id).subscribe(function (data) {
            _this.tracking = data;
        });
        this.data.getExceptions('2').subscribe(function (data) {
            _this.exceptions = data;
        });
    }
    DeliverydonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeliverydonePage');
        this.number = 5;
    };
    DeliverydonePage.prototype.itemSelected = function (item) {
        this.exp = item;
    };
    DeliverydonePage.prototype.no = function () {
        this.expshow = true;
    };
    DeliverydonePage.prototype.yes = function () {
        this.expshow = false;
    };
    DeliverydonePage.prototype.submitcomplte = function () {
        var _this = this;
        this.presentLoading();
        this.data.completeDelivery(this.id, this.collected).subscribe(function (data) {
            _this.showAlert("Completed", "Delivery Complete Success");
            _this.loader.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.showAlert("Error", "Not submited");
            _this.loader.dismiss();
        });
    };
    DeliverydonePage.prototype.submit = function () {
        var _this = this;
        this.presentLoading();
        this.data.deliveryError(this.id, this.exp).subscribe(function (data) {
            _this.showAlert("Added", "Delivery Exception Added");
            _this.loader.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.showAlert("Error", "Not submited");
            _this.loader.dismiss();
        });
    };
    DeliverydonePage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 10000
        });
        this.loader.present();
    };
    DeliverydonePage.prototype.showAlert = function (topic, msg) {
        var alert = this.alertCtrl.create({
            title: topic,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    DeliverydonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deliverydone',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\deliverydone\deliverydone.html"*/'<!--\n  Generated template for the DeliverydonePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Delivery Done </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-toolbar no-border>\n        <div style="margin-left: 10px; font-size: 16px;">\n          PACKAGE(S)  DELIVERD\n        </div>\n      </ion-toolbar>\n      <div>\n        <ion-list radio-group [(ngModel)]="pickup">\n          <ion-item no-lines>\n            <ion-label color="dark">Yes</ion-label>\n            <ion-radio (click)="yes()" value="yes" color="dark"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label color="dark">No</ion-label>\n            <ion-radio (click)="no()" color="dark" value="no"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </div>\n      <div padding *ngIf="expshow">\n          <ion-list style="border-style: solid; color: red;">\n            <button style="color: rgb(236, 89, 89);" ion-item *ngFor="let exp of exceptions" (click)="itemSelected(exp.id)">\n              {{ exp.message }}\n            </button>\n          </ion-list>\n      \n          <ion-toolbar no-border style="margin-top: 20px;">\n            <div style="margin-left: 10px; font-size: 16px;">\n              EXCEPTION\n            </div>\n          </ion-toolbar>\n          <div class="exp">\n            {{exp}}\n            <br>\n            <br>\n          </div>\n      \n          <div text-center>\n            <button ion-button color="dark" style="width: 200px;" (click)="submit()" [disabled]="!exp">Submit</button>\n          </div>\n        </div>\n        <div *ngIf="!expshow">\n            <ion-toolbar no-border style="margin-top: 20px;">\n              <div style="margin-left: 10px; font-size: 16px;">\n                TRACKING NUMBER(S)  \n              </div>\n            </ion-toolbar>\n           \n            <ul>\n                <li *ngFor="let choice of tracking" >\n                    {{choice.item_name}}\n                    <ul>\n                        <li *ngFor="let qualifica of choice.tracking">\n                            {{ qualifica.tracking }}                               \n                        </li>\n                     </ul>\n                </li>\n              </ul>\n\n              <ion-item>\n                  <ion-label> Collected By  </ion-label>\n                  <ion-textarea [(ngModel)]="collected" name="description"></ion-textarea>\n                   {{ collected }}\n                </ion-item>\n\n                <div text-center>\n                <button ion-button color="dark" style="width: 200px;" (click)="submitcomplte()" [disabled]="!collected" >Next</button>\n                  </div>\n            \n        </div>\n\n</ion-content>\n'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\deliverydone\deliverydone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], DeliverydonePage);
    return DeliverydonePage;
}());

//# sourceMappingURL=deliverydone.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_save_save__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_view_view__ = __webpack_require__(110);
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
            selector: 'page-picklist',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\picklist\picklist.html"*/'<!--\n\n  Generated template for the PicklistPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar text-center>\n\n    <ion-title>PENDING PICKUPS </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding *ngIf="show">\n\n    <ion-list>\n\n        <ion-item *ngFor="let pick of picks" (click)="open(pick.id)">  \n\n            <div text-right style="padding-right: 5px; font-weight: 500;">\n\n                #{{pick.id}}\n\n            </div>        \n\n          <h2> Customer Order ID   {{pick.ref}} </h2>\n\n          <h1> Supplier  {{pick.supplier}} </h1>\n\n          <h3> Item ID : {{pick.itemid}}  /   \n\n               Item Name  : {{pick.itemname}}  /\n\n               Qty  : {{pick.qty}} </h3>\n\n          <p>  Created  : {{pick.created_at}} </p>\n\n        </ion-item>\n\n      </ion-list>  \n\n</ion-content>\n\n\n\n<ion-content padding *ngIf="!show">\n\n  <div text-center style="font-size: 18px; font-weight: 500; margin-top: 170px;">\n\n    NO MORE PICKUPS\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\picklist\picklist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_save_save__["a" /* SaveProvider */]])
    ], PicklistPage);
    return PicklistPage;
}());

//# sourceMappingURL=picklist.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pickup_pickup__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
            _this.item_name = data[0].item_name;
            _this.qty = data[0].qty;
            _this.order_id = data[0].order_id;
            _this.created_at = data[0].created_at;
            _this.supplier = data[0].supplier;
            _this.supaddress = data[0].supaddress;
            _this.supphone = data[0].supphone;
            _this.item_id = data[0].item_id;
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
            qty: this.qty
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_pickup_pickup__["a" /* PickupPage */], data);
    };
    ViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\view\view.html"*/'<!--\n\n  Generated template for the ViewPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center> PICKUP INFO</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div *ngIf="show">\n\n    <ion-toolbar no-border class="head">\n\n      <div>\n\n        ORDER ID\n\n      </div>\n\n    </ion-toolbar>\n\n    <div class="body">\n\n      {{order_id}}\n\n    </div>\n\n    <br>\n\n    <ion-toolbar no-border class="head">\n\n      <div>\n\n        SUPPLIER\n\n      </div>\n\n    </ion-toolbar>\n\n    <div class="body">\n\n       <h2>  {{supplier}} </h2>\n\n      <br> PHONE  - {{supphone}}\n\n      <br> ADDRESS  - {{supaddress}}\n\n    </div>\n\n    <br>\n\n    <ion-toolbar no-border class="head">\n\n      <div>\n\n        INFORMATIONS\n\n      </div>\n\n    </ion-toolbar>\n\n    <div class="body">\n\n       ITEM NAME   - {{item_name}}      \n\n      <br>  ITEM CODE   - {{item_id}}\n\n      <br>  QTY   - {{qty}}\n\n    </div>\n\n    <br> \n\n    <div padding>\n\n      <button ion-button full (click)="next()" color="dark">NEXT</button>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\view\view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ViewPage);
    return ViewPage;
}());

//# sourceMappingURL=view.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_picktwo_picktwo__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PickupPage = (function () {
    function PickupPage(navCtrl, navParams, barcodeScanner, alertCtrl, actionSheetCtrl, data, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.data = data;
        this.loadingCtrl = loadingCtrl;
        this.datatset = [];
        this.exceptions = new Array();
        this.picks = new Array();
        this.expshow = false;
        this.qty2 = 0;
        this.onet = false;
        this.userval = undefined;
        this.pickup = false;
        this.pickid = "";
        this.fid = "";
        this.pid = this.navParams.get('id');
        this.qty = this.navParams.get('qty');
    }
    PickupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        for (var i = 1; i <= this.qty; i++) {
            var item = { "name": "" };
            this.datatset.unshift(item);
        }
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
            orientation: 'portrait'
        };
        this.barcodeScanner.scan(this.option).then(function (barcodeData) {
            var data = barcodeData.text;
            _this.array = data.toString();
            _this.number = 1;
            _this.userval = _this.array.substring(0, 12);
            for (var _i = 0, _a = _this.datatset; _i < _a.length; _i++) {
                var data_1 = _a[_i];
                console.log(data_1['name']);
                if (data_1['name'] == _this.userval) {
                    _this.number = 2;
                    console.log("wrong");
                }
            }
            if (_this.number == 1) {
                _this.qty2 += 1;
                var item = { "name": _this.userval };
                _this.datatset[num] = item;
            }
            if (_this.qty == _this.qty2) {
                _this.onet = true;
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
        this.pickup = true;
    };
    PickupPage.prototype.itemSelected = function (item) {
        this.exp = item;
    };
    PickupPage.prototype.submit = function () {
        var _this = this;
        this.presentLoading();
        this.data.addError(this.pid, this.exp).subscribe(function (data) {
            _this.showAlert("Completed", "Exception Completed Successfully.");
            _this.loader.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.showAlert("Error", "Not submited");
            _this.loader.dismiss();
        });
    };
    PickupPage.prototype.next = function () {
        var data = {
            pickup_id: this.pid,
            pack: this.qty,
            tracking_id: this.datatset
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_picktwo_picktwo__["a" /* PicktwoPage */], data);
    };
    PickupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pickup',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\pickup\pickup.html"*/'<ion-header>\n\n\n\n  <ion-navbar text-center>\n\n    <ion-title>PICKUP DETAILS</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-toolbar no-border>\n\n    <div style="margin-left: 10px; font-size: 16px;">\n\n      PACKAGE(S) PICKED UP\n\n    </div>\n\n  </ion-toolbar>\n\n  <div>\n\n    <ion-list radio-group [(ngModel)]="pickup">\n\n      <ion-item no-lines>\n\n        <ion-label color="dark">Yes</ion-label>\n\n        <ion-radio (click)="yes()" value="yes" color="dark"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="dark">No</ion-label>\n\n        <ion-radio (click)="no()" color="dark" value="no"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n\n\n  <div padding *ngIf="expshow">\n\n    <ion-list style="border-style: solid; color: red;">\n\n      <button style="color: rgb(236, 89, 89);" ion-item *ngFor="let exp of exceptions" (click)="itemSelected(exp.id)">\n\n        {{ exp.message }}\n\n      </button>\n\n    </ion-list>\n\n\n\n    <ion-toolbar no-border style="margin-top: 20px;">\n\n      <div style="margin-left: 10px; font-size: 16px;">\n\n        EXCEPTION\n\n      </div>\n\n    </ion-toolbar>\n\n    <div class="exp">\n\n      {{exp}}\n\n      <br>\n\n      <br>\n\n    </div>\n\n\n\n    <div text-center>\n\n      <button ion-button color="dark" style="width: 200px;" (click)="submit()" [disabled]="!exp">Submit</button>\n\n    </div>\n\n  </div>\n\n\n\n  <div *ngIf="!expshow">\n\n    <ion-toolbar no-border style="margin-top: 20px;">\n\n      <div style="margin-left: 10px; font-size: 16px;">\n\n        TRACKING NUMBER(S)  \n\n      </div>\n\n    </ion-toolbar>\n\n    <div style="font-size: 12px;" text-center padding>\n\n      Enter the tracking number manually or click on barcode scanner icon\n\n    </div>\n\n\n\n    <div padding>\n\n        <ion-grid>\n\n            <ion-row *ngFor="let s of datatset;  let i = index">\n\n                <ion-col col-2 style="font-size: 30px;">\n\n                    <ion-icon ios="ios-barcode" md="md-barcode" (click)="scan(i)"></ion-icon>\n\n                  </ion-col>\n\n            <ion-col col-8>\n\n                <div class="textbox">\n\n              <ion-input  [(ngModel)]="s.name"  placeholder="TRACKING NO." class="inside-text" type="text" ></ion-input>  \n\n              </div>              \n\n              </ion-col>  \n\n        </ion-row>    \n\n      </ion-grid>     \n\n    </div>\n\n\n\n    <ion-toolbar no-border style="margin-top: 20px; margin-bottom: 20px;">\n\n      <div style="margin-left: 10px; font-size: 16px;">\n\n        NUMBER OF PACKAGE -  {{qty}}\n\n      </div>\n\n    </ion-toolbar>\n\n\n\n    <div text-center>\n\n      <button ion-button color="dark" style="width: 200px;" (click)="next()" [disabled]="!pickup || !onet">Next</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\pickup\pickup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], PickupPage);
    return PickupPage;
}());

//# sourceMappingURL=pickup.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicktwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        this.tracking_id = [];
        this.pickup_id = this.navParams.get('pickup_id');
        this.qty = this.navParams.get('qty');
        this.tracking_id = this.navParams.get('tracking_id');
    }
    PicktwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PicktwoPage');
    };
    PicktwoPage.prototype.showAlert = function (topic, msg) {
        var alert = this.alertCtrl.create({
            title: topic,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    PicktwoPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 10000
        });
        this.loader.present();
    };
    PicktwoPage.prototype.submit = function () {
        var _this = this;
        this.presentLoading();
        this.data.addPickup(this.pickup_id, this.qty, this.description, this.tracking_id).subscribe(function (data) {
            _this.showAlert("Completed", "Pickup Compelted Successfully.");
            _this.loader.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.showAlert("Error", "Not submited");
            _this.loader.dismiss();
        });
    };
    PicktwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-picktwo',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\picktwo\picktwo.html"*/'<ion-header>\n\n\n\n  <ion-navbar text-center>\n\n    <ion-title>PACKAGE PICKUP</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-toolbar no-border>\n\n    <div style="margin-left: 10px; font-size: 16px;">\n\n      DESCRIPTION\n\n    </div>\n\n  </ion-toolbar>\n\n  <br>\n\n  <div class="textbox">\n\n    <ion-textarea [(ngModel)]="description" rows="3" class="inside-text" type="text"></ion-textarea>\n\n  </div>\n\n\n\n  <ion-item *ngFor="let s of tracking_id" >           \n\n      <h2> {{s.name}} </h2>               \n\n    </ion-item>\n\n \n\n\n\n  <div text-center>\n\n    <button ion-button color="dark" style="width: 200px;" (click)="submit()">Next</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\picktwo\picktwo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */]])
    ], PicktwoPage);
    return PicktwoPage;
}());

//# sourceMappingURL=picktwo.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VanscanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(13);
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
 * Generated class for the VanscanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VanscanPage = (function () {
    function VanscanPage(navCtrl, navParams, alertCtrl, barcodeScanner, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.barcodeScanner = barcodeScanner;
        this.data = data;
        this.onet = undefined;
        this.datatset = [];
        this.number = 1;
        this.count = 0;
    }
    VanscanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VanscanPage');
    };
    VanscanPage.prototype.showAlert = function (topic, msg) {
        var alert = this.alertCtrl.create({
            title: topic,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    VanscanPage.prototype.scan = function () {
        var _this = this;
        this.option = {
            prompt: 'SCAN BARCODE CODE',
            resultDisplayDuration: 0,
            showTorchButton: true,
            orientation: 'portrait'
        };
        this.barcodeScanner.scan(this.option).then(function (barcodeData) {
            var data = barcodeData.text;
            _this.array = data.toString();
            _this.onet = _this.array.substring(0, 12);
            _this.datatset['name'] = _this.onet;
            var item = { "name": _this.onet };
            _this.number = 1;
            for (var _i = 0, _a = _this.datatset; _i < _a.length; _i++) {
                var data_1 = _a[_i];
                console.log(data_1['name']);
                console.log(_this.onet);
                if (data_1['name'] == _this.onet) {
                    _this.number = 2;
                    console.log("wrong");
                }
            }
            if (_this.number == 1) {
                _this.datatset.unshift(item);
                _this.count += 1;
            }
            _this.onet = "";
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    VanscanPage.prototype.remo = function (value) {
        this.datatset.splice(value, 1);
        this.count -= 1;
    };
    VanscanPage.prototype.submit = function () {
        var _this = this;
        this.data.addVanScan(this.datatset).subscribe(function (data) {
            _this.showAlert("Added", "Completely add to pending uploads");
        }, function (err) {
            _this.showAlert("Error", "Not submited");
        });
    };
    VanscanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vanscan',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\vanscan\vanscan.html"*/'<!--\n  Generated template for the VanscanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> VAN SCAN </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div>\n        <ion-row>\n         <p>  Number of package(s) :  {{ count }} </p>\n         <p>  Tracking Number(s) </p>\n         <p>  Enter the tracking number manually or click on barcoard\n            scanner icon </p>\n        </ion-row>\n        <ion-row>\n          <ion-col col-2 style="font-size: 30px;">\n            <ion-icon ios="ios-barcode" md="md-barcode" (click)="scan()"></ion-icon>\n          </ion-col>\n          <ion-col col-10>\n            <div class="textbox">\n              <ion-input [(ngModel)]="onet" placeholder="TRACKING NO." class="inside-text" type="text"></ion-input>\n            </div>\n          </ion-col>          \n        </ion-row>\n      </div>\n      <ion-item *ngFor="let s of datatset;  let i = index" >           \n        <h2> {{s.name}}   <a class="btn" (click)="remo(i)">Delete</a></h2>                 \n      </ion-item>\n      <button ion-button  (click)="submit()">SUBMIT </button>\n</ion-content>\n'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\vanscan\vanscan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], VanscanPage);
    return VanscanPage;
}());

//# sourceMappingURL=vanscan.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliverylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_save_save__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_deliveryview_deliveryview__ = __webpack_require__(115);
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
 * Generated class for the DeliverylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DeliverylistPage = (function () {
    function DeliverylistPage(navCtrl, navParams, data, save, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.save = save;
        this.loadingCtrl = loadingCtrl;
        this.deliver = new Array();
        this.show = true;
    }
    DeliverylistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.presentLoading();
        console.log('ionViewDidLoad DeliverylistPage');
        this.data.pendingDelivery(this.save.id).subscribe(function (data) {
            _this.deliver = data;
            _this.loader.dismiss();
        });
    };
    DeliverylistPage.prototype.open = function (id) {
        var data = {
            id: id
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_deliveryview_deliveryview__["a" /* DeliveryviewPage */], data);
    };
    DeliverylistPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 5000
        });
        this.loader.present();
    };
    DeliverylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deliverylist',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\deliverylist\deliverylist.html"*/'<!--\n  Generated template for the DeliverylistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> Delivery List </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="show">\n  <ion-list>\n      <ion-item *ngFor="let pick of deliver" (click)="open(pick.id)">  \n          <div text-right style="padding-right: 5px; font-weight: 500;">\n              #{{pick.id}}\n          </div>        \n        <h2> Customer Order ID   {{pick.order_id}} </h2>\n        <h1> Supplier  {{pick.amount}} </h1>\n        <h3> Item ID : {{pick.order_time}}  /   \n             Item Name  : {{pick.order_time}}  /\n             Qty  : {{pick.order_time}} </h3>\n        <p>  Created  : {{pick.order_time}} </p>\n      </ion-item>\n    </ion-list>  \n</ion-content>\n<ion-content padding *ngIf="!show">\n  <div text-center style="font-size: 18px; font-weight: 500; margin-top: 170px;">\n    NO MORE PICKUPS\n  </div>\n</ion-content>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\deliverylist\deliverylist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_save_save__["a" /* SaveProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], DeliverylistPage);
    return DeliverylistPage;
}());

//# sourceMappingURL=deliverylist.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_deliverydone_deliverydone__ = __webpack_require__(107);
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
 * Generated class for the DeliveryviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DeliveryviewPage = (function () {
    function DeliveryviewPage(navCtrl, data, navParams, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.data = data;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.order_id = new Array();
        this.tracking = new Array();
        this.presentLoading();
        this.id = this.navParams.get('id');
        this.data.getOneDelivery(this.id).subscribe(function (data) {
            _this.order_id = data;
            //this.loader.dismiss();  
        });
        this.data.trackingDelivery(this.id).subscribe(function (data) {
            _this.tracking = data;
            _this.loader.dismiss();
        });
    }
    DeliveryviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeliveryviewPage');
    };
    DeliveryviewPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 10000
        });
        this.loader.present();
    };
    DeliveryviewPage.prototype.next = function () {
        var data = {
            id: this.id
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_deliverydone_deliverydone__["a" /* DeliverydonePage */], data);
    };
    DeliveryviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deliveryview',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\deliveryview\deliveryview.html"*/'<!--\n  Generated template for the DeliveryviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title> Delivery  Info   </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>     \n      <div>\n        <div *ngFor="let choice of order_id" > \n            <ion-toolbar no-border class="head">\n                <div>\n                Delivery INFO \n                </div>\n              </ion-toolbar>   \n              <div class="body">\n                  Order ID  :  {{choice.order_id}} <br>\n                  Payment Method  :  {{choice.payment_method}} <br>\n                  Amount   :  {{choice.amount}}  <br>\n                  Customer Name :  {{choice.customer}}  <br>\n                  Customer Address :   {{choice.customeraddress}}  <br>\n                  Customer Phone :  {{choice.custoemrphone}}  <br>\n                </div>               \n                <div *ngFor="let qualifica of choice.item">\n                   Item Name  {{ qualifica.item_name }} <br>\n                   Qty   {{ qualifica.qty }}                                   \n                </div>\n             \n              </div>\n    </div>\n    <p> TRACKING NUMBERS  </p>\n      <ul>\n          <li *ngFor="let choice of tracking" >\n              {{choice.item_name}}\n              <ul>\n                  <li *ngFor="let qualifica of choice.tracking">\n                      {{ qualifica.tracking }}\n                  </li>\n               </ul>\n          </li>\n        </ul>\n        <div text-center>\n            <button ion-button color="dark" style="width: 200px;" (click)="next()" >Next</button>\n          </div>\n</ion-content>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\deliveryview\deliveryview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], DeliveryviewPage);
    return DeliveryviewPage;
}());

//# sourceMappingURL=deliveryview.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupsummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_save_save__ = __webpack_require__(32);
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
 * Generated class for the PickupsummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PickupsummaryPage = (function () {
    function PickupsummaryPage(navCtrl, navParams, data, storage, alertCtrl, loadingCtrl, save) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.save = save;
        this.picks = new Array();
    }
    PickupsummaryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.presentLoading();
        console.log(this.save.id);
        this.data.completePickUp(this.save.id).subscribe(function (data) {
            _this.picks = data;
            _this.loader.dismiss();
        });
    };
    PickupsummaryPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 5000
        });
        this.loader.present();
    };
    PickupsummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pickupsummary',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\pickupsummary\pickupsummary.html"*/'<!--\n  Generated template for the PickupsummaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar text-center>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title> PICKUP SUMMARY </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding  >\n    <ion-list>\n        <ion-item *ngFor="let pick of picks" (click)="open(pick.id)">          \n          <h2>   {{pick.ref}} </h2>\n          <h3>  Customer Name : {{pick.customer}} </h3>\n          <p>     Order Date  : {{pick.pickup_date}}  #{{pick.id}} </p>\n        </ion-item>\n      </ion-list> \n</ion-content>\n\n '/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\pickupsummary\pickupsummary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_save_save__["a" /* SaveProvider */]])
    ], PickupsummaryPage);
    return PickupsummaryPage;
}());

//# sourceMappingURL=pickupsummary.js.map

/***/ }),

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_save_save__ = __webpack_require__(32);
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
        this.header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ "X-API-KEY": "x#KTjR{+9'9=x2#r" });
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
    ApiProvider.prototype.completePickUp = function (id) {
        return this.http.get(this.url_head + 'mpad/courier/compickup/id/' + id)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.getExceptions = function (id) {
        return this.http.get(this.url_head + 'mpad/settings/execption/id/' + id)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.pendingDelivery = function (id) {
        return this.http.get(this.url_head + 'mpad/dispatch/dispatch/id/' + id)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.trackingDelivery = function (id) {
        return this.http.get(this.url_head + 'mpad/dispatch/tracking/id/' + id)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.getOneDelivery = function (id) {
        return this.http.get(this.url_head + 'mpad/dispatch/dispatchone/id/' + id)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.getOnePick = function (id) {
        return this.http.get(this.url_head + 'mpad/pickup/pickup/id/' + id)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.addVanScan = function (data) {
        var val = {
            tracking: data,
            courier: this.save.id
        };
        return this.http.put(this.url_head + 'mpad/dispatch/vanscan', val)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.addPickup = function (pickup_id, qty, description, tracking_id) {
        var data = {
            pickup_id: pickup_id,
            description: description,
            tracking_id: tracking_id,
            exception: '-999',
            courier: this.save.id
        };
        console.log(data);
        return this.http.put(this.url_head + 'mpad/pickup/pickupsummary', data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.addError = function (pickup_id, exception) {
        var data = {
            pickup_id: pickup_id,
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
    ApiProvider.prototype.completeDelivery = function (orderid, description) {
        var data = {
            orderid: orderid,
            description: description,
            exception: '-999',
            courier: this.save.id
        };
        console.log(data);
        return this.http.put(this.url_head + 'mpad/dispatch/dispatchsummary', data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.deliveryError = function (orderid, exception) {
        var data = {
            orderid: orderid,
            description: "",
            exception: exception,
            courier: this.save.id
        };
        return this.http.put(this.url_head + 'mpad/dispatch/dispatchsummary', data, this.options)
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

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/deliveryconfirm/deliveryconfirm.module": [
		300,
		12
	],
	"../pages/deliverydone/deliverydone.module": [
		301,
		11
	],
	"../pages/deliverylist/deliverylist.module": [
		302,
		10
	],
	"../pages/deliveryview/deliveryview.module": [
		303,
		9
	],
	"../pages/login/login.module": [
		304,
		8
	],
	"../pages/menu/menu.module": [
		305,
		7
	],
	"../pages/pending/pending.module": [
		306,
		6
	],
	"../pages/picklist/picklist.module": [
		307,
		5
	],
	"../pages/picktwo/picktwo.module": [
		308,
		4
	],
	"../pages/pickup/pickup.module": [
		309,
		3
	],
	"../pages/pickupsummary/pickupsummary.module": [
		310,
		2
	],
	"../pages/vanscan/vanscan.module": [
		311,
		1
	],
	"../pages/view/view.module": [
		312,
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
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryconfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the DeliveryconfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DeliveryconfirmPage = (function () {
    function DeliveryconfirmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DeliveryconfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeliveryconfirmPage');
    };
    DeliveryconfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deliveryconfirm',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\deliveryconfirm\deliveryconfirm.html"*/'<!--\n  Generated template for the DeliveryconfirmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>deliveryconfirm</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\deliveryconfirm\deliveryconfirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DeliveryconfirmPage);
    return DeliveryconfirmPage;
}());

//# sourceMappingURL=deliveryconfirm.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pickup_pickup__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_picktwo_picktwo__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pending_pending__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_picklist_picklist__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_view_view__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pickupsummary_pickupsummary__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_vanscan_vanscan__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_deliverylist_deliverylist__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_deliveryview_deliveryview__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_deliverydone_deliverydone__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_deliveryconfirm_deliveryconfirm__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_path__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_transfer__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_barcode_scanner__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_save_save__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_onesignal__ = __webpack_require__(175);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_view_view__["a" /* ViewPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pickupsummary_pickupsummary__["a" /* PickupsummaryPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_vanscan_vanscan__["a" /* VanscanPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_deliverylist_deliverylist__["a" /* DeliverylistPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_deliveryview_deliveryview__["a" /* DeliveryviewPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_deliverydone_deliverydone__["a" /* DeliverydonePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_deliveryconfirm_deliveryconfirm__["a" /* DeliveryconfirmPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/deliveryconfirm/deliveryconfirm.module#DeliveryconfirmPageModule', name: 'DeliveryconfirmPage', segment: 'deliveryconfirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deliverydone/deliverydone.module#DeliverydonePageModule', name: 'DeliverydonePage', segment: 'deliverydone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deliverylist/deliverylist.module#DeliverylistPageModule', name: 'DeliverylistPage', segment: 'deliverylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deliveryview/deliveryview.module#DeliveryviewPageModule', name: 'DeliveryviewPage', segment: 'deliveryview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pending/pending.module#PendingPageModule', name: 'PendingPage', segment: 'pending', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/picklist/picklist.module#PicklistPageModule', name: 'PicklistPage', segment: 'picklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/picktwo/picktwo.module#PicktwoPageModule', name: 'PicktwoPage', segment: 'picktwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pickup/pickup.module#PickupPageModule', name: 'PickupPage', segment: 'pickup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pickupsummary/pickupsummary.module#PickupsummaryPageModule', name: 'PickupsummaryPage', segment: 'pickupsummary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vanscan/vanscan.module#VanscanPageModule', name: 'VanscanPage', segment: 'vanscan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view/view.module#ViewPageModule', name: 'ViewPage', segment: 'view', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_28__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
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
                __WEBPACK_IMPORTED_MODULE_13__pages_view_view__["a" /* ViewPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pickupsummary_pickupsummary__["a" /* PickupsummaryPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_vanscan_vanscan__["a" /* VanscanPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_deliverylist_deliverylist__["a" /* DeliverylistPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_deliveryview_deliveryview__["a" /* DeliveryviewPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_deliverydone_deliverydone__["a" /* DeliverydonePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_deliveryconfirm_deliveryconfirm__["a" /* DeliveryconfirmPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_27__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_save_save__["a" /* SaveProvider */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_onesignal__["a" /* OneSignal */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
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

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pickupsummary_pickupsummary__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(36);
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
            { title: 'PICKUP SUMMARY', component: __WEBPACK_IMPORTED_MODULE_7__pages_pickupsummary_pickupsummary__["a" /* PickupsummaryPage */], icon: 'ios-person' },
            { title: 'LIVE CHAT', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], icon: 'md-send' },
            { title: 'SIGN OUT', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'log-out' }
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
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                }
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            var notificationOpenedCallback = function (jsonData) {
                console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
            };
            window["plugins"].OneSignal
                .startInit("bd6adb16-be61-4dea-93b4-727e69944c3a", "320924028204")
                .handleNotificationOpened(notificationOpenedCallback)
                .endInit();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-content>\n\n    <diV>\n\n      <div padding text-center>\n\n        <img src="assets/imgs/profile.png" style="border-radius: 180px; height: 80px; margin: 0 auto;" />\n\n      </div>\n\n      <div text-center style="font-size: 16px;">\n\n        {{name}}\n\n        <br> {{id}}\n\n      </div>\n\n      <hr>\n\n    </diV>\n\n    <ion-list>\n\n      <button menuClose ion-item icon-left *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon name="{{p.icon}}" style="font-size: 19px;"></ion-icon>\n\n        &nbsp;&nbsp; {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pending_pending__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_picklist_picklist__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_vanscan_vanscan__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_save_save__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_deliverylist_deliverylist__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_api__ = __webpack_require__(13);
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
    HomePage.prototype.delivery = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_deliverylist_deliverylist__["a" /* DeliverylistPage */]);
    };
    HomePage.prototype.vanscan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_vanscan_vanscan__["a" /* VanscanPage */]);
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
            selector: 'page-home',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div style="font-size: 25px; font-weight: 500; margin-left: 50px;">\n\n      PRESTO MPAD  \n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding> \n\n\n\n  <div padding style="padding-top: 40px;">\n\n    <div class="tab" (click)="delivery()">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <img src="assets/imgs/one.jpeg" class="image">\n\n          </ion-col>\n\n          <ion-col col-9 class="text">DELIVERY</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <div class="tab" (click)="pick()">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <img src="assets/imgs/two.jpeg" class="image">\n\n          </ion-col>\n\n          <ion-col col-9 class="text">PICKUP</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <div class="tab" (click)="vanscan()">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <img src="assets/imgs/three.jpeg" class="image">\n\n          </ion-col>\n\n          <ion-col col-9 class="text"> STATION SCANS</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n      \n\n    <div class="tab">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <img src="assets/imgs/five.jpeg" class="image">\n\n          </ion-col>\n\n          <ion-col col-9 class="text">PAYMENT</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n \n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_save_save__["a" /* SaveProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__providers_api_api__["a" /* ApiProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_save_save__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(36);
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
            selector: 'page-login',template:/*ion-inline-start:"F:\Developments\fedex-mpad\src\pages\login\login.html"*/'<ion-content padding>\n\n  <div text-center style="margin-top: 80px;">\n\n    <img src="assets/imgs/fedex.png" style="height: 70px;" />\n\n  </div>\n\n\n\n  <div padding *ngIf="login">\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label  class="tag" floating>PRESTO ID</ion-label>\n\n        <ion-input color="dark" [(ngModel)]="id" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label class="tag" floating>Password</ion-label>\n\n        <ion-input color="dark" [(ngModel)]="password" type="password"></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <div padding>\n\n      <button ion-button full (click)="log()" color="dark">Sign In</button>\n\n    </div>\n\n  </div>\n\n\n\n  <div padding *ngIf="!login">\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Username</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <div padding>\n\n      <button ion-button full (click)="register()">Register</button>\n\n    </div>\n\n\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"F:\Developments\fedex-mpad\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_save_save__["a" /* SaveProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map