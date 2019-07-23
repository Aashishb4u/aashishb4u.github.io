(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _calender_calender_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calender/calender.component */ "./src/app/calender/calender.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'calender', component: _calender_calender_component__WEBPACK_IMPORTED_MODULE_4__["CalenderComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular-application';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _calender_calender_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calender/calender.component */ "./src/app/calender/calender.component.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _calender_calender_component__WEBPACK_IMPORTED_MODULE_5__["CalenderComponent"]
            ],
            imports: [
                angular_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__["adapterFactory"]
                }),
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_10__["FlatpickrModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calender/calender.component.html":
/*!**************************************************!*\
  !*** ./src/app/calender/calender.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"calender-container\">\n  <div class=\"overlay opacity5\"></div>\n    <div class=\"first-container\">\n      <div class=\"inner-container\">\n        <div style=\"display: flex; justify-content: space-between\" class=\"row text-center\">\n          <div class=\"button-container\">\n            <div [routerLink]=\"['/']\" class=\"calender-button\">\n              Back\n            </div>\n            <div class=\"calender-button\"\n\n                 mwlCalendarPreviousView\n                 [view]=\"view\"\n                 [(viewDate)]=\"viewDate\"\n                 (viewDateChange)=\"closeOpenMonthViewDay()\"\n            >\n              Previous\n            </div>\n            <div class=\"calender-button\"\n\n                 mwlCalendarToday\n                 [(viewDate)]=\"viewDate\"\n            >\n              Today\n            </div>\n            <div class=\"calender-button\"\n\n                 mwlCalendarNextView\n                 [view]=\"view\"\n                 [(viewDate)]=\"viewDate\"\n                 (viewDateChange)=\"closeOpenMonthViewDay()\"\n            >\n              Next\n            </div>\n          </div>\n          <div class=\"button-container\">\n            <div class=\"calender-button\">\n              {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}\n            </div>\n          </div>\n          <div class=\"button-container\">\n            <div class=\"calender-button\"\n\n                 (click)=\"setView(CalendarView.Month)\"\n                 [class.active]=\"view === CalendarView.Month\"\n            >\n              Month\n            </div>\n            <div class=\"calender-button\"\n\n                 (click)=\"setView(CalendarView.Week)\"\n                 [class.active]=\"view === CalendarView.Week\"\n            >\n              Week\n            </div>\n            <div class=\"calender-button\"\n\n                 (click)=\"setView(CalendarView.Day)\"\n                 [class.active]=\"view === CalendarView.Day\"\n            >\n              Day\n            </div>\n          </div>\n        </div>\n        <div class=\"month-container\" [ngSwitch]=\"view\">\n          <mwl-calendar-month-view\n                  *ngSwitchCase=\"CalendarView.Month\"\n                  [viewDate]=\"viewDate\"\n                  [events]=\"events\"\n                  [refresh]=\"refresh\"\n                  [activeDayIsOpen]=\"activeDayIsOpen\"\n                  (dayClicked)=\"dayClicked($event.day)\"\n                  (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                  (eventTimesChanged)=\"eventTimesChanged($event)\"\n          >\n          </mwl-calendar-month-view>\n          <mwl-calendar-week-view\n                  *ngSwitchCase=\"CalendarView.Week\"\n                  [viewDate]=\"viewDate\"\n                  [events]=\"events\"\n                  [refresh]=\"refresh\"\n                  (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                  (eventTimesChanged)=\"eventTimesChanged($event)\"\n          >\n          </mwl-calendar-week-view>\n          <mwl-calendar-day-view\n                  *ngSwitchCase=\"CalendarView.Day\"\n                  [viewDate]=\"viewDate\"\n                  [events]=\"events\"\n                  [refresh]=\"refresh\"\n                  (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                  (eventTimesChanged)=\"eventTimesChanged($event)\"\n          >\n          </mwl-calendar-day-view>\n        </div>\n      </div>\n      <div class=\"notification-bar\"></div>\n    </div>\n\n\n\n    <!--&lt;!&ndash; Everything you see below is just for the demo, you don't need to include it in your app &ndash;&gt;-->\n\n    <!--<br /><br /><br />-->\n\n    <!--<h3>-->\n      <!--Edit events-->\n      <!--<button class=\"btn btn-primary pull-right\" (click)=\"addEvent()\">-->\n        <!--Add new-->\n      <!--</button>-->\n      <!--<div class=\"clearfix\"></div>-->\n    <!--</h3>-->\n\n    <!--<div class=\"table-responsive\">-->\n      <!--<table class=\"table table-bordered\">-->\n        <!--<thead>-->\n        <!--<tr>-->\n          <!--<th>Title</th>-->\n          <!--<th>Primary color</th>-->\n          <!--<th>Secondary color</th>-->\n          <!--<th>Starts at</th>-->\n          <!--<th>Ends at</th>-->\n          <!--<th>Remove</th>-->\n        <!--</tr>-->\n        <!--</thead>-->\n\n        <!--<tbody>-->\n        <!--<tr *ngFor=\"let event of events\">-->\n          <!--<td>-->\n            <!--<input-->\n                    <!--type=\"text\"-->\n                    <!--class=\"form-control\"-->\n                    <!--[(ngModel)]=\"event.title\"-->\n                    <!--(keyup)=\"refresh.next()\"-->\n            <!--/>-->\n          <!--</td>-->\n          <!--<td>-->\n            <!--<input-->\n                    <!--type=\"color\"-->\n                    <!--[(ngModel)]=\"event.color.primary\"-->\n                    <!--(change)=\"refresh.next()\"-->\n            <!--/>-->\n          <!--</td>-->\n          <!--<td>-->\n            <!--<input-->\n                    <!--type=\"color\"-->\n                    <!--[(ngModel)]=\"event.color.secondary\"-->\n                    <!--(change)=\"refresh.next()\"-->\n            <!--/>-->\n          <!--</td>-->\n          <!--<td>-->\n            <!--<input-->\n                    <!--class=\"form-control\"-->\n                    <!--type=\"text\"-->\n                    <!--mwlFlatpickr-->\n                    <!--[(ngModel)]=\"event.start\"-->\n                    <!--(ngModelChange)=\"refresh.next()\"-->\n                    <!--[altInput]=\"true\"-->\n                    <!--[convertModelValue]=\"true\"-->\n                    <!--[enableTime]=\"true\"-->\n                    <!--dateFormat=\"Y-m-dTH:i\"-->\n                    <!--altFormat=\"F j, Y H:i\"-->\n                    <!--placeholder=\"Not set\"-->\n            <!--/>-->\n          <!--</td>-->\n          <!--<td>-->\n            <!--<input-->\n                    <!--class=\"form-control\"-->\n                    <!--type=\"text\"-->\n                    <!--mwlFlatpickr-->\n                    <!--[(ngModel)]=\"event.end\"-->\n                    <!--(ngModelChange)=\"refresh.next()\"-->\n                    <!--[altInput]=\"true\"-->\n                    <!--[convertModelValue]=\"true\"-->\n                    <!--[enableTime]=\"true\"-->\n                    <!--dateFormat=\"Y-m-dTH:i\"-->\n                    <!--altFormat=\"F j, Y H:i\"-->\n                    <!--placeholder=\"Not set\"-->\n            <!--/>-->\n          <!--</td>-->\n          <!--<td>-->\n            <!--<button class=\"btn btn-danger\" (click)=\"deleteEvent(event)\">-->\n              <!--Delete-->\n            <!--</button>-->\n          <!--</td>-->\n        <!--</tr>-->\n        <!--</tbody>-->\n      <!--</table>-->\n    <!--</div>-->\n\n    <!--<ng-template #modalContent let-close=\"close\">-->\n    <!--<div class=\"modal-header\">-->\n    <!--<h5 class=\"modal-title\">Event action occurred</h5>-->\n    <!--<button type=\"button\" class=\"close\" (click)=\"close()\">-->\n    <!--<span aria-hidden=\"true\">&times;</span>-->\n    <!--</button>-->\n    <!--</div>-->\n    <!--<div class=\"modal-body\">-->\n    <!--<div>-->\n    <!--Action:-->\n    <!--<pre>{{ modalData?.action }}</pre>-->\n    <!--</div>-->\n    <!--<div>-->\n    <!--Event:-->\n    <!--<pre>{{ modalData?.event | json }}</pre>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"modal-footer\">-->\n    <!--<button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">-->\n    <!--OK-->\n    <!--</button>-->\n    <!--</div>-->\n    <!--</ng-template>-->\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/calender/calender.component.scss":
/*!**************************************************!*\
  !*** ./src/app/calender/calender.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "pre {\n  background-color: #f5f5f5;\n  padding: 15px; }\n\n::-webkit-scrollbar {\n  width: 0;\n  /* Remove scrollbar space */\n  background: transparent;\n  /* Optional: just make scrollbar invisible */ }\n\n.calender-container {\n  background-size: contain;\n  width: 100%;\n  height: 1000px;\n  overflow: scroll;\n  background-repeat: no-repeat;\n  transition: all 2.5s ease 0s;\n  background-image: url('cover_3.jpg'); }\n\n.calender-container .first-container {\n    position: absolute;\n    width: 100%;\n    display: flex;\n    justify-content: center; }\n\n.calender-container .first-container .inner-container {\n      width: 90%;\n      height: 600px;\n      overflow: scroll; }\n\n.calender-container .first-container .inner-container .button-container {\n        display: flex;\n        justify-content: space-between; }\n\n.calender-container .first-container .inner-container .button-container .calender-button {\n          padding: 6px;\n          cursor: pointer;\n          min-width: 80px;\n          color: white;\n          margin: 5px;\n          border: 1px solid white;\n          border-radius: 6px;\n          /* margin-right: 6px; */ }\n"

