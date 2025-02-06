"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_booking-calendar_booking-calendar_module_ts"],{

/***/ 889:
/*!*********************************************************************!*\
  !*** ./src/app/booking-calendar/booking-calendar-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingCalendarPageRoutingModule": () => (/* binding */ BookingCalendarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _booking_calendar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-calendar.page */ 1728);




const routes = [
    {
        path: '',
        component: _booking_calendar_page__WEBPACK_IMPORTED_MODULE_0__.BookingCalendarPage
    },
    {
        path: 'booking-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_booking-calendar_booking-modal_booking-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./booking-modal/booking-modal.module */ 3278)).then(m => m.BookingModalPageModule)
    }
];
let BookingCalendarPageRoutingModule = class BookingCalendarPageRoutingModule {
};
BookingCalendarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookingCalendarPageRoutingModule);



/***/ }),

/***/ 6633:
/*!*************************************************************!*\
  !*** ./src/app/booking-calendar/booking-calendar.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingCalendarPageModule": () => (/* binding */ BookingCalendarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _booking_calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-calendar-routing.module */ 889);
/* harmony import */ var _booking_calendar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-calendar.page */ 1728);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-flatpickr */ 1988);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar */ 5610);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 8617);










let BookingCalendarPageModule = class BookingCalendarPageModule {
};
BookingCalendarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _booking_calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingCalendarPageRoutingModule,
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_7__.FlatpickrModule.forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_8__.CalendarModule.forRoot({ provide: angular_calendar__WEBPACK_IMPORTED_MODULE_8__.DateAdapter, useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__.adapterFactory }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_booking_calendar_page__WEBPACK_IMPORTED_MODULE_1__.BookingCalendarPage],
        exports: [_booking_calendar_page__WEBPACK_IMPORTED_MODULE_1__.BookingCalendarPage]
    })
], BookingCalendarPageModule);



/***/ }),

/***/ 1728:
/*!***********************************************************!*\
  !*** ./src/app/booking-calendar/booking-calendar.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingCalendarPage": () => (/* binding */ BookingCalendarPage)
