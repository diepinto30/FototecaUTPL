webpackJsonp([0],{

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guardados_guardados__ = __webpack_require__(553);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__guardados_guardados__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(555);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json_json__ = __webpack_require__(391);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__json_json__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(556);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a"]; });




//# sourceMappingURL=index.paginas.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_scan_data_model__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_json_json__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistorialService = (function () {
    function HistorialService(iab, modalCtrl, platform, toastCtrl) {
        this.iab = iab;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this._historial = [];
    }
    //Funcion que agrega cada escaner a la lista
    HistorialService.prototype.agregar_historial = function (texto) {
        var data = new __WEBPACK_IMPORTED_MODULE_1__models_scan_data_model__["a" /* ScanData */](texto);
        this._historial.unshift(data);
        console.log(this._historial);
        this.abrir_scan(0);
    };
    // Funcion que permite que el escaner se abra y crea un modal
    HistorialService.prototype.abrir_scan = function (index) {
        var scanData = this._historial[index];
        console.log(scanData);
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_json_json__["a" /* JsonPage */], { json: scanData.info }).present();
        /*  switch( scanData.tipo ){
            case "http":
              this.iab.create( scanData.info, "_system" );
            break;
            case "datosjson":
              //this.iab.create( scanData.info, "_system" );
              this.modalCtrl.create(scanData.info).present();
            break;
          }*/
    };
    // Presentacion a manera de alerta del elemento escaneado
    HistorialService.prototype.crear_toast = function (mensaje) {
        this.toastCtrl.create({
            message: mensaje,
            duration: 2500
        }).present();
    };
    // Funcion que carga el historial
    HistorialService.prototype.cargar_historial = function () {
        return this._historial;
    };
    HistorialService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* ToastController */]])
    ], HistorialService);
    return HistorialService;
}());
//# sourceMappingURL=historial.js.map

/***/ }),

