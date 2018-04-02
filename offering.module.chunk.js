webpackJsonp(["offering.module"],{

/***/ "../../../../../src/app/pages/offering/offering.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Offering; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_authentication__ = __webpack_require__("../../../../../src/app/app.authentication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appServices_application__ = __webpack_require__("../../../../../src/app/appServices/application.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Offering = (function () {
    function Offering(authentication, router, toastr, appService, routes) {
        this.authentication = authentication;
        this.router = router;
        this.toastr = toastr;
        this.appService = appService;
        this.routes = routes;
        this.overviewPage = true;
        this.updatesPage = false;
        this.questionsPage = false;
        this.offeringId = '';
        this.offeringData = {};
        // this.offeringId = this.routes.snapshot.queryParams['id'];
        this.offeringId = '5a097ea13543ed07ba8fb0e0';
        this.authentication.setChangedContentTopText('Offering');
    }
    Offering.prototype.ngOnInit = function () {
        this.galleryOptions = [
            {
                width: '100%',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: __WEBPACK_IMPORTED_MODULE_3_ngx_gallery__["NgxGalleryAnimation"].Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        this.galleryImages = [
            {
                small: 'assets/img/offering.png',
                medium: 'assets/img/offering.png',
                big: 'assets/img/offering.png'
            },
            {
                small: 'assets/img/offering1.jpg',
                medium: 'assets/img/offering1.jpg',
                big: 'assets/img/offering1.jpg'
            },
            {
                small: 'assets/img/offering.png',
                medium: 'assets/img/offering.png',
                big: 'assets/img/offering.png'
            }
        ];
        this.getOfferingsDetails();
    };
    // Api call to get specific offering, if success getSpecificOfferingSuccess(data) and if error getSpecificOfferingFail(error)
    Offering.prototype.getOfferingsDetails = function () {
        var _this = this;
        this.appService.getSpecificOffering(this.offeringId).subscribe(function (data) { return _this.getOfferingsDetailsSuccess(data); }, function (error) { return _this.getOfferingsDetailsFail(error); });
    };
    //if get specific offering success
    Offering.prototype.getOfferingsDetailsSuccess = function (fetchedOfferingData) {
        this.offeringData = fetchedOfferingData.success.data;
        var date1 = this.offeringData.startDate;
        var date2 = this.offeringData.endDate;
        var diffInMs = Date.parse(date2) - Date.parse(date1);
        var diffInYears = Math.floor(diffInMs / 1000 / 60 / 60 / 24 / 365);
        this.offeringData.term = diffInYears;
    };
    //if get specific offering fail
    Offering.prototype.getOfferingsDetailsFail = function (err) {
        if (err.error && err.error.message) {
            this.toastr.error(err.error.message);
        }
        else if (typeof (err.error) !== 'undefined') {
            this.toastr.error('Server error');
        }
    };
    // Function to make selected tab active and other's inactive.
    Offering.prototype.changeTab = function (id) {
        if (id === "updates") {
            this.overviewPage = false;
            this.updatesPage = true;
            this.questionsPage = false;
        }
        else if (id === "questions") {
            this.overviewPage = false;
            this.updatesPage = false;
            this.questionsPage = true;
        }
        else {
            this.overviewPage = true;
            this.updatesPage = false;
            this.questionsPage = false;
        }
    };
    return Offering;
}());
Offering = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'offering',
        styles: [__webpack_require__("../../../../../src/app/pages/offering/offering.scss")],
        template: __webpack_require__("../../../../../src/app/pages/offering/offering.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_authentication__["a" /* AuthenticationHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_authentication__["a" /* AuthenticationHelper */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__appServices_application__["a" /* ApplicationAdminServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__appServices_application__["a" /* ApplicationAdminServices */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _e || Object])
], Offering);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=offering.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/offering/offering.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"browseOfferingTabs\">\n    <div class=\"panel panel-primary\">\n        <div class=\"panel-body\">\n            <div class=\"wizard\">\n                <div class=\"offeringTab\" [ngClass]=\"{'currentTab' : overviewPage}\" id=\"overview\"\n                     (click)=\"changeTab('overview')\"><a><span\n                        class=\"tabText\">Overview</span></a>\n                </div>\n\n                <div class=\"offeringTab\" [ngClass]=\"{'currentTab' : updatesPage}\" id=\"updates\"\n                     (click)=\"changeTab('updates')\"><a><span\n                        class=\"updates\">Updates</span></a></div>\n\n                <div class=\"offeringTab disableTab\" [ngClass]=\"{'currentTab' : questionsPage}\"\n                     id=\"questions\"\n                ><a><span class=\"tabText\">Q&A</span></a>\n                </div>\n                <!--(click)=\"changeTab('questions')\"-->\n\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"offeringContainer\">\n    <div class=\"specificOfferingContent\">\n        <div class=\"col-md-12  carouselOuter divAlignLeft\">\n            <div class=\"col-md-8 carouselContainer\"  *ngIf=\"overviewPage\">\n                <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n            </div>\n\n            <!--Updates page-->\n            <div class=\"browseOfferingContent\">\n                <div class=\"col-md-8 updateViewContent\" *ngIf=\"updatesPage\" >\n                    <div class=\"updateTitle\">\n                        <span class=\"titleBody\">Updates</span>\n                    </div>\n                    <div class=\"updateContent\">\n                        <span>No updates for this offer yet.</span>\n                    </div>\n                </div>\n            </div>\n\n            <!--Q & A page-->\n            <div class=\"browseOfferingContent\">\n                <div class=\"col-md-8\" *ngIf=\"questionsPage\">\n                    <div class=\"col-md-12 col-xs-12\">\n                        <div class=\"messageContainer\">\n                            <p class=\"messageBody\">Q & A</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n            <!--side block-->\n            <div class=\"col-md-4 offeringContent\">\n                <div class=\"contentContainer\">\n                    <div class=\"contentUpperContainer\">\n                        <div class=\"socialIcons\">\n                            <div class=\"socialIconContainer\">\n                                <div class=\"social-icons\">\n                                    <ul>\n                                        <li class=\"iconListStyle\"><a target='_blank' href=\"https://twitter.com\"><i\n                                                class=\"fa fa-twitter\"></i></a></li>\n                                        <li class=\"iconListStyle\"><a target='_blank' href=\"https://facebook.com\"><i\n                                                class=\"fa fa-facebook\"></i></a></li>\n                                        <li class=\"iconListStyle\"><a target='_blank' href=\"https://instagram.com\"><i\n                                                class=\"fa fa-instagram\"></i></a></li>\n                                        <li class=\"iconListStyle\"><a target='_blank' href=\"https://pinterest.com\"><i\n                                                class=\"fa fa-pinterest\"></i></a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"offeringFund\">\n                            <span class=\"raisedFund totalGoal\">${{offeringData.offeringAmount? offeringData.offeringAmount : ''}}</span>\n                            <span class=\"raisedFund raisedTotal\">RAISED OF ${{offeringData.offeringAmount? offeringData.offeringAmount : ''}} GOAL</span>\n                        </div>\n\n                        <div class=\"offeringTerm\">\n                            <div class=\"offeringTermDiv\">\n                                <div class=\"offeringTermText\">\n                                    <span class=\"offeringLabelData\">DAYS</span>\n                                    <span class=\"offeringLabel\">28</span>\n                                </div>\n                            </div>\n\n                            <div class=\"offeringTermDiv\">\n                                <div class=\"offeringTermText\">\n                                    <span class=\"offeringLabelData\">HOUR</span>\n                                    <span class=\"offeringLabel\">28</span>\n                                </div>\n                            </div>\n\n                            <div class=\"offeringTermDiv\">\n                                <div class=\"offeringTermText\">\n                                    <span class=\"offeringLabelData\">MIN</span>\n                                    <span class=\"offeringLabel\">28</span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"progressBarContainerDiv\">\n                            <div class=\"progress progressBarDiv\">\n                                <div class=\"progress-bar\" [style.width.%]='78'\n                                     role=\"progressbar\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                                    <span>$80000</span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"offeringInfo\">\n                            <div class=\"offeringInfoDiv\">\n                                <div class=\"offeringInfoText\">\n                                    <span class=\"offeringLabelData\">{{offeringData.typeOfOffering? offeringData.typeOfOffering : ''}}</span>\n                                    <span class=\"offeringLabel\">OFFER TYPE</span>\n                                </div>\n                            </div>\n\n                            <div class=\"offeringInfoDiv\">\n                                <div class=\"offeringInfoText\">\n                                    <span class=\"offeringLabelData\">Equity</span>\n                                    <span class=\"offeringLabel\">ANN. RETURN</span>\n                                </div>\n                            </div>\n\n                            <div class=\"offeringInfoDiv\">\n                                <div class=\"offeringInfoText\">\n                                    <span class=\"offeringLabelData\">{{offeringData.term? offeringData.term : ''}}YRS</span>\n                                    <span class=\"offeringLabel\">TERM</span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"investButton\">\n                            <button class=\"btnStyle readyToInvestButton\">\n                                READY TO INVEST\n                            </button>\n                        </div>\n                    </div>\n\n                    <div class=\"contentLowerContainer\">\n                        <div class=\"questionContainer\">\n                            <div class=\"askQuestion\">\n                                ASK A QUESTION\n                            </div>\n                        </div>\n                        <div class=\"contact\">\n                            <span class=\"contactIcon\"><i class=\"fa fa-phone\"></i></span>\n                            <span class=\"contactNumber\">7073400765</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/offering/offering.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferingModule", function() { return OfferingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offering_component__ = __webpack_require__("../../../../../src/app/pages/offering/offering.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offering_routing__ = __webpack_require__("../../../../../src/app/pages/offering/offering.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_gallery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var OfferingModule = (function () {
    function OfferingModule() {
    }
    return OfferingModule;
}());
OfferingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_gallery__["NgxGalleryModule"],
            __WEBPACK_IMPORTED_MODULE_5__offering_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__offering_component__["a" /* Offering */]
        ],
        providers: []
    })
], OfferingModule);

