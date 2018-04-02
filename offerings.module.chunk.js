webpackJsonp(["offerings.module"],{

/***/ "../../../../../src/app/pages/manageOfferings/offerings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageOfferings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_authentication__ = __webpack_require__("../../../../../src/app/app.authentication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appServices_application__ = __webpack_require__("../../../../../src/app/appServices/application.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_services_baThemeSpinner_baThemeSpinner_service__ = __webpack_require__("../../../../../src/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ManageOfferings = (function () {
    function ManageOfferings(router, adminServices, fb, authentication, appService, toastr, spinner, vRef, _spinner, datePipe) {
        this.router = router;
        this.adminServices = adminServices;
        this.fb = fb;
        this.authentication = authentication;
        this.appService = appService;
        this.toastr = toastr;
        this.spinner = spinner;
        this._spinner = _spinner;
        this.datePipe = datePipe;
        // changePasswordForm: FormGroup;
        // getUserData: any;
        // imageUrl: string;
        // changePasswordData: any;
        // showError: boolean = false;
        this.viewAllComponent = true;
        this.draftComponent = false;
        this.activeComponent = false;
        this.completedComponent = false;
        this.failedComponent = false;
        this.isSelectedValue = 'view-all';
        this.status = '';
        this.offeringsList = [];
        this.searchBox = '';
        this.toastr.setRootViewContainerRef(vRef);
        this.authentication.setChangedContentTopText('Manage Offerings');
    }
    ManageOfferings.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.getAllOfferings();
    };
    /**
     * To get all offerings list
     */
    ManageOfferings.prototype.getAllOfferings = function () {
        var _this = this;
        this.spinner.show();
        var searchValue;
        var data = {
            search_string: this.status
        };
        if (typeof data.search_string !== 'undefined') {
            searchValue = '?status=' + data.search_string;
        }
        else {
            searchValue = '';
        }
        this.adminServices.getOfferings(searchValue).subscribe(function (data) { return _this.getOfferingsSuccess(data); }, function (error) { return _this.getOfferingsFail(error); });
    };
    /**
     * If get all offerings success
     * @param data
     */
    ManageOfferings.prototype.getOfferingsSuccess = function (data) {
        var _this = this;
        this.spinner.hide();
        if (data.success.status === 1) {
            this.offeringsList = [];
            data.success.data.deals.forEach(function (offeringInfo) {
                var dataObject = {
                    id: offeringInfo._id,
                    type: offeringInfo.type,
                    location: 'NA',
                    launched: _this.valuePrepareFunctionWithDateAndTime(offeringInfo.createdAt),
                    goal: offeringInfo.offeringAmount,
                    projectOwner: offeringInfo.issuer,
                    progress: '50',
                    progressDollarValue: offeringInfo.percentageRaised
                };
                _this.offeringsList.push(dataObject);
            });
        }
    };
    /**
     * if get all offerings fail
     * @param Error
     */
    ManageOfferings.prototype.getOfferingsFail = function (Error) {
        this.spinner.hide();
        if (Error.error && Error.error.message) {
            this.toastr.error(Error.error.message);
        }
        else {
            this.toastr.error('Server error');
        }
    };
    /**
     * To call API for filtering offerings by search term.
     */
    ManageOfferings.prototype.searchOfferings = function (value) {
        var _this = this;
        this.spinner.show();
        var searchValue = '';
        if (value && value.trim()) {
            searchValue = '?status=' + this.status + '&&search_string=' + value.trim();
        }
        else if (value && value.trim() && !this.status) {
            searchValue = '?search_string=' + value.trim();
        }
        this.adminServices.getOfferings(searchValue).subscribe(function (data) { return _this.getOfferingsSuccess(data); }, function (error) { return _this.getOfferingsFail(error); });
    };
    ManageOfferings.prototype.changeTab = function (id) {
        this.isSelectedValue = id;
        if (id !== "view-all") {
            this.status = id;
        }
        else {
            this.status = '';
        }
        this.searchBox = '';
        this.getAllOfferings();
        if (id == "view-all") {
            this.viewAllComponent = true;
            this.activeComponent = false;
            this.completedComponent = false;
            this.failedComponent = false;
            this.draftComponent = false;
        }
        else if (id == "draft") {
            this.draftComponent = true;
            this.viewAllComponent = false;
            this.activeComponent = false;
            this.completedComponent = false;
            this.failedComponent = false;
        }
        else if (id == "active") {
            this.activeComponent = true;
            this.viewAllComponent = false;
            this.completedComponent = false;
            this.failedComponent = false;
            this.draftComponent = false;
        }
        else if (id == "completed") {
            this.completedComponent = true;
            this.viewAllComponent = false;
            this.activeComponent = false;
            this.failedComponent = false;
            this.draftComponent = false;
        }
        else {
            this.failedComponent = true;
            this.viewAllComponent = false;
            this.activeComponent = false;
            this.completedComponent = false;
            this.draftComponent = false;
        }
    };
    // Navigates to add offering page.
    ManageOfferings.prototype.navigateToAddOffering = function () {
        this.router.navigate(['/add-offering']);
    };
    // Navigates to edit offering page.
    ManageOfferings.prototype.navigateToEditSpecificOffering = function (offeringValue) {
        this.router.navigate(['/edit-offering'], { queryParams: { id: offeringValue.id } });
    };
    /**
     * To format date
     */
    ManageOfferings.prototype.valuePrepareFunctionWithDateAndTime = function (date) {
        if (date == null) {
            return null;
        }
        else {
            var raw = new Date(date);
            var formatted = this.datePipe.transform(raw, 'dd MMM yyyy HH:mm');
            return formatted;
        }
    };
    return ManageOfferings;
}());
ManageOfferings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'offering',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__("../../../../../src/app/pages/manageOfferings/offerings.scss")],
        template: __webpack_require__("../../../../../src/app/pages/manageOfferings/offerings.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__appServices_application__["a" /* ApplicationAdminServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__appServices_application__["a" /* ApplicationAdminServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_authentication__["a" /* AuthenticationHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_authentication__["a" /* AuthenticationHelper */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__appServices_application__["a" /* ApplicationAdminServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__appServices_application__["a" /* ApplicationAdminServices */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__theme_services_baThemeSpinner_baThemeSpinner_service__["a" /* BaThemeSpinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__theme_services_baThemeSpinner_baThemeSpinner_service__["a" /* BaThemeSpinner */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__theme_services_baThemeSpinner_baThemeSpinner_service__["a" /* BaThemeSpinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__theme_services_baThemeSpinner_baThemeSpinner_service__["a" /* BaThemeSpinner */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"]) === "function" && _k || Object])
], ManageOfferings);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=offerings.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/manageOfferings/offerings.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"offerings-main-campaign\">\n    <div class=\"offerings-panel\">\n        <div class=\"offerings-panel-body\">\n            <div class=\"offerings-wizard\">\n                <div class=\"offeringsTab\" [ngClass]=\"{'currentTab' : viewAllComponent}\" id=\"view-all\"\n                     (click)=\"changeTab('view-all')\">\n                    <a>\n                        <span class=\"tabText\">VIEW ALL</span>\n                    </a>\n                </div>\n                <div class=\"offeringsTab\" [ngClass]=\"{'currentTab' : draftComponent}\" id=\"draft\"\n                     (click)=\"changeTab('draft')\">\n                    <a>\n                        <span class=\"tabText\">DRAFT</span>\n                    </a>\n                </div>\n                <div class=\"offeringsTab disableTab\" [ngClass]=\"{'currentTab' : activeComponent}\" id=\"active\"\n                     (click)=\"changeTab('active')\">\n                    <a>\n                        <span class=\"tabText\">ACTIVE</span>\n                    </a>\n                </div>\n                <div class=\"offeringsTab disableTab\" [ngClass]=\"{'currentTab' : completedComponent}\" id=\"completed\"\n                     (click)=\"changeTab('completed')\">\n                    <a>\n                        <span class=\"tabText\">COMPLETED</span>\n                    </a>\n                </div>\n                <div class=\"offeringsTab disableTab\" [ngClass]=\"{'currentTab' : failedComponent}\" id=\"failed\"\n                     (click)=\"changeTab('failed')\">\n                    <a>\n                        <span class=\"tabText\">FAILED</span>\n                    </a>\n                </div>\n            </div>\n            <div class=\"offeringsTab disableTab totalDiv\" id=\"total\" (click)=\"changeTab('failed')\">\n                <a>\n                    <span class=\"tabText\"><b>TOTAL</b></span>\n                    <span class=\"totalText\">$22,000 offerings</span>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!--Offerings Container-->\n<div class=\"offeringsGridParentContainer\">\n    <div class=\"actionContainer\">\n        <div class=\"actionContainerDiv\">\n            <div class=\"searchButtonDiv\">\n                <div class=\"searchButton\">\n                    <span class=\"input-group-addon searchLogo\"> <!--[(ngModel)]=\"searchBox\" (click)=\"searchOfferings(searchBox)\"-->\n                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    </span>\n                    <input class=\"searchInputButton\" [(ngModel)]=\"searchBox\" (keyup.enter)=\"searchOfferings(searchBox)\"\n                           placeholder=\"Search\"/>\n                </div>\n            </div>\n            <div class=\"addOfferButtonDiv\">\n                <button class=\"addButton\" (click)=\"navigateToAddOffering()\"><i class=\"fa fa-plus\"></i>&nbsp;Add Offering\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"offeringsContainer\">\n        <div class=\"offeringsContent divAlignLeft\">\n            <div class=\"col-md-12 col-xs-12 divAlignLeft offeringsContainerHead\">\n                <div class=\"col-md-3 col-xs-3 divAlignLeft typeDiv\">\n                    <span class=\"headText\">TYPE/LOCATION</span>\n                </div>\n                <div class=\"col-md-2 col-xs-2 divAlignLeft launchedDiv\">\n                    <span class=\"headText\">LAUNCHED</span>\n                </div>\n                <div class=\"col-md-2 col-xs-2 divAlignLeft goalDiv\">\n                    <span class=\"headText\">GOAL</span>\n                </div>\n                <div class=\"col-md-4 col-xs-4 divAlignLeft projectOwnerDiv\">\n                    <span class=\"headText\">PROJECT OWNER</span>\n                </div>\n                <div class=\"col-md-1 col-xs-1 divAlignLeft actionDiv\">\n                    <span class=\"tabText\">ACTIONS</span>\n                </div>\n            </div>\n            <div class=\"col-md-12 col-xs-12 divAlignLeft activeHeadDiv\">\n                <span class=\"\">{{isSelectedValue | capitalize}}</span>\n            </div>\n            <div class=\"offeringsGridDataContainer\">\n                <div *ngFor=\"let offeringValue of offeringsList;\">\n                    <div class=\"offerDiv\">\n                        <div class=\"col-md-12 col-xs-12 offerDivFirst\">\n                            <div class=\"col-md-7 col-xs-7 typeDiv\">\n                                <span>{{offeringValue.type? offeringValue.type : ''}}</span>\n                            </div>\n                            <div class=\"col-md-5 col-xs-5 divAlignLeft progress progressBarDiv\">\n                                <div class=\"progress-bar\" [style.width.%]='offeringValue.progress ? offeringValue.progress: 0 '\n                                     role=\"progressbar\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                                    <span>${{offeringValue.progressDollarValue? offeringValue.progressDollarValue : ''}}</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 col-xs-12 offerDivSecond\">\n                            <div class=\"col-md-3 col-xs-3 divAlignLeft textWrap locationDiv\"><b>{{offeringValue.location? offeringValue.location : ''}}</b>\n                            </div>\n                            <div class=\"col-md-2 col-xs-2 divAlignLeft launchedDiv\">{{offeringValue.launched? offeringValue.launched : ''}}</div>\n                            <div class=\"col-md-2 col-xs-2 divAlignLeft goalDiv\"><b>{{offeringValue.goal? offeringValue.goal : ''}}</b></div>\n                            <div class=\"col-md-4 col-xs-4 divAlignLeft projectOwner\">{{offeringValue.projectOwner? offeringValue.projectOwner : ''}}</div>\n                            <div class=\"col-md-1 col-xs-1 divAlignLeft actionDiv\"></div>\n                        </div>\n                        <div class=\"offerDivThird\">\n                            <div class=\"divAlignRight buttonDiv\" (click)=\"navigateToEditSpecificOffering(offeringValue)\">\n                                <button class=\"editButton\" >EDIT</button>\n                            </div>\n                            <div class=\"divAlignRight buttonDiv\">\n                                <button class=\"addButton\">ADD</button>\n                            </div>\n                            <div class=\"divAlignRight buttonDiv\">\n                                <button class=\"investorButton\">INVESTOR LIST</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/manageOfferings/offerings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferingsModule", function() { return OfferingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offerings_component__ = __webpack_require__("../../../../../src/app/pages/manageOfferings/offerings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offerings_routing__ = __webpack_require__("../../../../../src/app/pages/manageOfferings/offerings.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var OfferingsModule = (function () {
    function OfferingsModule() {
    }
    return OfferingsModule;
}());
OfferingsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_5__offerings_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_modal__["ModalModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_smart_table__["b" /* Ng2SmartTableModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__offerings_component__["a" /* ManageOfferings */]
        ],
        providers: []
    })
], OfferingsModule);