/***/ 263:
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
webpackEmptyAsyncContext.id = 263;

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JsonPage = (function () {
    function JsonPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        //Obtencion de datajson
        var datajson = this.navParams.get("json");
        console.log(datajson);
        //Cambiar data a Json
        var dt = JSON.parse(datajson);
        //Descomposicion de partes requeridas de json
        this.nombre = dt[0]["fields"]["nombre"];
        this.ciudad = dt[0]["fields"]["ciudad"];
        this.pais = dt[0]["fields"]["pais"];
        this.direccion = dt[0]["fields"]["direccion"];
        this.descripcion = dt[0]["fields"]["descripcion"];
        this.lat = Number(dt[0]["fields"]["latitud"]);
        this.lng = Number(dt[0]["fields"]["longitud"]);
        //alert(this.lat + this.lng);
    }
    JsonPage.prototype.cerrar_modal = function () {
        this.viewCtrl.dismiss();
    };
    JsonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-json',template:/*ion-inline-start:"/home/andrea/Documentos/gp3.2/appMovil/ionic/appqr/src/pages/json/json.html"*/'<!-- Contenido presentado en el ViewController -->\n<ion-content>\n\n  <ion-card padding>\n    <ion-card-header>\n      <ion-card-title color= "medium" text-center > <b> {{ nombre }} </b> </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card padding>\n    <ion-card-content text-justify>\n      <h2> <b> Ciudad: </b> {{ ciudad }} </h2>\n      <h2> <b> Pais: </b> {{ pais }} </h2>\n      <h2> <b> Ubicación: </b> {{ direccion }} </h2>\n      <h2> <b> Descripción: </b> {{ descripcion }} </h2>\n    </ion-card-content>\n  </ion-card>\n\n  <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="16">\n    <sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker>\n  </sebm-google-map>\n\n  </ion-content >\n  <!-- Footer con boton de cierre de modal -->\n  <ion-footer>\n    <ion-toolbar color="dark">\n\n      <ion-buttons end>\n        <button ion-button>\n          <a href="https://www.utpl.edu.ec/" style="text-decoration: none;"> MÁS INFORMACIÓN </a>\n        </button>\n\n        <button ion-button\n                (click)="cerrar_modal()">\n          Cerrar\n        </button>\n      </ion-buttons>\n\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"/home/andrea/Documentos/gp3.2/appMovil/ionic/appqr/src/pages/json/json.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], JsonPage);
    return JsonPage;
}());
//# sourceMappingURL=json.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(502);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_historial__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_contacts__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__["a" /* GuardadosPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__["b" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__["c" /* JsonPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__["d" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY'
                }) /*,
                NgbModule.forRoot(),
                NgbCarouselModule.forRoot()*/
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__["a" /* GuardadosPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__["b" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__["c" /* JsonPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__["d" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_contacts__["a" /* Contacts */],
                __WEBPACK_IMPORTED_MODULE_5__providers_historial__["a" /* HistorialService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__ = __webpack_require__(232);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__["d" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/andrea/Documentos/gp3.2/appMovil/ionic/appqr/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/andrea/Documentos/gp3.2/appMovil/ionic/appqr/src/app/app.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_historial__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GuardadosPage = (function () {
    function GuardadosPage(_historialService) {
        this._historialService = _historialService;
        // Lista de los recursos escaneados
        this.historial = [];
    }
    // Primera vista de HISTORIAL
    GuardadosPage.prototype.ionViewDidLoad = function () {
        this.historial = this._historialService.cargar_historial();
    };
    // Funcion que abre el escaner
    GuardadosPage.prototype.abrir_scan = function (index) {
        this._historialService.abrir_scan(index);
    };
    GuardadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-guardados',template:/*ion-inline-start:"/home/andrea/Documentos/gp3.2/appMovil/ionic/appqr/src/pages/guardados/guardados.html"*/'   <ion-header>\n    <ion-navbar color="dark">\n      <ion-title> Historial </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content >\n    <ion-list>\n      <button ion-item\n              color ="warning"\n              *ngFor="let data of historial; let i = index"\n              (click)="abrir_scan( i )">\n              {{ data.celula }}\n              <p>\n                {{ data.tipo }}\n              </p>\n      </button>\n\n    </ion-list>\n\n\n  </ion-content>\n'/*ion-inline-end:"/home/andrea/Documentos/gp3.2/appMovil/ionic/appqr/src/pages/guardados/guardados.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__providers_historial__["a" /* HistorialService */]])
    ], GuardadosPage);
    return GuardadosPage;
}());
//# sourceMappingURL=guardados.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanData; });
var ScanData = (function () {
    function ScanData(texto) {
        this.tipo = "Celula Cultural";
        var dt = JSON.parse(texto);
        //Descomposicion de partes requeridas de json
        this.celula = dt[0]["fields"]["nombre"];
        this.info = texto;
        /*this.tipo = "no definido";
        this.info = texto;
        //Modelo para seleccion de tipo de informacion escaneada
        //SI es un tipo recurso http
        if( texto.startsWith("http") ){
          this.tipo = "http";
        //SI es un tipo recurso json-de celula cultural
        }else if (texto.startsWith("[{")){
          this.tipo = "célula cultural";
        }*/
    }
    return ScanData;
}());
//# sourceMappingURL=scan-data.model.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_historial__ = __webpack_require__(233);
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
    function HomePage(barcodeScanner, toastCtrl, platform, _historialService) {
        this.barcodeScanner = barcodeScanner;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this._historialService = _historialService;
    }
    //FUNCION QUE GENERA ESCANER
    HomePage.prototype.scan = function () {
        var _this = this;
        console.log("Escaner en proceso...");
        if (!this.platform.is('cordova')) {
            this._historialService.agregar_historial("IS NOT CORDOVA");
            return;
        }
        this.barcodeScanner.scan().then(function (barcodeData) {
            // Success! Barcode data is here
            console.log("result:", barcodeData.text);
            console.log("format:", barcodeData.format);
            console.log("cancelled:", barcodeData.cancelled);
            //alert( barcodeData.text);
            //this.detalles = barcodeData.text;
            if (barcodeData.cancelled == false && barcodeData.text != null) {
                _this._historialService.agregar_historial(barcodeData.text);
            }
        }, function (err) {
            // An error occurred
            console.error("Error: ", err);
            _this.mostrar_error("Error: " + err);
        });
    };
    // Funcion que presenta mesaje de error
    HomePage.prototype.mostrar_error = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 2500,
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/andrea/Documentos/gp3.2/appMovil/ionic/appqr/src/pages/home/home.html"*/' <ion-header>\n  <ion-navbar color="dark">\n    <ion-title text-right>\n      FOTOTECA-APP\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button\n          block\n          large\n              (click)="scan()">\n              <p style="color:#fff;" > Escanea código QR </p>\n              <pre> </pre>\n            <ion-icon slot="end" name="open" color="light"></ion-icon>\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/home/andrea/Documentos/gp3.2/appMovil/ionic/appqr/src/pages/home/home.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_historial__["a" /* HistorialService */]])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_paginas__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = (function () {
    function TabsPage() {
        this.tab1 = __WEBPACK_IMPORTED_MODULE_1__index_paginas__["b" /* HomePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_1__index_paginas__["a" /* GuardadosPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/andrea/Documentos/gp3.2/appMovil/ionic/appqr/src/pages/tabs/tabs.html"*/'\n<ion-tabs color="dark">\n\n  <ion-tab tabTitle="Scan-QR" tabIcon="qr-scanner" [root]="tab1"></ion-tab>\n  <ion-tab tabTitle="Historial" tabIcon="list" [root]="tab2"></ion-tab>\n\n\n</ion-tabs>\na\n'/*ion-inline-end:"/home/andrea/Documentos/gp3.2/appMovil/ionic/appqr/src/pages/tabs/tabs.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], TabsPage);
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map

/***/ })

},[400]);
//# sourceMappingURL=main.js.map