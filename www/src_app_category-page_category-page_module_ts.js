"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_category-page_category-page_module_ts"],{

/***/ 29:
/*!***************************************************************!*\
  !*** ./src/app/category-page/category-page-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPagePageRoutingModule": () => (/* binding */ CategoryPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _category_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-page.page */ 9463);




const routes = [
    {
        path: '',
        component: _category_page_page__WEBPACK_IMPORTED_MODULE_0__.CategoryPagePage
    }
];
let CategoryPagePageRoutingModule = class CategoryPagePageRoutingModule {
};
CategoryPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoryPagePageRoutingModule);



/***/ }),

/***/ 6507:
/*!*******************************************************!*\
  !*** ./src/app/category-page/category-page.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPagePageModule": () => (/* binding */ CategoryPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _category_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-page-routing.module */ 29);
/* harmony import */ var _category_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-page.page */ 9463);







let CategoryPagePageModule = class CategoryPagePageModule {
};
CategoryPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _category_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryPagePageRoutingModule,
        ],
        declarations: [_category_page_page__WEBPACK_IMPORTED_MODULE_1__.CategoryPagePage]
    })
], CategoryPagePageModule);



/***/ }),

/***/ 9463:
/*!*****************************************************!*\
  !*** ./src/app/category-page/category-page.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPagePage": () => (/* binding */ CategoryPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _category_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-page.page.html?ngResource */ 8741);
/* harmony import */ var _category_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-page.page.scss?ngResource */ 1493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 5897);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ 9725);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








let CategoryPagePage = class CategoryPagePage {
    constructor(commonService, location) {
        this.commonService = commonService;
        this.location = location;
        this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService);
        this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute);
        this.userDetails = this.commonService.getUserDetails();
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.item = this.data.getMessageById(parseInt(id, 10));
        console.log(this.item);
        this.getSelectedItem();
    }
    getSelectedItem() {
        this.commonService.getSelectedItem(this.item.category, this.userDetails.mobile).subscribe((resp) => {
            this.userSelectedItem = resp && resp.userItem;
        });
    }
    getQuantityRange(range) {
        return [...Array(range).keys()];
        +1;
    }
    onItemSelect(qnt, item, idx) {
        // if(this.item.categoryList)
        this.item.categoryList[idx].orderQuant = qnt.target.value;
        const loggedInUserMobile = this.userDetails.mobile;
        this.commonService.updateUser(loggedInUserMobile, item).subscribe(res => {
            this.getSelectedItem();
        });
    }
    goBack() {
        this.location.back();
    }
};
CategoryPagePage.ctorParameters = () => [
    { type: _common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location }
];
CategoryPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-category-page',
        template: _category_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_category_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoryPagePage);



/***/ }),

/***/ 1493:
/*!******************************************************************!*\
  !*** ./src/app/category-page/category-page.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  background-color: #7e6130;\n}\n\nslot {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUVJLHVCQUFBO0FBQ0oiLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZTYxMzA7XHJcbn1cclxuc2xvdCB7XHJcbiAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0iXX0= */";

/***/ }),

/***/ 8741:
/*!******************************************************************!*\
  !*** ./src/app/category-page/category-page.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n  <ion-header class=\"header\" [translucent]=\"true\">\r\n    <ion-toolbar color=\"secondary\">\r\n      <ion-title>{{item.category}}</ion-title>\r\n      <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n        <ion-button> <ion-icon name=\"arrow-back-outline\"></ion-icon>  </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n    \r\n  </ion-header>\r\n<ion-content>\r\n<ion-item  style=\"background-color:white\" *ngFor=\"let list of item.categoryList, let i = index\" >\r\n  <ion-label>{{list.itemName}}</ion-label>\r\n  <ion-select  placeholder=\"Make a Selection\" (ionChange)=\"onItemSelect($event, list, i )\"  >\r\n    <ion-select-option *ngFor=\"let qnt of getQuantityRange(list.quantity)\"  [value]=\"qnt+1\">{{qnt+1}}</ion-select-option>\r\n   \r\n  </ion-select>\r\n  \r\n</ion-item>\r\n<ion-card style=\"background-color:white\" *ngIf=\"userSelectedItem && userSelectedItem.categoryList\">\r\n  <ion-card-header>\r\n    <ion-card-title >My Order</ion-card-title>\r\n    <ion-card-subtitle></ion-card-subtitle>\r\n  </ion-card-header>\r\n  <ion-card-content >\r\n    <ion-list *ngFor=\"let list of userSelectedItem.categoryList\">\r\n      <ion-item  >\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-icon style=\"font-size: 50px;\" name=\"cart-outline\"></ion-icon>\r\n        </ion-thumbnail>\r\n        <ion-label >{{list.itemName}}: {{list.orderQuant}} </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-card-content>\r\n</ion-card>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_category-page_category-page_module_ts.js.map