(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 8287:
/*!****************************************!*\
  !*** ./src/app/api-service.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiServiceService": () => (/* binding */ ApiServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



let ApiServiceService = class ApiServiceService {
    constructor(http) {
        this.http = http;
    }
    get(url) {
        return this.http.get(url);
    }
    post(url, body) {
        return this.http.post(url, body);
    }
    postPdf(url, body) {
        const httpOptions = {
            responseType: 'blob'
        };
        return this.http.post(url, body, httpOptions);
    }
};
ApiServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ApiServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ApiServiceService);



/***/ }),

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-calendar_date-adapters_esm_date-fns_index_js-node_modules_angula-38f4c3"), __webpack_require__.e("default-src_app_calendar_calendar_module_ts"), __webpack_require__.e("src_app_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 6432)).then(m => m.TabsPageModule)
    },
    {
        path: 'calendar/:tab',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-calendar_date-adapters_esm_date-fns_index_js-node_modules_angula-38f4c3"), __webpack_require__.e("default-src_app_calendar_calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./calendar/calendar.module */ 5270)).then(m => m.CalendarPageModule)
    },
    {
        path: 'tabs4',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs4/tabs4.module */ 3106)).then(m => m.Tabs4PageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 2711)).then(m => m.HomePageModule)
    },
    {
        path: 'category/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_category-page_category-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./category-page/category-page.module */ 6507)).then(m => m.CategoryPagePageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 7641)).then(m => m.LoginPageModule)
    },
    {
        path: 'booking-calendar/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-calendar_date-adapters_esm_date-fns_index_js-node_modules_angula-38f4c3"), __webpack_require__.e("default-src_app_booking-calendar_booking-calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./booking-calendar/booking-calendar.module */ 6633)).then(m => m.BookingCalendarPageModule)
    },
    {
        path: 'media',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_media_media_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./media/media.module */ 415)).then(m => m.MediaPageModule)
    },
    {
        path: 'dj',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./dj/dj.module */ 1696)).then(m => m.DjPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/firebase-x/ngx */ 4522);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 3427);
/* harmony import */ var _common_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-service.service */ 9283);
/* harmony import */ var _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/fcm/ngx */ 971);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 7954);











let AppComponent = class AppComponent {
    constructor(firebaseX, plt, faio, commonService, fcm, router, splashScreen) {
        this.firebaseX = firebaseX;
        this.plt = plt;
        this.faio = faio;
        this.commonService = commonService;
        this.fcm = fcm;
        this.router = router;
        this.splashScreen = splashScreen;
        this.onlineOffline = navigator.onLine;
        this.router.navigate(['/media']);
        //   if(!this.onlineOffline) {
        //     alert('You are offline, Please check your connection and restart app')
        //   }
        //   this.userLogin = JSON.parse(localStorage.getItem('user'))
        //   this.guestUser = localStorage.getItem('userType')
        //   if(!this.userLogin) {
        //     this.router.navigate(['/media'])
        //   }
        //   if(this.userLogin && this.userLogin.isAdmin === false && this.userLogin.isDj) {
        //     this.router.navigate(['/dj'])
        //   } else if(this.userLogin && this.userLogin.isAdmin === false) {
        //     this.router.navigate(['/home'])
        //   }
        //    else if(this.userLogin && this.userLogin.isAdmin === true){
        //     this.router.navigate(['/tabs'])
        //   } 
        // console.log('USER :::>', this.userLogin);
        // if(this.userLogin === null) {
        //   console.log('USER :::>', this.userLogin);
        //   this.router.navigate(['/media'])
        // } 
        // if(this.guestUser === 'guest') {
        // }
        this.isAuthenticated = true;
        this.isAdmin = true;
        this.fcm.onNotification().subscribe(data => {
            console.log(data);
            if (data.wasTapped) {
                console.log("Received in background");
                if (data.action === 'dj') {
                    this.router.navigate(['/dj']);
                }
                else {
                    this.router.navigate(['/tabs']);
                }
            }
            else {
                if (data.action === 'dj') {
                    this.router.navigate(['/dj']);
                }
                console.log("Received in foreground");
            }
            ;
        });
    }
    showFingerprintAuthDlg() {
        this.faio.isAvailable().then((result) => {
            this.faio.show({
                cancelButtonTitle: 'Cancel',
                description: "Please scan your finger",
                disableBackup: true,
                title: 'Maharaja Banquet',
                fallbackButtonTitle: 'FB Back Button',
                subtitle: this.uniqueId
            })
                .then((result) => {
                console.log(result);
                this.generateSaveToken();
            })
                .catch((error) => {
            });
        })
            .catch((error) => {
            console.log(error);
        });
    }
    generateSaveToken() {
        this.firebaseX.getToken()
            .then(token => {
            this.commonService.addToken({ device_id: this.uniqueId, fcm_token: token }).subscribe((res) => {
                if (res && res.status) {
                    this.isAdmin = res && res.docs && res.docs.admin;
                    this.commonService.isAdmin.next(this.isAdmin);
                    this.isAuthenticated = true;
                }
            });
        }) // save the token server-side and use it to push notifications to this device
            .catch(error => console.error('Error getting token', error));
        this.firebaseX.onMessageReceived()
            .subscribe(data => console.log(`User opened a notification ${data}`));
        this.firebaseX.onTokenRefresh()
            .subscribe((token) => console.log(`Got a new token ${token}`));
        // Platform now ready, execute any required native code
    }
};
AppComponent.ctorParameters = () => [
    { type: _awesome_cordova_plugins_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_2__.FirebaseX },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_3__.FingerprintAIO },
    { type: _common_service_service__WEBPACK_IMPORTED_MODULE_4__.CommonServiceService },
    { type: _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__.FCM },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__.SplashScreen }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _awesome_cordova_plugins_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/firebase-x/ngx */ 4522);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 3427);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 1832);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/fcm/ngx */ 971);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 7954);