//# sourceMappingURL=offering.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/offering/offering.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__offering_component__ = __webpack_require__("../../../../../src/app/pages/offering/offering.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__offering_component__["a" /* Offering */],
        children: []
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);
//# sourceMappingURL=offering.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/offering/offering.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #374767; }\n    .auth-block a:hover {\n      color: #2f3c58; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.paginationControl {\n  width: 100%;\n  float: left;\n  padding: 0 15px; }\n  .paginationControl #listItem .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n  .paginationControl #listItem .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .paginationControl #listItem .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .paginationControl #listItem .ngx-pagination a {\n    color: #606c71; }\n    .paginationControl #listItem .ngx-pagination a:hover {\n      background: transparent; }\n  .paginationControl #listItem .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n  .paginationControl #listItemNew .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n  .paginationControl #listItemNew .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .paginationControl #listItemNew .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .paginationControl #listItemNew .ngx-pagination a {\n    color: #606c71; }\n    .paginationControl #listItemNew .ngx-pagination a:hover {\n      background: transparent; }\n  .paginationControl #listItemNew .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n  .paginationControl #listItem ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n    .paginationControl #listItem ul li:hover {\n      background: transparent; }\n  .paginationControl #listItemNew ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n    .paginationControl #listItemNew ul li:hover {\n      background: transparent; }\n  .paginationControl .pageControl {\n    cursor: pointer;\n    padding: 0 10px; }\n    .paginationControl .pageControl ul {\n      padding: 10px 0;\n      margin: 0;\n      float: left; }\n\n.btn-danger {\n  margin-left: 3px; }\n\n.btn-primary {\n  margin-right: 3px; }\n\n.btn:hover {\n  -webkit-transform: none;\n          transform: none; }\n\n.help-block {\n  color: red; }\n\n.modal-header {\n  margin: 0 auto; }\n\n.fa-rupee:before, .fa-inr:before {\n  content: \"\\F156\";\n  margin-right: 14px !important; }\n\n.ion-edit:before {\n  content: \"\\F2BF\";\n  color: #000000; }\n\n.text-spacing {\n  margin-bottom: 1%; }\n\n.disableSubmit {\n  opacity: 0.8;\n  cursor: not-allowed; }\n  .disableSubmit:hover {\n    opacity: 0.8;\n    cursor: not-allowed !important; }\n\n.purchase_table .ion-edit:before {\n  content: \"\\F2BF\";\n  margin-right: 10px;\n  color: #000000; }\n\n.ion-trash-b:before {\n  content: \"\\F252\";\n  color: #ff0000; }\n\n.fa-envelope-o:before {\n  margin-right: 10px; }\n\n.form-control[disabled] {\n  color: grey;\n  border-color: lightgrey; }\n\n#vendorPurchaseTable table > thead > tr > th:first-child {\n  text-align: center; }\n\n.tagsSmart {\n  background: #F1F3F6;\n  color: #282828;\n  display: inline-block;\n  border: 1px solid lightgray;\n  padding: 0 10px 0 10px;\n  margin: 2px 2px 2px 2px;\n  border-radius: 90px; }\n\ntable th, table td {\n  border: 1px solid #ddd; }\n\ntable .ng2-smart-actions {\n  text-align: center;\n  color: #374767; }\n\ntable .ng2-smart-title a {\n  color: #374767; }\n\ntable .ng2-smart-title a:hover {\n  text-decoration: none; }\n\n.modal-body-data {\n  margin-bottom: 15px; }\n\ntable .ng2-smart-actions {\n  width: 100px !important; }\n\n.inputbox {\n  border-radius: 3px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0px;\n  padding-left: 2%;\n  border: 1px solid gainsboro;\n  outline: none;\n  box-shadow: none;\n  color: #555555; }\n\n.inputbox::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: gainsboro; }\n\n.inputbox::-moz-placeholder {\n  /* Firefox 19+ */\n  color: gainsboro; }\n\n.inputbox:-ms-input-placeholder {\n  /* IE 10+ */\n  color: gainsboro; }\n\n.inputbox:-moz-placeholder {\n  /* Firefox 18- */\n  color: gainsboro; }\n\n.inputbox:focus, .inputbox:active {\n  border-color: #A5C9BB;\n  outline: 0;\n  outline: thin dotted \\9;\n  /* -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6); */\n  box-shadow: inset 0 1px 1px rgba(0, 220, 0, 0.075), 0 0 8px rgba(0, 225, 0, 0.2); }\n\n.inputbutton {\n  height: 58px;\n  line-height: 2.8;\n  margin: 3% 0 -2% 0; }\n\n.btnStyle {\n  width: 100%;\n  height: 100%;\n  background-color: #195C94;\n  color: white;\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer; }\n  .btnStyle:focus {\n    outline: none;\n    box-shadow: 0px 0px 2px 2px #59a453; }\n\n.passwordErrorMessage {\n  float: left;\n  margin-top: -35px;\n  width: 100%;\n  margin-bottom: 10px; }\n\n.divAlignLeft {\n  float: left; }\n\n.divAlignRight {\n  float: right; }\n\n.Quotedatepicker .mydp .currmonth:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .selector {\n  z-index: 1;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selection {\n  height: 33px !important;\n  color: #757575;\n  font-size: 15px !important;\n  position: relative;\n  text-align: left;\n  padding-left: 8px;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selbtngroup {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclear {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnclear:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpicker {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclearenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .mydp .btnpicker {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnpicker:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpickerenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .help-block {\n  color: red; }\n\nrl-tag-input-item {\n  margin-bottom: 3px; }\n\nselect[multiple]:focus option:checked {\n  background: #3b5998 linear-gradient(0deg, #3b5998 0%, #3b5998 100%); }\n\nrl-tag-input input {\n  font-family: 'Conv_Avenir' !important;\n  font-size: 14px !important; }\n\nrl-tag-input input::-webkit-input-placeholder {\n  color: grey; }\n\nrl-tag-input-item {\n  font-family: 'Conv_Avenir' !important;\n  font-size: 14px !important; }\n\n.required:after {\n  content: \"*\";\n  color: red; }\n\n.auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #374767; }\n    .auth-block a:hover {\n      color: #2f3c58; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.browseOfferingTabs {\n  padding-top: 110px; }\n  .browseOfferingTabs .panel .panel-body .wizard {\n    min-width: 95%;\n    float: left;\n    background: #fff;\n    margin: 0 2.5%;\n    border: 1px solid #E0E0E0; }\n    .browseOfferingTabs .panel .panel-body .wizard .offeringTab {\n      width: 33.33%;\n      float: left;\n      text-align: center;\n      border-right: 1px solid #E0E0E0;\n      height: 50px;\n      line-height: 50px;\n      cursor: pointer;\n      font-size: 12px; }\n      .browseOfferingTabs .panel .panel-body .wizard .offeringTab:last-child {\n        border-right: none; }\n      .browseOfferingTabs .panel .panel-body .wizard .offeringTab a {\n        text-transform: uppercase; }\n        .browseOfferingTabs .panel .panel-body .wizard .offeringTab a .profileIcon {\n          margin-right: 10px; }\n  .browseOfferingTabs .panel .panel-body .currentTab {\n    font-size: 14px !important;\n    border-bottom: 3px solid #195C94;\n    color: #195C94; }\n  .browseOfferingTabs .panel .panel-body .disableTab {\n    cursor: not-allowed !important; }\n\n.offeringContainer {\n  margin: 115px 2.5% 50px 2.5%;\n  background: white;\n  overflow-y: auto;\n  min-width: 95%;\n  border-radius: 3px;\n  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1); }\n  .offeringContainer .specificOfferingContent {\n    display: block; }\n    .offeringContainer .specificOfferingContent .carouselOuter {\n      padding: 15px; }\n      .offeringContainer .specificOfferingContent .carouselOuter .carouselContainer {\n        border: 1px solid lightgrey;\n        padding: 10px;\n        float: left; }\n      .offeringContainer .specificOfferingContent .carouselOuter .offeringContent {\n        padding: 0;\n        float: left; }\n        .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer {\n          width: 95%;\n          margin-left: 5%;\n          border: 1px solid #E0E0E0;\n          text-align: center;\n          float: left; }\n          .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .socialIcons {\n            border-bottom: 1px solid #E0E0E0;\n            float: left;\n            width: 100%; }\n            .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .socialIcons .socialIconContainer {\n              float: left;\n              width: 100%;\n              padding: 3%;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -ms-flex-pack: distribute;\n                  justify-content: space-around;\n              -webkit-box-flex: 1;\n                  -ms-flex: auto;\n                      flex: auto; }\n              .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .socialIcons .socialIconContainer .social-icons {\n                text-align: center;\n                float: left;\n                font-family: \"Open Sans\";\n                font-weight: 300;\n                font-size: 1.5em;\n                color: #448aaf; }\n                .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .socialIcons .socialIconContainer .social-icons h1 {\n                  margin: 40px 0; }\n                .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .socialIcons .socialIconContainer .social-icons ul {\n                  float: left;\n                  list-style: none;\n                  margin: 0;\n                  padding: 0; }\n                  .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .socialIcons .socialIconContainer .social-icons ul .iconListStyle {\n                    display: inline-block;\n                    float: left; }\n                  .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .socialIcons .socialIconContainer .social-icons ul li {\n                    vertical-align: middle; }\n                    .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .socialIcons .socialIconContainer .social-icons ul li a {\n                      display: block;\n                      font-size: 1.4em;\n                      margin: 0 5px;\n                      text-decoration: none; }\n                      .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .socialIcons .socialIconContainer .social-icons ul li a i {\n                        color: #448aaf;\n                        transition: all 0.2s ease-in; }\n                      .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .socialIcons .socialIconContainer .social-icons ul li a:hover i {\n                        color: #275066; }\n                      .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .socialIcons .socialIconContainer .social-icons ul li a:focus i {\n                        transition: none;\n                        color: #0b161c; }\n          .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .offeringFund {\n            padding: 3%;\n            border-bottom: 1px solid #E0E0E0;\n            float: left;\n            width: 100%; }\n            .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .offeringFund .raisedFund {\n              display: block;\n              line-height: 1.6em; }\n            .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .offeringFund .totalGoal {\n              font-size: 17px;\n              font-weight: bold;\n              color: #195C94; }\n            .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .offeringFund .raisedTotal {\n              font-size: 11px;\n              letter-spacing: 0.5px; }\n          .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .offeringTerm {\n            padding: 3%;\n            border-bottom: 1px solid #E0E0E0;\n            float: left;\n            width: 100%; }\n            .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .offeringTerm .offeringTermDiv {\n              display: inline-block;\n              width: 30.33%; }\n          .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .progressBarContainerDiv {\n            padding: 3%;\n            border-bottom: 1px solid #E0E0E0;\n            float: left;\n            width: 100%; }\n            .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .progressBarContainerDiv .progressBarDiv {\n              padding: 0;\n              border-radius: 10px;\n              background-color: #f1f3f6; }\n              .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .progressBarContainerDiv .progressBarDiv div.progress-bar {\n                background-color: #59a453;\n                color: #ffffff;\n                font-weight: 700; }\n          .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .offeringInfo {\n            padding: 0 2%;\n            width: 100%;\n            float: left;\n            border-bottom: 1px solid #E0E0E0; }\n            .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .offeringInfo .offeringInfoDiv {\n              display: inline-block;\n              float: left;\n              width: 33.33%;\n              border-right: 1px solid #E0E0E0; }\n              .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .offeringInfo .offeringInfoDiv:last-child {\n                border-right: none; }\n              .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .offeringInfo .offeringInfoDiv .offeringInfoText {\n                padding: 5%; }\n                .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .offeringInfo .offeringInfoDiv .offeringInfoText .offeringLabelData {\n                  display: block;\n                  font-size: 13px;\n                  line-height: 1.6em;\n                  color: #000;\n                  text-transform: capitalize; }\n                .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .offeringInfo .offeringInfoDiv .offeringInfoText .offeringLabel {\n                  display: block;\n                  line-height: 1.6em;\n                  color: #374767;\n                  font-size: 11px;\n                  font-weight: 600;\n                  letter-spacing: 0.08px; }\n          .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .investButton {\n            padding: 5%;\n            float: left;\n            width: 100%; }\n            .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .investButton .readyToInvestButton {\n              height: 45px; }\n        .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentLowerContainer {\n          margin-top: 15px;\n          float: left;\n          margin-left: 5%;\n          text-align: center;\n          width: 95%;\n          border: 1px solid #E0E0E0; }\n          .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentLowerContainer .questionContainer {\n            padding: 5%; }\n            .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentLowerContainer .questionContainer .askQuestion {\n              padding: 5%;\n              border: 1px solid #195C94;\n              color: #374767;\n              letter-spacing: 0.5px;\n              font-weight: 700; }\n          .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentLowerContainer .contact {\n            padding: 3%;\n            border-top: 1px solid #E0E0E0; }\n            .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentLowerContainer .contact .contactIcon {\n              margin-left: 10px;\n              font-size: 20px; }\n            .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentLowerContainer .contact .contactNumber {\n              font-size: 19px; }\n  .offeringContainer .browseOfferingContent .updateViewContent {\n    padding: 0;\n    float: left;\n    border: 1px solid #E0E0E0; }\n    .offeringContainer .browseOfferingContent .updateViewContent .updateTitle {\n      padding: 20px;\n      background-color: #f1f3f6; }\n      .offeringContainer .browseOfferingContent .updateViewContent .updateTitle .titleBody {\n        font-size: 17px;\n        font-weight: 600; }\n    .offeringContainer .browseOfferingContent .updateViewContent .updateContent {\n      padding: 20px; }\n\n:host /deep/ .ngx-gallery-image-wrapper {\n  z-index: 0; }\n\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer {\n    width: 100%; }\n    .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer {\n      width: 100%;\n      margin-left: 0;\n      margin-top: 20px; }\n      .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .offeringInfo .offeringInfoDiv {\n        width: 30.33%; }\n        .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentUpperContainer .offeringInfo .offeringInfoDiv .offeringInfoText {\n          padding: 3%; }\n    .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentLowerContainer {\n      width: 100%;\n      margin-left: 0;\n      margin-top: 20px; }\n      .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentLowerContainer .questionContainer {\n        padding: 5%; }\n        .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentLowerContainer .questionContainer .askQuestion {\n          padding: 5%;\n          border: 1px solid #195C94;\n          color: #374767;\n          letter-spacing: 0.5px;\n          font-weight: 700; }\n      .offeringContainer .specificOfferingContent .carouselOuter .offeringContent .contentContainer .contentLowerContainer .contact {\n        padding: 5%;\n        border-top: 1px solid #E0E0E0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../ngx-gallery/bundles/ngx-gallery.umd.js":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__("../../../core/@angular/core.es5.js"), __webpack_require__("../../../common/@angular/common.es5.js"), __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js")) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
	(factory((global['ngx-gallery'] = {}),global.core,global.common,global.platformBrowser));
}(this, (function (exports,core,common,platformBrowser) { 'use strict';

var NgxGalleryArrowsComponent = /** @class */ (function () {
    function NgxGalleryArrowsComponent() {
        this.onPrevClick = new core.EventEmitter();
        this.onNextClick = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxGalleryArrowsComponent.prototype.handlePrevClick = function () {
        this.onPrevClick.emit();
    };
    /**
     * @return {?}
     */
    NgxGalleryArrowsComponent.prototype.handleNextClick = function () {
        this.onNextClick.emit();
    };
    NgxGalleryArrowsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-gallery-arrows',
                    template: "\n        <div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-left\">\n            <i class=\"ngx-gallery-icon ngx-gallery-arrow {{arrowPrevIcon}}\" aria-hidden=\"true\" (click)=\"handlePrevClick()\" [class.ngx-gallery-disabled]=\"prevDisabled\"></i>\n        </div>\n        <div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-right\">\n            <i class=\"ngx-gallery-icon ngx-gallery-arrow {{arrowNextIcon}}\" aria-hidden=\"true\" (click)=\"handleNextClick()\" [class.ngx-gallery-disabled]=\"nextDisabled\"></i>\n        </div>\n    ",
                    styles: [".ngx-gallery-arrow-wrapper { position: absolute; height: 100%; width: 1px; display: table; z-index: 2000; table-layout: fixed; } .ngx-gallery-arrow-left { left: 0px; } .ngx-gallery-arrow-right { right: 0px; } .ngx-gallery-arrow { top: 50%; transform: translateY(-50%); cursor: pointer; } .ngx-gallery-arrow.ngx-gallery-disabled { opacity: 0.6; cursor: default; } .ngx-gallery-arrow-left .ngx-gallery-arrow { left: 10px; } .ngx-gallery-arrow-right .ngx-gallery-arrow { right: 10px; } "]
                },] },
    ];
    /**
     * @nocollapse
     */
    NgxGalleryArrowsComponent.ctorParameters = function () { return []; };
    NgxGalleryArrowsComponent.propDecorators = {
        'prevDisabled': [{ type: core.Input },],
        'nextDisabled': [{ type: core.Input },],
        'arrowPrevIcon': [{ type: core.Input },],
        'arrowNextIcon': [{ type: core.Input },],
        'onPrevClick': [{ type: core.Output },],
        'onNextClick': [{ type: core.Output },],
    };
    return NgxGalleryArrowsComponent;
}());