/* harmony export */ });
/* harmony import */ var C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _booking_calendar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-calendar.page.html?ngResource */ 9515);
/* harmony import */ var C_maharaja_banquet_app_src_app_booking_calendar_booking_calendar_page_ts_css_ngResource_C_maharaja_banquet_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuYnRuLXByaW1hcnkgewogICAgICBiYWNrZ3JvdW5kOiAjN2U2MTMwOwogICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgY29sb3I6I2FkZWZkMTsKICAgICAgbWFyZ2luOjhweCAhaW1wb3J0YW50OwogICAgfQogICAgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeSB7CiAgICAgIGJhY2tncm91bmQ6ICM3ZTYxMzA7CiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOwogICAgICBjb2xvcjojYWRlZmQxOwogICAgfQogIAogICAgLnNjcm9sbCB7CiAgICAgIG92ZXJmbG93OiBhdXRvOwogICAgfQogICAgLmxhZ2FuIHsKICAgICAgaGVpZ2h0OiAxNXB4OwogICAgICB3aWR0aDogMTVweDsKICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NGQTI0MDsKICAgICAgYm9yZGVyLXJhZGl1czogNTAlOwogICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICB9CiAgICAuYm9va2luZyB7CiAgICAgIGhlaWdodDogMTVweDsKICAgICAgd2lkdGg6IDE1cHg7CiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDIxMjE7CiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgICAgCiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsKICAgIH0KICAgIC5jYWwtbW9udGgtdmlldyAuY2FsLWV2ZW50LXRpdGxlIHsKICAgIGN1cnNvcjogcG9pbnRlcjsKICAgIGZvbnQtd2VpZ2h0OiBib2xkOwogIAp9CiAgICAgIC5teS1jdXN0b20tY2xhc3Mgc3BhbiB7CiAgICAgICAgY29sb3I6ICNDRkEyNDA7CiAgICAgICAgYW5pbWF0aW9uOiBibGlua2VyIDJzIGxpbmVhciBpbmZpbml0ZTsKICAgICAgICBmb250LXNpemU6MTVweDsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgfQogICAgICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktYmFkZ2UgewogICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OzsKICAgICAgY29sb3I6ICNmZmY7Cn0KICAgICAgQGtleWZyYW1lcyBibGlua2VyIHsKICA1MCUgewogICAgb3BhY2l0eTogMDsKICB9Cn0KICAgIA_3D_3D_C_maharaja_banquet_app_src_app_booking_calendar_booking_calendar_page_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/booking-calendar/booking-calendar.page.ts.css?ngResource!=!./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAuYnRuLXByaW1hcnkgewogICAgICBiYWNrZ3JvdW5kOiAjN2U2MTMwOwogICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgY29sb3I6I2FkZWZkMTsKICAgICAgbWFyZ2luOjhweCAhaW1wb3J0YW50OwogICAgfQogICAgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeSB7CiAgICAgIGJhY2tncm91bmQ6ICM3ZTYxMzA7CiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOwogICAgICBjb2xvcjojYWRlZmQxOwogICAgfQogIAogICAgLnNjcm9sbCB7CiAgICAgIG92ZXJmbG93OiBhdXRvOwogICAgfQogICAgLmxhZ2FuIHsKICAgICAgaGVpZ2h0OiAxNXB4OwogICAgICB3aWR0aDogMTVweDsKICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NGQTI0MDsKICAgICAgYm9yZGVyLXJhZGl1czogNTAlOwogICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICB9CiAgICAuYm9va2luZyB7CiAgICAgIGhlaWdodDogMTVweDsKICAgICAgd2lkdGg6IDE1cHg7CiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDIxMjE7CiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgICAgCiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsKICAgIH0KICAgIC5jYWwtbW9udGgtdmlldyAuY2FsLWV2ZW50LXRpdGxlIHsKICAgIGN1cnNvcjogcG9pbnRlcjsKICAgIGZvbnQtd2VpZ2h0OiBib2xkOwogIAp9CiAgICAgIC5teS1jdXN0b20tY2xhc3Mgc3BhbiB7CiAgICAgICAgY29sb3I6ICNDRkEyNDA7CiAgICAgICAgYW5pbWF0aW9uOiBibGlua2VyIDJzIGxpbmVhciBpbmZpbml0ZTsKICAgICAgICBmb250LXNpemU6MTVweDsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgfQogICAgICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktYmFkZ2UgewogICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OzsKICAgICAgY29sb3I6ICNmZmY7Cn0KICAgICAgQGtleWZyYW1lcyBibGlua2VyIHsKICA1MCUgewogICAgb3BhY2l0eTogMDsKICB9Cn0KICAgIA%3D%3D!./src/app/booking-calendar/booking-calendar.page.ts */ 7410);
/* harmony import */ var src_app_services_booking_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/booking-service.service */ 8220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 3470);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 5845);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 9377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 3200);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 2757);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ 5610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _booking_modal_booking_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking-modal/booking-modal.page */ 5962);