/* harmony import */ var _tabs4_tabs4_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs4/tabs4.module */ 3106);
/* harmony import */ var _dj_dj_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dj/dj.module */ 1696);
















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
            _tabs4_tabs4_module__WEBPACK_IMPORTED_MODULE_7__.Tabs4PageModule,
            _dj_dj_module__WEBPACK_IMPORTED_MODULE_8__.DjPageModule,
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy }, _awesome_cordova_plugins_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_2__.FirebaseX, _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_3__.FingerprintAIO, _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__.FCM,
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__.AndroidPermissions, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__.SplashScreen],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 9283:
/*!*******************************************!*\
  !*** ./src/app/common-service.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonServiceService": () => (/* binding */ CommonServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-service.service */ 8287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);





let CommonServiceService = class CommonServiceService {
    constructor(apiService) {
        this.apiService = apiService;
        this.isAdmin = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    }
    addToken(body) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/token/add_tokens`;
        return this.apiService.post(url, body);
    }
    getConfig() {
        const URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/config/get-config`;
        return this.apiService.get(URL);
    }
    getAllBooking(status) {
        const URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/booking/get-booking-list?status=${status}`;
        return this.apiService.get(URL);
    }
    confirmBooking(id, status) {
        const URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/booking/confirm-booking?id=${id}&status=${status}`;
        return this.apiService.get(URL);
    }
    updateConfig(payload) {
        const URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/config/update-config`;
        return this.apiService.post(URL, payload);
    }
    submitTask(payload) {
        const URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/task/add-task`;
        return this.apiService.post(URL, payload);
    }
    getTask() {
        const URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/task/get-task`;
        return this.apiService.get(URL);
    }
};
CommonServiceService.ctorParameters = () => [
    { type: _api_service_service__WEBPACK_IMPORTED_MODULE_0__.ApiServiceService }
];
CommonServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], CommonServiceService);



/***/ }),

/***/ 9725:
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-service.service */ 8287);




let CommonService = class CommonService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getServices() {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host}/api/v1/service/get-services`;
        return this.apiService.get(url);
    }
    login(credentials) {
        return this.apiService.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host}/api/v1/app-user/login`, credentials);
    }
    getUserDetails() {
        return JSON.parse(localStorage.getItem('user'));
    }
    updateUser(mobile, payload) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host}/api/v1/app-user/update?mobile=${mobile}`;
        return this.apiService.post(url, payload);
    }
    getSelectedItem(categoryName, mobile) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host}/api/v1/app-user/get-cart?mobile=${mobile}&category=${categoryName}`;
        return this.apiService.get(url);
    }
    getUserBookingDetails(mobile) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host}/api/v1/booking/get-user-booking?mobile=${mobile}`;
        return this.apiService.get(url);
    }
    getAllMedia(type) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host}/api/v1/media/get-all-media?type=all`;
        return this.apiService.get(url);
    }
    getAllServices() {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host}/api/v1/service/service-list`;
        return this.apiService.get(url);
    }
    getDjUser() {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host}/api/v1/app-user/get-dj-user`;
        return this.apiService.get(url);
    }
    getSpecificUser(mobile) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host}/api/v1/app-user/get-user-details?mobile=${mobile}`;
        return this.apiService.get(url);
    }
    updateDjOrders(mobile, payload) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host}/api/v1/app-user/update-dj-orders?mobile=${mobile}`;
        return this.apiService.post(url, payload);
    }
    addPublicBooking(payload) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host}/api/v1/cashflow2024_25/app-cash-in-flow-2024-25`;
        return this.apiService.post(url, payload);
    }
    generateInvoice(body) {
        const URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host}/api/v1/invoice/generate_invoice`;
        return this.apiService.postPdf(URL, body);
    }
    preview() {
        const URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host}/api/v1/invoice/preview-pdf`;
        return this.apiService.get(URL);
    }
};
CommonService.ctorParameters = () => [
    { type: _api_service_service__WEBPACK_IMPORTED_MODULE_1__.ApiServiceService }
];
CommonService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ 6969:
/*!*****************************************!*\
  !*** ./src/app/dj/dj-routing.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DjPageRoutingModule": () => (/* binding */ DjPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dj_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dj.page */ 4831);