var NgxGalleryHelperService = /** @class */ (function () {
    /**
     * @param {?} renderer
     */
    function NgxGalleryHelperService(renderer) {
        this.renderer = renderer;
        this.swipeHandlers = new Map();
    }
    /**
     * @param {?} status
     * @param {?} element
     * @param {?} id
     * @param {?} nextHandler
     * @param {?} prevHandler
     * @return {?}
     */
    NgxGalleryHelperService.prototype.manageSwipe = function (status, element, id, nextHandler, prevHandler) {
        var /** @type {?} */ handlers = this.getSwipeHandlers(id);
        // swipeleft and swiperight are available only if hammerjs is included
        try {
            if (status && !handlers) {
                this.swipeHandlers.set(id, [
                    this.renderer.listen(element.nativeElement, 'swipeleft', function () { return nextHandler(); }),
                    this.renderer.listen(element.nativeElement, 'swiperight', function () { return prevHandler(); })
                ]);
            }
            else if (!status && handlers) {
                handlers.map(function (handler) { return handler(); });
                this.removeSwipeHandlers(id);
            }
        }
        catch (e) { }
    };
    /**
     * @param {?} url
     * @return {?}
     */
    NgxGalleryHelperService.prototype.validateUrl = function (url) {
        return url.replace(new RegExp(' ', 'g'), '%20');
    };
    /**
     * @param {?} image
     * @return {?}
     */
    NgxGalleryHelperService.prototype.getBackgroundUrl = function (image) {
        return 'url(\'' + this.validateUrl(image) + '\')';
    };
    /**
     * @param {?} id
     * @return {?}
     */
    NgxGalleryHelperService.prototype.getSwipeHandlers = function (id) {
        return this.swipeHandlers.get(id);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    NgxGalleryHelperService.prototype.removeSwipeHandlers = function (id) {
        this.swipeHandlers.delete(id);
    };
    NgxGalleryHelperService.decorators = [
        { type: core.Injectable },
    ];
    /**
     * @nocollapse
     */
    NgxGalleryHelperService.ctorParameters = function () { return [
        { type: core.Renderer, },
    ]; };
    return NgxGalleryHelperService;
}());

var NgxGalleryImageComponent = /** @class */ (function () {
    /**
     * @param {?} sanitization
     * @param {?} elementRef
     * @param {?} helperService
     */
    function NgxGalleryImageComponent(sanitization, elementRef, helperService) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.onClick = new core.EventEmitter();
        this.onActiveChange = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.ngOnInit = function () {
        if (this.arrows && this.arrowsAutoHide) {
            this.arrows = false;
        }
        if (this.autoPlay) {
            this.startAutoPlay();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['images'] && changes['images'].currentValue
            && this.selectedIndex >= changes['images'].currentValue.length) {
            this.selectedIndex = 0;
        }
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'image', function () { return _this.showNext(); }, function () { return _this.showPrev(); });
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.onMouseEnter = function () {
        if (this.arrowsAutoHide && !this.arrows) {
            this.arrows = true;
        }
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.onMouseLeave = function () {
        if (this.arrowsAutoHide && this.arrows) {
            this.arrows = false;
        }
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.startAutoPlay = function () {
        var _this = this;
        this.stopAutoPlay();
        this.timer = setInterval(function () {
            if (!_this.showNext()) {
                _this.selectedIndex = -1;
                _this.showNext();
            }
        }, this.autoPlayInterval);
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.stopAutoPlay = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.handleClick = function (event, index) {
        if (this.clickable) {
            this.onClick.emit(index);
            event.stopPropagation();
            event.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.showNext = function () {
        if (this.canShowNext()) {
            this.selectedIndex++;
            if (this.selectedIndex === this.images.length) {
                this.selectedIndex = 0;
            }
            this.onActiveChange.emit(this.selectedIndex);
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.showPrev = function () {
        if (this.canShowPrev()) {
            this.selectedIndex--;
            if (this.selectedIndex < 0) {
                this.selectedIndex = this.images.length - 1;
            }
            this.onActiveChange.emit(this.selectedIndex);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.canShowNext = function () {
        if (this.images) {
            return this.infinityMove || this.selectedIndex < this.images.length - 1
                ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.canShowPrev = function () {
        if (this.images) {
            return this.infinityMove || this.selectedIndex > 0 ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} image
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.getSafeUrl = function (image) {
        return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
    };
    NgxGalleryImageComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-gallery-image',
                    template: "\n        <div class=\"ngx-gallery-image-wrapper ngx-gallery-animation-{{animation}} ngx-gallery-image-size-{{size}}\">\n            <div class=\"ngx-gallery-image\" *ngFor=\"let image of images; let i = index\" [ngClass]=\"{ 'ngx-gallery-active': selectedIndex == i, 'ngx-gallery-inactive-left': selectedIndex > i, 'ngx-gallery-inactive-right': selectedIndex < i, 'ngx-gallery-clickable': clickable }\" [style.background-image]=\"getSafeUrl(image)\" (click)=\"handleClick($event, i)\"></div>\n        </div>\n        <ngx-gallery-arrows class=\"ngx-gallery-image-size-{{size}}\" *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n    ",
                    styles: [":host { width: 100%; display: inline-block; position: relative; } .ngx-gallery-image-wrapper { width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; overflow: hidden; } .ngx-gallery-image { background-position: center; background-repeat: no-repeat; height: 100%; width: 100%; position: absolute; top: 0px; } .ngx-gallery-image.ngx-gallery-active { z-index: 1000; } .ngx-gallery-image-size-cover .ngx-gallery-image { background-size: cover; } .ngx-gallery-image-size-contain .ngx-gallery-image { background-size: contain; } .ngx-gallery-animation-fade .ngx-gallery-image { left: 0px; opacity: 0; transition: 0.5s ease-in-out; } .ngx-gallery-animation-fade .ngx-gallery-image.ngx-gallery-active { opacity: 1; } .ngx-gallery-animation-slide .ngx-gallery-image { transition: 0.5s ease-in-out; } .ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-active { left: 0px; } .ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-left { left: -100%; } .ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-right { left: 100%; } .ngx-gallery-animation-rotate .ngx-gallery-image { transition: 1s ease; transform: scale(3.5, 3.5) rotate(90deg); left: 0px; opacity: 0; } .ngx-gallery-animation-rotate .ngx-gallery-image.ngx-gallery-active { transform: scale(1, 1) rotate(0deg); opacity: 1; } .ngx-gallery-animation-zoom .ngx-gallery-image { transition: 1s ease; transform: scale(2.5, 2.5); left: 0px; opacity: 0; } .ngx-gallery-animation-zoom .ngx-gallery-image.ngx-gallery-active { transform: scale(1, 1); opacity: 1; } "]
                },] },
    ];
    /**
     * @nocollapse
     */
    NgxGalleryImageComponent.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer, },
        { type: core.ElementRef, },
        { type: NgxGalleryHelperService, },
    ]; };
    NgxGalleryImageComponent.propDecorators = {
        'images': [{ type: core.Input },],
        'clickable': [{ type: core.Input },],
        'selectedIndex': [{ type: core.Input },],
        'arrows': [{ type: core.Input },],
        'arrowsAutoHide': [{ type: core.Input },],
        'swipe': [{ type: core.Input },],
        'animation': [{ type: core.Input },],
        'size': [{ type: core.Input },],
        'arrowPrevIcon': [{ type: core.Input },],
        'arrowNextIcon': [{ type: core.Input },],
        'autoPlay': [{ type: core.Input },],
        'autoPlayInterval': [{ type: core.Input },],
        'autoPlayPauseOnHover': [{ type: core.Input },],
        'infinityMove': [{ type: core.Input },],
        'onClick': [{ type: core.Output },],
        'onActiveChange': [{ type: core.Output },],
        'onMouseEnter': [{ type: core.HostListener, args: ['mouseenter',] },],
        'onMouseLeave': [{ type: core.HostListener, args: ['mouseleave',] },],
    };
    return NgxGalleryImageComponent;
}());

var NgxGalleryOrder = /** @class */ (function () {
    function NgxGalleryOrder() {
    }
    NgxGalleryOrder.Column = 1;
    NgxGalleryOrder.Row = 2;
    return NgxGalleryOrder;
}());

var NgxGalleryThumbnailsComponent = /** @class */ (function () {
    /**
     * @param {?} sanitization
     * @param {?} elementRef
     * @param {?} helperService
     */
    function NgxGalleryThumbnailsComponent(sanitization, elementRef, helperService) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.onActiveChange = new core.EventEmitter();
        this.index = 0;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['images'] && changes['images'].currentValue
            && this.selectedIndex >= changes['images'].currentValue.length) {
            this.selectedIndex = 0;
            this.index = 0;
        }
        if (changes['selectedIndex']) {
            this.validateIndex();
        }
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'thumbnails', function () { return _this.moveRight(); }, function () { return _this.moveLeft(); });
        }
        if (this.images) {
            this.remainingCountValue = this.images.length - this.columns;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.onMouseEnter = function () {
        this.mouseenter = true;
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.onMouseLeave = function () {
        this.mouseenter = false;
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.onResize = function () {
        this.setDefaultPosition();
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getImages = function () {
        return this.images && this.remainingCount ? this.images.slice(0, this.columns) : this.images;
    };
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.handleClick = function (event, index) {
        if (!this.hasLinks()) {
            this.selectedIndex = index;
            this.onActiveChange.emit(index);
            event.stopPropagation();
            event.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.hasLinks = function () {
        if (this.links && this.links.length)
            return true;
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.moveRight = function () {
        if (this.canMoveRight()) {
            this.index += this.moveSize;
            var /** @type {?} */ maxIndex = this.getMaxIndex() - this.columns;
            if (this.index > maxIndex) {
                this.index = maxIndex;
            }
            this.setThumbnailsPosition();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.moveLeft = function () {
        if (this.canMoveLeft()) {
            this.index -= this.moveSize;
            if (this.index < 0) {
                this.index = 0;
            }
            this.setThumbnailsPosition();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.canMoveRight = function () {
        return this.index + this.columns < this.getMaxIndex() ? true : false;
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.canMoveLeft = function () {
        return this.index !== 0 ? true : false;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailLeft = function (index) {
        var /** @type {?} */ calculatedIndex;
        if (this.order === NgxGalleryOrder.Column) {
            calculatedIndex = Math.floor(index / this.rows);
        }
        else {
            calculatedIndex = index % Math.ceil(this.images.length / this.rows);
        }
        return this.getThumbnailPosition(calculatedIndex, this.columns);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailTop = function (index) {
        var /** @type {?} */ calculatedIndex;
        if (this.order === NgxGalleryOrder.Column) {
            calculatedIndex = index % this.rows;
        }
        else {
            calculatedIndex = Math.floor(index / Math.ceil(this.images.length / this.rows));
        }
        return this.getThumbnailPosition(calculatedIndex, this.rows);
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailWidth = function () {
        return this.getThumbnailDimension(this.columns);
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailHeight = function () {
        return this.getThumbnailDimension(this.rows);
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.setThumbnailsPosition = function () {
        this.thumbnailsLeft = 'calc(-' + ((100 / this.columns) * this.index)
            + '% - ' + ((this.margin - (((this.columns - 1)
            * this.margin) / this.columns)) * this.index) + 'px)';
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.setDefaultPosition = function () {
        this.thumbnailsLeft = '0px';
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.canShowArrows = function () {
        if (this.remainingCount) {
            return false;
        }
        else if (this.arrows && this.images && this.images.length > this.getVisibleCount()
            && (!this.arrowsAutoHide || this.mouseenter)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.validateIndex = function () {
        var /** @type {?} */ newIndex;
        if (this.order === NgxGalleryOrder.Column) {
            newIndex = Math.floor(this.selectedIndex / this.rows);
        }
        else {
            newIndex = this.selectedIndex % Math.ceil(this.images.length / this.rows);
        }
        if (this.remainingCount) {
            newIndex = 0;
        }
        if (newIndex < this.index || newIndex >= this.index + this.columns) {
            var /** @type {?} */ maxIndex = this.getMaxIndex() - this.columns;
            this.index = newIndex > maxIndex ? maxIndex : newIndex;
            this.setThumbnailsPosition();
        }
    };
    /**
     * @param {?} image
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getSafeUrl = function (image) {
        return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
    };
    /**
     * @param {?} index
     * @param {?} count
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailPosition = function (index, count) {
        return this.getSafeStyle('calc(' + ((100 / count) * index) + '% + '
            + ((this.margin - (((count - 1) * this.margin) / count)) * index) + 'px)');
    };
    /**
     * @param {?} count
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailDimension = function (count) {
        if (this.margin !== 0) {
            return this.getSafeStyle('calc(' + (100 / count) + '% - '
                + (((count - 1) * this.margin) / count) + 'px)');
        }
        else {
            return this.getSafeStyle('calc(' + (100 / count) + '% + 1px)');
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getMaxIndex = function () {
        return Math.ceil(this.images.length / this.rows);
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getVisibleCount = function () {
        return this.columns * this.rows;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getSafeStyle = function (value) {
        return this.sanitization.bypassSecurityTrustStyle(value);
    };
    NgxGalleryThumbnailsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-gallery-thumbnails',
                    template: "\n    <div class=\"ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-{{size}}\">\n        <div class=\"ngx-gallery-thumbnails\" [style.left]=\"thumbnailsLeft\">\n            <a [href]=\"hasLinks() ? links[i] : '#'\" [target]=\"linkTarget\" class=\"ngx-gallery-thumbnail\" *ngFor=\"let image of getImages(); let i = index;\" [style.background-image]=\"getSafeUrl(image)\" (click)=\"handleClick($event, i)\" [style.width]=\"getThumbnailWidth()\" [style.height]=\"getThumbnailHeight()\" [style.left]=\"getThumbnailLeft(i)\" [style.top]=\"getThumbnailTop(i)\" [ngClass]=\"{ 'ngx-gallery-active': i == selectedIndex, 'ngx-gallery-clickable': clickable }\">\n                <div class=\"ngx-gallery-remaining-count-overlay\" *ngIf=\"remainingCount && remainingCountValue && (i == columns - 1)\">\n                    <span class=\"ngx-gallery-remaining-count\">+{{remainingCountValue}}</span>\n                </div>\n            </a>\n        </div>\n    </div>\n    <ngx-gallery-arrows *ngIf=\"canShowArrows()\" (onPrevClick)=\"moveLeft()\" (onNextClick)=\"moveRight()\" [prevDisabled]=\"!canMoveLeft()\" [nextDisabled]=\"!canMoveRight()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n    ",
                    styles: [":host { width: 100%; display: inline-block; position: relative; } .ngx-gallery-thumbnails-wrapper { width: 100%; height: 100%; position: absolute; overflow: hidden; } .ngx-gallery-thumbnails { height: 100%; width: 100%; position: absolute; left: 0px; transition: left 0.5s ease-in-out; } .ngx-gallery-thumbnails .ngx-gallery-thumbnail { position: absolute; height: 100%; background-position: center; background-repeat: no-repeat; text-decoration: none; } .ngx-gallery-thumbnail-size-cover .ngx-gallery-thumbnails .ngx-gallery-thumbnail { background-size: cover; } .ngx-gallery-thumbnail-size-contain .ngx-gallery-thumbnails .ngx-gallery-thumbnail { background-size: contain; } .ngx-gallery-remaining-count-overlay { width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; background-color: rgba(0, 0, 0, 0.4); } .ngx-gallery-remaining-count { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 30px; } "]
                },] },
    ];
    /**
     * @nocollapse
     */
    NgxGalleryThumbnailsComponent.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer, },
        { type: core.ElementRef, },
        { type: NgxGalleryHelperService, },
    ]; };
    NgxGalleryThumbnailsComponent.propDecorators = {
        'images': [{ type: core.Input },],
        'links': [{ type: core.Input },],
        'linkTarget': [{ type: core.Input },],
        'columns': [{ type: core.Input },],
        'rows': [{ type: core.Input },],
        'arrows': [{ type: core.Input },],
        'arrowsAutoHide': [{ type: core.Input },],
        'margin': [{ type: core.Input },],
        'selectedIndex': [{ type: core.Input },],
        'clickable': [{ type: core.Input },],
        'swipe': [{ type: core.Input },],
        'size': [{ type: core.Input },],
        'arrowPrevIcon': [{ type: core.Input },],
        'arrowNextIcon': [{ type: core.Input },],
        'moveSize': [{ type: core.Input },],
        'order': [{ type: core.Input },],
        'remainingCount': [{ type: core.Input },],
        'onActiveChange': [{ type: core.Output },],
        'onMouseEnter': [{ type: core.HostListener, args: ['mouseenter',] },],
        'onMouseLeave': [{ type: core.HostListener, args: ['mouseleave',] },],
        'onResize': [{ type: core.HostListener, args: ['window:resize',] },],
    };
    return NgxGalleryThumbnailsComponent;
}());

var NgxGalleryPreviewComponent = /** @class */ (function () {
    /**
     * @param {?} sanitization
     * @param {?} elementRef
     * @param {?} helperService
     */
    function NgxGalleryPreviewComponent(sanitization, elementRef, helperService) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.showSpinner = false;
        this.positionLeft = 0;
        this.positionTop = 0;
        this.zoomValue = 1;
        this.loading = false;
        this.onOpen = new core.EventEmitter();
        this.onClose = new core.EventEmitter();
        this.index = 0;
        this.isOpen = false;
        this.initialX = 0;
        this.initialY = 0;
        this.initialLeft = 0;
        this.initialTop = 0;
        this.isMove = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'preview', function () { return _this.showNext(); }, function () { return _this.showPrev(); });
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.onKeyDown = function (e) {
        if (this.isOpen) {
            if (this.keyboardNavigation) {
                if (this.isKeyboardPrev(e)) {
                    this.showPrev();
                }
                else if (this.isKeyboardNext(e)) {
                    this.showNext();
                }
            }
            if (this.closeOnEsc && this.isKeyboardEsc(e)) {
                this.close();
            }
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.open = function (index) {
        this.onOpen.emit();
        this.index = index;
        this.isOpen = true;
        this.show(true);
        if (this.forceFullscreen) {
            this.manageFullscreen();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.close = function () {
        this.isOpen = false;
        this.closeFullscreen();
        this.onClose.emit();
        this.stopAutoPlay();
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.imageMouseEnter = function () {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.imageMouseLeave = function () {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.startAutoPlay = function () {
        var _this = this;
        if (this.autoPlay) {
            this.stopAutoPlay();
            this.timer = setTimeout(function () {
                if (!_this.showNext()) {
                    _this.index = -1;
                    _this.showNext();
                }
            }, this.autoPlayInterval);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.stopAutoPlay = function () {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.showNext = function () {
        if (this.canShowNext()) {
            this.index++;
            if (this.index === this.images.length) {
                this.index = 0;
            }
            this.show();
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.showPrev = function () {
        if (this.canShowPrev()) {
            this.index--;
            if (this.index < 0) {
                this.index = this.images.length - 1;
            }
            this.show();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.canShowNext = function () {
        if (this.loading) {
            return false;
        }
        else if (this.images) {
            return this.infinityMove || this.index < this.images.length - 1 ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.canShowPrev = function () {
        if (this.loading) {
            return false;
        }
        else if (this.images) {
            return this.infinityMove || this.index > 0 ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.manageFullscreen = function () {
        if (this.fullscreen || this.forceFullscreen) {
            var /** @type {?} */ doc = (document);
            if (!doc.fullscreenElement && !doc.mozFullScreenElement
                && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                this.openFullscreen();
            }
            else {
                this.closeFullscreen();
            }
        }
    };
    /**
     * @param {?} image
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.getSafeUrl = function (image) {
        return image.substr(0, 10) === 'data:image' ?
            image : this.sanitization.bypassSecurityTrustUrl(image);
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.zoomIn = function () {
        if (this.canZoomIn()) {
            this.zoomValue += this.zoomStep;
            if (this.zoomValue > this.zoomMax) {
                this.zoomValue = this.zoomMax;
            }
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.zoomOut = function () {
        if (this.canZoomOut()) {
            this.zoomValue -= this.zoomStep;
            if (this.zoomValue < this.zoomMin) {
                this.zoomValue = this.zoomMin;
            }
            if (this.zoomValue <= 1) {
                this.resetPosition();
            }
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.canZoomIn = function () {
        return this.zoomValue < this.zoomMax ? true : false;
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.canZoomOut = function () {
        return this.zoomValue > this.zoomMin ? true : false;
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.canDragOnZoom = function () {
        return this.zoom && this.zoomValue > 1;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.mouseDownHandler = function (e) {
        if (this.canDragOnZoom()) {
            this.initialX = this.getClientX(e);
            this.initialY = this.getClientY(e);
            this.initialLeft = this.positionLeft;
            this.initialTop = this.positionTop;
            this.isMove = true;
            e.preventDefault();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.mouseUpHandler = function (e) {
        this.isMove = false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.mouseMoveHandler = function (e) {
        if (this.isMove) {
            this.positionLeft = this.initialLeft + (this.getClientX(e) - this.initialX);
            this.positionTop = this.initialTop + (this.getClientY(e) - this.initialY);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.getClientX = function (e) {
        return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.getClientY = function (e) {
        return e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.resetPosition = function () {
        if (this.zoom) {
            this.positionLeft = 0;
            this.positionTop = 0;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.isKeyboardNext = function (e) {
        return e.keyCode === 39 ? true : false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.isKeyboardPrev = function (e) {
        return e.keyCode === 37 ? true : false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.isKeyboardEsc = function (e) {
        return e.keyCode === 27 ? true : false;
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.openFullscreen = function () {
        var /** @type {?} */ element = (document.documentElement);
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
        else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.closeFullscreen = function () {
        var /** @type {?} */ doc = (document);
        if (doc.exitFullscreen) {
            doc.exitFullscreen();
        }
        else if (doc.msExitFullscreen) {
            doc.msExitFullscreen();
        }
        else if (doc.mozCancelFullScreen) {
            doc.mozCancelFullScreen();
        }
        else if (doc.webkitExitFullscreen) {
            doc.webkitExitFullscreen();
        }
    };
    /**
     * @param {?=} first
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.show = function (first) {
        var _this = this;
        if (first === void 0) { first = false; }
        this.loading = true;
        this.stopAutoPlay();
        if (first) {
            this._show();
        }
        else {
            setTimeout(function () { return _this._show(); }, 600);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype._show = function () {
        var _this = this;
        this.zoomValue = 1;
        this.resetPosition();
        this.src = this.getSafeUrl(/** @type {?} */ (this.images[this.index]));
        this.srcIndex = this.index;
        this.description = this.descriptions[this.index];
        setTimeout(function () {
            if (_this.isLoaded(_this.previewImage.nativeElement)) {
                _this.loading = false;
                _this.startAutoPlay();
            }
            else {
                setTimeout(function () {
                    if (_this.loading) {
                        _this.showSpinner = true;
                    }
                });
                _this.previewImage.nativeElement.onload = function () {
                    _this.loading = false;
                    _this.showSpinner = false;
                    _this.previewImage.nativeElement.onload = null;
                    _this.startAutoPlay();
                };
            }
        });
    };
    /**
     * @param {?} img
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.isLoaded = function (img) {
        if (!img.complete) {
            return false;
        }
        if (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0) {
            return false;
        }
        return true;
    };
    NgxGalleryPreviewComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-gallery-preview',
                    template: "\n        <ngx-gallery-arrows (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n        <div class=\"ngx-gallery-preview-top\">\n            <div class=\"ngx-gallery-preview-icons\">\n                <i class=\"ngx-gallery-icon {{zoomOutIcon}}\" aria-hidden=\"true\" (click)=\"zoomOut()\" *ngIf=\"zoom\" [class.ngx-gallery-icon-disabled]=\"!canZoomOut()\"></i>\n                <i class=\"ngx-gallery-icon {{zoomInIcon}}\" aria-hidden=\"true\" (click)=\"zoomIn()\" *ngIf=\"zoom\" [class.ngx-gallery-icon-disabled]=\"!canZoomIn()\"></i>\n                <i class=\"ngx-gallery-icon ngx-gallery-fullscreen {{fullscreenIcon}}\" aria-hidden=\"true\" *ngIf=\"fullscreen\" (click)=\"manageFullscreen()\"></i>\n                <i class=\"ngx-gallery-icon ngx-gallery-close {{closeIcon}}\" aria-hidden=\"true\" (click)=\"close()\"></i>\n            </div>\n        </div>\n        <div class=\"ngx-spinner-wrapper ngx-gallery-center\" [class.ngx-gallery-active]=\"showSpinner\">\n            <i class=\"ngx-gallery-icon ngx-gallery-spinner {{spinnerIcon}}\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"ngx-gallery-preview-wrapper\" (click)=\"closeOnClick && close()\" (mouseup)=\"mouseUpHandler($event)\" (mousemove)=\"mouseMoveHandler($event)\" (touchend)=\"mouseUpHandler($event)\" (touchmove)=\"mouseMoveHandler($event)\">\n            <div class=\"ngx-gallery-preview-img-wrapper\">\n                <img #previewImage class=\"ngx-gallery-preview-img ngx-gallery-center\" [src]=\"src ? src : '#'\" (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\" (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\" [class.ngx-gallery-active]=\"!loading\" [class.ngx-gallery-grab]=\"canDragOnZoom()\" [style.transform]=\"'scale(' + zoomValue + ')'\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\"/>\n            </div>\n            <div class=\"ngx-gallery-preview-text\" *ngIf=\"showDescription && description\">{{ description }}</div>\n        </div>\n    ",
                    styles: [":host(.ngx-gallery-active) { width: 100%; height: 100%; position: fixed; left: 0px; top: 0px; background: rgba(0, 0, 0, 0.7); z-index: 10000; display: inline-block; } :host(.ngx-gallery-active) /deep/ .ngx-gallery-icon.ngx-gallery-arrow { font-size: 50px; } :host { display: none; } .ngx-gallery-preview-img { opacity: 0; max-width: 90%; max-height: 90%; transition: opacity 0.5s linear; user-select: none; } .ngx-gallery-preview-img.ngx-gallery-active { opacity: 1; } .ngx-gallery-preview-img.ngx-gallery-grab { cursor: grab; cursor: -webkit-grab; } .ngx-gallery-icon.ngx-gallery-spinner { font-size: 50px; left: 0px; display: inline-block; } .ngx-gallery-preview-top { position: absolute; width: 100%; user-select: none; } .ngx-gallery-preview-icons { float: right; } .ngx-gallery-preview-icons .ngx-gallery-icon { position: relative; margin-right: 10px; margin-top: 10px; font-size: 25px; cursor: pointer; } .ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled { cursor: default; opacity: 0.4; } .ngx-spinner-wrapper { width: 50px; height: 50px; display: none; } .ngx-spinner-wrapper.ngx-gallery-active { display: inline-block; } .ngx-gallery-center { position: absolute; left: 0; right: 0; bottom: 0; margin: auto; top: 0; } .ngx-gallery-preview-text { width: 100%; background: rgba(0, 0, 0, 0.7); padding: 10px; text-align: center; color: white; font-size: 16px; flex: 0 1 auto; z-index: 10; } .ngx-gallery-preview-wrapper { width: 100%; height: 100%; display: flex; flex-flow: column; } .ngx-gallery-preview-img-wrapper { flex: 1 1 auto; position: relative; } "]
                },] },
    ];
    /**
     * @nocollapse
     */
    NgxGalleryPreviewComponent.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer, },
        { type: core.ElementRef, },
        { type: NgxGalleryHelperService, },
    ]; };
    NgxGalleryPreviewComponent.propDecorators = {
        'images': [{ type: core.Input },],
        'descriptions': [{ type: core.Input },],
        'showDescription': [{ type: core.Input },],
        'swipe': [{ type: core.Input },],
        'fullscreen': [{ type: core.Input },],
        'forceFullscreen': [{ type: core.Input },],
        'closeOnClick': [{ type: core.Input },],
        'closeOnEsc': [{ type: core.Input },],
        'keyboardNavigation': [{ type: core.Input },],
        'arrowPrevIcon': [{ type: core.Input },],
        'arrowNextIcon': [{ type: core.Input },],
        'closeIcon': [{ type: core.Input },],
        'fullscreenIcon': [{ type: core.Input },],
        'spinnerIcon': [{ type: core.Input },],
        'autoPlay': [{ type: core.Input },],
        'autoPlayInterval': [{ type: core.Input },],
        'autoPlayPauseOnHover': [{ type: core.Input },],
        'infinityMove': [{ type: core.Input },],
        'zoom': [{ type: core.Input },],
        'zoomStep': [{ type: core.Input },],
        'zoomMax': [{ type: core.Input },],
        'zoomMin': [{ type: core.Input },],
        'zoomInIcon': [{ type: core.Input },],
        'zoomOutIcon': [{ type: core.Input },],
        'onOpen': [{ type: core.Output },],
        'onClose': [{ type: core.Output },],
        'previewImage': [{ type: core.ViewChild, args: ['previewImage',] },],
        'onKeyDown': [{ type: core.HostListener, args: ['window:keydown', ['$event'],] },],
    };
    return NgxGalleryPreviewComponent;
}());

var NgxGalleryAnimation = /** @class */ (function () {
    function NgxGalleryAnimation() {
    }
    NgxGalleryAnimation.Fade = 'fade';
    NgxGalleryAnimation.Slide = 'slide';
    NgxGalleryAnimation.Rotate = 'rotate';
    NgxGalleryAnimation.Zoom = 'zoom';
    return NgxGalleryAnimation;
}());

var NgxGalleryImageSize = /** @class */ (function () {
    function NgxGalleryImageSize() {
    }
    NgxGalleryImageSize.Cover = 'cover';
    NgxGalleryImageSize.Contain = 'contain';
    return NgxGalleryImageSize;
}());

var NgxGalleryLayout = /** @class */ (function () {
    function NgxGalleryLayout() {
    }
    NgxGalleryLayout.ThumbnailsTop = 'thumbnails-top';
    NgxGalleryLayout.ThumbnailsBottom = 'thumbnails-bottom';
    return NgxGalleryLayout;
}());

var NgxGalleryOptions = /** @class */ (function () {
    /**
     * @param {?} obj
     */
    function NgxGalleryOptions(obj) {
        var preventDefaults = obj.breakpoint === undefined ? false : true;
        function use(source, defaultValue) {
            return obj && (source !== undefined || preventDefaults) ? source : defaultValue;
        }
        this.breakpoint = use(obj.breakpoint, undefined);
        this.width = use(obj.width, '500px');
        this.height = use(obj.height, '400px');
        this.fullWidth = use(obj.fullWidth, false);
        this.layout = use(obj.layout, NgxGalleryLayout.ThumbnailsBottom);
        this.startIndex = use(obj.startIndex, 0);
        this.linkTarget = use(obj.linkTarget, '_blank');
        this.image = use(obj.image, true);
        this.imagePercent = use(obj.imagePercent, 75);
        this.imageArrows = use(obj.imageArrows, true);
        this.imageArrowsAutoHide = use(obj.imageArrowsAutoHide, false);
        this.imageSwipe = use(obj.imageSwipe, false);
        this.imageAnimation = use(obj.imageAnimation, NgxGalleryAnimation.Fade);
        this.imageSize = use(obj.imageSize, NgxGalleryImageSize.Cover);
        this.imageAutoPlay = use(obj.imageAutoPlay, false);
        this.imageAutoPlayInterval = use(obj.imageAutoPlayInterval, 2000);
        this.imageAutoPlayPauseOnHover = use(obj.imageAutoPlayPauseOnHover, false);
        this.imageInfinityMove = use(obj.imageInfinityMove, false);
        this.thumbnails = use(obj.thumbnails, true);
        this.thumbnailsColumns = use(obj.thumbnailsColumns, 4);
        this.thumbnailsRows = use(obj.thumbnailsRows, 1);
        this.thumbnailsPercent = use(obj.thumbnailsPercent, 25);
        this.thumbnailsMargin = use(obj.thumbnailsMargin, 10);
        this.thumbnailsArrows = use(obj.thumbnailsArrows, true);
        this.thumbnailsArrowsAutoHide = use(obj.thumbnailsArrowsAutoHide, false);
        this.thumbnailsSwipe = use(obj.thumbnailsSwipe, false);
        this.thumbnailsMoveSize = use(obj.thumbnailsMoveSize, 1);
        this.thumbnailsOrder = use(obj.thumbnailsOrder, NgxGalleryOrder.Column);
        this.thumbnailsRemainingCount = use(obj.thumbnailsRemainingCount, false);
        this.thumbnailsAsLinks = use(obj.thumbnailsAsLinks, false);
        this.thumbnailMargin = use(obj.thumbnailMargin, 10);
        this.thumbnailSize = use(obj.thumbnailSize, NgxGalleryImageSize.Cover);
        this.preview = use(obj.preview, true);
        this.previewDescription = use(obj.previewDescription, true);
        this.previewSwipe = use(obj.previewSwipe, false);
        this.previewFullscreen = use(obj.previewFullscreen, false);
        this.previewForceFullscreen = use(obj.previewForceFullscreen, false);
        this.previewCloseOnClick = use(obj.previewCloseOnClick, false);
        this.previewCloseOnEsc = use(obj.previewCloseOnEsc, false);
        this.previewKeyboardNavigation = use(obj.previewKeyboardNavigation, false);
        this.previewAutoPlay = use(obj.previewAutoPlay, false);
        this.previewAutoPlayInterval = use(obj.previewAutoPlayInterval, 2000);
        this.previewAutoPlayPauseOnHover = use(obj.previewAutoPlayPauseOnHover, false);
        this.previewInfinityMove = use(obj.previewInfinityMove, false);
        this.previewZoom = use(obj.previewZoom, false);
        this.previewZoomStep = use(obj.previewZoomStep, 0.1);
        this.previewZoomMax = use(obj.previewZoomMax, 2);
        this.previewZoomMin = use(obj.previewZoomMin, 0.5);
        this.arrowPrevIcon = use(obj.arrowPrevIcon, 'fa fa-arrow-circle-left');
        this.arrowNextIcon = use(obj.arrowNextIcon, 'fa fa-arrow-circle-right');
        this.closeIcon = use(obj.closeIcon, 'fa fa-times-circle');
        this.fullscreenIcon = use(obj.fullscreenIcon, 'fa fa-arrows-alt');
        this.spinnerIcon = use(obj.spinnerIcon, 'fa fa-spinner fa-pulse fa-3x fa-fw');
        this.zoomInIcon = use(obj.zoomInIcon, 'fa fa-search-plus');
        this.zoomOutIcon = use(obj.zoomOutIcon, 'fa fa-search-minus');
    }
    return NgxGalleryOptions;
}());

var NgxGalleryComponent = /** @class */ (function () {
    /**
     * @param {?} myElement
     */
    function NgxGalleryComponent(myElement) {
        this.myElement = myElement;
        this.imagesReady = new core.EventEmitter();
        this.change = new core.EventEmitter();
        this.previewOpen = new core.EventEmitter();
        this.previewClose = new core.EventEmitter();
        this.oldImagesLength = 0;
        this.selectedIndex = 0;
        this.breakpoint = undefined;
        this.prevBreakpoint = undefined;
    }
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.ngOnInit = function () {
        this.options = this.options.map(function (opt) { return new NgxGalleryOptions(opt); });
        this.sortOptions();
        this.setBreakpoint();
        this.setOptions();
        this.checkFullWidth();
        if (this.currentOptions) {
            this.selectedIndex = /** @type {?} */ (this.currentOptions.startIndex);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.ngDoCheck = function () {
        if (this.images !== undefined && (this.images.length !== this.oldImagesLength)
            || (this.images !== this.oldImages)) {
            this.oldImagesLength = this.images.length;
            this.oldImages = this.images;
            this.setImages();
            if (this.images && this.images.length) {
                this.imagesReady.emit();
            }
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.ngAfterViewInit = function () {
        this.checkFullWidth();
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.onResize = function () {
        var _this = this;
        this.setBreakpoint();
        if (this.prevBreakpoint !== this.breakpoint) {
            this.setOptions();
        }
        if (this.currentOptions && this.currentOptions.fullWidth) {
            if (this.fullWidthTimeout) {
                clearTimeout(this.fullWidthTimeout);
            }
            this.fullWidthTimeout = setTimeout(function () {
                _this.checkFullWidth();
            }, 200);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.getImageHeight = function () {
        return (this.currentOptions && this.currentOptions.thumbnails) ?
            this.currentOptions.imagePercent + '%' : '100%';
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.getThumbnailsHeight = function () {
        if (this.currentOptions && this.currentOptions.image) {
            return 'calc(' + this.currentOptions.thumbnailsPercent + '% - '
                + this.currentOptions.thumbnailsMargin + 'px)';
        }
        else {
            return '100%';
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.getThumbnailsMarginTop = function () {
        if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsBottom) {
            return this.currentOptions.thumbnailsMargin + 'px';
        }
        else {
            return '0px';
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.getThumbnailsMarginBottom = function () {
        if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsTop) {
            return this.currentOptions.thumbnailsMargin + 'px';
        }
        else {
            return '0px';
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.openPreview = function (index) {
        this.previewEnabled = true;
        this.preview.open(index);
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.onPreviewOpen = function () {
        this.previewOpen.emit();
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.onPreviewClose = function () {
        this.previewEnabled = false;
        this.previewClose.emit();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.selectFromImage = function (index) {
        this.select(index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.selectFromThumbnails = function (index) {
        this.select(index);
        if (this.currentOptions && this.currentOptions.thumbnails && this.currentOptions.preview
            && (!this.currentOptions.image || this.currentOptions.thumbnailsRemainingCount)) {
            this.openPreview(this.selectedIndex);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.show = function (index) {
        this.select(index);
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.showNext = function () {
        this.image.showNext();
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.showPrev = function () {
        this.image.showPrev();
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.canShowNext = function () {
        if (this.images && this.currentOptions) {
            return (this.currentOptions.imageInfinityMove || this.selectedIndex < this.images.length - 1)
                ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.canShowPrev = function () {
        if (this.images && this.currentOptions) {
            return (this.currentOptions.imageInfinityMove || this.selectedIndex > 0) ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.select = function (index) {
        this.selectedIndex = index;
        this.change.emit({
            index: index,
            image: this.images[index]
        });
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.checkFullWidth = function () {
        if (this.currentOptions && this.currentOptions.fullWidth) {
            this.width = document.body.clientWidth + 'px';
            this.left = (-(document.body.clientWidth -
                this.myElement.nativeElement.parentNode.innerWidth) / 2) + 'px';
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.setImages = function () {
        this.smallImages = this.images.map(function (img) { /** @type {?} */ return (img.small); });
        this.mediumImages = this.images.map(function (img) { /** @type {?} */ return (img.medium); });
        this.bigImages = this.images.map(function (img) { /** @type {?} */ return (img.big); });
        this.descriptions = this.images.map(function (img) { /** @type {?} */ return (img.description); });
        this.links = this.images.map(function (img) { /** @type {?} */ return (img.url); });
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.setBreakpoint = function () {
        this.prevBreakpoint = this.breakpoint;
        var /** @type {?} */ breakpoints;
        if (typeof window !== 'undefined') {
            breakpoints = this.options.filter(function (opt) { return opt.breakpoint >= window.innerWidth; })
                .map(function (opt) { return opt.breakpoint; });
        }
        if (breakpoints && breakpoints.length) {
            this.breakpoint = breakpoints.pop();
        }
        else {
            this.breakpoint = undefined;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.sortOptions = function () {
        this.options = this.options.filter(function (a) { return a.breakpoint === undefined; }).concat(this.options
            .filter(function (a) { return a.breakpoint !== undefined; })
            .sort(function (a, b) { return b.breakpoint - a.breakpoint; }));
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.setOptions = function () {
        var _this = this;
        this.currentOptions = new NgxGalleryOptions({});
        this.options
            .filter(function (opt) { return opt.breakpoint === undefined || opt.breakpoint >= _this.breakpoint; })
            .map(function (opt) { return _this.combineOptions(_this.currentOptions, opt); });
        this.width = /** @type {?} */ (this.currentOptions.width);
        this.height = /** @type {?} */ (this.currentOptions.height);
    };
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    NgxGalleryComponent.prototype.combineOptions = function (first, second) {
        Object.keys(second).map(function (val) { return first[val] = second[val] !== undefined ? second[val] : first[val]; });
    };
    NgxGalleryComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-gallery',
                    template: "\n    <div class=\"ngx-gallery-layout {{currentOptions?.layout}}\">\n        <ngx-gallery-image *ngIf=\"currentOptions?.image\" [style.height]=\"getImageHeight()\" [images]=\"mediumImages\" [clickable]=\"currentOptions?.preview\" [selectedIndex]=\"selectedIndex\" [arrows]=\"currentOptions?.imageArrows\" [arrowsAutoHide]=\"currentOptions?.imageArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [swipe]=\"currentOptions?.imageSwipe\" [animation]=\"currentOptions?.imageAnimation\" [size]=\"currentOptions?.imageSize\" [autoPlay]=\"currentOptions?.imageAutoPlay\" [autoPlayInterval]=\"currentOptions?.imageAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.imageAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.imageInfinityMove\" (onClick)=\"openPreview($event)\" (onActiveChange)=\"selectFromImage($event)\"></ngx-gallery-image>\n\n        <ngx-gallery-thumbnails *ngIf=\"currentOptions?.thumbnails\" [style.marginTop]=\"getThumbnailsMarginTop()\" [style.marginBottom]=\"getThumbnailsMarginBottom()\" [style.height]=\"getThumbnailsHeight()\" [images]=\"smallImages\" [links]=\"currentOptions?.thumbnailsAsLinks ? links : []\" [linkTarget]=\"currentOptions?.linkTarget\" [selectedIndex]=\"selectedIndex\" [columns]=\"currentOptions?.thumbnailsColumns\" [rows]=\"currentOptions?.thumbnailsRows\" [margin]=\"currentOptions?.thumbnailMargin\" [arrows]=\"currentOptions?.thumbnailsArrows\" [arrowsAutoHide]=\"currentOptions?.thumbnailsArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [clickable]=\"currentOptions?.image || currentOptions?.preview\" [swipe]=\"currentOptions?.thumbnailsSwipe\" [size]=\"currentOptions?.thumbnailSize\" [moveSize]=\"currentOptions?.thumbnailsMoveSize\" [order]=\"currentOptions?.thumbnailsOrder\" [remainingCount]=\"currentOptions?.thumbnailsRemainingCount\" (onActiveChange)=\"selectFromThumbnails($event)\"></ngx-gallery-thumbnails>\n\n        <ngx-gallery-preview [images]=\"bigImages\" [descriptions]=\"descriptions\" [showDescription]=\"currentOptions?.previewDescription\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [closeIcon]=\"currentOptions?.closeIcon\" [fullscreenIcon]=\"currentOptions?.fullscreenIcon\" [spinnerIcon]=\"currentOptions?.spinnerIcon\" [swipe]=\"currentOptions?.previewSwipe\" [fullscreen]=\"currentOptions?.previewFullscreen\" [forceFullscreen]=\"currentOptions?.previewForceFullscreen\" [closeOnClick]=\"currentOptions?.previewCloseOnClick\" [closeOnEsc]=\"currentOptions?.previewCloseOnEsc\" [keyboardNavigation]=\"currentOptions?.previewKeyboardNavigation\" [autoPlay]=\"currentOptions?.previewAutoPlay\" [autoPlayInterval]=\"currentOptions?.previewAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.previewAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.previewInfinityMove\" [zoom]=\"currentOptions?.previewZoom\" [zoomStep]=\"currentOptions?.previewZoomStep\" [zoomMax]=\"currentOptions?.previewZoomMax\" [zoomMin]=\"currentOptions?.previewZoomMin\" [zoomInIcon]=\"currentOptions?.zoomInIcon\" [zoomOutIcon]=\"currentOptions?.zoomOutIcon\" (onClose)=\"onPreviewClose()\" (onOpen)=\"onPreviewOpen()\" [class.ngx-gallery-active]=\"previewEnabled\"></ngx-gallery-preview>\n    </div>\n    ",
                    styles: [":host { display: inline-block; } :host > * { float: left; } :host /deep/ * { box-sizing: border-box; } :host /deep/ .ngx-gallery-icon { color: white; font-size: 25px; position: absolute; z-index: 2000; } :host /deep/ .ngx-gallery-clickable { cursor: pointer; } :host .ngx-gallery-layout { width: 100%; height: 100%; display: flex; flex-direction: column; } :host .ngx-gallery-layout.thumbnails-top ngx-gallery-image { order: 2; } :host .ngx-gallery-layout.thumbnails-top ngx-gallery-thumbnails { order: 1; } :host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-image { order: 1; } :host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-thumbnails { order: 2; } "],
                    providers: [NgxGalleryHelperService]
                },] },
    ];
    /**
     * @nocollapse
     */
    NgxGalleryComponent.ctorParameters = function () { return [
        { type: core.ElementRef, },
    ]; };
    NgxGalleryComponent.propDecorators = {
        'options': [{ type: core.Input },],
        'images': [{ type: core.Input },],
        'imagesReady': [{ type: core.Output },],
        'change': [{ type: core.Output },],
        'previewOpen': [{ type: core.Output },],
        'previewClose': [{ type: core.Output },],
        'preview': [{ type: core.ViewChild, args: [NgxGalleryPreviewComponent,] },],
        'image': [{ type: core.ViewChild, args: [NgxGalleryImageComponent,] },],
        'width': [{ type: core.HostBinding, args: ['style.width',] },],
        'height': [{ type: core.HostBinding, args: ['style.height',] },],
        'left': [{ type: core.HostBinding, args: ['style.left',] },],
        'onResize': [{ type: core.HostListener, args: ['window:resize',] },],
    };
    return NgxGalleryComponent;
}());

var NgxGalleryImage = /** @class */ (function () {
    /**
     * @param {?} obj
     */
    function NgxGalleryImage(obj) {
        this.small = obj.small;
        this.medium = obj.medium;
        this.big = obj.big;
        this.description = obj.description;
        this.url = obj.url;
    }
    return NgxGalleryImage;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CustomHammerConfig = /** @class */ (function (_super) {
    __extends(CustomHammerConfig, _super);
    function CustomHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = ({
            'pinch': { enable: false },
            'rotate': { enable: false }
        });
        return _this;
    }
    return CustomHammerConfig;
}(platformBrowser.HammerGestureConfig));
var NgxGalleryModule = /** @class */ (function () {
    function NgxGalleryModule() {
    }
    NgxGalleryModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        NgxGalleryArrowsComponent,
                        NgxGalleryImageComponent,
                        NgxGalleryThumbnailsComponent,
                        NgxGalleryPreviewComponent,
                        NgxGalleryComponent
                    ],
                    exports: [
                        NgxGalleryComponent
                    ],
                    providers: [
                        { provide: platformBrowser.HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
                    ]
                },] },
    ];
    /**
     * @nocollapse
     */
    NgxGalleryModule.ctorParameters = function () { return []; };
    return NgxGalleryModule;
}());

exports.CustomHammerConfig = CustomHammerConfig;
exports.NgxGalleryModule = NgxGalleryModule;
exports.NgxGalleryComponent = NgxGalleryComponent;
exports.NgxGalleryImageComponent = NgxGalleryImageComponent;
exports.NgxGalleryThumbnailsComponent = NgxGalleryThumbnailsComponent;
exports.NgxGalleryPreviewComponent = NgxGalleryPreviewComponent;
exports.NgxGalleryArrowsComponent = NgxGalleryArrowsComponent;
exports.NgxGalleryOptions = NgxGalleryOptions;
exports.NgxGalleryImage = NgxGalleryImage;
exports.NgxGalleryAnimation = NgxGalleryAnimation;
exports.NgxGalleryHelperService = NgxGalleryHelperService;
exports.NgxGalleryImageSize = NgxGalleryImageSize;
exports.NgxGalleryLayout = NgxGalleryLayout;
exports.NgxGalleryOrder = NgxGalleryOrder;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ })

});
//# sourceMappingURL=offering.module.chunk.js.map