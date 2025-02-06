"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_calendar_calendar_module_ts"],{

/***/ 6205:
/*!*****************************************************!*\
  !*** ./src/app/calendar/calendar-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPageRoutingModule": () => (/* binding */ CalendarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.page */ 7858);




const routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_0__.CalendarPage
    }
];
let CalendarPageRoutingModule = class CalendarPageRoutingModule {
};
CalendarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalendarPageRoutingModule);



/***/ }),

/***/ 5270:
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPageModule": () => (/* binding */ CalendarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-routing.module */ 6205);
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.page */ 7858);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularx-flatpickr */ 1988);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar */ 5610);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 8617);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 4587);









 // import bn-ng-idle service

let CalendarPageModule = class CalendarPageModule {
};
CalendarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarPageRoutingModule,
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__.FlatpickrModule.forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_9__.CalendarModule.forRoot({ provide: angular_calendar__WEBPACK_IMPORTED_MODULE_9__.DateAdapter, useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__.adapterFactory }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_1__.CalendarPage],
        exports: [_calendar_page__WEBPACK_IMPORTED_MODULE_1__.CalendarPage],
        providers: [_awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera]
    })
], CalendarPageModule);



/***/ }),

/***/ 7858:
/*!*******************************************!*\
  !*** ./src/app/calendar/calendar.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPage": () => (/* binding */ CalendarPage)
/* harmony export */ });
/* harmony import */ var C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _calendar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.page.html?ngResource */ 6163);
/* harmony import */ var _calendar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.page.scss?ngResource */ 2088);
/* harmony import */ var _common_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../common-service.service */ 9283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 2757);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 9377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 3200);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ 5610);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 4587);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);














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
  }
};
let CalendarPage = class CalendarPage {
  constructor(camera, fb, commmonService, loadingCtrl, toastr, activateRoute, location) {
    this.camera = camera;
    this.fb = fb;
    this.commmonService = commmonService;
    this.loadingCtrl = loadingCtrl;
    this.toastr = toastr;
    this.activateRoute = activateRoute;
    this.location = location;
    this.message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    this.isModalOpen = false;
    this.imageURI = [];
    this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarView.Month;
    this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarView;
    this.viewDate = new Date();
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
    this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.events = [];
    this.activeDayIsOpen = false;
  }

  ngOnInit() {
    this.userLogin = JSON.parse(localStorage.getItem('user'));
    console.log(this.userLogin);
    this.activateRoute.params.subscribe(resp => {
      this.showHeader = resp && resp.tab;
    });
    this.taskForm = this.fb.group({
      date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      images: [[]],
      staffName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
    });
    this.getTaskList();
  }

  ionViewWillEnter() {}

  back() {
    this.location.back();
  }

  getTaskList() {
    var _this = this;

    return (0,C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.presentLoading(); // start loader

      console.log('check');
      let eventClone = [];
      _this.events = [];

      _this.commmonService.getTask().subscribe(resp => {
        if (resp && resp.status === 'success') {
          _this.loadingCtrl.dismiss();

          let taskList = resp && resp.task || [];

          if (taskList.length > 0) {
            taskList.forEach(element => {
              eventClone.push({
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(element.date), 10),
                data: element,
                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(element.date), 23),
                title: 'A draggable and resizable event',
                color: { ...colors.yellow
                },
                resizable: {
                  beforeStart: true,
                  afterEnd: true
                },
                draggable: false,
                actions: _this.actions
              });
            });
            _this.events = eventClone;
          }
        }
      });
    })();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  setOpen(isOpen) {
    if (!isOpen) {
      this.taskForm.get('date').patchValue('');
      this.taskForm.get('title').patchValue('');
      this.taskForm.get('images').patchValue([]);
      this.taskForm.get('staffName').patchValue('');
      this.disableButton = false;
    }

    this.isModalOpen = isOpen;
  }

  dayClicked({
    date,
    events
  }) {
    console.log("HERE EVE ", events);
    this.taskForm.patchValue(events[0] && events[0]['data']);

    if (events && events[0] && events[0]['data']) {
      this.disableButton = true;
    }

    this.selectedDate = date;
    this.taskForm.get('date').patchValue(this.selectedDate);
    this.setOpen(true);
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event) {
    const ev = event;

    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
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
      start: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date()),
      end: (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date()),
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

  onFileSelected() {
    console.log("CAMERA");
    const options = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };
    this.camera.getPicture(options).then(imageData => {
      this.taskForm.get('images').value.push("data:image/jpeg;base64," + imageData); // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
    }, err => {
      console.log(err); // Handle error
    });
  }

  submit() {
    var _this2 = this;

    return (0,C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.taskForm.getRawValue().images.length === 0) {
        const toast = yield _this2.toastr.create({
          position: 'top',
          message: 'Please upload all the images',
          duration: 3000
        });
        yield toast.present();
        return;
      }

      console.log('here');

      if (_this2.taskForm.status === 'INVALID') {
        const toast = yield _this2.toastr.create({
          position: 'top',
          message: 'All fields are required',
          duration: 3000
        });
        yield toast.present();
        return;
      }

      const loading = yield _this2.presentLoading(); // start loader

      _this2.commmonService.submitTask(_this2.taskForm.getRawValue()).subscribe(resp => {
        if (resp && resp.status === 'success') {
          _this2.loadingCtrl.dismiss(); // stop loader on successfull response


          _this2.prompt('Task Submmited');

          _this2.taskForm.reset();

          _this2.modal.dismiss();

          _this2.getTaskList();
        }
      }, err => {
        _this2.loadingCtrl.dismiss(); // stop loader on some error

      });
    })();
  }

  presentLoading() {
    var _this3 = this;

    return (0,C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this3.loadingCtrl.create({
        spinner: 'circles',
        keyboardClose: false,
        message: 'Please wait..'
      });
      return yield loading.present();
    })();
  }

  prompt(msg) {
    var _this4 = this;

    return (0,C_maharaja_banquet_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this4.toastr.create({
        position: 'top',
        message: msg,
        duration: 3000
      });
      yield toast.present();
    })();
  }

};