const routes = [
    {
        path: '',
        component: _dj_page__WEBPACK_IMPORTED_MODULE_0__.DjPage
    }
];
let DjPageRoutingModule = class DjPageRoutingModule {
};
DjPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DjPageRoutingModule);



/***/ }),

/***/ 1696:
/*!*********************************!*\
  !*** ./src/app/dj/dj.module.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DjPageModule": () => (/* binding */ DjPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _dj_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dj-routing.module */ 6969);
/* harmony import */ var _dj_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dj.page */ 4831);







let DjPageModule = class DjPageModule {
};
DjPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dj_routing_module__WEBPACK_IMPORTED_MODULE_0__.DjPageRoutingModule
        ],
        declarations: [_dj_page__WEBPACK_IMPORTED_MODULE_1__.DjPage]
    })
], DjPageModule);



/***/ }),

/***/ 4831:
/*!*******************************!*\
  !*** ./src/app/dj/dj.page.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DjPage": () => (/* binding */ DjPage)
/* harmony export */ });
/* harmony import */ var C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dj_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dj.page.html?ngResource */ 278);
/* harmony import */ var _dj_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dj.page.scss?ngResource */ 4249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ 9725);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let DjPage = class DjPage {
  constructor(commonService, alertController, toastr) {
    this.commonService = commonService;
    this.alertController = alertController;
    this.toastr = toastr;
    this.segmentValue = "pending";
    this.orders = [];
    this.alertButtons = ['OK'];
    this.alertInputs = [{
      placeholder: 'DJ Rate',
      attributes: {
        maxlength: 10
      }
    }];
  }

  ngOnInit() {
    this.userDetails = this.commonService.getUserDetails();
    this.getDjOrders();
  }

  getDjOrders() {
    this.commonService.getSpecificUser(this.userDetails.mobile).subscribe(resp => {
      this.orders = resp && resp.user && resp.user.djOrder || [];
    });
  }

  presentAlertPrompt(order, i) {
    var _this = this;

    return (0,C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Confirmation!',
        inputs: [{
          name: 'quotes',
          type: 'number',
          placeholder: 'Enter Your Package Rate'
        }],
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            _this.orders[i].quotes = data.quotes;
            _this.orders[i].status = 'Accepted';

            _this.commonService.updateDjOrders(_this.userDetails.mobile, _this.orders).subscribe(resp => {
              if (resp && resp.status === 'success') {
                _this.toast('Order Accepted !!!');

                _this.getDjOrders();
              }
            });
          }
        }]
      });
      yield alert.present();
    })();
  }

  toast(msg) {
    var _this2 = this;

    return (0,C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastr.create({
        position: 'top',
        message: msg,
        duration: 3000
      });
      yield toast.present();
    })();
  }

  handleReject(order, i) {
    var _this3 = this;

    return (0,C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: 'Are You Sure?',
        message: 'Are you sure, you want to reject this bookin?',
        buttons: [{
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes',
          handler: data => {
            _this3.orders[i].status = 'Rejected';

            _this3.commonService.updateDjOrders(_this3.userDetails.mobile, _this3.orders).subscribe(resp => {
              if (resp && resp.status === 'success') {
                _this3.toast('Order Rejected !!!');

                _this3.getDjOrders();
              }
            });
          }
        }]
      });
      yield alert.present();
    })();
  }

};