const colors = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
  gold: {
    primary: '#CFA240',
    secondary: '#CFA240'
  }
};
let BookingCalendarPage = class BookingCalendarPage {
  constructor(bookingService, activateRoute, location, platform, modalController) {
    this.bookingService = bookingService;
    this.activateRoute = activateRoute;
    this.location = location;
    this.platform = platform;
    this.modalController = modalController;
    this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarView.Month;
    this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarView;
    this.viewDate = new Date();
    this.isReady = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.actions = [{
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({
        event
      }) => {
        this.handleEvent('Edited', event);
      }
    }, {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({
        event
      }) => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }];
    this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.events = [];
    this.activeDayIsOpen = false;
    this.userLogin = JSON.parse(localStorage.getItem('user'));
    console.log(this.userLogin);
    this.activateRoute.params.subscribe(resp => {
      this.showHeader = resp && resp.id;
    });
    this.platform.ready().then(() => {
      document.body.setAttribute('data-theme', 'light');
      document.body.classList.toggle('dark', false);
    });
  }

  back() {
    this.location.back();
  }

  ngOnInit() {
    this.getBookedDates(); // this.getLaganDate();
  }

  dayClicked({
    date,
    events
  }) {
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(date, this.viewDate)) {
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }

      this.viewDate = date;
    }

    this.presentModal(date, this.dbData);
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }) {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return { ...event,
          start: newStart,
          end: newEnd
        };
      }

      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action, event) {
    this.modalData = {
      event,
      action
    };
  }

  addEvent() {
    this.events = [...this.events, {
      title: 'New event',
      start: (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date()),
      end: (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    }];
  }

  deleteEvent(eventToDelete) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  refreshData() {
    this.getBookedDates();
  }

  getBookedDates() {
    this.isready = false;
    var i = this;
    this.events = [];
    this.bookingService.getAllCashInFlowDate().subscribe(cashInFlowData => {
      let cashInFlowDatas = cashInFlowData;
      this.dbData = cashInFlowDatas;

      for (let index = 0; index < cashInFlowDatas.length; index++) {
        var bookingDate = cashInFlowDatas[index].date;
        this.events.push({
          start: (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(bookingDate), 10),
          end: (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(bookingDate), 23),
          title: `${cashInFlowDatas[index].category}
            Debit: ${cashInFlowDatas[index].debit},
            Credit: ${cashInFlowDatas[index].credit}`,
          color: colors.red,
          meta: cashInFlowDatas
        });
        this.isready = true;
        console.log(this.events);
        this.isReady.emit(true);
      }
    });
  }

  getLaganDate() {
    this.bookingService.getLagan().subscribe(laganDate => {
      for (let index = 0; index < laganDate.length; index++) {
        this.events.push({
          start: new Date(laganDate[index].date),
          end: new Date(laganDate[index].date),
          title: laganDate[index].description,
          color: colors.gold,
          cssClass: 'my-custom-class'
        });
      }
    });
  }

  presentModal(date, cashInFlowDatas) {
    var _this = this;

    return (0,C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("form main", date);
      const modal = yield _this.modalController.create({
        component: _booking_modal_booking_modal_page__WEBPACK_IMPORTED_MODULE_4__.BookingModalPage,
        breakpoints: [0, 0.3, 0.5, 0.8, 1],
        initialBreakpoint: 0.9,
        componentProps: {
          date: date,
          cashInFlowDatas: cashInFlowDatas
        }
      });
      modal.onDidDismiss().then(() => {
        _this.getBookedDates();
      });
      yield modal.present();
    })();
  }

};

BookingCalendarPage.ctorParameters = () => [{
  type: src_app_services_booking_service_service__WEBPACK_IMPORTED_MODULE_3__.BookingServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController
}];