/***/ }),

/***/ "./src/app/calender/calender.component.ts":
/*!************************************************!*\
  !*** ./src/app/calender/calender.component.ts ***!
  \************************************************/
/*! exports provided: CalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderComponent", function() { return CalenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var colors = {
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
var CalenderComponent = /** @class */ (function () {
    function CalenderComponent(modal) {
        var _this = this;
        this.modal = modal;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.events = [
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions,
                allDay: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(new Date()), 3),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue,
                allDay: true
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
    }
    CalenderComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    CalenderComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        this.events = this.events.map(function (iEvent) {
            if (iEvent === event) {
                return __assign({}, event, { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    };
    CalenderComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    CalenderComponent.prototype.addEvent = function () {
        this.events = this.events.concat([
            {
                title: 'New event',
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(new Date()),
                color: colors.red,
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                }
            }
        ]);
    };
    CalenderComponent.prototype.deleteEvent = function (eventToDelete) {
        this.events = this.events.filter(function (event) { return event !== eventToDelete; });
    };
    CalenderComponent.prototype.setView = function (view) {
        this.view = view;
    };
    CalenderComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalenderComponent.prototype, "modalContent", void 0);
    CalenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calender',
            template: __webpack_require__(/*! ./calender.component.html */ "./src/app/calender/calender.component.html"),
            styles: [__webpack_require__(/*! ./calender.component.scss */ "./src/app/calender/calender.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], CalenderComponent);
    return CalenderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"home img-bg\" [ngStyle]=\"{'background-image':'url(' + imagePath + ')'}\" [style.background]=\"imagePath\" style=\" background-size: cover;transition: all 2.5s ease 0s;\">\n  <div class=\"overlay opacity5\"></div>\n  <div class=\"container\">\n    <div [ngClass]=\"reverse ? 'reverse' : ''\" class=\"name-block\">\n      <div [ngClass]=\"reverse ? 'reverse' : ''\"  class=\"name-block-container\">\n        <div>\n          <img style=\"max-width: 200px; border-radius: 50%\" src=\"../../assets/images/sa4.jpg\">\n        </div>\n        <h1>Deepaa Bhagwat</h1>\n        <h2>Makeup Artist</h2>\n        <a [routerLink]=\"['calender']\" href=\"https://themeforest.net/item/alpha-cv-resume-vcard-portfolio-template/20381622?s_rank=24\" class=\"btn btn-download\">Book an Appointment</a>\n        <ul [ngClass]=\"reverse ? 'social_verticle' : 'social'\" >\n          <li><a href=\"\"><i class=\"fa fa-facebook\"></i></a></li>\n          <li><a href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\n          <li><a href=\"\"><i class=\"fa fa-linkedin\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"menu-blocks\">\n      <div (click)=\"addReverseClass()\" class=\"about-block menu-block\">\n        <div class=\"about-block-container\">\n          <h2 class=\"about menu-item\">Portfolio</h2>\n        </div>\n      </div>\n      <div (click)=\"addReverseClass()\" class=\"portfolio-block  menu-block\">\n        <div class=\"portfolio-block-container\">\n          <h2 class=\"portfolio menu-item\">Achievements</h2>\n        </div>\n      </div>\n      <div (click)=\"addReverseClass()\" class=\"blog-block  menu-block\">\n        <div class=\"blog-block-container\">\n          <h2 class=\"blog menu-item\">Blog</h2>\n        </div>\n      </div>\n      <div class=\"contact-block  menu-block\">\n        <div class=\"contact-block-container\">\n          <h2 class=\"contact menu-item\">Contact US</h2>\n        </div>\n      </div>\n    </div>\n    <div class=\"content-blocks about\">\n      <section class=\"content\" id=\"about\">\n        <div class=\"block-content\">\n          <h3 class=\"block-title\">Profile</h3>\n          <h3 class=\"subheading\">I'm a <strong>UI/UX Designer &amp; Frontend Developer</strong> from London, UK. I aim to make a difference through my creative solution.</h3>\n          <p>Worked with project teams to create user-friendly and appealing application interfaces and websites for users. Met with project manager, business analyst and architect right from beginning of project, creating rough mock-ups that were refined and extended over many iterations. Adjustments to mock-ups as necessary to address problems encountered.</p>\n          <div class=\"info-list row\">\n            <div class=\"col-sm-6\"><span>Name : </span> James Donnovan Bond</div>\n            <div class=\"col-sm-6\"><span>Date of birth : </span> September 9, 1982 </div>\n            <div class=\"col-sm-6\"><span>Address : </span> 1234 House, Large Street, Small Road, Nice City, Poor County.</div>\n            <div class=\"col-sm-6\"><span>Email : </span> youremail@bond.com</div>\n            <div class=\"col-sm-6\"><span>Phone : </span> + 123 456 789 456</div>\n            <div class=\"col-sm-6\"><span>Skype : </span> James.Bond</div>\n            <div class=\"col-sm-6\"><span>Interest : </span> freelance, full-time</div>\n          </div>\n          <img class=\"sign\" src=\"images/signature.png\" alt=\"\">\n        </div>\n        <div class=\"block-content\">\n          <h3 class=\"block-title\">Skills</h3>\n          <label class=\"progress-bar-label\">Wordpress - <span>5 years experience</span></label>\n          <div class=\"progress\">\n            <div style=\"width: 85%;\" class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n              <span>85%</span>\n            </div>\n          </div>\n          <label class=\"progress-bar-label\">Photoshop - <span>7 years experience</span></label>\n          <div class=\"progress\">\n            <div style=\"width: 69%;\" class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"69\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n              <span>69%</span>\n            </div>\n          </div>\n          <label class=\"progress-bar-label\">HTML&amp;CSS - <span>7 years experience</span></label>\n          <div class=\"progress\">\n            <div style=\"width: 99%;\" class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"99\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n              <span>95%</span>\n            </div>\n          </div>\n          <label class=\"progress-bar-label\">Javascript - <span>3 years experience</span></label>\n          <div class=\"progress\">\n            <div style=\"width: 67%;\" class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"67\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n              <span>67%</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"block-content\">\n          <h3 class=\"block-title\">Experience</h3>\n          <div class=\"timeline experience\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"exp-holder\">\n                  <div class=\"exp\">\n                    <div class=\"hgroup\">\n                      <h4><span>UX Designer</span> @ Apple Inc</h4>\n                      <h5>Feb 2017 - <span class=\"current\">Present</span></h5>\n                    </div>\n                    <p>Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n                  </div>\n                  <div class=\"exp\">\n                    <div class=\"hgroup\">\n                      <h4><span>Research Assistant</span> @ Facebook </h4>\n                      <h5>Sept 2017 - Nov 2017</h5>\n                    </div>\n                    <p>Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n                  </div>\n                  <div class=\"exp\">\n                    <div class=\"hgroup\">\n                      <h4><span>Intern</span> @ Google </h4>\n                      <h5>May 2017 - Sept 2017</h5>\n                    </div>\n                    <p>Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"block-content\">\n          <h3 class=\"block-title\">Education</h3>\n          <div class=\"timeline education\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"exp-holder\">\n                  <div class=\"exp\">\n                    <div class=\"hgroup\">\n                      <h4>MSc in Computer Graphics | <span>Oxford University</span></h4>\n                      <h5>Sept 2017 - Nov 2017</h5>\n                    </div>\n                    <p>Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n                  </div>\n                  <div class=\"exp\">\n                    <div class=\"hgroup\">\n                      <h4>BSc(Hons) in Computer Science | <span>Cambridge University</span></h4>\n                      <h5>Mar 2017 - May 2017</h5>\n                    </div>\n                    <p>Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n                  </div>\n                  <div class=\"exp\">\n                    <div class=\"hgroup\">\n                      <h4>A Levels | <span>London Public Schoo</span></h4>\n                      <h5>May 2017 - Sept 2017</h5>\n                    </div>\n                    <p>Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"block-content\">\n          <h3 class=\"block-title\">Services</h3>\n          <div class=\"row\">\n            <div class=\"col-md-4 col-sm-6 service\">\n              <div class=\"service-icon\">\n                <i class=\"ion-laptop\"></i>\n              </div>\n              <h4>Web Design</h4>\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>\n            </div>\n            <div class=\"col-md-4 col-sm-6 service\">\n              <div class=\"service-icon\">\n                <i class=\"ion-pie-graph\"></i>\n              </div>\n              <h4>App Development</h4>\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>\n            </div>\n            <div class=\"col-md-4 col-sm-6 service\">\n              <div class=\"service-icon\">\n                <i class=\"ion-paintbucket\"></i>\n              </div>\n              <h4>Graphic Design</h4>\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>\n            </div>\n            <div class=\"col-md-4 col-sm-6 service\">\n              <div class=\"service-icon\">\n                <i class=\"ion-printer\"></i>\n              </div>\n              <h4>Print Design</h4>\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>\n            </div>\n            <div class=\"col-md-4 col-sm-6 service\">\n              <div class=\"service-icon\">\n                <i class=\"ion-qr-scanner\"></i>\n              </div>\n              <h4>Graphic Design</h4>\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>\n            </div>\n            <div class=\"col-md-4 col-sm-6 service\">\n              <div class=\"service-icon\">\n                <i class=\"ion-social-buffer\"></i>\n              </div>\n              <h4>Print Design</h4>\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"block-content\">\n          <h3 class=\"block-title\">Awards</h3>\n          <div class=\"row\">\n            <div class=\"col-md-3 col-sm-6 awards\">\n              <img src=\"images/awards/1.jpg\" alt=\"\">\n            </div>\n            <div class=\"col-md-3 col-sm-6 awards\">\n              <img src=\"images/awards/2.jpg\" alt=\"\">\n            </div>\n            <div class=\"col-md-3 col-sm-6 awards\">\n              <img src=\"images/awards/3.jpg\" alt=\"\">\n            </div>\n            <div class=\"col-md-3 col-sm-6 awards\">\n              <img src=\"images/awards/4.jpg\" alt=\"\">\n            </div>\n          </div>\n        </div>\n        <div class=\"block-content\">\n          <h3 class=\"block-title\">Testimonials</h3>\n          <div class=\"row\">\n            <div id=\"liontestimonial\" class=\"owl-carousel owl-theme owl-loaded owl-drag\">\n\n\n\n              <div class=\"owl-stage-outer\"><div class=\"owl-stage\" style=\"transform: translate3d(-1662px, 0px, 0px); transition: all 0.25s ease 0s; width: 5819px;\"><div class=\"owl-item cloned\" style=\"width: 831.188px;\"><div class=\"item testimonials\">\n                <img src=\"images/testimonials/2.jpg\" alt=\"\">\n                <blockquote>This template is very nice! Great work\n                  <p class=\"quote\"><span>Becky Allwood</span> - CEO of abc.com</p>\n                </blockquote>\n              </div></div><div class=\"owl-item cloned\" style=\"width: 831.188px;\"><div class=\"item testimonials\">\n                <img src=\"images/testimonials/3.jpg\" alt=\"\">\n                <blockquote>My work has been significantly simplified.\n                  <p class=\"quote\"><span>Elly Page</span> - CEO of nfl.com</p>\n                </blockquote>\n              </div></div><div class=\"owl-item active\" style=\"width: 831.188px;\"><div class=\"item testimonials\">\n                <img src=\"images/testimonials/1.jpg\" alt=\"\">\n                <blockquote>This template is exactly what we were looking for!\n                  <p class=\"quote\"><span>Brendon Rodgers</span> - CEO of xyz.com</p>\n                </blockquote>\n              </div></div><div class=\"owl-item\" style=\"width: 831.188px;\"><div class=\"item testimonials\">\n                <img src=\"images/testimonials/2.jpg\" alt=\"\">\n                <blockquote>This template is very nice! Great work\n                  <p class=\"quote\"><span>Becky Allwood</span> - CEO of abc.com</p>\n                </blockquote>\n              </div></div><div class=\"owl-item\" style=\"width: 831.188px;\"><div class=\"item testimonials\">\n                <img src=\"images/testimonials/3.jpg\" alt=\"\">\n                <blockquote>My work has been significantly simplified.\n                  <p class=\"quote\"><span>Elly Page</span> - CEO of nfl.com</p>\n                </blockquote>\n              </div></div><div class=\"owl-item cloned\" style=\"width: 831.188px;\"><div class=\"item testimonials\">\n                <img src=\"images/testimonials/1.jpg\" alt=\"\">\n                <blockquote>This template is exactly what we were looking for!\n                  <p class=\"quote\"><span>Brendon Rodgers</span> - CEO of xyz.com</p>\n                </blockquote>\n              </div></div><div class=\"owl-item cloned\" style=\"width: 831.188px;\"><div class=\"item testimonials\">\n                <img src=\"images/testimonials/2.jpg\" alt=\"\">\n                <blockquote>This template is very nice! Great work\n                  <p class=\"quote\"><span>Becky Allwood</span> - CEO of abc.com</p>\n                </blockquote>\n              </div></div></div></div><div class=\"owl-nav\"><div class=\"owl-prev\"><i class=\"ion-ios-arrow-thin-left\"></i></div><div class=\"owl-next\"><i class=\"ion-ios-arrow-thin-right\"></i></div></div><div class=\"owl-dots\"><div class=\"owl-dot active\"><span></span></div><div class=\"owl-dot\"><span></span></div><div class=\"owl-dot\"><span></span></div></div></div>\n          </div>\n        </div>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 btn-email\">\n            <a class=\"btn lowercase\">shout@james.com</a>\n          </div>\n        </div>\n      </section>\n    </div>\n    <div class=\"content-blocks portfolio\">\n      <section class=\"content\">\n        <div class=\"block-content\">\n          <h3 class=\"block-title\">Portfolio</h3>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"filters\">\n                <span>Filters :</span>\n                <ul id=\"filters\">\n                  <li class=\"active\" data-filter=\"*\">All</li>\n                  <li data-filter=\".artwork\">Art Work</li>\n                  <li data-filter=\".webdesign\">Web Design</li>\n                  <li data-filter=\".design\">Design</li>\n                </ul>\n              </div>\n              <div class=\"portfolio-container row isotope\" id=\"portfolio-container\">\n                <!-- WORK 1 START -->\n                <div class=\"col-md-4 col-sm-6 col-xs-12 portfolio-item artwork\">\n                  <a class=\"open-project\" href=\"project-1.html\">\n                    <div class=\"portfolio-column\">\n                      <div class=\"portfolio-hover\">\n                        <div class=\"portfolio-content\">\n                          <h2>CEREAL</h2>\n                          <hr>\n                          <p>View details.</p>\n                        </div>\n                        <div class=\"portfolio-overlay\"></div>\n                      </div>\n                      <img src=\"images/portfolio/masonry/001.jpg\" alt=\"\">\n                    </div>\n                  </a>\n                </div>\n                <!-- WORK 1 END -->\n                <!-- WORK 2 START -->\n                <div class=\"col-md-4 col-sm-6 col-xs-12 portfolio-item webdesign\">\n                  <a class=\"open-project\" href=\"project-2.html\">\n                    <div class=\"portfolio-column\">\n                      <div class=\"portfolio-hover\">\n                        <div class=\"portfolio-content\">\n                          <h2>NOTES</h2>\n                          <hr>\n                          <p>View details.</p>\n                        </div>\n                        <div class=\"portfolio-overlay\"></div>\n                      </div>\n                      <img src=\"images/portfolio/masonry/002.jpg\" alt=\"\">\n                    </div>\n                  </a>\n                </div>\n                <!-- WORK 2 END -->\n                <!-- WORK 3 START -->\n                <div class=\"col-md-4 col-sm-6 col-xs-12 portfolio-item webdesign\">\n                  <a class=\"open-project\" href=\"project-3.html\">\n                    <div class=\"portfolio-column\">\n                      <div class=\"portfolio-hover\">\n                        <div class=\"portfolio-content\">\n                          <h2>TIMES</h2>\n                          <hr>\n                          <p>View details.</p>\n                        </div>\n                        <div class=\"portfolio-overlay\"></div>\n                      </div>\n                      <img src=\"images/portfolio/masonry/003.jpg\" alt=\"\">\n                    </div>\n                  </a>\n                </div>\n                <!-- WORK 3 END -->\n                <!-- WORK 4 START -->\n                <div class=\"col-md-4 col-sm-6 col-xs-12 portfolio-item artwork\">\n                  <a class=\"open-project\" href=\"project-4.html\">\n                    <div class=\"portfolio-column\">\n                      <div class=\"portfolio-hover\">\n                        <div class=\"portfolio-content\">\n                          <h2>STATIONARY</h2>\n                          <hr>\n                          <p>View details.</p>\n                        </div>\n                        <div class=\"portfolio-overlay\"></div>\n                      </div>\n                      <img src=\"images/portfolio/masonry/004.jpg\" alt=\"\">\n                    </div>\n                  </a>\n                </div>\n                <!-- WORK 4 END -->\n                <!-- WORK 5 START -->\n                <div class=\"col-md-4 col-sm-6 col-xs-12 portfolio-item design\">\n                  <a class=\"open-project\" href=\"project-5.html\">\n                    <div class=\"portfolio-column\">\n                      <div class=\"portfolio-hover\">\n                        <div class=\"portfolio-content\">\n                          <h2>PH.D</h2>\n                          <hr>\n                          <p>View details.</p>\n                        </div>\n                        <div class=\"portfolio-overlay\"></div>\n                      </div>\n                      <img src=\"images/portfolio/masonry/005.jpg\" alt=\"\">\n                    </div>\n                  </a>\n                </div>\n                <!-- WORK 5 END -->\n                <!-- WORK 6 START -->\n                <div class=\"col-md-4 col-sm-6 col-xs-12 portfolio-item design\">\n                  <a class=\"open-project\" href=\"project-6.html\">\n                    <div class=\"portfolio-column\">\n                      <div class=\"portfolio-hover\">\n                        <div class=\"portfolio-content\">\n                          <h2>WAG MAGAZINE</h2>\n                          <hr>\n                          <p>View details.</p>\n                        </div>\n                        <div class=\"portfolio-overlay\"></div>\n                      </div>\n                      <img src=\"images/portfolio/masonry/006.jpg\" alt=\"\">\n                    </div>\n                  </a>\n                </div>\n                <!-- WORK 6 END -->\n                <!-- WORK 7 START -->\n                <div class=\"col-md-4 col-sm-6 col-xs-12 portfolio-item webdesign\">\n                  <a class=\"open-project\" href=\"project-1.html\">\n                    <div class=\"portfolio-column\">\n                      <div class=\"portfolio-hover\">\n                        <div class=\"portfolio-content\">\n                          <h2>LOOK</h2>\n                          <hr>\n                          <p>View details.</p>\n                        </div>\n                        <div class=\"portfolio-overlay\"></div>\n                      </div>\n                      <img src=\"images/portfolio/masonry/007.jpg\" alt=\"\">\n                    </div>\n                  </a>\n                </div>\n                <!-- WORK 7 END -->\n                <!-- WORK 8 START -->\n                <div class=\"col-md-4 col-sm-6 col-xs-12 portfolio-item artwork\">\n                  <a class=\"open-project\" href=\"project-2.html\">\n                    <div class=\"portfolio-column\">\n                      <div class=\"portfolio-hover\">\n                        <div class=\"portfolio-content\">\n                          <h2>IPAD</h2>\n                          <hr>\n                          <p>View details.</p>\n                        </div>\n                        <div class=\"portfolio-overlay\"></div>\n                      </div>\n                      <img src=\"images/portfolio/masonry/008.jpg\" alt=\"\">\n                    </div>\n                  </a>\n                </div>\n                <!-- WORK 8 END -->\n                <!-- WORK 9 START -->\n                <div class=\"col-md-4 col-sm-6 col-xs-12 portfolio-item design\">\n                  <a class=\"open-project\" href=\"project-1.html\">\n                    <div class=\"portfolio-column\">\n                      <div class=\"portfolio-hover\">\n                        <div class=\"portfolio-content\">\n                          <h2>PAPER MOCKUP</h2>\n                          <hr>\n                          <p>View details.</p>\n                        </div>\n                        <div class=\"portfolio-overlay\"></div>\n                      </div>\n                      <img src=\"images/portfolio/masonry/009.jpg\" alt=\"\">\n                    </div>\n                  </a>\n                </div>\n                <!-- WORK 9 END -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 btn-email\">\n            <a class=\"btn lowercase\">shout@james.com</a>\n          </div>\n        </div>\n      </section>\n    </div>\n    <div class=\"content-blocks blog\">\n      <section class=\"content\">\n        <div class=\"block-content\">\n          <h3 class=\"block-title\">My Blog</h3>\n          <div class=\"row\">\n            <div class=\"col-md-10 mx-auto\">\n              <div class=\"post\">\n                <div class=\"post-thumbnail\">\n                  <a class=\"open-post\" href=\"post-single.html\">\n                    <img src=\"images/blog/midium/4.jpg\" alt=\"\">\n                  </a>\n                </div>\n                <div class=\"post-title\">\n                  <a class=\"open-post\" href=\"post-single.html\"><h2>Typography for web</h2></a>\n                  <p class=\"post-info\">\n                    <span class=\"post-author\">Posted by John Sparrow</span>\n                    <span class=\"slash\"></span>\n                    <span class=\"post-date\">Dec 08, 2017</span>\n                    <span class=\"slash\"></span>\n                    <span class=\"post-catetory\">Food</span>\n                  </p>\n                </div>\n                <div class=\"post-body\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non enim ut enim fringilla adipiscing id in lorem. Quisque aliquet neque vitae lectus tempus consectetur. Aliquam erat volutpat. Nunc eu nibh nulla, id cursus arcu. </p>\n                  <a class=\"btn open-post\" href=\"post-single.html\">Read More</a>\n                </div>\n              </div>\n              <div class=\"post\">\n                <div class=\"post-thumbnail\">\n                  <a class=\"open-post\" href=\"post-single.html\">\n                    <img src=\"images/blog/midium/3.jpg\" alt=\"\">\n                  </a>\n                </div>\n                <div class=\"post-title\">\n                  <a class=\"open-post\" href=\"post-single.html\"><h2>Typography for web</h2></a>\n                  <p class=\"post-info\">\n                    <span class=\"post-author\">Posted by John Sparrow</span>\n                    <span class=\"slash\"></span>\n                    <span class=\"post-date\">Dec 08, 2017</span>\n                    <span class=\"slash\"></span>\n                    <span class=\"post-catetory\">Food</span>\n                  </p>\n                </div>\n                <div class=\"post-body\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non enim ut enim fringilla adipiscing id in lorem. Quisque aliquet neque vitae lectus tempus consectetur. Aliquam erat volutpat. Nunc eu nibh nulla, id cursus arcu. </p>\n                  <a class=\"btn open-post\" href=\"post-single.html\">Read More</a>\n                </div>\n              </div>\n              <div class=\"post\">\n                <div class=\"post-thumbnail\">\n                  <a class=\"open-post\" href=\"post-single.html\">\n                    <img src=\"images/blog/midium/2.jpg\" alt=\"\">\n                  </a>\n                </div>\n                <div class=\"post-title\">\n                  <a class=\"open-post\" href=\"post-single.html\"><h2>Typography for web</h2></a>\n                  <p class=\"post-info\">\n                    <span class=\"post-author\">Posted by John Sparrow</span>\n                    <span class=\"slash\"></span>\n                    <span class=\"post-date\">Dec 08, 2017</span>\n                    <span class=\"slash\"></span>\n                    <span class=\"post-catetory\">Food</span>\n                  </p>\n                </div>\n                <div class=\"post-body\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non enim ut enim fringilla adipiscing id in lorem. Quisque aliquet neque vitae lectus tempus consectetur. Aliquam erat volutpat. Nunc eu nibh nulla, id cursus arcu. </p>\n                  <a class=\"btn open-post\" href=\"post-single.html\">Read More</a>\n                </div>\n              </div>\n              <div class=\"post\">\n                <div class=\"post-thumbnail\">\n                  <a class=\"open-post\" href=\"post-single.html\">\n                    <img src=\"images/blog/midium/1.jpg\" alt=\"\">\n                  </a>\n                </div>\n                <div class=\"post-title\">\n                  <a class=\"open-post\" href=\"post-single.html\"><h2>Typography for web</h2></a>\n                  <p class=\"post-info\">\n                    <span class=\"post-author\">Posted by John Sparrow</span>\n                    <span class=\"slash\"></span>\n                    <span class=\"post-date\">Dec 08, 2017</span>\n                    <span class=\"slash\"></span>\n                    <span class=\"post-catetory\">Food</span>\n                  </p>\n                </div>\n                <div class=\"post-body\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non enim ut enim fringilla adipiscing id in lorem. Quisque aliquet neque vitae lectus tempus consectetur. Aliquam erat volutpat. Nunc eu nibh nulla, id cursus arcu. </p>\n                  <a class=\"btn open-post\" href=\"post-single.html\">Read More</a>\n                </div>\n              </div>\n              <div class=\"text-center\">\n                <ul class=\"pagination\">\n                  <li class=\"page-item disabled\">\n                    <a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\n                  </li>\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                  <li class=\"page-item active\">\n                    <a class=\"page-link\" href=\"#\">2 <span class=\"sr-only\">(current)</span></a>\n                  </li>\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n                  <li class=\"page-item\">\n                    <a class=\"page-link\" href=\"#\">Next</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n    <div class=\"content-blocks contact\">\n      <section class=\"content\">\n        <div class=\"block-content\">\n          <h3 class=\"block-title\">Get in touch</h3>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <form class=\"contact-form bv-form\" action=\"send_mail.php\" method=\"post\" id=\"contact_form\" novalidate=\"novalidate\"><button type=\"submit\" class=\"bv-hidden-submit\" style=\"display: none; width: 0px; height: 0px;\"></button>\n                <div class=\"form-control-wrap\">\n                  <div id=\"message\" class=\"alert alert-danger alert-dismissible fade\"></div>\n                  <div class=\"form-group has-feedback\">\n                    <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"Name*\" name=\"fname\" data-bv-field=\"fname\"><i class=\"form-control-feedback bv-no-label\" data-bv-icon-for=\"fname\" style=\"display: none;\"></i>\n                    <small class=\"help-block\" data-bv-validator=\"stringLength\" data-bv-for=\"fname\" data-bv-result=\"NOT_VALIDATED\" style=\"display: none;\">Please enter a value with valid length</small><small class=\"help-block\" data-bv-validator=\"notEmpty\" data-bv-for=\"fname\" data-bv-result=\"NOT_VALIDATED\" style=\"display: none;\">Please enter your name</small></div>\n                  <div class=\"form-group mar-top-40 has-feedback\">\n                    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"email*\" name=\"email\" data-bv-field=\"email\"><i class=\"form-control-feedback bv-no-label\" data-bv-icon-for=\"email\" style=\"display: none;\"></i>\n                    <small class=\"help-block\" data-bv-validator=\"notEmpty\" data-bv-for=\"email\" data-bv-result=\"NOT_VALIDATED\" style=\"display: none;\">Please enter your email address</small><small class=\"help-block\" data-bv-validator=\"emailAddress\" data-bv-for=\"email\" data-bv-result=\"NOT_VALIDATED\" style=\"display: none;\">Please enter a valid email address</small></div>\n                  <div class=\"form-group mar-top-60 has-feedback\">\n                    <textarea class=\"form-control\" rows=\"10\" name=\"comment\" id=\"comment\" placeholder=\"Your Message\" data-bv-field=\"comment\"></textarea><i class=\"form-control-feedback bv-no-label\" data-bv-icon-for=\"comment\" style=\"display: none;\"></i>\n                    <small class=\"help-block\" data-bv-validator=\"stringLength\" data-bv-for=\"comment\" data-bv-result=\"NOT_VALIDATED\" style=\"display: none;\">Please enter at least 10 characters and no more than 200</small><small class=\"help-block\" data-bv-validator=\"notEmpty\" data-bv-for=\"comment\" data-bv-result=\"NOT_VALIDATED\" style=\"display: none;\">Please enter a description</small></div>\n                  <div class=\"form-group mar-top-40\">\n                    <button type=\"submit\" class=\"btn v7\">Send Message</button>\n                  </div>\n                </div>\n              </form>\n            </div>\n\n            <div class=\"col-md-5 offset-md-1\">\n              <div class=\"contact-content\">\n                <div class=\"contact-icon\">\n                  <i class=\"ion-ios-location-outline\"></i>\n                </div>\n                <div class=\"contact-details\">\n                  <h5>Address</h5>\n                  <p>234 House, Baker Street, London, EL10 6 BG</p>\n                </div>\n              </div>\n              <div class=\"contact-content\">\n                <div class=\"contact-icon\">\n                  <i class=\"ion-ios-telephone-outline\"></i>\n                </div>\n                <div class=\"contact-details\">\n                  <h5>Call Us</h5>\n                  <p> <a href=\"tel:+4402920111222\">+44 - 02920111222</a></p>\n                </div>\n              </div>\n              <div class=\"contact-content\">\n                <div class=\"contact-icon\">\n                  <i class=\"ion-ios-email-outline\"></i>\n                </div>\n                <div class=\"contact-details\">\n                  <h5>Enquiries</h5>\n                  <p>alpha@james.com</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <!--Google Map-->\n              <div id=\"map\" style=\"position: relative; overflow: hidden;\"><div style=\"height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);\"><div class=\"gm-style\" style=\"position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px;\"><div tabindex=\"0\" style=\"position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; cursor: url(&quot;https://maps.gstatic.com/mapfiles/openhand_8_8.cur&quot;), default; touch-action: none;\"><div style=\"z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);\"><div style=\"position: absolute; left: 0px; top: 0px; z-index: 100; width: 100%;\"><div style=\"position: absolute; left: 0px; top: 0px; z-index: 0;\"><div style=\"position: absolute; z-index: 989; transform: matrix(1, 0, 0, 1, -93, -84);\"><div style=\"position: absolute; left: 0px; top: 0px; width: 256px; height: 256px;\"><div style=\"width: 256px; height: 256px;\"></div></div><div style=\"position: absolute; left: -256px; top: 0px; width: 256px; height: 256px;\"><div style=\"width: 256px; height: 256px;\"></div></div><div style=\"position: absolute; left: -256px; top: -256px; width: 256px; height: 256px;\"><div style=\"width: 256px; height: 256px;\"></div></div><div style=\"position: absolute; left: 0px; top: -256px; width: 256px; height: 256px;\"><div style=\"width: 256px; height: 256px;\"></div></div><div style=\"position: absolute; left: 256px; top: -256px; width: 256px; height: 256px;\"><div style=\"width: 256px; height: 256px;\"></div></div><div style=\"position: absolute; left: 256px; top: 0px; width: 256px; height: 256px;\"><div style=\"width: 256px; height: 256px;\"></div></div><div style=\"position: absolute; left: 256px; top: 256px; width: 256px; height: 256px;\"><div style=\"width: 256px; height: 256px;\"></div></div><div style=\"position: absolute; left: 0px; top: 256px; width: 256px; height: 256px;\"><div style=\"width: 256px; height: 256px;\"></div></div><div style=\"position: absolute; left: -256px; top: 256px; width: 256px; height: 256px;\"><div style=\"width: 256px; height: 256px;\"></div></div><div style=\"position: absolute; left: -512px; top: 256px; width: 256px; height: 256px;\"><div style=\"width: 256px; height: 256px;\"></div></div><div style=\"position: absolute; left: -512px; top: 0px; width: 256px; height: 256px;\"><div style=\"width: 256px; height: 256px;\"></div></div><div style=\"position: absolute; left: -512px; top: -256px; width: 256px; height: 256px;\"><div style=\"width: 256px; height: 256px;\"></div></div></div></div></div><div style=\"position: absolute; left: 0px; top: 0px; z-index: 101; width: 100%;\"></div><div style=\"position: absolute; left: 0px; top: 0px; z-index: 102; width: 100%;\"></div><div style=\"position: absolute; left: 0px; top: 0px; z-index: 103; width: 100%;\"><div style=\"width: 80px; height: 75px; overflow: hidden; position: absolute; left: -40px; top: -75px; z-index: 0; animation-duration: 500ms; animation-iteration-count: 1; animation-name: _gm8172;\"><img alt=\"\" src=\"images/map-marker.png\" draggable=\"false\" style=\"position: absolute; left: 0px; top: 0px; user-select: none; width: 80px; height: 75px; border: 0px; padding: 0px; margin: 0px; max-width: none;\"></div><div style=\"position: absolute; left: 0px; top: 0px; z-index: -1;\"><div style=\"position: absolute; z-index: 989; transform: matrix(1, 0, 0, 1, -93, -84);\"><div style=\"width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: 0px;\"></div><div style=\"width: 256px; height: 256px; overflow: hidden; position: absolute; left: -256px; top: 0px;\"></div><div style=\"width: 256px; height: 256px; overflow: hidden; position: absolute; left: -256px; top: -256px;\"></div><div style=\"width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: -256px;\"></div><div style=\"width: 256px; height: 256px; overflow: hidden; position: absolute; left: 256px; top: -256px;\"></div><div style=\"width: 256px; height: 256px; overflow: hidden; position: absolute; left: 256px; top: 0px;\"></div><div style=\"width: 256px; height: 256px; overflow: hidden; position: absolute; left: 256px; top: 256px;\"></div><div style=\"width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: 256px;\"></div><div style=\"width: 256px; height: 256px; overflow: hidden; position: absolute; left: -256px; top: 256px;\"></div><div style=\"width: 256px; height: 256px; overflow: hidden; position: absolute; left: -512px; top: 256px;\"></div><div style=\"width: 256px; height: 256px; overflow: hidden; position: absolute; left: -512px; top: 0px;\"></div><div style=\"width: 256px; height: 256px; overflow: hidden; position: absolute; left: -512px; top: -256px;\"></div></div></div></div><div style=\"position: absolute; left: 0px; top: 0px; z-index: 0;\"><div style=\"position: absolute; z-index: 989; transform: matrix(1, 0, 0, 1, -93, -84);\"><div style=\"position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;\"><img draggable=\"false\" alt=\"\" role=\"presentation\" src=\"https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i11!2i603!3i770!4i256!2m3!1e0!2sm!3i475184856!2m3!1e2!6m1!3e5!3m14!2sen-GB!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyAmsb2nGLuIl04bt7CWJozRMhThvGa3y1w&amp;token=72448\" style=\"width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;\"></div><div style=\"position: absolute; left: -256px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;\"><img draggable=\"false\" alt=\"\" role=\"presentation\" src=\"https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i11!2i602!3i770!4i256!2m3!1e0!2sm!3i475184856!2m3!1e2!6m1!3e5!3m14!2sen-GB!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyAmsb2nGLuIl04bt7CWJozRMhThvGa3y1w&amp;token=24968\" style=\"width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;\"></div><div style=\"position: absolute; left: -256px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;\"><img draggable=\"false\" alt=\"\" role=\"presentation\" src=\"https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i11!2i602!3i769!4i256!2m3!1e0!2sm!3i475184856!2m3!1e2!6m1!3e5!3m14!2sen-GB!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyAmsb2nGLuIl04bt7CWJozRMhThvGa3y1w&amp;token=48796\" style=\"width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;\"></div><div style=\"position: absolute; left: 0px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;\"><img draggable=\"false\" alt=\"\" role=\"presentation\" src=\"https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i11!2i603!3i769!4i256!2m3!1e0!2sm!3i475184856!2m3!1e2!6m1!3e5!3m14!2sen-GB!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyAmsb2nGLuIl04bt7CWJozRMhThvGa3y1w&amp;token=96276\" style=\"width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;\"></div><div style=\"position: absolute; left: 256px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;\"><img draggable=\"false\" alt=\"\" role=\"presentation\" src=\"https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i11!2i604!3i769!4i256!2m3!1e0!2sm!3i475184832!2m3!1e2!6m1!3e5!3m14!2sen-GB!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyAmsb2nGLuIl04bt7CWJozRMhThvGa3y1w&amp;token=19021\" style=\"width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;\"></div><div style=\"position: absolute; left: 256px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;\"><img draggable=\"false\" alt=\"\" role=\"presentation\" src=\"https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i11!2i604!3i770!4i256!2m3!1e0!2sm!3i475184832!2m3!1e2!6m1!3e5!3m14!2sen-GB!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyAmsb2nGLuIl04bt7CWJozRMhThvGa3y1w&amp;token=126264\" style=\"width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;\"></div><div style=\"position: absolute; left: 256px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;\"><img draggable=\"false\" alt=\"\" role=\"presentation\" src=\"https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i11!2i604!3i771!4i256!2m3!1e0!2sm!3i475184820!2m3!1e2!6m1!3e5!3m14!2sen-GB!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyAmsb2nGLuIl04bt7CWJozRMhThvGa3y1w&amp;token=21818\" style=\"width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;\"></div><div style=\"position: absolute; left: 0px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;\"><img draggable=\"false\" alt=\"\" role=\"presentation\" src=\"https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i11!2i603!3i771!4i256!2m3!1e0!2sm!3i475184856!2m3!1e2!6m1!3e5!3m14!2sen-GB!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyAmsb2nGLuIl04bt7CWJozRMhThvGa3y1w&amp;token=95905\" style=\"width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;\"></div><div style=\"position: absolute; left: -256px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;\"><img draggable=\"false\" alt=\"\" role=\"presentation\" src=\"https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i11!2i602!3i771!4i256!2m3!1e0!2sm!3i475184856!2m3!1e2!6m1!3e5!3m14!2sen-GB!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyAmsb2nGLuIl04bt7CWJozRMhThvGa3y1w&amp;token=48425\" style=\"width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;\"></div><div style=\"position: absolute; left: -512px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;\"><img draggable=\"false\" alt=\"\" role=\"presentation\" src=\"https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i11!2i601!3i771!4i256!2m3!1e0!2sm!3i475184856!2m3!1e2!6m1!3e5!3m14!2sen-GB!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyAmsb2nGLuIl04bt7CWJozRMhThvGa3y1w&amp;token=945\" style=\"width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;\"></div><div style=\"position: absolute; left: -512px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;\"><img draggable=\"false\" alt=\"\" role=\"presentation\" src=\"https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i11!2i601!3i770!4i256!2m3!1e0!2sm!3i475184856!2m3!1e2!6m1!3e5!3m14!2sen-GB!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyAmsb2nGLuIl04bt7CWJozRMhThvGa3y1w&amp;token=108559\" style=\"width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;\"></div><div style=\"position: absolute; left: -512px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;\"><img draggable=\"false\" alt=\"\" role=\"presentation\" src=\"https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i11!2i601!3i769!4i256!2m3!1e0!2sm!3i475184856!2m3!1e2!6m1!3e5!3m14!2sen-GB!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyAmsb2nGLuIl04bt7CWJozRMhThvGa3y1w&amp;token=1316\" style=\"width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;\"></div></div></div></div><div class=\"gm-style-pbc\" style=\"z-index: 2; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; opacity: 0;\"><p class=\"gm-style-pbt\"></p></div><div style=\"z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;\"><div style=\"z-index: 4; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);\"><div style=\"position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;\"></div><div style=\"position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;\"></div><div style=\"position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;\"><div title=\"\" style=\"width: 80px; height: 75px; overflow: hidden; position: absolute; opacity: 0; cursor: pointer; touch-action: none; left: -40px; top: -75px; z-index: 0;\"><img alt=\"\" src=\"images/map-marker.png\" draggable=\"false\" style=\"position: absolute; left: 0px; top: 0px; user-select: none; width: 80px; height: 75px; border: 0px; padding: 0px; margin: 0px; max-width: none;\"></div></div><div style=\"position: absolute; left: 0px; top: 0px; z-index: 107; width: 100%;\"></div></div></div></div><iframe aria-hidden=\"true\" frameborder=\"0\" style=\"z-index: -1; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; border: none;\" src=\"about:blank\"></iframe><div style=\"margin-left: 5px; margin-right: 5px; z-index: 1000000; position: absolute; left: 0px; bottom: 0px;\"><a target=\"_blank\" rel=\"noopener\" href=\"https://maps.google.com/maps?ll=40.67,-73.94&amp;z=11&amp;t=m&amp;hl=en-GB&amp;gl=US&amp;mapclient=apiv3\" title=\"Open this area in Google Maps (opens a new window)\" style=\"position: static; overflow: visible; float: none; display: inline;\"><div style=\"width: 66px; height: 26px; cursor: pointer;\"><img alt=\"\" src=\"https://maps.gstatic.com/mapfiles/api-3/images/google_white5.png\" draggable=\"false\" style=\"position: absolute; left: 0px; top: 0px; width: 66px; height: 26px; user-select: none; border: 0px; padding: 0px; margin: 0px;\"></div></a></div><div style=\"background-color: white; padding: 15px 21px; border: 1px solid rgb(171, 171, 171); font-family: Roboto, Arial, sans-serif; color: rgb(34, 34, 34); box-sizing: border-box; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px; z-index: 10000002; display: none; width: 300px; height: 180px; position: absolute; left: 251px; top: 110px;\"><div style=\"padding: 0px 0px 10px; font-size: 16px; box-sizing: border-box;\">Map Data</div><div style=\"font-size: 13px;\">Map data ©2019 Google</div><button draggable=\"false\" title=\"Close\" aria-label=\"Close\" type=\"button\" class=\"gm-ui-hover-effect\" style=\"background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: absolute; cursor: pointer; user-select: none; top: 0px; right: 0px; width: 37px; height: 37px;\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A\" style=\"pointer-events: none; display: block; width: 13px; height: 13px; margin: 12px;\"></button></div><div class=\"gmnoprint\" style=\"z-index: 1000001; position: absolute; right: 166px; bottom: 0px; width: 121px;\"><div draggable=\"false\" class=\"gm-style-cc\" style=\"user-select: none; height: 14px; line-height: 14px;\"><div style=\"opacity: 0.7; width: 100%; height: 100%; position: absolute;\"><div style=\"width: 1px;\"></div><div style=\"background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;\"></div></div><div style=\"position: relative; padding-right: 6px; padding-left: 6px; box-sizing: border-box; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;\"><a style=\"text-decoration: none; cursor: pointer; display: none;\">Map Data</a><span>Map data ©2019 Google</span></div></div></div><div class=\"gmnoscreen\" style=\"position: absolute; right: 0px; bottom: 0px;\"><div style=\"font-family: Roboto, Arial, sans-serif; font-size: 11px; color: rgb(68, 68, 68); direction: ltr; text-align: right; background-color: rgb(245, 245, 245);\">Map data ©2019 Google</div></div><div class=\"gmnoprint gm-style-cc\" draggable=\"false\" style=\"z-index: 1000001; user-select: none; height: 14px; line-height: 14px; position: absolute; right: 95px; bottom: 0px;\"><div style=\"opacity: 0.7; width: 100%; height: 100%; position: absolute;\"><div style=\"width: 1px;\"></div><div style=\"background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;\"></div></div><div style=\"position: relative; padding-right: 6px; padding-left: 6px; box-sizing: border-box; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;\"><a href=\"https://www.google.com/intl/en-GB_US/help/terms_maps.html\" target=\"_blank\" rel=\"noopener\" style=\"text-decoration: none; cursor: pointer; color: rgb(68, 68, 68);\">Terms of Use</a></div></div><button draggable=\"false\" title=\"Toggle fullscreen view\" aria-label=\"Toggle fullscreen view\" type=\"button\" class=\"gm-control-active gm-fullscreen-control\" style=\"background: none rgb(255, 255, 255); border: 0px; margin: 10px; padding: 0px; position: absolute; cursor: pointer; user-select: none; border-radius: 2px; height: 40px; width: 40px; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; overflow: hidden; top: 0px; right: 0px;\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%20018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A\" style=\"height: 18px; width: 18px;\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A\" style=\"height: 18px; width: 18px;\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A\" style=\"height: 18px; width: 18px;\"></button><div draggable=\"false\" class=\"gm-style-cc\" style=\"user-select: none; height: 14px; line-height: 14px; position: absolute; right: 0px; bottom: 0px;\"><div style=\"opacity: 0.7; width: 100%; height: 100%; position: absolute;\"><div style=\"width: 1px;\"></div><div style=\"background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;\"></div></div><div style=\"position: relative; padding-right: 6px; padding-left: 6px; box-sizing: border-box; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;\"><a target=\"_blank\" rel=\"noopener\" title=\"Report errors in the road map or imagery to Google\" href=\"https://www.google.com/maps/@40.67,-73.94,11z/data=!10m1!1e1!12b1?source=apiv3&amp;rapsrc=apiv3\" style=\"font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); text-decoration: none; position: relative;\">Report a map error</a></div></div><div class=\"gmnoprint gm-bundled-control gm-bundled-control-on-bottom\" draggable=\"false\" controlwidth=\"40\" controlheight=\"81\" style=\"margin: 10px; user-select: none; position: absolute; bottom: 95px; right: 40px;\"><div class=\"gmnoprint\" controlwidth=\"40\" controlheight=\"81\" style=\"position: absolute; left: 0px; top: 0px;\"><div draggable=\"false\" style=\"user-select: none; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px; cursor: pointer; background-color: rgb(255, 255, 255); width: 40px; height: 81px;\"><button draggable=\"false\" title=\"Zoom in\" aria-label=\"Zoom in\" type=\"button\" class=\"gm-control-active\" style=\"background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: relative; cursor: pointer; user-select: none; overflow: hidden; width: 40px; height: 40px; top: 0px; left: 0px;\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A\" style=\"height: 18px; width: 18px;\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23333%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A\" style=\"height: 18px; width: 18px;\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23111%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A\" style=\"height: 18px; width: 18px;\"></button><div style=\"position: relative; overflow: hidden; width: 30px; height: 1px; margin: 0px 5px; background-color: rgb(230, 230, 230); top: 0px;\"></div><button draggable=\"false\" title=\"Zoom out\" aria-label=\"Zoom out\" type=\"button\" class=\"gm-control-active\" style=\"background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: relative; cursor: pointer; user-select: none; overflow: hidden; width: 40px; height: 40px; top: 0px; left: 0px;\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A\" style=\"height: 18px; width: 18px;\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A\" style=\"height: 18px; width: 18px;\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A\" style=\"height: 18px; width: 18px;\"></button></div></div><div class=\"gmnoprint\" controlwidth=\"40\" controlheight=\"40\" style=\"display: none; position: absolute;\"><div style=\"width: 40px; height: 40px;\"><button draggable=\"false\" title=\"Rotate map 90 degrees\" aria-label=\"Rotate map 90 degrees\" type=\"button\" class=\"gm-control-active\" style=\"background: none rgb(255, 255, 255); display: none; border: 0px; margin: 0px 0px 32px; padding: 0px; position: relative; cursor: pointer; user-select: none; width: 40px; height: 40px; top: 0px; left: 0px; overflow: hidden; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px;\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A\" style=\"height: 18px; width: 18px;\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A\" style=\"height: 18px; width: 18px;\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A\" style=\"height: 18px; width: 18px;\"></button><button draggable=\"false\" title=\"Tilt map\" aria-label=\"Tilt map\" type=\"button\" class=\"gm-tilt gm-control-active\" style=\"background: none rgb(255, 255, 255); display: block; border: 0px; margin: 0px; padding: 0px; position: relative; cursor: pointer; user-select: none; width: 40px; height: 40px; top: 0px; left: 0px; overflow: hidden; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px;\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A\" style=\"width: 18px;\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A\" style=\"width: 18px;\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A\" style=\"width: 18px;\"></button></div></div></div></div></div><div style=\"background-color: white; font-weight: 500; font-family: Roboto, sans-serif; padding: 15px 25px; box-sizing: border-box; top: 5px; border: 1px solid rgba(0, 0, 0, 0.12); border-radius: 5px; left: 50%; max-width: 375px; position: absolute; transform: translateX(-50%); width: calc(100% - 10px); z-index: 1;\"><div><img alt=\"\" src=\"https://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg\" draggable=\"false\" style=\"padding: 0px; margin: 0px; border: 0px; height: 17px; vertical-align: middle; width: 52px; user-select: none;\"></div><div style=\"line-height: 20px; margin: 15px 0px;\"><span style=\"color: rgba(0, 0, 0, 0.87); font-size: 14px;\">This page can't load Google Maps correctly.</span></div><table style=\"width: 100%;\"><tr><td style=\"line-height: 16px; vertical-align: middle;\"><a href=\"https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&amp;utm_medium=degraded&amp;utm_campaign=billing#api-key-and-billing-errors\" target=\"_blank\" rel=\"noopener\" style=\"color: rgba(0, 0, 0, 0.54); font-size: 12px;\">Do you own this website?</a></td><td style=\"text-align: right;\"><button class=\"dismissButton\">OK</button></td></tr></table></div></div>\n              <!--Google Map End-->\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n    <div class=\"content-blocks pop\">\n      <div id=\"close-pop\" class=\"close-pop\">Close <i class=\"ion-ios-close-empty\"></i></div>\n      <section class=\"content\"></section>\n    </div>\n  </div>\n\n  <!--<a href=\"https://themeforest.net/item/alpha-cv-resume-vcard-portfolio-template/20381622?s_rank=24\" class=\"buy-now\"><i class=\"ion-ios-cart\"></i> Buy Now</a>-->\n</section>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.reverse = false;
        this.counter = 0;
        this.imageArray = ['cover_1', 'cover_2', 'cover_3', 'cover_4', 'cover_5', 'cover_6'];
        this.imagePath = "../../assets/images/" + this.imageArray[0] + ".jpg";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getImage();
        // this.imagePath = 'url(../../assets/images/' + this.imageArray[0] + '.jpg) 0 0';
    };
    HomeComponent.prototype.addReverseClass = function () {
        this.reverse = true;
    };
    HomeComponent.prototype.getImage = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000).subscribe(function (val) {
            console.log(_this.imageArray.length, 'this.imageArray.length');
            if (_this.counter == _this.imageArray.length) {
                _this.counter = 0;
                //   index = 0;
            }
            _this.imagePath = "../../assets/images/" + _this.imageArray[_this.counter] + ".jpg";
            _this.counter++;
            // index = index + 1;
            // console.log(index);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lt-100/new-angular-application/Angular-application/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map