DjPage.ctorParameters = () => [{
  type: _common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
}];

DjPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-dj',
  template: _dj_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_dj_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DjPage);


/***/ }),

/***/ 9460:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 5897);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.service */ 9725);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);









let HomePage = class HomePage {
  constructor(commonService, router, toastr) {
    this.commonService = commonService;
    this.router = router;
    this.toastr = toastr;
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService);
    this.userLogin = JSON.parse(localStorage.getItem('user'));
    this.getBookingDetails();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages() {
    return this.data.getMessages();
  }

  exit() {
    navigator['app'].exitApp();
  }

  getBookingDetails() {
    this.commonService.getUserBookingDetails(this.userLogin.mobile).subscribe(res => {
      if (res) {
        this.userBookingData = res && res.data;
        console.log(this.userBookingData);
      }
    });
  }

  openService() {
    this.router.navigate(['media']);
  }

  givePrint() {
    // window.open(environment.host + `api/v1/invoice/invoice?data=${JSON.stringify(this.bookingForm.getRawValue())}`, "_blank");
    // this.bookingService.generateInvoice(this.bookingForm.getRawValue()).subscribe(res => {
    //   this._snackBar.open('Invoice Generated!', 'OK',{duration: 1000});
    // })
    this.toast('Please wait, Downloading Invoice', 'secondary');
    this.commonService.generateInvoice(this.userBookingData).subscribe(data => {
      this.blob = new Blob([data], {
        type: 'application/pdf'
      });
      var downloadURL = window.URL.createObjectURL(data);
      var link = document.createElement('a');
      this.pdfSrc = downloadURL;
      link.href = downloadURL;
      link.download = `${this.userBookingData.firstName}` + "_invoice.pdf";
      link.click();
      this.openBrowser();
      this.toast('Invoice downloaded', 'secondary');
    });
  }

  toast(msg, color) {
    var _this = this;

    return (0,C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastr.create({
        position: 'top',
        message: msg,
        duration: 3000,
        color: color
      });
      yield toast.present();
    })();
  }

  openBrowser() {
    this.commonService.preview().subscribe(resp => {
      window.open(resp.url);
    });
  }

};

HomePage.ctorParameters = () => [{
  type: _common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
}];

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 5897:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common.service */ 9725);



let DataService = class DataService {
    constructor(commonService) {
        this.commonService = commonService;
        this.messages = [];
        this.commonService.getServices().subscribe((services) => {
            const elements = (services && services.services) || [];
            const mapElements = elements.map((element) => ({
                id: Number(element.id),
                category: element.category,
                discription: element.discription,
                img: element.img,
                categoryList: element.categoryList,
            }));
            this.messages = mapElements;
        });
    }
    getMessages() {
        return this.messages;
    }
    getMessageById(id) {
        return this.messages[id];
    }
};
DataService.ctorParameters = () => [
    { type: _common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 9691:
/*!***********************************************!*\
  !*** ./src/app/tabs4/tabs4-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tabs4PageRoutingModule": () => (/* binding */ Tabs4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tabs4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs4.page */ 9551);




const routes = [
    {
        path: '',
        component: _tabs4_page__WEBPACK_IMPORTED_MODULE_0__.Tabs4Page
    }
];
let Tabs4PageRoutingModule = class Tabs4PageRoutingModule {
};
Tabs4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tabs4PageRoutingModule);



/***/ }),

/***/ 3106:
/*!***************************************!*\
  !*** ./src/app/tabs4/tabs4.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tabs4PageModule": () => (/* binding */ Tabs4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tabs4_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs4-routing.module */ 9691);
/* harmony import */ var _tabs4_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs4.page */ 9551);
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.page */ 9460);








let Tabs4PageModule = class Tabs4PageModule {
};
Tabs4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tabs4_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tabs4PageRoutingModule
        ],
        declarations: [_tabs4_page__WEBPACK_IMPORTED_MODULE_1__.Tabs4Page, _home_home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage]
    })
], Tabs4PageModule);



/***/ }),

/***/ 9551:
/*!*************************************!*\
  !*** ./src/app/tabs4/tabs4.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tabs4Page": () => (/* binding */ Tabs4Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs4.page.html?ngResource */ 301);
/* harmony import */ var _tabs4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs4.page.scss?ngResource */ 9847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let Tabs4Page = class Tabs4Page {
    constructor() { }
    ngOnInit() {
    }
};
Tabs4Page.ctorParameters = () => [];
Tabs4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'apps-tabs4',
        template: _tabs4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tabs4Page);