BookingCalendarPage.propDecorators = {
  modalContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['modalContent', {
      static: true
    }]
  }],
  status: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  isReady: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
  }]
};
BookingCalendarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'public-calendar',
  template: _booking_calendar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulation.None,
  styles: [C_maharaja_banquet_app_src_app_booking_calendar_booking_calendar_page_ts_css_ngResource_C_maharaja_banquet_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuYnRuLXByaW1hcnkgewogICAgICBiYWNrZ3JvdW5kOiAjN2U2MTMwOwogICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgY29sb3I6I2FkZWZkMTsKICAgICAgbWFyZ2luOjhweCAhaW1wb3J0YW50OwogICAgfQogICAgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeSB7CiAgICAgIGJhY2tncm91bmQ6ICM3ZTYxMzA7CiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOwogICAgICBjb2xvcjojYWRlZmQxOwogICAgfQogIAogICAgLnNjcm9sbCB7CiAgICAgIG92ZXJmbG93OiBhdXRvOwogICAgfQogICAgLmxhZ2FuIHsKICAgICAgaGVpZ2h0OiAxNXB4OwogICAgICB3aWR0aDogMTVweDsKICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NGQTI0MDsKICAgICAgYm9yZGVyLXJhZGl1czogNTAlOwogICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICB9CiAgICAuYm9va2luZyB7CiAgICAgIGhlaWdodDogMTVweDsKICAgICAgd2lkdGg6IDE1cHg7CiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDIxMjE7CiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgICAgCiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsKICAgIH0KICAgIC5jYWwtbW9udGgtdmlldyAuY2FsLWV2ZW50LXRpdGxlIHsKICAgIGN1cnNvcjogcG9pbnRlcjsKICAgIGZvbnQtd2VpZ2h0OiBib2xkOwogIAp9CiAgICAgIC5teS1jdXN0b20tY2xhc3Mgc3BhbiB7CiAgICAgICAgY29sb3I6ICNDRkEyNDA7CiAgICAgICAgYW5pbWF0aW9uOiBibGlua2VyIDJzIGxpbmVhciBpbmZpbml0ZTsKICAgICAgICBmb250LXNpemU6MTVweDsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgfQogICAgICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktYmFkZ2UgewogICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OzsKICAgICAgY29sb3I6ICNmZmY7Cn0KICAgICAgQGtleWZyYW1lcyBibGlua2VyIHsKICA1MCUgewogICAgb3BhY2l0eTogMDsKICB9Cn0KICAgIA_3D_3D_C_maharaja_banquet_app_src_app_booking_calendar_booking_calendar_page_ts__WEBPACK_IMPORTED_MODULE_2__]
})], BookingCalendarPage);


/***/ }),

/***/ 5962:
/*!**********************************************************************!*\
  !*** ./src/app/booking-calendar/booking-modal/booking-modal.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingModalPage": () => (/* binding */ BookingModalPage)
/* harmony export */ });
/* harmony import */ var C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _booking_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-modal.page.html?ngResource */ 5631);
/* harmony import */ var _booking_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-modal.page.scss?ngResource */ 7838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common.service */ 9725);








let BookingModalPage = class BookingModalPage {
  constructor(formBuilder, toastr, commonService, modal) {
    this.formBuilder = formBuilder;
    this.toastr = toastr;
    this.commonService = commonService;
    this.modal = modal;
    this.error = {
      customerName: '',
      mobile: '',
      address: '',
      requirement: ''
    };
    this.colors = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'];
    this.finalArray = [];
  }

  getRandomColor() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }

  ngOnInit() {
    this.bookingForm = this.formBuilder.group({
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      credit: [],
      debit: [],
      date: [this.date, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
    console.log(this.cashInFlowDatas);

    for (let index = 0; index < this.cashInFlowDatas.length; index++) {
      if (new Date(this.cashInFlowDatas[index].date).toISOString() === new Date(this.date).toISOString()) {
        this.finalArray.push(this.cashInFlowDatas[index]);
      }
    }

    console.log(this.finalArray);
  }

  submit() {
    this.isProgress = true;
    const payload = this.bookingForm.getRawValue();
    this.commonService.addPublicBooking(payload).subscribe(resp => {
      this.toast('Your Booking Request has been submitted, Our Manager Will Contact You Soon...', 'secondary');
      this.isProgress = false;
      this.modal.dismiss();
    }, err => {
      if (err && err.error && err.error.status === 'Validation Failed') {
        this.error = err && err.error;
        console.log(this.error);
        this.isProgress = false;
      }

      this.isProgress = false;
    });
  }

  toast(msg, color) {
    var _this = this;

    return (0,C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastr.create({
        position: 'bottom',
        message: msg,
        duration: 3000,
        color: color
      });
      yield toast.present();
    })();
  }

};

BookingModalPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}, {
  type: src_app_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}];

BookingModalPage.propDecorators = {
  date: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  cashInFlowDatas: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
};
BookingModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-booking-modal',
  template: _booking_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_booking_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], BookingModalPage);


