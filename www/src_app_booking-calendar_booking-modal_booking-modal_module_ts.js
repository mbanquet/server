"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_booking-calendar_booking-modal_booking-modal_module_ts"],{

/***/ 4509:
/*!********************************************************************************!*\
  !*** ./src/app/booking-calendar/booking-modal/booking-modal-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingModalPageRoutingModule": () => (/* binding */ BookingModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _booking_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-modal.page */ 5962);




const routes = [
    {
        path: '',
        component: _booking_modal_page__WEBPACK_IMPORTED_MODULE_0__.BookingModalPage
    }
];
let BookingModalPageRoutingModule = class BookingModalPageRoutingModule {
};
BookingModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookingModalPageRoutingModule);



/***/ }),

/***/ 3278:
/*!************************************************************************!*\
  !*** ./src/app/booking-calendar/booking-modal/booking-modal.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingModalPageModule": () => (/* binding */ BookingModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _booking_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-modal-routing.module */ 4509);
/* harmony import */ var _booking_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-modal.page */ 5962);







let BookingModalPageModule = class BookingModalPageModule {
};
BookingModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _booking_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingModalPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_booking_modal_page__WEBPACK_IMPORTED_MODULE_1__.BookingModalPage]
    })
], BookingModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_booking-calendar_booking-modal_booking-modal_module_ts.js.map