CalendarPage.ctorParameters = () => [{
  type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: _common_service_service__WEBPACK_IMPORTED_MODULE_3__.CommonServiceService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.Location
}];

CalendarPage.propDecorators = {
  modalContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ['modalContent', {
      static: true
    }]
  }],
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonModal]
  }]
};
CalendarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-calendar',
  template: _calendar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewEncapsulation.None,
  styles: [_calendar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CalendarPage);


/***/ }),

/***/ 4587:
/*!********************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/camera/__ivy_ngcc__/ngx/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "DestinationType": () => (/* binding */ DestinationType),
/* harmony export */   "Direction": () => (/* binding */ Direction),
/* harmony export */   "EncodingType": () => (/* binding */ EncodingType),
/* harmony export */   "MediaType": () => (/* binding */ MediaType),
/* harmony export */   "PictureSourceType": () => (/* binding */ PictureSourceType),
/* harmony export */   "PopoverArrowDirection": () => (/* binding */ PopoverArrowDirection)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 4624);




var DestinationType;

(function (DestinationType) {
  DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
  DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
  DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));

var EncodingType;

(function (EncodingType) {
  EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
  EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));

var MediaType;

(function (MediaType) {
  MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
  MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
  MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));

var PictureSourceType;

(function (PictureSourceType) {
  PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
  PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
  PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));

var PopoverArrowDirection;

(function (PopoverArrowDirection) {
  PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
  PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
  PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
  PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
  PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));

var Direction;

(function (Direction) {
  Direction[Direction["BACK"] = 0] = "BACK";
  Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));

var Camera =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Camera, _super);

  function Camera() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    /**
     * Constant for possible destination types
     */


    _this.DestinationType = {
      /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
      DATA_URL: 0,

      /** Return file uri (content://media/external/images/media/2 for Android) */
      FILE_URI: 1,

      /** Return native uri (eg. asset-library://... for iOS) */
      NATIVE_URI: 2
    };
    /**
     * Convenience constant
     */

    _this.EncodingType = {
      /** Return JPEG encoded image */
      JPEG: 0,

      /** Return PNG encoded image */
      PNG: 1
    };
    /**
     * Convenience constant
     */

    _this.MediaType = {
      /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
      PICTURE: 0,

      /** Allow selection of video only, ONLY RETURNS URL */
      VIDEO: 1,

      /** Allow selection from all media types */
      ALLMEDIA: 2
    };
    /**
     * Convenience constant
     */

    _this.PictureSourceType = {
      /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
      PHOTOLIBRARY: 0,

      /** Take picture from camera */
      CAMERA: 1,

      /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
      SAVEDPHOTOALBUM: 2
    };
    /**
     * Convenience constant
     */

    _this.PopoverArrowDirection = {
      ARROW_UP: 1,
      ARROW_DOWN: 2,
      ARROW_LEFT: 4,
      ARROW_RIGHT: 8,
      ARROW_ANY: 15
    };
    /**
     * Convenience constant
     */

    _this.Direction = {
      /** Use the back-facing camera */
      BACK: 0,

      /** Use the front-facing camera */
      FRONT: 1
    };
    return _this;
  }

  Camera.prototype.getPicture = function (options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getPicture", {
      "callbackOrder": "reverse"
    }, arguments);
  };

  Camera.prototype.cleanup = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "cleanup", {
      "platforms": ["iOS"]
    }, arguments);
  };

  Camera.pluginName = "Camera";
  Camera.plugin = "cordova-plugin-camera";
  Camera.pluginRef = "navigator.camera";
  Camera.repo = "https://github.com/apache/cordova-plugin-camera";
  Camera.platforms = ["Android", "Browser", "iOS", "Windows"];

  Camera.ɵfac = /*@__PURE__*/function () {
    var ɵCamera_BaseFactory;
    return function Camera_Factory(t) {
      return (ɵCamera_BaseFactory || (ɵCamera_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](Camera)))(t || Camera);
    };
  }();

  Camera.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: Camera,
    factory: function (t) {
      return Camera.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Camera, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null);
  })();

  return Camera;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



