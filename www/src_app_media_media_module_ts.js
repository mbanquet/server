"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_media_media_module_ts"],{

/***/ 9926:
/*!***********************************************!*\
  !*** ./src/app/media/media-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaPageRoutingModule": () => (/* binding */ MediaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _media_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media.page */ 7702);




const routes = [
    {
        path: '',
        component: _media_page__WEBPACK_IMPORTED_MODULE_0__.MediaPage
    },
    {
        path: 'media-view',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_media_media-view_media-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./media-view/media-view.module */ 5978)).then(m => m.MediaViewPageModule)
    }
];
let MediaPageRoutingModule = class MediaPageRoutingModule {
};
MediaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MediaPageRoutingModule);



/***/ }),

/***/ 2206:
/*!*****************************************************!*\
  !*** ./src/app/media/media-view/media-view.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaViewPage": () => (/* binding */ MediaViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _media_view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-view.page.html?ngResource */ 5911);
/* harmony import */ var _media_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-view.page.scss?ngResource */ 3074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let MediaViewPage = class MediaViewPage {
    constructor() { }
    ngOnInit() {
    }
};
MediaViewPage.ctorParameters = () => [];
MediaViewPage.propDecorators = {
    media: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
MediaViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-media-view',
        template: _media_view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_media_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MediaViewPage);



/***/ }),

/***/ 415:
/*!***************************************!*\
  !*** ./src/app/media/media.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaPageModule": () => (/* binding */ MediaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _media_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-routing.module */ 9926);
/* harmony import */ var _media_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media.page */ 7702);







let MediaPageModule = class MediaPageModule {
};
MediaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _media_routing_module__WEBPACK_IMPORTED_MODULE_0__.MediaPageRoutingModule
        ],
        declarations: [_media_page__WEBPACK_IMPORTED_MODULE_1__.MediaPage],
    })
], MediaPageModule);



/***/ }),

/***/ 7702:
/*!*************************************!*\
  !*** ./src/app/media/media.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaPage": () => (/* binding */ MediaPage)
/* harmony export */ });
/* harmony import */ var C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _media_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media.page.html?ngResource */ 6600);
/* harmony import */ var _media_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media.page.scss?ngResource */ 4493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ 9725);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _media_view_media_view_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media-view/media-view.page */ 2206);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);










let MediaPage = class MediaPage {
  constructor(router, commonService, modalController, _sanitizer) {
    this.router = router;
    this.commonService = commonService;
    this.modalController = modalController;
    this._sanitizer = _sanitizer;
    this.type = 'photos';
    this.mediaList = [];
    this.serviceList = [];
    this.innerWidth = window.innerWidth;
    this.userLogin = JSON.parse(localStorage.getItem('user'));
    this.commonService.getAllMedia('photos').subscribe(media => {
      console.log('here');
      this.mediaList = media;

      for (let index = 0; index < this.mediaList.length; index++) {
        if (this.mediaList[index].type === 'videos') {
          this.yotubeVidId = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.mediaList[index].mediaSource + '?rel=0');
          console.log(this.yotubeVidId);
        }
      }
    });
  }

  ngOnInit() {
    this.router.navigate(['/booking-calendar', false]); //  this.commonService.getAllServices().subscribe((service: any) => {
    //   this.serviceList = service;
    //  })
  }

  exit() {
    navigator['app'].exitApp();
  }

  login() {
    this.router.navigate(['/login']);
  }

  previewImage(image) {}

  presentModal(mediaSource) {
    var _this = this;

    return (0,C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: _media_view_media_view_page__WEBPACK_IMPORTED_MODULE_4__.MediaViewPage,
        breakpoints: [0, 0.3, 0.5, 0.8, 1],
        initialBreakpoint: 0.8,
        componentProps: {
          media: mediaSource
        }
      });
      modal.onDidDismiss().then(() => {});
      yield modal.present();
    })();
  }

  showCal() {
    this.router.navigate(['/booking-calendar', false]);
  }

  ionViewWillEnter() {
    this.userLogin = JSON.parse(localStorage.getItem('user'));
  }

};

MediaPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer
}];

MediaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-media',
  template: _media_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_media_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MediaPage);


/***/ }),

/***/ 3074:
/*!******************************************************************!*\
  !*** ./src/app/media/media-view/media-view.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --ion-background-color:#111D12;\n}\n\n.header {\n  background-color: #7e6130;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0FBQUoiLCJmaWxlIjoibWVkaWEtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMxMTFEMTI7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdlNjEzMDtcclxufSJdfQ== */";

/***/ }),

/***/ 4493:
/*!**************************************************!*\
  !*** ./src/app/media/media.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".img-wrapper {\n  min-height: 200px;\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFDSiIsImZpbGUiOiJtZWRpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXdyYXBwZXIge1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 5911:
/*!******************************************************************!*\
  !*** ./src/app/media/media-view/media-view.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header  class=\"header\" [translucent]=\"true\">\r\n  <ion-toolbar color=\"tertiary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-title>Preview</ion-title>\r\n    </ion-buttons>\r\n  \r\n  </ion-toolbar>\r\n  <!-- <ion-toolbar>\r\n   \r\n    \r\n  </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content style=\"background-color: transparent;\">\r\n  <img [src]=\"media\">\r\n</ion-content>\r\n";

/***/ }),

/***/ 6600:
/*!**************************************************!*\
  !*** ./src/app/media/media.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"header\" [translucent]=\"true\">\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-title text-left>\r\n      <img alt=\"logo\" height=\"40\" float-left src=\"../../assets/images/icon.png\"> Maharaja Banquet\r\n    </ion-title>\r\n    <ng-container *ngIf=\"!userLogin\">\r\n      <ion-buttons slot=\"end\" (click)=\"exit()\">\r\n        <ion-button>Close </ion-button>\r\n      </ion-buttons>\r\n      <ion-buttons  slot=\"end\" (click)=\"login()\">\r\n        <ion-button>Login </ion-button>\r\n      </ion-buttons>\r\n    </ng-container>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-segment [(ngModel)]=\"type\">\r\n      <ion-segment-button value=\"photos\">\r\n        <ion-label>Photos</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"videos\">\r\n        <ion-label>Videos</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"services\">\r\n        <ion-label>Our Services</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ng-container [ngSwitch]=\"type\">\r\n    <ng-container [ngSwitch]=\"type\">\r\n      <ng-container *ngSwitchCase=\"'photos'\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let image of mediaList\">\r\n              <div (click)=\"presentModal  (image.mediaSource)\" class=\"img-wrapper\" [style.background-image]=\"'url('+image.mediaSource+')'\">\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"'videos'\">\r\n      <iframe [width]=\"innerWidth\" height=\"512\" [src]=yotubeVidId title=\"Maharaja Banquet Branding Video\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"'services'\">\r\n      <ion-item *ngFor=\"let list of serviceList\">\r\n        <ion-icon name=\"star\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{list.itemName}}</ion-label>\r\n      <p class=\"numberCircle\"> <ion-chip> {{list.quantity}}</ion-chip>\r\n       </p>\r\n      </ion-item>\r\n    </ng-container>\r\n    <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\r\n      <ion-fab-button (click)=\"showCal()\" color=\"secondary\" >\r\n        Book\r\n      </ion-fab-button>\r\n     \r\n    </ion-fab>\r\n  </ng-container>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_media_media_module_ts.js.map