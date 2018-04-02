webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_authentication__ = __webpack_require__("../../../../../src/app/app.authentication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Dashboard = (function () {
    function Dashboard(authentication, router) {
        this.authentication = authentication;
        this.router = router;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2009', '2010', '2011', '2012', '2013', '2014'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        // Doughnut chart settings and data.
        this.doughnutChartLabels = [' Active Users', 'Investors', 'In-active Users'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
    }
    Dashboard.prototype.navigateToInvestorProfile = function () {
        this.router.navigate(['/investor-profile']);
    };
    // events
    Dashboard.prototype.chartClicked = function (e) {
        console.log(e);
    };
    Dashboard.prototype.chartHovered = function (e) {
        console.log(e);
    };
    // events
    Dashboard.prototype.doughnutClicked = function (e) {
        console.log(e);
    };
    Dashboard.prototype.doughnutHovered = function (e) {
        console.log(e);
    };
    return Dashboard;
}());
Dashboard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard.scss")],
        template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_authentication__["a" /* AuthenticationHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_authentication__["a" /* AuthenticationHelper */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object])
], Dashboard);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"dashBoardContainer\">-->\n    <!--<div class=\"dashBoardContent\">-->\n        <!--<div *ngIf=\"isUser\" class=\"col-md-12 col-xs-12\">-->\n            <!--<div class=\"messageContainer\">-->\n                <!--<p class=\"messageBody\">To become an investor complete your investor profile.</p>-->\n                <!--<button class=\"button\" (click)=\"navigateToInvestorProfile()\">GO TO INVESTOR PROFILE</button>-->\n            <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"col-md-12 col-xs-12 withoutPadding\">-->\n            <!--<div class=\"col-md-6 col-xs-6 withoutPadding leftCharts\">-->\n                <!--<div class=\"col-md-12 col-xs-12 barChartDashBoard\">-->\n                    <!--<canvas class=\"barChart\" baseChart-->\n                            <!--[datasets]=\"barChartData\"-->\n                            <!--[labels]=\"barChartLabels\"-->\n                            <!--[options]=\"barChartOptions\"-->\n                            <!--[legend]=\"barChartLegend\"-->\n                            <!--[chartType]=\"barChartType\"-->\n                            <!--(chartHover)=\"chartHovered($event)\"-->\n                            <!--(chartClick)=\"chartClicked($event)\"></canvas>-->\n                <!--</div>-->\n                <!--<div class=\"col-md-12  col-xs-12 doughnutChartDashBoard\">-->\n                    <!--<canvas baseChart-->\n                            <!--[data]=\"doughnutChartData\"-->\n                            <!--[labels]=\"doughnutChartLabels\"-->\n                            <!--[chartType]=\"doughnutChartType\"-->\n                            <!--(chartHover)=\"chartHovered($event)\"-->\n                            <!--(chartClick)=\"chartClicked($event)\"></canvas>-->\n                <!--</div>-->\n            <!--</div>-->\n            <!--<div class=\"col-md-6 col-xs-6 withoutPadding sideUserGrid divAlignRight\" >-->\n                <!--<div class=\"col-md-12  col-xs-12 barChartDashBoard divAlignLeft\">-->\n                    <!--<div class=\"col-md-12  col-xs-12 divAlignLeft\">-->\n                        <!--<div class=\"totalUsers\">-->\n                            <!--<div class=\"userGridTitle\">Users Grid</div>-->\n                        <!--</div>-->\n                    <!--</div>-->\n                    <!--<div class=\"usersGrid\">-->\n                        <!--<div class=\"col-md-6  col-xs-6 rectContainer\">-->\n                            <!--<div class=\"squareDiv imgResponsive\">-->\n                                <!--<div class=\"count\">12</div>-->\n                                <!--<div class=\"countTitle\">Active</div>-->\n\n                            <!--</div>-->\n                        <!--</div>-->\n                        <!--<div class=\"col-md-6  col-xs-6 rectContainer \">-->\n                            <!--<div class=\"squareDiv imgResponsive\">-->\n                                <!--<div class=\"count\">18</div>-->\n                                <!--<div class=\"countTitle\">InActive</div>-->\n\n                            <!--</div>-->\n                        <!--</div>-->\n                        <!--<div class=\"col-md-6  col-xs-6 rectContainer\">-->\n                            <!--<div class=\"squareDiv imgResponsiveLowerSquares\">-->\n                                <!--<div class=\"count\">10</div>-->\n                                <!--<div class=\"countTitle\">Investor</div>-->\n                            <!--</div>-->\n                        <!--</div>-->\n                        <!--<div class=\"col-md-6  col-xs-6 rectContainer\">-->\n                            <!--<div class=\"squareDiv imgResponsiveLowerSquares\">-->\n                                <!--<div class=\"count\">40</div>-->\n                                <!--<div class=\"countTitle\">Total</div>-->\n                            <!--</div>-->\n                        <!--</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n            <!--</div>-->\n        <!--</div>-->\n    <!--</div>-->\n<!--</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_routing__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_5__dashboard_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* Dashboard */]
        ],
        providers: []
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* Dashboard */],
        children: []
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);
//# sourceMappingURL=dashboard.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #374767; }\n    .auth-block a:hover {\n      color: #2f3c58; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.paginationControl {\n  width: 100%;\n  float: left;\n  padding: 0 15px; }\n  .paginationControl #listItem .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n  .paginationControl #listItem .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .paginationControl #listItem .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .paginationControl #listItem .ngx-pagination a {\n    color: #606c71; }\n    .paginationControl #listItem .ngx-pagination a:hover {\n      background: transparent; }\n  .paginationControl #listItem .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n  .paginationControl #listItemNew .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n  .paginationControl #listItemNew .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .paginationControl #listItemNew .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .paginationControl #listItemNew .ngx-pagination a {\n    color: #606c71; }\n    .paginationControl #listItemNew .ngx-pagination a:hover {\n      background: transparent; }\n  .paginationControl #listItemNew .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n  .paginationControl #listItem ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n    .paginationControl #listItem ul li:hover {\n      background: transparent; }\n  .paginationControl #listItemNew ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n    .paginationControl #listItemNew ul li:hover {\n      background: transparent; }\n  .paginationControl .pageControl {\n    cursor: pointer;\n    padding: 0 10px; }\n    .paginationControl .pageControl ul {\n      padding: 10px 0;\n      margin: 0;\n      float: left; }\n\n.btn-danger {\n  margin-left: 3px; }\n\n.btn-primary {\n  margin-right: 3px; }\n\n.btn:hover {\n  -webkit-transform: none;\n          transform: none; }\n\n.help-block {\n  color: red; }\n\n.modal-header {\n  margin: 0 auto; }\n\n.fa-rupee:before, .fa-inr:before {\n  content: \"\\F156\";\n  margin-right: 14px !important; }\n\n.ion-edit:before {\n  content: \"\\F2BF\";\n  color: #000000; }\n\n.text-spacing {\n  margin-bottom: 1%; }\n\n.disableSubmit {\n  opacity: 0.8;\n  cursor: not-allowed; }\n  .disableSubmit:hover {\n    opacity: 0.8;\n    cursor: not-allowed !important; }\n\n.purchase_table .ion-edit:before {\n  content: \"\\F2BF\";\n  margin-right: 10px;\n  color: #000000; }\n\n.ion-trash-b:before {\n  content: \"\\F252\";\n  color: #ff0000; }\n\n.fa-envelope-o:before {\n  margin-right: 10px; }\n\n.form-control[disabled] {\n  color: grey;\n  border-color: lightgrey; }\n\n#vendorPurchaseTable table > thead > tr > th:first-child {\n  text-align: center; }\n\n.tagsSmart {\n  background: #F1F3F6;\n  color: #282828;\n  display: inline-block;\n  border: 1px solid lightgray;\n  padding: 0 10px 0 10px;\n  margin: 2px 2px 2px 2px;\n  border-radius: 90px; }\n\ntable th, table td {\n  border: 1px solid #ddd; }\n\ntable .ng2-smart-actions {\n  text-align: center;\n  color: #374767; }\n\ntable .ng2-smart-title a {\n  color: #374767; }\n\ntable .ng2-smart-title a:hover {\n  text-decoration: none; }\n\n.modal-body-data {\n  margin-bottom: 15px; }\n\ntable .ng2-smart-actions {\n  width: 100px !important; }\n\n.inputbox {\n  border-radius: 3px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0px;\n  padding-left: 2%;\n  border: 1px solid gainsboro;\n  outline: none;\n  box-shadow: none;\n  color: #555555; }\n\n.inputbox::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: gainsboro; }\n\n.inputbox::-moz-placeholder {\n  /* Firefox 19+ */\n  color: gainsboro; }\n\n.inputbox:-ms-input-placeholder {\n  /* IE 10+ */\n  color: gainsboro; }\n\n.inputbox:-moz-placeholder {\n  /* Firefox 18- */\n  color: gainsboro; }\n\n.inputbox:focus, .inputbox:active {\n  border-color: #A5C9BB;\n  outline: 0;\n  outline: thin dotted \\9;\n  /* -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6); */\n  box-shadow: inset 0 1px 1px rgba(0, 220, 0, 0.075), 0 0 8px rgba(0, 225, 0, 0.2); }\n\n.inputbutton {\n  height: 58px;\n  line-height: 2.8;\n  margin: 3% 0 -2% 0; }\n\n.btnStyle {\n  width: 100%;\n  height: 100%;\n  background-color: #195C94;\n  color: white;\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer; }\n  .btnStyle:focus {\n    outline: none;\n    box-shadow: 0px 0px 2px 2px #59a453; }\n\n.passwordErrorMessage {\n  float: left;\n  margin-top: -35px;\n  width: 100%;\n  margin-bottom: 10px; }\n\n.divAlignLeft {\n  float: left; }\n\n.divAlignRight {\n  float: right; }\n\n.Quotedatepicker .mydp .currmonth:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .selector {\n  z-index: 1;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selection {\n  height: 33px !important;\n  color: #757575;\n  font-size: 15px !important;\n  position: relative;\n  text-align: left;\n  padding-left: 8px;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selbtngroup {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclear {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnclear:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpicker {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclearenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .mydp .btnpicker {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnpicker:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpickerenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .help-block {\n  color: red; }\n\nrl-tag-input-item {\n  margin-bottom: 3px; }\n\nselect[multiple]:focus option:checked {\n  background: #3b5998 linear-gradient(0deg, #3b5998 0%, #3b5998 100%); }\n\nrl-tag-input input {\n  font-family: 'Conv_Avenir' !important;\n  font-size: 14px !important; }\n\nrl-tag-input input::-webkit-input-placeholder {\n  color: grey; }\n\nrl-tag-input-item {\n  font-family: 'Conv_Avenir' !important;\n  font-size: 14px !important; }\n\n.required:after {\n  content: \"*\";\n  color: red; }\n\n.auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #374767; }\n    .auth-block a:hover {\n      color: #2f3c58; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.dashBoardContainer {\n  margin: 115px 2.5% 50px 2.5%;\n  padding: 15px;\n  background: white;\n  overflow-y: auto;\n  min-width: 95%;\n  border-radius: 3px;\n  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1); }\n  .dashBoardContainer .dashBoardContent {\n    display: block;\n    margin: 10px 0; }\n    .dashBoardContainer .dashBoardContent .messageContainer {\n      text-align: center;\n      padding: 20px; }\n    .dashBoardContainer .dashBoardContent .messageBody {\n      font-size: 17px;\n      font-weight: 500;\n      letter-spacing: 0.005em;\n      line-height: initial; }\n    .dashBoardContainer .dashBoardContent .button {\n      font-size: medium;\n      font-weight: bold;\n      border-radius: 3px;\n      border: 1px solid #374767;\n      position: relative;\n      background-color: transparent;\n      color: #374767;\n      padding: 15px;\n      width: 25%;\n      text-align: center;\n      /* Safari */\n      transition-duration: 0.4s;\n      text-decoration: none;\n      overflow: hidden;\n      cursor: pointer; }\n      .dashBoardContainer .dashBoardContent .button:hover {\n        background-color: #f1f3f6; }\n    .dashBoardContainer .dashBoardContent .leftCharts {\n      display: inline-block; }\n      .dashBoardContainer .dashBoardContent .leftCharts .barChartDashBoard {\n        border-radius: 3px;\n        display: block;\n        border: 1px solid #E0E0E0;\n        padding: 10px;\n        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1); }\n      .dashBoardContainer .dashBoardContent .leftCharts .doughnutChartDashBoard {\n        border-radius: 3px;\n        display: block;\n        border: 1px solid #E0E0E0;\n        margin-top: 30px;\n        padding: 10px;\n        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1); }\n    .dashBoardContainer .dashBoardContent .sideUserGrid .barChartDashBoard {\n      border-radius: 3px;\n      display: block;\n      border: 1px solid #E0E0E0;\n      padding: 10px;\n      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1); }\n    .dashBoardContainer .dashBoardContent .sideUserGrid .rectContainer {\n      float: left; }\n      .dashBoardContainer .dashBoardContent .sideUserGrid .rectContainer .imgResponsive {\n        margin-bottom: 25px; }\n      .dashBoardContainer .dashBoardContent .sideUserGrid .rectContainer .imgResponsiveLowerSquares {\n        margin-bottom: 19px; }\n      .dashBoardContainer .dashBoardContent .sideUserGrid .rectContainer .squareDiv {\n        width: 100%;\n        border: 1px solid #E0E0E0;\n        padding: 23.5%;\n        text-align: center;\n        font-weight: 600;\n        border-radius: 3px;\n        display: inline-block;\n        float: left;\n        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1); }\n    .dashBoardContainer .dashBoardContent .sideUserGrid .totalUsers {\n      width: 100%;\n      border: none;\n      float: left;\n      padding: 10%;\n      margin-top: 15px;\n      border-radius: 3px;\n      background-color: #59a453;\n      text-align: center;\n      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1); }\n    .dashBoardContainer .dashBoardContent .sideUserGrid .usersGrid {\n      width: 100%;\n      margin-top: 25px;\n      float: left; }\n      .dashBoardContainer .dashBoardContent .sideUserGrid .usersGrid .countTitle {\n        color: #374767;\n        font-size: 15px;\n        line-height: initial; }\n      .dashBoardContainer .dashBoardContent .sideUserGrid .usersGrid .count {\n        color: #374767;\n        font-size: 30px;\n        line-height: initial; }\n    .dashBoardContainer .dashBoardContent .sideUserGrid .userGridTitle {\n      color: white;\n      font-weight: 500;\n      letter-spacing: 0.05em;\n      font-size: 30px;\n      line-height: initial; }\n\n@media screen and (min-width: 1002px) and (max-width: 1200px) {\n  .dashBoardContainer .dashBoardContent .leftCharts .barChartDashBoard {\n    min-height: 245px; }\n  .dashBoardContainer .dashBoardContent .leftCharts .doughnutChartDashBoard {\n    min-height: 245px; }\n  .dashBoardContainer .dashBoardContent .sideUserGrid .barChartDashBoard {\n    min-height: 520px;\n    max-height: 520px; } }\n\n@media screen and (min-width: 768px) and (max-width: 1001px) {\n  .dashBoardContainer .dashBoardContent .leftCharts .barChartDashBoard {\n    min-height: 210px; }\n  .dashBoardContainer .dashBoardContent .leftCharts .doughnutChartDashBoard {\n    min-height: 210px; }\n  .dashBoardContainer .dashBoardContent .sideUserGrid .barChartDashBoard {\n    min-height: 450px;\n    max-height: 450px; } }\n\n@media screen and (min-width: 421px) and (max-width: 767px) {\n  .dashBoardContainer .dashBoardContent .rectContainer {\n    width: 50%; }\n  .dashBoardContainer .dashBoardContent .sideUserGrid {\n    margin-top: 10px; } }\n\n@media screen and (min-width: 320px) and (max-width: 420px) {\n  .dashBoardContainer .dashBoardContent .withoutPadding {\n    padding: 0; }\n  .dashBoardContainer .dashBoardContent .rectContainer {\n    width: 100%; }\n  .dashBoardContainer .dashBoardContent .sideUserGrid {\n    margin-top: 10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map