//# sourceMappingURL=offerings.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/manageOfferings/offerings.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__offerings_component__ = __webpack_require__("../../../../../src/app/pages/manageOfferings/offerings.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__offerings_component__["a" /* ManageOfferings */],
        children: []
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);
//# sourceMappingURL=offerings.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/manageOfferings/offerings.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #374767; }\n    .auth-block a:hover {\n      color: #2f3c58; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.paginationControl {\n  width: 100%;\n  float: left;\n  padding: 0 15px; }\n  .paginationControl #listItem .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n  .paginationControl #listItem .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .paginationControl #listItem .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .paginationControl #listItem .ngx-pagination a {\n    color: #606c71; }\n    .paginationControl #listItem .ngx-pagination a:hover {\n      background: transparent; }\n  .paginationControl #listItem .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n  .paginationControl #listItemNew .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n  .paginationControl #listItemNew .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .paginationControl #listItemNew .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .paginationControl #listItemNew .ngx-pagination a {\n    color: #606c71; }\n    .paginationControl #listItemNew .ngx-pagination a:hover {\n      background: transparent; }\n  .paginationControl #listItemNew .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n  .paginationControl #listItem ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n    .paginationControl #listItem ul li:hover {\n      background: transparent; }\n  .paginationControl #listItemNew ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n    .paginationControl #listItemNew ul li:hover {\n      background: transparent; }\n  .paginationControl .pageControl {\n    cursor: pointer;\n    padding: 0 10px; }\n    .paginationControl .pageControl ul {\n      padding: 10px 0;\n      margin: 0;\n      float: left; }\n\n.btn-danger {\n  margin-left: 3px; }\n\n.btn-primary {\n  margin-right: 3px; }\n\n.btn:hover {\n  -webkit-transform: none;\n          transform: none; }\n\n.help-block {\n  color: red; }\n\n.modal-header {\n  margin: 0 auto; }\n\n.fa-rupee:before, .fa-inr:before {\n  content: \"\\F156\";\n  margin-right: 14px !important; }\n\n.ion-edit:before {\n  content: \"\\F2BF\";\n  color: #000000; }\n\n.text-spacing {\n  margin-bottom: 1%; }\n\n.disableSubmit {\n  opacity: 0.8;\n  cursor: not-allowed; }\n  .disableSubmit:hover {\n    opacity: 0.8;\n    cursor: not-allowed !important; }\n\n.purchase_table .ion-edit:before {\n  content: \"\\F2BF\";\n  margin-right: 10px;\n  color: #000000; }\n\n.ion-trash-b:before {\n  content: \"\\F252\";\n  color: #ff0000; }\n\n.fa-envelope-o:before {\n  margin-right: 10px; }\n\n.form-control[disabled] {\n  color: grey;\n  border-color: lightgrey; }\n\n#vendorPurchaseTable table > thead > tr > th:first-child {\n  text-align: center; }\n\n.tagsSmart {\n  background: #F1F3F6;\n  color: #282828;\n  display: inline-block;\n  border: 1px solid lightgray;\n  padding: 0 10px 0 10px;\n  margin: 2px 2px 2px 2px;\n  border-radius: 90px; }\n\ntable th, table td {\n  border: 1px solid #ddd; }\n\ntable .ng2-smart-actions {\n  text-align: center;\n  color: #374767; }\n\ntable .ng2-smart-title a {\n  color: #374767; }\n\ntable .ng2-smart-title a:hover {\n  text-decoration: none; }\n\n.modal-body-data {\n  margin-bottom: 15px; }\n\ntable .ng2-smart-actions {\n  width: 100px !important; }\n\n.inputbox {\n  border-radius: 3px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0px;\n  padding-left: 2%;\n  border: 1px solid gainsboro;\n  outline: none;\n  box-shadow: none;\n  color: #555555; }\n\n.inputbox::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: gainsboro; }\n\n.inputbox::-moz-placeholder {\n  /* Firefox 19+ */\n  color: gainsboro; }\n\n.inputbox:-ms-input-placeholder {\n  /* IE 10+ */\n  color: gainsboro; }\n\n.inputbox:-moz-placeholder {\n  /* Firefox 18- */\n  color: gainsboro; }\n\n.inputbox:focus, .inputbox:active {\n  border-color: #A5C9BB;\n  outline: 0;\n  outline: thin dotted \\9;\n  /* -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6); */\n  box-shadow: inset 0 1px 1px rgba(0, 220, 0, 0.075), 0 0 8px rgba(0, 225, 0, 0.2); }\n\n.inputbutton {\n  height: 58px;\n  line-height: 2.8;\n  margin: 3% 0 -2% 0; }\n\n.btnStyle {\n  width: 100%;\n  height: 100%;\n  background-color: #195C94;\n  color: white;\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer; }\n  .btnStyle:focus {\n    outline: none;\n    box-shadow: 0px 0px 2px 2px #59a453; }\n\n.passwordErrorMessage {\n  float: left;\n  margin-top: -35px;\n  width: 100%;\n  margin-bottom: 10px; }\n\n.divAlignLeft {\n  float: left; }\n\n.divAlignRight {\n  float: right; }\n\n.Quotedatepicker .mydp .currmonth:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .selector {\n  z-index: 1;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selection {\n  height: 33px !important;\n  color: #757575;\n  font-size: 15px !important;\n  position: relative;\n  text-align: left;\n  padding-left: 8px;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selbtngroup {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclear {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnclear:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpicker {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclearenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .mydp .btnpicker {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnpicker:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpickerenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .help-block {\n  color: red; }\n\nrl-tag-input-item {\n  margin-bottom: 3px; }\n\nselect[multiple]:focus option:checked {\n  background: #3b5998 linear-gradient(0deg, #3b5998 0%, #3b5998 100%); }\n\nrl-tag-input input {\n  font-family: 'Conv_Avenir' !important;\n  font-size: 14px !important; }\n\nrl-tag-input input::-webkit-input-placeholder {\n  color: grey; }\n\nrl-tag-input-item {\n  font-family: 'Conv_Avenir' !important;\n  font-size: 14px !important; }\n\n.required:after {\n  content: \"*\";\n  color: red; }\n\n.auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #374767; }\n    .auth-block a:hover {\n      color: #2f3c58; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.offerings-main-campaign {\n  width: 100%;\n  float: left;\n  padding-top: 110px; }\n  .offerings-main-campaign .offerings-panel {\n    float: left;\n    width: 100%; }\n    .offerings-main-campaign .offerings-panel .offerings-panel-body {\n      width: 100%;\n      float: left;\n      margin-bottom: 30px; }\n      .offerings-main-campaign .offerings-panel .offerings-panel-body .offerings-wizard {\n        min-width: 70%;\n        float: left;\n        background: #fff;\n        margin: 0 2.5%;\n        border: 1px solid #E0E0E0;\n        border-radius: 3px;\n        font-weight: 700; }\n        .offerings-main-campaign .offerings-panel .offerings-panel-body .offerings-wizard .offeringsTab {\n          width: 20%;\n          float: left;\n          text-align: center;\n          border-right: 1px solid #E0E0E0;\n          height: 50px;\n          line-height: 52px;\n          cursor: pointer;\n          font-size: 12px; }\n          .offerings-main-campaign .offerings-panel .offerings-panel-body .offerings-wizard .offeringsTab a {\n            text-transform: uppercase; }\n      .offerings-main-campaign .offerings-panel .offerings-panel-body .totalDiv {\n        float: right;\n        margin-right: 2.5%;\n        width: 22%;\n        height: 50px;\n        font-size: 12px;\n        text-align: left;\n        border-right: 1px solid #E0E0E0;\n        padding: 15px 15px;\n        border-radius: 3px;\n        background-color: #59a453; }\n        .offerings-main-campaign .offerings-panel .offerings-panel-body .totalDiv .totalText {\n          color: #ffff;\n          padding-left: 15px;\n          font-size: 15px; }\n      .offerings-main-campaign .offerings-panel .offerings-panel-body .currentTab {\n        font-size: 14px !important;\n        border-bottom: 3px solid #195C94;\n        color: #195C94; }\n\n.offeringsGridParentContainer {\n  width: 100%;\n  overflow-y: auto; }\n  .offeringsGridParentContainer .actionContainer .actionContainerDiv {\n    width: 95%;\n    float: left;\n    padding: 0 15px;\n    margin: 10px 2.5%;\n    position: relative;\n    margin-bottom: 10px;\n    overflow-y: auto;\n    background: #fff;\n    border-radius: 3px;\n    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1); }\n    .offeringsGridParentContainer .actionContainer .actionContainerDiv .searchButtonDiv {\n      width: 80%;\n      float: left;\n      padding: 1% 0; }\n      .offeringsGridParentContainer .actionContainer .actionContainerDiv .searchButtonDiv .searchButton {\n        width: 100%;\n        float: left;\n        padding: 5px 5px 5px 0px; }\n        .offeringsGridParentContainer .actionContainer .actionContainerDiv .searchButtonDiv .searchButton .searchLogo {\n          border-bottom-left-radius: 3px;\n          border-top-left-radius: 3px;\n          float: left;\n          height: 35px; }\n        .offeringsGridParentContainer .actionContainer .actionContainerDiv .searchButtonDiv .searchButton .searchInputButton {\n          height: 35px;\n          color: #666666;\n          padding-left: 2%;\n          border: 1px solid #E0E0E0;\n          outline: none;\n          box-shadow: none; }\n    .offeringsGridParentContainer .actionContainer .actionContainerDiv .addOfferButtonDiv {\n      width: 20%;\n      float: right;\n      padding-top: 15px; }\n      .offeringsGridParentContainer .actionContainer .actionContainerDiv .addOfferButtonDiv .addButton {\n        width: 100%;\n        height: 35px;\n        background-color: #195C94;\n        outline: none;\n        border: none;\n        border-radius: 3px;\n        color: white;\n        font-size: 15px;\n        cursor: pointer; }\n  .offeringsGridParentContainer .offeringsGridSearchContainer {\n    margin: 0px 2.5% 0px 2.5%;\n    min-width: 95%;\n    overflow-y: auto;\n    border-radius: 3px;\n    float: left;\n    position: relative;\n    margin-bottom: 10px;\n    background: #fff;\n    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1); }\n    .offeringsGridParentContainer .offeringsGridSearchContainer .search-input-group {\n      padding: 10px 15px; }\n    .offeringsGridParentContainer .offeringsGridSearchContainer .offeringsGridSearchInput {\n      width: 40%;\n      float: left;\n      padding: 5px 5px 5px 0px; }\n      .offeringsGridParentContainer .offeringsGridSearchContainer .offeringsGridSearchInput .searchOffers {\n        width: 100%;\n        height: 35px;\n        color: #666666;\n        padding-left: 2%;\n        border: 1px solid #E0E0E0;\n        outline: none;\n        box-shadow: none; }\n        @media screen and (max-width: 767px) {\n          .offeringsGridParentContainer .offeringsGridSearchContainer .offeringsGridSearchInput .searchOffers {\n            height: 45px; } }\n      .offeringsGridParentContainer .offeringsGridSearchContainer .offeringsGridSearchInput .right-border {\n        border-bottom-right-radius: 3px;\n        border-top-right-radius: 3px; }\n      .offeringsGridParentContainer .offeringsGridSearchContainer .offeringsGridSearchInput .searchBox::-webkit-input-placeholder {\n        /* Chrome/Opera/Safari */\n        color: gainsboro; }\n      .offeringsGridParentContainer .offeringsGridSearchContainer .offeringsGridSearchInput .searchBox::-moz-placeholder {\n        /* Firefox 19+ */\n        color: gainsboro; }\n      .offeringsGridParentContainer .offeringsGridSearchContainer .offeringsGridSearchInput .searchBox:-ms-input-placeholder {\n        /* IE 10+ */\n        color: gainsboro; }\n      .offeringsGridParentContainer .offeringsGridSearchContainer .offeringsGridSearchInput .searchBox:-moz-placeholder {\n        /* Firefox 18- */\n        color: gainsboro; }\n  .offeringsGridParentContainer .offeringsContainer {\n    margin: 0px 2.5% 50px 2.5%;\n    background: white;\n    min-width: 95%;\n    overflow-y: auto;\n    border-radius: 3px; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsContent {\n      width: 100%;\n      border: 1px solid #E0E0E0;\n      border-bottom: 0; }\n      .offeringsGridParentContainer .offeringsContainer .offeringsContent .activeHeadDiv {\n        font-size: 12px;\n        background-color: #f1f3f6;\n        color: #374767;\n        padding: 15px;\n        font-weight: 700;\n        border-bottom: 1px solid #E0E0E0; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsContainerHead {\n      position: relative;\n      font-size: 12px;\n      font-weight: 700;\n      color: #ffffff;\n      background-color: #374767;\n      padding: 15px 0;\n      text-align: left; }\n      .offeringsGridParentContainer .offeringsContainer .offeringsContainerHead .activeDiv {\n        font-size: 12px;\n        background-color: #f1f3f6;\n        color: #374767;\n        padding: 10px;\n        font-weight: 700; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer {\n      background: #ffffff;\n      overflow-y: auto;\n      display: block;\n      width: 100%;\n      float: left; }\n      .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv {\n        float: left;\n        width: 100%;\n        display: block;\n        padding-left: 0;\n        border-bottom: 1px solid #E0E0E0; }\n        .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivFirst {\n          float: left;\n          width: 100%;\n          display: block;\n          padding: 10px 15px;\n          padding-left: 0;\n          color: #285eb8; }\n          .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivFirst .progressBarDiv {\n            padding: 0;\n            border-radius: 10px;\n            background-color: #f1f3f6; }\n            .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivFirst .progressBarDiv div.progress-bar {\n              background-color: #59a453;\n              color: #ffffff;\n              font-weight: 700; }\n          .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivFirst .typeDiv {\n            float: left;\n            font-weight: 700; }\n        .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivSecond {\n          float: left;\n          width: 100%;\n          display: block;\n          border: 1px solid #E0E0E0;\n          border-left: 0;\n          border-right: 0;\n          background-color: #f1f3f6;\n          padding: 15px 0px;\n          padding-left: 0; }\n          .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivSecond .textWrap {\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            overflow: hidden; }\n          .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivSecond .locationDiv {\n            color: #374767; }\n          .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivSecond .launchedDiv {\n            color: #374767; }\n          .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivSecond .projectOwner {\n            color: #285eb8;\n            font-weight: 700; }\n        .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivThird {\n          float: left;\n          width: 100%;\n          display: block;\n          background-color: #f1f3f6;\n          padding: 10px 15px; }\n          .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivThird .buttonDiv .addButton {\n            padding: 4px 10px;\n            margin-left: 15px;\n            background-color: #ffffff;\n            cursor: pointer;\n            border-radius: 3px;\n            border: 1px solid #E0E0E0; }\n          .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivThird .buttonDiv .editButton {\n            padding: 4px 10px;\n            background-color: #195C94;\n            color: #ffffff;\n            cursor: pointer;\n            border-radius: 3px;\n            border: 1px solid #E0E0E0; }\n          .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivThird .buttonDiv .investorButton {\n            padding: 4px 10px;\n            background-color: #ffffff;\n            cursor: pointer;\n            border-radius: 3px;\n            border: 1px solid #E0E0E0; }\n\n@media only screen and (min-device-width: 310px) and (max-device-width: 320px) {\n  .offerings-main-campaign .offerings-panel .offerings-panel-body .offerings-wizard {\n    width: 95%; }\n    .offerings-main-campaign .offerings-panel .offerings-panel-body .offerings-wizard .offeringsTab {\n      height: 40px;\n      line-height: 40px; }\n      .offerings-main-campaign .offerings-panel .offerings-panel-body .offerings-wizard .offeringsTab a .tabText {\n        font-size: 7px; }\n      .offerings-main-campaign .offerings-panel .offerings-panel-body .offerings-wizard .offeringsTab a .profileIcon {\n        margin-right: 0; }\n  .offerings-main-campaign .offerings-panel .offerings-panel-body .totalDiv {\n    height: 40px;\n    width: 38%;\n    margin-top: 5px;\n    font-size: 7px; }\n  .offeringsForm {\n    padding-right: 0 !important; } }\n\n@media only screen and (max-width: 321px) {\n  .offeringsGridParentContainer .actionContainer .actionContainerDiv .searchButtonDiv {\n    width: 100%;\n    float: left; }\n  .offeringsGridParentContainer .actionContainer .actionContainerDiv .addOfferButtonDiv {\n    width: 40%;\n    float: left;\n    padding-bottom: 8px; } }\n\n@media only screen and (min-width: 320px) and (max-width: 768px) {\n  .offerings-main-campaign .offerings-panel .offerings-panel-body .offerings-wizard .offeringsTab {\n    height: 40px;\n    line-height: 40px; }\n    .offerings-main-campaign .offerings-panel .offerings-panel-body .offerings-wizard .offeringsTab:last-child {\n      border-right: 0; }\n    .offerings-main-campaign .offerings-panel .offerings-panel-body .offerings-wizard .offeringsTab a .tabText {\n      font-size: 7px; }\n    .offerings-main-campaign .offerings-panel .offerings-panel-body .offerings-wizard .offeringsTab a .profileIcon {\n      margin-right: 0; }\n  .offerings-main-campaign .offerings-panel .offerings-panel-body .totalDiv {\n    font-size: 7px;\n    padding: 5px 10px;\n    height: 40px; }\n    .offerings-main-campaign .offerings-panel .offerings-panel-body .totalDiv .tabText {\n      font-size: 7px; }\n    .offerings-main-campaign .offerings-panel .offerings-panel-body .totalDiv .totalText {\n      color: #ffff;\n      padding-left: 5px;\n      font-size: 9px;\n      font-weight: 700; }\n  .offeringsGridParentContainer .actionContainer .actionContainerDiv .addOfferButtonDiv {\n    padding-top: 8px; }\n    .offeringsGridParentContainer .actionContainer .actionContainerDiv .addOfferButtonDiv .searchButton {\n      float: left;\n      padding: 5px 5px 5px 0; }\n  .offeringsGridParentContainer .offeringsContainer .offeringsContent .offeringsForm .offeringsContainerHead {\n    background-color: #374767;\n    margin-bottom: 40px; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsContent .offeringsForm .offeringsContainerHead .profileDiv {\n      left: 20px;\n      bottom: -40px;\n      padding: 0; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsContent .offeringsForm .offeringsContainerHead .profileImage {\n      width: 94%;\n      font-size: 13px; } }\n\n@media only screen and (min-width: 450px) and (max-width: 767px) {\n  .offerings-main-campaign .offerings-panel .offerings-panel-body .offerings-wizard .offeringsTab {\n    height: 45px;\n    line-height: 45px; }\n    .offerings-main-campaign .offerings-panel .offerings-panel-body .offerings-wizard .offeringsTab a .tabText {\n      font-size: 9px; }\n    .offerings-main-campaign .offerings-panel .offerings-panel-body .offerings-wizard .offeringsTab a .profileIcon {\n      margin-right: 0; }\n  .offerings-main-campaign .offerings-panel .offerings-panel-body .totalDiv {\n    height: 45px;\n    font-size: 9px; } }\n\n@media (min-width: 320px) and (max-width: 414px) {\n  .offerings-main-campaign .offerings-panel .offerings-panel-body {\n    margin-bottom: 10px; }\n    .offerings-main-campaign .offerings-panel .offerings-panel-body .offerings-wizard {\n      width: 95%; }\n    .offerings-main-campaign .offerings-panel .offerings-panel-body .totalDiv {\n      height: 40px;\n      width: 38%;\n      margin-top: 15px;\n      font-size: 7px; }\n  .offeringsGridParentContainer .actionContainer .actionContainerDiv .addOfferButtonDiv .addButton {\n    height: 35px;\n    font-size: 12px; }\n  .offeringsGridParentContainer .offeringsContainer .offeringsContent {\n    width: 500px; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsContent .activeHeadDiv {\n      padding: 15px 5px; }\n  .offeringsGridParentContainer .offeringsContainer .offeringsContainerHead {\n    width: 500px; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsContainerHead .typeDiv {\n      width: 25%;\n      padding: 5px; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsContainerHead .launchedDiv {\n      padding: 5px;\n      width: 17%; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsContainerHead .goalDiv {\n      width: 15%;\n      padding: 5px; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsContainerHead .projectOwnerDiv {\n      width: 30%;\n      padding: 5px; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsContainerHead .actionDiv {\n      width: 10%;\n      padding: 5px; }\n  .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivFirst {\n    padding-right: 5px; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivFirst .typeDiv {\n      width: 50%;\n      padding: 5px; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivFirst .progressBarDiv {\n      width: 50%; }\n  .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivSecond {\n    padding-right: 5px; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivSecond .locationDiv {\n      width: 25%;\n      float: left;\n      padding: 5px; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivSecond .launchedDiv {\n      width: 18%;\n      padding: 5px; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivSecond .goalDiv {\n      width: 15%;\n      padding: 5px; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivSecond .projectOwner {\n      width: 42%;\n      padding: 5px; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivSecond .actionDiv {\n      padding: 5px; }\n    .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivSecond .textWrap {\n      white-space: unset; }\n  .offeringsGridParentContainer .offeringsContainer .offeringsGridDataContainer .offerDiv .offerDivThird {\n    padding-right: 5px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

});
//# sourceMappingURL=offerings.module.chunk.js.map