"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 795:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3721);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 7641:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 795);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3721);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3721:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ 9725);
/* harmony import */ var _common_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common-service.service */ 9283);
/* harmony import */ var _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/fcm/ngx */ 971);
/* harmony import */ var _awesome_cordova_plugins_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/firebase-x/ngx */ 4522);












let LoginPage = class LoginPage {
  constructor(fb, alertController, router, loadingController, commonService, commonServices, fcm, firebaseX) {
    this.fb = fb;
    this.alertController = alertController;
    this.router = router;
    this.loadingController = loadingController;
    this.commonService = commonService;
    this.commonServices = commonServices;
    this.fcm = fcm;
    this.firebaseX = firebaseX;
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
    });
    localStorage.clear();
  }

  login() {
    var _this = this;

    return (0,C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create();
      yield loading.present();

      _this.commonService.login(_this.credentials.value).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          yield loading.dismiss();
          localStorage.setItem('user', JSON.stringify(res.user));

          _this.firebaseX.getToken().then(token => {
            const user = JSON.parse(localStorage.getItem('user'));

            _this.commonServices.addToken({
              device_id: _this.uniqueId,
              fcm_token: token,
              phoneNumber: user.mobile,
              isAdmin: user.isAdmin
            }).subscribe(res => {});
          }) // save the token server-side and use it to push notifications to this device
          .catch(error => console.error('Error getting token', error));

          _this.firebaseX.onMessageReceived().subscribe(data => console.log(`User opened a notification ${data}`));

          _this.firebaseX.onTokenRefresh().subscribe(token => console.log(`Got a new token ${token}`));

          const user = JSON.parse(localStorage.getItem('user'));

          if (user && user.isAdmin) {
            _this.router.navigateByUrl('/tabs', {
              replaceUrl: true
            });
          } else if (user && user.isDj) {
            _this.router.navigateByUrl('/dj', {
              replaceUrl: true
            });
          } else {
            _this.router.navigateByUrl('/home', {
              replaceUrl: true
            });
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          yield loading.dismiss();
          const alert = yield _this.alertController.create({
            header: 'Login failed',
            message: res.error.error,
            buttons: ['OK']
          });
          yield alert.present();
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  } // Easy access for form fields


  get mobile() {
    return this.credentials.get('mobile');
  }

  get password() {
    return this.credentials.get('password');
  }

  skip() {
    localStorage.setItem('userType', 'guest');
    this.router.navigate(['/media']);
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
}, {
  type: _common_service_service__WEBPACK_IMPORTED_MODULE_4__.CommonServiceService
}, {
  type: _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__.FCM
}, {
  type: _awesome_cordova_plugins_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_6__.FirebaseX
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-top: 30%;\n  --padding-start: 10%;\n  --padding-end: 10%;\n  --background: url('login_screen.png')\n  \t0 0/100% 100% no-repeat;\n}\n\n.input-group {\n  background: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 15px;\n}\n\n.errors {\n  font-size: small;\n  color: #fff;\n  background: var(--ion-color-danger);\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\nion-button {\n  --background: #b6803b;\n  --background-hover: #9ce0be;\n  --background-activated: #88f4be;\n  --background-focused: #88f4be;\n  --color: white;\n  --border-radius: 0;\n  --border-color: #000;\n  --border-style: solid;\n  --border-width: 1px;\n  --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);\n  --ripple-color: deeppink;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBOzBCQUFBO0FBRUQ7O0FBR0E7RUFDQyxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFEOztBQUlBO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERDs7QUFJQTtFQUVDLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBRUEsY0FBQTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBRUEsNENBQUE7RUFFQSx3QkFBQTtFQUVBLG1CQUFBO0VBQ0Esc0JBQUE7QUFQRCIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcblx0LS1wYWRkaW5nLXRvcDogMzAlO1xyXG5cdC0tcGFkZGluZy1zdGFydDogMTAlO1xyXG5cdC0tcGFkZGluZy1lbmQ6IDEwJTtcclxuXHQtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbl9zY3JlZW4ucG5nJylcclxuXHRcdDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG5cdFx0XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbn1cclxuXHJcbi5lcnJvcnMge1xyXG5cdGZvbnQtc2l6ZTogc21hbGw7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cdHBhZGRpbmctdG9wOiA1cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcblx0XHJcblx0LS1iYWNrZ3JvdW5kOiAjYjY4MDNiO1xyXG5cdC0tYmFja2dyb3VuZC1ob3ZlcjogIzljZTBiZTtcclxuXHQtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjODhmNGJlO1xyXG5cdC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjODhmNGJlO1xyXG4gIFxyXG5cdC0tY29sb3I6IHdoaXRlO1xyXG4gIFxyXG5cdC0tYm9yZGVyLXJhZGl1czogMDtcclxuXHQtLWJvcmRlci1jb2xvcjogIzAwMDtcclxuXHQtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0LS1ib3JkZXItd2lkdGg6IDFweDtcclxuICBcclxuXHQtLWJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYigwLCAwLCAwLCAwLjI1KTtcclxuICBcclxuXHQtLXJpcHBsZS1jb2xvcjogZGVlcHBpbms7XHJcbiAgXHJcblx0LS1wYWRkaW5nLXRvcDogMTBweDtcclxuXHQtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-content>\r\n\t<form (ngSubmit)=\"login()\" [formGroup]=\"credentials\">\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<ion-item>\r\n\r\n\t\t\t\t<ion-input  type=\"text\" placeholder=\"Enter Your Mobile Number\" formControlName=\"mobile\"></ion-input>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input type=\"password\" placeholder=\"Enter Your Password\" formControlName=\"password\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\r\n\t\t</div>\r\n\r\n\t\t<ion-button type=\"submit\" expand=\"block\" [disabled]=\"!credentials.valid\">Log in</ion-button>\r\n\t\t<p style=\"text-align: center;\">\r\n\t\t\t<ion-button (click)=\"skip()\">SKIP</ion-button>\r\n\r\n\t\t</p>\r\n\r\n\t</form>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map