/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const LOCAL_PORT = '3000';
const LOCAL_HOST = `http://localhost:${LOCAL_PORT}`;
const LOCAL_MACHINE = `http://192.168.1.14:${LOCAL_PORT}`;
const PRODUCTION = 'https://maharajaraxaul.com';
const environment = {
    production: false,
    host: PRODUCTION
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		4933,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 4249:
/*!********************************************!*\
  !*** ./src/app/dj/dj.page.scss?ngResource ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header {\n  background-color: #7e6130;\n}\n\n.title {\n  font-weight: bold;\n}\n\n.accept-btn {\n  color: green;\n  font-weight: bold;\n}\n\n.reject-btn {\n  color: red;\n  font-weight: bold;\n}\n\n.card-title {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.my-custom-class {\n  color: red;\n}\n\n.card-subtitle {\n  font-weight: bold;\n}\n\n.notification {\n  color: rgb(221, 195, 21);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRqLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0FBQUoiLCJmaWxlIjoiZGoucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U2MTMwO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5hY2NlcHQtYnRuIHtcclxuICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yZWplY3QtYnRuIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5teS1jdXN0b20tY2xhc3Mge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmNhcmQtc3VidGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24ge1xyXG4gICAgY29sb3I6cmdiKDIyMSwgMTk1LCAyMSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */";

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  text-align: left;\n  left: -88px;\n}\n\nion-chip {\n  --background: #00213f;\n  --color: #adefd1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FBQUoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxlZnQ6IC04OHB4O1xyXG59XHJcblxyXG5cclxuaW9uLWNoaXAge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAyMTNmO1xyXG4gICAgLS1jb2xvcjogI2FkZWZkMTtcclxuICB9Il19 */";

/***/ }),

/***/ 9847:
/*!**************************************************!*\
  !*** ./src/app/tabs4/tabs4.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzNC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"onlineOffline\">\r\n  <ng-container *ngIf=\"isAuthenticated\">\r\n    <ion-app>\r\n      <ion-router-outlet></ion-router-outlet>\r\n    </ion-app>\r\n  </ng-container>\r\n</ng-container>\r\n";

/***/ }),

