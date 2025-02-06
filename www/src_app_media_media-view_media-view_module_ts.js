"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_media_media-view_media-view_module_ts"],{

/***/ 4774:
/*!***************************************************************!*\
  !*** ./src/app/media/media-view/media-view-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaViewPageRoutingModule": () => (/* binding */ MediaViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _media_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-view.page */ 2206);




const routes = [
    {
        path: '',
        component: _media_view_page__WEBPACK_IMPORTED_MODULE_0__.MediaViewPage
    }
];
let MediaViewPageRoutingModule = class MediaViewPageRoutingModule {
};
MediaViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MediaViewPageRoutingModule);



/***/ }),

/***/ 5978:
/*!*******************************************************!*\
  !*** ./src/app/media/media-view/media-view.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaViewPageModule": () => (/* binding */ MediaViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _media_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-view-routing.module */ 4774);
/* harmony import */ var _media_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-view.page */ 2206);







let MediaViewPageModule = class MediaViewPageModule {
};
MediaViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _media_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.MediaViewPageRoutingModule
        ],
        declarations: [_media_view_page__WEBPACK_IMPORTED_MODULE_1__.MediaViewPage]
    })
], MediaViewPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_media_media-view_media-view_module_ts.js.map