/***/ }),

/***/ 8220:
/*!*****************************************************!*\
  !*** ./src/app/services/booking-service.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingServiceService": () => (/* binding */ BookingServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api-service.service */ 8287);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 4766);




let BookingServiceService = class BookingServiceService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    add_booking(payload) {
        const URL = `api/v1/booking/add-booking`;
        return this.apiService.post(URL, payload);
    }
    getConfig() {
        const URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/config/get-config`;
        return this.apiService.get(URL);
    }
    getAllCashInFlowDate() {
        const URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/cashflow2024_25/app-get-cashflow`;
        return this.apiService.get(URL);
    }
    getASpecificBooking(bookingDate) {
        const URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/booking/get-booking-list?bookingDateQuery=${bookingDate}`;
        return this.apiService.get(URL);
    }
    downloadInvoice(invoiceId) {
        const URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/invoice/invoice?id=${invoiceId}`;
        return this.apiService.get(URL);
    }
    getAuth(username, password) {
        const URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/auth/security?username=${username}&password=${password}`;
        return this.apiService.get(URL);
    }
    generateInvoice(body) {
        const URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/invoice/generate_invoice`;
        return this.apiService.postPdf(URL, body);
    }
    getLagan() {
        const URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/lagan/get-lagan`;
        return this.apiService.get(URL);
    }
    settleBooking(_id) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/booking/settle-booking`;
        return this.apiService.post(url, { '_id': _id });
    }
    getBookingList() {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/booking/get-booking-admin`;
        return this.apiService.get(url);
    }
    uploadExpenseSheet(base64, fileName, ext) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/upload/upload-expense-excel`;
        return this.apiService.post(url, { file: base64, fileName: fileName, ext: ext });
    }
    addExpenseUrl(expenseSheetUrl, _id) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host}/api/v1/booking/add-expense`;
        return this.apiService.post(url, { url: expenseSheetUrl, _id: _id });
    }
};
BookingServiceService.ctorParameters = () => [
    { type: _api_service_service__WEBPACK_IMPORTED_MODULE_0__.ApiServiceService }
];
BookingServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], BookingServiceService);



/***/ }),

/***/ 7410:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/booking-calendar/booking-calendar.page.ts.css?ngResource!=!./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAuYnRuLXByaW1hcnkgewogICAgICBiYWNrZ3JvdW5kOiAjN2U2MTMwOwogICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgY29sb3I6I2FkZWZkMTsKICAgICAgbWFyZ2luOjhweCAhaW1wb3J0YW50OwogICAgfQogICAgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeSB7CiAgICAgIGJhY2tncm91bmQ6ICM3ZTYxMzA7CiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOwogICAgICBjb2xvcjojYWRlZmQxOwogICAgfQogIAogICAgLnNjcm9sbCB7CiAgICAgIG92ZXJmbG93OiBhdXRvOwogICAgfQogICAgLmxhZ2FuIHsKICAgICAgaGVpZ2h0OiAxNXB4OwogICAgICB3aWR0aDogMTVweDsKICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NGQTI0MDsKICAgICAgYm9yZGVyLXJhZGl1czogNTAlOwogICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICB9CiAgICAuYm9va2luZyB7CiAgICAgIGhlaWdodDogMTVweDsKICAgICAgd2lkdGg6IDE1cHg7CiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDIxMjE7CiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgICAgCiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsKICAgIH0KICAgIC5jYWwtbW9udGgtdmlldyAuY2FsLWV2ZW50LXRpdGxlIHsKICAgIGN1cnNvcjogcG9pbnRlcjsKICAgIGZvbnQtd2VpZ2h0OiBib2xkOwogIAp9CiAgICAgIC5teS1jdXN0b20tY2xhc3Mgc3BhbiB7CiAgICAgICAgY29sb3I6ICNDRkEyNDA7CiAgICAgICAgYW5pbWF0aW9uOiBibGlua2VyIDJzIGxpbmVhciBpbmZpbml0ZTsKICAgICAgICBmb250LXNpemU6MTVweDsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgfQogICAgICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktYmFkZ2UgewogICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OzsKICAgICAgY29sb3I6ICNmZmY7Cn0KICAgICAgQGtleWZyYW1lcyBibGlua2VyIHsKICA1MCUgewogICAgb3BhY2l0eTogMDsKICB9Cn0KICAgIA%3D%3D!./src/app/booking-calendar/booking-calendar.page.ts ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n    .btn-primary {\n      background: #7e6130;\n      font-weight: bold;\n      color:#adefd1;\n      margin:8px !important;\n    }\n    .btn-outline-secondary {\n      background: #7e6130;\n      font-weight: bold;\n      color:#adefd1;\n    }\n    .scroll {\n      overflow: auto;\n    }\n    .lagan {\n      height: 15px;\n      width: 15px;\n      background-color: #CFA240;\n      border-radius: 50%;\n      display: inline-block;\n    }\n    .booking {\n      height: 15px;\n      width: 15px;\n      background-color: #ad2121;\n      border-radius: 50%;\n      \n      display: inline-block;\n    }\n    .cal-month-view .cal-event-title {\n    cursor: pointer;\n    font-weight: bold;\n  \n}\n    .my-custom-class span {\n        color: #CFA240;\n        animation: blinker 2s linear infinite;\n        font-size:15px;\n        font-weight: bold;\n      }\n    .cal-month-view .cal-day-badge {\n      background-color: grey;;\n      color: #fff;\n}\n    @keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctY2FsZW5kYXIucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGFBQWE7TUFDYixxQkFBcUI7SUFDdkI7SUFDQTtNQUNFLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsYUFBYTtJQUNmO0lBRUE7TUFDRSxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxZQUFZO01BQ1osV0FBVztNQUNYLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIscUJBQXFCO0lBQ3ZCO0lBQ0E7TUFDRSxZQUFZO01BQ1osV0FBVztNQUNYLHlCQUF5QjtNQUN6QixrQkFBa0I7O01BRWxCLHFCQUFxQjtJQUN2QjtJQUNBO0lBQ0EsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7SUFDTTtRQUNFLGNBQWM7UUFDZCxxQ0FBcUM7UUFDckMsY0FBYztRQUNkLGlCQUFpQjtNQUNuQjtJQUNBO01BQ0Esc0JBQXNCO01BQ3RCLFdBQVc7QUFDakI7SUFDTTtFQUNKO0lBQ0UsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoiYm9va2luZy1jYWxlbmRhci5wYWdlLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgIGJhY2tncm91bmQ6ICM3ZTYxMzA7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiNhZGVmZDE7XG4gICAgICBtYXJnaW46OHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuICAgICAgYmFja2dyb3VuZDogIzdlNjEzMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6I2FkZWZkMTtcbiAgICB9XG4gIFxuICAgIC5zY3JvbGwge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICAgIC5sYWdhbiB7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkEyNDA7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5ib29raW5nIHtcbiAgICAgIGhlaWdodDogMTVweDtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FkMjEyMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudC10aXRsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBcbn1cbiAgICAgIC5teS1jdXN0b20tY2xhc3Mgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjQ0ZBMjQwO1xuICAgICAgICBhbmltYXRpb246IGJsaW5rZXIgMnMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktYmFkZ2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTs7XG4gICAgICBjb2xvcjogI2ZmZjtcbn1cbiAgICAgIEBrZXlmcmFtZXMgYmxpbmtlciB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuICAgICJdfQ== */";

/***/ }),

/***/ 7838:
/*!***********************************************************************************!*\
  !*** ./src/app/booking-calendar/booking-modal/booking-modal.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nLW1vZGFsLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 9515:
/*!************************************************************************!*\
  !*** ./src/app/booking-calendar/booking-calendar.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"header\" *ngIf=\"showHeader === 'false'\"  [translucent]=\"true\">\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-title text-left>\r\n      <img alt=\"logo\" height=\"40\" float-left src=\"../../assets/images/icon.png\"> Maharaja Banquet\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"refreshData()\">\r\n      <ion-button><ion-icon name=\"refresh-outline\"></ion-icon> </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div *ngIf=\"isready\" style=\"background: white;\">\r\n    <p  style=\"text-align: center;\"><ion-chip style=\" --background: #00213f;--color: #adefd1;\">TAP ON DATE TO FEED INCOME/DEBIT</ion-chip></p>\r\n    <ng-container style=\"overflow: auto;\">\r\n     <div class=\"row text-center\" >\r\n     \r\n        <div class=\"col-md-4\">\r\n          <div class=\"btn-group\">\r\n            <div\r\n              class=\"btn btn-primary\"\r\n              \r\n              mwlCalendarPreviousView\r\n              [view]=\"view\"\r\n              [(viewDate)]=\"viewDate\"\r\n              (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n            >\r\n              Previous Month\r\n            </div>\r\n            <!-- <div\r\n              class=\"btn btn-outline-secondary\"\r\n              mwlCalendarToday\r\n              [(viewDate)]=\"viewDate\"\r\n            >\r\n              Today\r\n            </div> -->\r\n            <div\r\n              class=\"btn btn-primary\"\r\n              mwlCalendarNextView\r\n              [view]=\"view\"\r\n              [(viewDate)]=\"viewDate\"\r\n              (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n            >\r\n              Next Month\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\" style=\"text-align: center;font-size: 20px;\">\r\n          <h3 style=\"font-weight: bold; color: #7e6130\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n        </div>\r\n        <!-- <div class=\"col-md-4\" style=\"background: white;\">\r\n          <div class=\"btn-group\">\r\n            <div\r\n              class=\"btn btn-primary\"\r\n              (click)=\"setView(CalendarView.Month)\"\r\n              [class.active]=\"view === CalendarView.Month\"\r\n            >\r\n              Month\r\n            </div>\r\n            <div\r\n              class=\"btn btn-primary\"\r\n              (click)=\"setView(CalendarView.Week)\"\r\n              [class.active]=\"view === CalendarView.Week\"\r\n            >\r\n              Week\r\n            </div>\r\n            <div\r\n              class=\"btn btn-primary\"\r\n              (click)=\"setView(CalendarView.Day)\"\r\n              [class.active]=\"view === CalendarView.Day\"\r\n            >\r\n              Day\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n        <br>\r\n        <br>\r\n      </div>\r\n      <br />\r\n      <div class=\"scroll\" [ngSwitch]=\"view\" style=\"background: white;\">\r\n        <mwl-calendar-month-view\r\n          *ngSwitchCase=\"CalendarView.Month\"\r\n          [viewDate]=\"viewDate\"\r\n          [events]=\"events\"\r\n          [refresh]=\"refresh\"\r\n          [activeDayIsOpen]=\"activeDayIsOpen\"\r\n          (dayClicked)=\"dayClicked($event.day)\"\r\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n          (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n        >\r\n        </mwl-calendar-month-view>\r\n        <mwl-calendar-week-view\r\n          *ngSwitchCase=\"CalendarView.Week\"\r\n          [viewDate]=\"viewDate\"\r\n          [events]=\"events\"\r\n          [refresh]=\"refresh\"\r\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n          (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n        >\r\n        </mwl-calendar-week-view>\r\n        <mwl-calendar-day-view\r\n          *ngSwitchCase=\"CalendarView.Day\"\r\n          [viewDate]=\"viewDate\"\r\n          [events]=\"events\"\r\n          [refresh]=\"refresh\"\r\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n          (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n        >\r\n        </mwl-calendar-day-view>\r\n      </div>\r\n      \r\n      \r\n      <!-- Everything you see below is just for the demo, you don't need to include it in your app -->\r\n      \r\n      <br /><br /><br />\r\n      \r\n    </ng-container>\r\n  </div>\r\n  \r\n</ion-content>\r\n\r\n";

/***/ }),

/***/ 5631:
/*!***********************************************************************************!*\
  !*** ./src/app/booking-calendar/booking-modal/booking-modal.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"ion-page\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"secondary\">\r\n      <ion-progress-bar *ngIf=\"isProgress\" type=\"indeterminate\"></ion-progress-bar>\r\n      <ion-title style=\"font-weight: bold;\">Entry for {{date|date}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content >\r\n    <div [formGroup]=\"bookingForm\">\r\n    <ion-item>\r\n      <ion-label>Description</ion-label>\r\n      <ion-input label=\"Enter Description\" formControlName=\"description\" placeholder=\"Enter Description\"></ion-input>\r\n    </ion-item>\r\n    <br>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label>Select Category</ion-label>\r\n\r\n        <ion-select aria-label=\"Advance Booking\" formControlName=\"category\" interface=\"action-sheet\" placeholder=\"Select category\">\r\n          <ion-select-option value=\"Advance Booking\">Advance Booking</ion-select-option>\r\n          <ion-select-option value=\"Staff Salary\">Staff Salary</ion-select-option>\r\n          <ion-select-option value=\"Wedding Day Staff Payment\">Wedding Day Staff Payment</ion-select-option>\r\n          <ion-select-option value=\"Due Amount\">Due Amount</ion-select-option>\r\n          <ion-select-option value=\"Internet Bill\">Internet Bill</ion-select-option>\r\n          <ion-select-option value=\"Electricity Bill\">Electricity Bill</ion-select-option>\r\n          <ion-select-option value=\"Electrician Visit Charge\">Electrician Visit Charge</ion-select-option>\r\n          <ion-select-option value=\"Electrician Event/Day Charge\">Electrician Event/Day Charge</ion-select-option>\r\n          <ion-select-option value=\"Cleaning Material Cost\">Cleaning Material Cost</ion-select-option>\r\n          <ion-select-option value=\"Diesel\">Diesel</ion-select-option>\r\n          <ion-select-option value=\"Manager Salary\">Manager Salary</ion-select-option>\r\n          <ion-select-option value=\"Maintaince Payment\">Maintaince Payment</ion-select-option>\r\n          <ion-select-option value=\"Misc. Payment\">Misc. Payment</ion-select-option>\r\n          <ion-select-option value=\"Stage Decoration\">Stage Decoration</ion-select-option>\r\n          <ion-select-option value=\"Lighting Decoration\">Lighting Decoration</ion-select-option>\r\n          <ion-select-option value=\"Plumber\">Plumber</ion-select-option>\r\n          <ion-select-option value=\"Event Drinking Water\">Event Drinking Water</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n    <br>\r\n    <ion-item>\r\n      <ion-label>Credit</ion-label>\r\n      <ion-input type=\"number\" label=\"Outline input\"  placeholder=\"Enter Credit Amount\" formControlName=\"credit\"></ion-input>\r\n    </ion-item>\r\n    <br>\r\n    \r\n    <ion-item>\r\n      <ion-label>Debit</ion-label>\r\n      <ion-input label=\"Outline input\"  fill=\"outline\" formControlName=\"debit\" placeholder=\"Enter Debit Amount\"></ion-input>\r\n    </ion-item>\r\n    \r\n    </div>\r\n\r\n    <ion-button (click)=\"submit()\" expand=\"block\" color=\"secondary\">Submit</ion-button>\r\n    <br>\r\n\r\n    <ion-list [inset]=\"true\">\r\n      <ion-item [button]=\"true\" *ngFor=\"let item of finalArray\">\r\n        <ion-icon [color]=\"getRandomColor()\" slot=\"start\" name=\"list-circle\" size=\"large\"></ion-icon>\r\n        <ion-label>{{item.category}}</ion-label>\r\n        <ion-note slot=\"end\">{{ item.credit ? item.credit : item.debit }}</ion-note>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_booking-calendar_booking-calendar_module_ts.js.map