/***/ 278:
/*!********************************************!*\
  !*** ./src/app/dj/dj.page.html?ngResource ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"header\">\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title class=\"title\">DJ {{userDetails.userName}} </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment color=\"dark\" [(ngModel)]=\"segmentValue\">\r\n    <ion-segment-button value=\"pending\">\r\n      <ion-label>Pending</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"accepted\">\r\n      <ion-label>Accepted</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"rejected\">\r\n      <ion-label>Rejected</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ng-container [ngSwitch]=\"segmentValue\">\r\n    <ng-container *ngSwitchCase=\"'pending'\">\r\n    <ng-container *ngFor=\"let order of orders, let i = index\" >\r\n      <ion-card *ngIf=\"order && order.status === 'Pending'\">\r\n        <ion-card-header>\r\n          <ion-card-title class=\"card-title\">Booking Date: {{order.bookingDate}}</ion-card-title>\r\n          <ion-card-subtitle>DJ TYPE: {{order.djType}}</ion-card-subtitle>\r\n        </ion-card-header>\r\n      \r\n        <ion-card-content>\r\n         {{order.notifcation}}\r\n        </ion-card-content>\r\n        <ion-button fill=\"clear\" (click)=\"presentAlertPrompt(order, i)\" class=\"accept-btn\"><ion-icon name=\"checkmark-done-outline\"></ion-icon> Accept</ion-button>\r\n        <ion-button fill=\"clear\" (click)=\"handleReject(order, i)\" class=\"reject-btn\"><ion-icon name=\"close-outline\"></ion-icon> Reject</ion-button>\r\n      </ion-card>\r\n     \r\n    </ng-container>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'accepted'\">\r\n    <ng-container *ngFor=\"let order of orders, let i = index\" >\r\n    <ion-card *ngIf=\"order && order.status === 'Accepted'\">\r\n      <ion-card-header>\r\n        <ion-card-title class=\"card-title\">Booking Date: {{order.bookingDate}}</ion-card-title>\r\n        <ion-card-subtitle  class=\"card-subtitle\">DJ TYPE: {{order.djType}}</ion-card-subtitle>\r\n        <ion-card-subtitle style=\"color:#7e6130;font-weight: bold;\">Payment: ₹{{order.quotes}}</ion-card-subtitle>\r\n\r\n      </ion-card-header>\r\n    \r\n      <ion-card-content class=\"notification\">\r\n       {{order.notifcation}}\r\n      </ion-card-content>\r\n      <ion-button fill=\"clear\" class=\"accept-btn\"> <ion-icon name=\"checkmark-done-outline\"></ion-icon> Accepted</ion-button>\r\n    </ion-card>\r\n  </ng-container>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'rejected'\">\r\n    <ng-container *ngFor=\"let order of orders, let i = index\" >\r\n    <ion-card *ngIf=\"order && order.status === 'Rejected'\">\r\n      <ion-card-header>\r\n        <ion-card-title class=\"card-title\">Booking Date: 07/12/2023</ion-card-title>\r\n        <ion-card-subtitle>DJ TYPE</ion-card-subtitle>\r\n      </ion-card-header>\r\n      <ion-card-content style=\"color:red;\">\r\n        You have rejected this order.\r\n      </ion-card-content>\r\n      <ion-button fill=\"clear\" class=\"reject-btn\"><ion-icon name=\"close-outline\"></ion-icon> Rejected</ion-button>\r\n    </ion-card>\r\n  </ng-container>\r\n  </ng-container>\r\n</ng-container>\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n\r\n<ion-header class=\"header\" [translucent]=\"true\">\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-title text-left>\r\n      <img alt=\"logo\" height=\"40\" float-left  src=\"../../assets/images/icon.png\" >  Maharaja Banquet\r\n     </ion-title>\r\n     <ion-buttons slot=\"end\" (click)=\"exit()\">\r\n      <ion-button>CLOSE </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  <ion-content >\r\n    <ion-card *ngIf=\"userBookingData\">\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"../../assets/images/user.png\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>{{userBookingData.firstName}} {{userBookingData.lastName}}</h3>\r\n          <p>{{userBookingData.bookingDate|date}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-card-header>\r\n        <ion-card-title>{{userBookingData.requirements}} function</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <p ><ion-icon style=\"font-size: 30px;\" name=\"notifications-circle-outline\"></ion-icon><label style=\"color:#fd501c;font-weight: bold;\">{{userLogin.notification}}</label></p>\r\n        <br>\r\n        <ion-icon name=\"cloud-download\"></ion-icon>&nbsp;<ion-label style=\"color:blue;font-weight: bold;\" (click)=\"givePrint()\">Download Invoice</ion-label> \r\n      </ion-card-content>\r\n\r\n      <ion-footer>\r\n        <ion-row>\r\n          <ion-col center text-center>\r\n            <button style=\"color:green;border-style: dashed;font-weight: bold;background:white;\">\r\n              ₹ {{userBookingData.finalAmount}}\r\n              <div style=\"font-size:10px\">Booked Amount</div>\r\n            </button>\r\n          </ion-col>\r\n          <ion-col center text-center>\r\n            <button style=\"color:purple;border-style: dashed;font-weight: bold;background:white;\">\r\n              ₹ {{userBookingData.BookingAmount}}\r\n              <div style=\"font-size:10px\">Advance Paid</div>\r\n            </button>\r\n          </ion-col>\r\n          <ion-col center text-center>\r\n            <button style=\"color:red;border-style: dashed;font-weight: bold;background:white;\">\r\n              ₹ {{userBookingData.balancedAmount}}\r\n              <div style=\"font-size:10px\">Due Amount</div>\r\n            </button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-footer>\r\n    </ion-card>\r\n    <!-- <ion-card color=\"light\">\r\n      <ion-card-header>\r\n        <ion-card-title><span style=\"font-weight: bold;color:#7e6130\">Booking Date</span> <br><span style=\"color:#7e6130a1\">{{userLogin.dateOfBooking}}</span></ion-card-title>\r\n      </ion-card-header>    \r\n    </ion-card> -->\r\n    <ion-card style=\"background-color:white\" *ngFor=\"let list of getMessages()\"   [routerLink]=\"'/category/' + list.id\" >\r\n      <img class=\"card-image\" [src]=\"list.img\">\r\n      <ion-card-header>\r\n        <ion-card-title style=\"color: #7e6130;\">{{list.category}}</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  </ion-content>\r\n  <ion-fab (click)=\"openService()\" slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\r\n    <ion-fab-button  color=\"dark\" >\r\n      <ion-icon name=\"newspaper-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n   \r\n  </ion-fab>";

/***/ }),

/***/ 301:
/*!**************************************************!*\
  !*** ./src/app/tabs4/tabs4.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n<ion-content>\r\n<app-home></app-home>\r\n</ion-content>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map