/***/ }),

/***/ 2088:
/*!********************************************************!*\
  !*** ./src/app/calendar/calendar.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".img-wrapper {\n  min-height: 200px;\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n* {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJjYWxlbmRhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXdyYXBwZXIge1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4qIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59Il19 */";

/***/ }),

/***/ 6163:
/*!********************************************************!*\
  !*** ./src/app/calendar/calendar.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content>\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"btn-group\">\r\n        <div\r\n          class=\"btn btn-primary\"\r\n          mwlCalendarPreviousView\r\n          [view]=\"view\"\r\n          [(viewDate)]=\"viewDate\"\r\n          (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n        >\r\n          Previous\r\n        </div>\r\n        <div\r\n          class=\"btn btn-outline-secondary\"\r\n          mwlCalendarToday\r\n          [(viewDate)]=\"viewDate\"\r\n        >\r\n          Today\r\n        </div>\r\n        <div\r\n          class=\"btn btn-primary\"\r\n          mwlCalendarNextView\r\n          [view]=\"view\"\r\n          [(viewDate)]=\"viewDate\"\r\n          (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n        >\r\n          Next\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"btn-group\">\r\n        <div\r\n          class=\"btn btn-primary\"\r\n          (click)=\"setView(CalendarView.Month)\"\r\n          [class.active]=\"view === CalendarView.Month\"\r\n        >\r\n          Month\r\n        </div>\r\n        <div\r\n          class=\"btn btn-primary\"\r\n          (click)=\"setView(CalendarView.Week)\"\r\n          [class.active]=\"view === CalendarView.Week\"\r\n        >\r\n          Week\r\n        </div>\r\n        <div\r\n          class=\"btn btn-primary\"\r\n          (click)=\"setView(CalendarView.Day)\"\r\n          [class.active]=\"view === CalendarView.Day\"\r\n        >\r\n          Day\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br />\r\n  <div [ngSwitch]=\"view\" style=\"overflow: auto;\">\r\n    <mwl-calendar-month-view\r\n      *ngSwitchCase=\"CalendarView.Month\"\r\n      [viewDate]=\"viewDate\"\r\n      [events]=\"events\"\r\n      [refresh]=\"refresh\"\r\n      [activeDayIsOpen]=\"activeDayIsOpen\"\r\n      (dayClicked)=\"dayClicked($event.day)\"\r\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n      (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n    >\r\n    </mwl-calendar-month-view>\r\n    <mwl-calendar-week-view\r\n      *ngSwitchCase=\"CalendarView.Week\"\r\n      [viewDate]=\"viewDate\"\r\n      [events]=\"events\"\r\n      [refresh]=\"refresh\"\r\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n      (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n    >\r\n    </mwl-calendar-week-view>\r\n    <mwl-calendar-day-view\r\n      *ngSwitchCase=\"CalendarView.Day\"\r\n      [viewDate]=\"viewDate\"\r\n      [events]=\"events\"\r\n      [refresh]=\"refresh\"\r\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n      (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n    >\r\n    </mwl-calendar-day-view>\r\n  </div>\r\n  \r\n  <ion-modal [isOpen]=\"isModalOpen\">\r\n    <ng-template>\r\n      <ion-header>\r\n        <ion-toolbar >\r\n          <ion-title>ADD TASK </ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"setOpen(false)\">Close</ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content class=\"ion-padding\">\r\n        <p [formGroup]=\"taskForm\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Date</ion-label>\r\n            <ion-input formControlName=\"date\" [value]=\"selectedDate\"></ion-input>\r\n          </ion-item>\r\n          <br>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Title</ion-label>\r\n            <ion-input formControlName=\"title\"></ion-input>\r\n          </ion-item>\r\n          <br>\r\n          <ion-item>\r\n              <ion-label position=\"floating\">Staff Name</ion-label>\r\n              <ion-input formControlName=\"staffName\"></ion-input>\r\n            </ion-item>\r\n            <br>\r\n              <ion-button *ngIf=\"!disableButton\" expand=\"round\" color=\"dark\" (click)=\"onFileSelected()\">\r\n                <ion-icon lazy=\"true\" slot=\"start\" name=\"image\"></ion-icon>\r\n                <ion-label slot=\"end\">Upload pic</ion-label>\r\n              </ion-button>\r\n              <ion-button *ngIf=\"!disableButton\" expand=\"round\" color=\"dark\" (click)=\"submit()\">\r\n                <ion-label slot=\"end\">submit</ion-label>\r\n              </ion-button>\r\n               <br>\r\n               <br>\r\n               <ion-grid>\r\n                <ion-row>\r\n                  <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let image of taskForm.get('images').value\">\r\n                    <img class=\"img-wrapper\" [src]=\"image\">\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n        </p>\r\n      </ion-content>\r\n    </ng-template>\r\n  </ion-modal>\r\n  \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_calendar_calendar_module_ts.js.map