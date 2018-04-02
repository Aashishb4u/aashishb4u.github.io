webpackJsonp(["addAlmirah.module"],{

/***/ "../../../../../src/app/pages/addAlmirah/addAlmirah.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addAlmirah; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_authentication__ = __webpack_require__("../../../../../src/app/app.authentication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appServices_application__ = __webpack_require__("../../../../../src/app/appServices/application.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_services_baThemeSpinner_baThemeSpinner_service__ = __webpack_require__("../../../../../src/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utilityServices_app_utility__ = __webpack_require__("../../../../../src/app/utilityServices/app.utility.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var addAlmirah = (function () {
    function addAlmirah(fb, userUtility, router, authentication, appService, toastr, vRef, _spinner) {
        this.fb = fb;
        this.userUtility = userUtility;
        this.router = router;
        this.authentication = authentication;
        this.appService = appService;
        this.toastr = toastr;
        this._spinner = _spinner;
        this.financeTab = false;
        this.contactTab = true;
        this.purchaseTab = false;
        this.paymentTab = false;
        this.tagsArray = [];
        this.locationArray = [];
        this.authentication.setChangedContentTopText('Add Almirah');
        // number mask is used to accept only 11 digit numeric value.
        this.numberMask = [/[1-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
        // pin mask is used to accept 6 digit pin value.
        this.gstMask = [/[0-9]/, /[0-9]/];
        // for setting up the Title of the page
        this.placeHolderForTag = 'Add Categories';
    }
    // Initiating Angular
    addAlmirah.prototype.ngOnInit = function () {
        this.userBasicInfo();
    };
    // function called after cancelbutton is clicked.
    addAlmirah.prototype.goBack = function () {
        this.router.navigate(['/almirah']);
    };
    // get API to get all tags from tags table.
    addAlmirah.prototype.getItemLocation = function () {
        var _this = this;
        var data = {
            id: this.almirahId,
        };
        this._spinner.show();
        // Api call to get categories, if success getDataSuccess(data) and if error getDataFail(error)
        this.appService.getItemLocationById(data).subscribe(function (data) { return _this.getDataSuccess(data); }, function (error) { return _this.getDataFail(error); });
    };
    // getVendorTags - Success
    addAlmirah.prototype.addItemLocationSuccess = function (res) {
        if (res.status < 0) {
            this.toastr.error(this.userUtility.errorMessages['GET_TAGS_FAILED']);
        }
        else {
            this._spinner.hide();
            this.toastr.success('Almirah added successfully');
            this.router.navigate(['/almirah']);
        }
    };
    addAlmirah.prototype.makeItCapital = function (data) {
        return data.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    // get API to get all tags from tags table.
    addAlmirah.prototype.addItemLocation = function (values) {
        var _this = this;
        var data = {
            location_name: this.makeItCapital(values.almirahName.trim()),
            description: values.description,
        };
        this._spinner.show();
        // Api call to get categories, if success getDataSuccess(data) and if error getDataFail(error)
        this.appService.addItemLocation(data).subscribe(function (data) { return _this.addItemLocationSuccess(data); }, function (error) { return _this.getDataFail(error); });
    };
    // getVendorTags - Success
    addAlmirah.prototype.getDataSuccess = function (res) {
        if (res.status < 0) {
            this.toastr.error(this.userUtility.errorMessages['GET_TAGS_FAILED']);
        }
        else {
            this._spinner.hide();
        }
    };
    // getVendorTags - Fail
    addAlmirah.prototype.getDataFail = function (error) {
        this._spinner.hide();
        if (error.error && error.error.message) {
            this.toastr.error(error.error.message);
        }
        else {
            this.toastr.error('Server error');
        }
    };
    // set up form.
    addAlmirah.prototype.userBasicInfo = function () {
        this.form = this.fb.group({
            'almirahName': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            'description': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
        });
    };
    addAlmirah.prototype.selectLocation = function (event) {
        this.locationSelected = event.target.value;
    };
    // submission of add user form.
    addAlmirah.prototype.onSubmit = function (value) {
        var _this = this;
        this._spinner.show();
        var itemName = value.vendorName.trim();
        itemName = itemName.replace(/^\w/, function (chr) {
            return chr.toUpperCase();
        });
        this.categoriesMessage = (value.categories.length == 0) ? true : false;
        var userData = {
            'item_name': itemName,
            'gst': value.gst,
            'location': value.location,
            'categories': value.categories,
            'description': value.description.trim(),
        };
        // Api call to edit profile, if success editUserProfile(data) and if error editUserProfileFail(error)
        this.appService.addNewItem(userData).subscribe(function (data) { return _this.addNewVendorSuccess(data); }, function (error) { return _this.addNewVendorFail(error); });
    };
    // if edit profile success
    addAlmirah.prototype.addNewVendorSuccess = function (result) {
        if (result.status < 0) {
            this.toastr.error(this.userUtility.errorMessages['ITEM_ALREADY_EXIST']);
        }
        else {
            this.toastr.success(this.userUtility.successMessages['ADD_ITEM_SUCCESS']);
            this.router.navigate(['/viewItems']);
        }
        this._spinner.hide();
    };
    // if edit profile fail
    addAlmirah.prototype.addNewVendorFail = function (error) {
        this._spinner.hide();
        if (error.error && error.error.message) {
            this.toastr.error(error.error.message);
        }
        else {
            this.toastr.error('Server error');
        }
    };
    return addAlmirah;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('vendorName'),
    __metadata("design:type", Object)
], addAlmirah.prototype, "firstField", void 0);
addAlmirah = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'addAlmirah',
        styles: [__webpack_require__("../../../../../src/app/pages/addAlmirah/addAlmirah.scss")],
        template: __webpack_require__("../../../../../src/app/pages/addAlmirah/addAlmirah.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_7__utilityServices_app_utility__["a" /* Utility */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__utilityServices_app_utility__["a" /* Utility */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__utilityServices_app_utility__["a" /* Utility */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__app_authentication__["a" /* AuthenticationHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_authentication__["a" /* AuthenticationHelper */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__appServices_application__["a" /* ApplicationAdminServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__appServices_application__["a" /* ApplicationAdminServices */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__theme_services_baThemeSpinner_baThemeSpinner_service__["a" /* BaThemeSpinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__theme_services_baThemeSpinner_baThemeSpinner_service__["a" /* BaThemeSpinner */]) === "function" && _h || Object])
], addAlmirah);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=addAlmirah.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/addAlmirah/addAlmirah.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-campaign\">\n</div>\n\n<div class=\"addUserContainer\">\n    <div class=\"profileContent\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"addItemLocation(form.value)\">\n            <div class=\"col-md-12 row profileForm\">\n                <div class=\"col-md-4 adjustBottom\">\n                    <div>\n                        <label class=\"labelStyle required\"> Almirah Name </label>\n                    </div>\n                </div>\n\n                <div class=\"col-md-8 adjustBottom\">\n                    <div [ngClass]=\"{'has-error': (form.controls['almirahName'].invalid && form.controls['almirahName'].touched), 'has-success': (form.controls['almirahName'].valid && form.controls['almirahName'].touched)}\">\n                        <input maxlength=\"30\" placeholder=\"Almirah Name\"  formControlName=\"almirahName\" type=\"text\" class=\"text-capitalize form-control\">\n                    </div>\n                    <div class=\"profileErrorMessage\">\n                        <div class=\"profileErrorMessage\">\n                            <span *ngIf=\"(!form.get('almirahName').valid && form.get('almirahName').touched) && form.get('almirahName').value != '' \"\n                                  class=\"help-block sub-little-signUp-error confpass\"> Please Enter Valid Almirah Name </span>\n                            <span *ngIf=\"form.get('almirahName').touched && form.get('almirahName').value.trim() == '' \"\n                                  class=\"help-block sub-little-signUp-error confpass\"> Almirah Name is Required </span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 adjustBottom\">\n                    <div>\n                        <label class=\"labelStyle required\"> Description </label>\n                    </div>\n                </div>\n                <div class=\"col-md-8 adjustBottom\">\n                    <div [ngClass]=\"{'has-error': (form.controls['description'].invalid && form.controls['description'].touched), 'has-success': (form.controls['description'].valid && form.controls['description'].touched)}\">\n                        <textarea maxlength=\"120\" placeholder=\"Description\" formControlName=\"description\" class=\"form-control\" ></textarea>\n                    </div>\n                    <div class=\"profileErrorMessage\">\n                        <div class=\"profileErrorMessage\">\n                            <span *ngIf=\"(!form.get('description').valid && form.get('description').touched) && form.get('description').value != '' \"\n                                  class=\"help-block sub-little-signUp-error confpass\"> Please Enter Valid Description </span>\n                            <span *ngIf=\"form.get('description').touched && form.get('description').value.trim() == '' \"\n                                  class=\"help-block sub-little-signUp-error confpass\"> Description is Required </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n\n            <div class=\"col-md-12 row\" *ngIf=\"this.contactTab\">\n                <div class=\"col-md-12 form-group inputbutton submitButton\">\n                    <button (click)=\"goBack()\" class=\"btnStyle btnBackStyle\"> Back</button>\n                    <button [ngClass]=\"{'disableSubmit' : (!form.valid) }\"\n                            [disabled]=\"!form.valid\" type=\"submit\" class=\"btnNext btnStyle\">Add Almirah\n                    </button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/addAlmirah/addAlmirah.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAlmirahModule", function() { return addAlmirahModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addAlmirah_component__ = __webpack_require__("../../../../../src/app/pages/addAlmirah/addAlmirah.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addAlmirah_routing__ = __webpack_require__("../../../../../src/app/pages/addAlmirah/addAlmirah.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_tag_input__ = __webpack_require__("../../../../angular2-tag-input/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_tag_input__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var addAlmirahModule = (function () {
    function addAlmirahModule() {
    }
    return addAlmirahModule;
}());
addAlmirahModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_tag_input__["RlTagInputModule"],
            __WEBPACK_IMPORTED_MODULE_5__addAlmirah_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__["TextMaskModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__addAlmirah_component__["a" /* addAlmirah */]
        ],
        providers: []
    })
], addAlmirahModule);

//# sourceMappingURL=addAlmirah.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/addAlmirah/addAlmirah.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addAlmirah_component__ = __webpack_require__("../../../../../src/app/pages/addAlmirah/addAlmirah.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__addAlmirah_component__["a" /* addAlmirah */],
        children: []
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);
//# sourceMappingURL=addAlmirah.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/addAlmirah/addAlmirah.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #374767; }\n    .auth-block a:hover {\n      color: #2f3c58; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.paginationControl {\n  width: 100%;\n  float: left;\n  padding: 0 15px; }\n  .paginationControl #listItem .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n  .paginationControl #listItem .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .paginationControl #listItem .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .paginationControl #listItem .ngx-pagination a {\n    color: #606c71; }\n    .paginationControl #listItem .ngx-pagination a:hover {\n      background: transparent; }\n  .paginationControl #listItem .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n  .paginationControl #listItemNew .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n  .paginationControl #listItemNew .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .paginationControl #listItemNew .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .paginationControl #listItemNew .ngx-pagination a {\n    color: #606c71; }\n    .paginationControl #listItemNew .ngx-pagination a:hover {\n      background: transparent; }\n  .paginationControl #listItemNew .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n  .paginationControl #listItem ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n    .paginationControl #listItem ul li:hover {\n      background: transparent; }\n  .paginationControl #listItemNew ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n    .paginationControl #listItemNew ul li:hover {\n      background: transparent; }\n  .paginationControl .pageControl {\n    cursor: pointer;\n    padding: 0 10px; }\n    .paginationControl .pageControl ul {\n      padding: 10px 0;\n      margin: 0;\n      float: left; }\n\n.btn-danger {\n  margin-left: 3px; }\n\n.btn-primary {\n  margin-right: 3px; }\n\n.btn:hover {\n  -webkit-transform: none;\n          transform: none; }\n\n.help-block {\n  color: red; }\n\n.modal-header {\n  margin: 0 auto; }\n\n.fa-rupee:before, .fa-inr:before {\n  content: \"\\F156\";\n  margin-right: 14px !important; }\n\n.ion-edit:before {\n  content: \"\\F2BF\";\n  color: #000000; }\n\n.text-spacing {\n  margin-bottom: 1%; }\n\n.disableSubmit {\n  opacity: 0.8;\n  cursor: not-allowed; }\n  .disableSubmit:hover {\n    opacity: 0.8;\n    cursor: not-allowed !important; }\n\n.purchase_table .ion-edit:before {\n  content: \"\\F2BF\";\n  margin-right: 10px;\n  color: #000000; }\n\n.ion-trash-b:before {\n  content: \"\\F252\";\n  color: #ff0000; }\n\n.fa-envelope-o:before {\n  margin-right: 10px; }\n\n.form-control[disabled] {\n  color: grey;\n  border-color: lightgrey; }\n\n#vendorPurchaseTable table > thead > tr > th:first-child {\n  text-align: center; }\n\n.tagsSmart {\n  background: #F1F3F6;\n  color: #282828;\n  display: inline-block;\n  border: 1px solid lightgray;\n  padding: 0 10px 0 10px;\n  margin: 2px 2px 2px 2px;\n  border-radius: 90px; }\n\ntable th, table td {\n  border: 1px solid #ddd; }\n\ntable .ng2-smart-actions {\n  text-align: center;\n  color: #374767; }\n\ntable .ng2-smart-title a {\n  color: #374767; }\n\ntable .ng2-smart-title a:hover {\n  text-decoration: none; }\n\n.modal-body-data {\n  margin-bottom: 15px; }\n\ntable .ng2-smart-actions {\n  width: 100px !important; }\n\n.inputbox {\n  border-radius: 3px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0px;\n  padding-left: 2%;\n  border: 1px solid gainsboro;\n  outline: none;\n  box-shadow: none;\n  color: #555555; }\n\n.inputbox::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: gainsboro; }\n\n.inputbox::-moz-placeholder {\n  /* Firefox 19+ */\n  color: gainsboro; }\n\n.inputbox:-ms-input-placeholder {\n  /* IE 10+ */\n  color: gainsboro; }\n\n.inputbox:-moz-placeholder {\n  /* Firefox 18- */\n  color: gainsboro; }\n\n.inputbox:focus, .inputbox:active {\n  border-color: #A5C9BB;\n  outline: 0;\n  outline: thin dotted \\9;\n  /* -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6); */\n  box-shadow: inset 0 1px 1px rgba(0, 220, 0, 0.075), 0 0 8px rgba(0, 225, 0, 0.2); }\n\n.inputbutton {\n  height: 58px;\n  line-height: 2.8;\n  margin: 3% 0 -2% 0; }\n\n.btnStyle {\n  width: 100%;\n  height: 100%;\n  background-color: #195C94;\n  color: white;\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer; }\n  .btnStyle:focus {\n    outline: none;\n    box-shadow: 0px 0px 2px 2px #59a453; }\n\n.passwordErrorMessage {\n  float: left;\n  margin-top: -35px;\n  width: 100%;\n  margin-bottom: 10px; }\n\n.divAlignLeft {\n  float: left; }\n\n.divAlignRight {\n  float: right; }\n\n.Quotedatepicker .mydp .currmonth:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .selector {\n  z-index: 1;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selection {\n  height: 33px !important;\n  color: #757575;\n  font-size: 15px !important;\n  position: relative;\n  text-align: left;\n  padding-left: 8px;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selbtngroup {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclear {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnclear:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpicker {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclearenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .mydp .btnpicker {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnpicker:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpickerenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .help-block {\n  color: red; }\n\nrl-tag-input-item {\n  margin-bottom: 3px; }\n\nselect[multiple]:focus option:checked {\n  background: #3b5998 linear-gradient(0deg, #3b5998 0%, #3b5998 100%); }\n\nrl-tag-input input {\n  font-family: 'Conv_Avenir' !important;\n  font-size: 14px !important; }\n\nrl-tag-input input::-webkit-input-placeholder {\n  color: grey; }\n\nrl-tag-input-item {\n  font-family: 'Conv_Avenir' !important;\n  font-size: 14px !important; }\n\n.required:after {\n  content: \"*\";\n  color: red; }\n\n.auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #374767; }\n    .auth-block a:hover {\n      color: #2f3c58; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.main-campaign {\n  padding-top: 90px; }\n  .main-campaign .panel .panel-body .wizard {\n    min-width: 95%;\n    float: left;\n    background: #fff;\n    margin: 0 2.5%;\n    border: 1px solid #E0E0E0; }\n    .main-campaign .panel .panel-body .wizard .profileTab {\n      width: 50%;\n      float: left;\n      text-align: center;\n      border-right: 1px solid #E0E0E0;\n      height: 50px;\n      line-height: 50px;\n      cursor: pointer;\n      font-size: 12px; }\n      .main-campaign .panel .panel-body .wizard .profileTab:last-child {\n        border-right: none; }\n      .main-campaign .panel .panel-body .wizard .profileTab a {\n        text-transform: uppercase; }\n        .main-campaign .panel .panel-body .wizard .profileTab a .profileIcon {\n          margin-right: 10px; }\n  .main-campaign .panel .panel-body .currentTab {\n    border-bottom: 3px solid #195C94;\n    color: #195C94; }\n  .main-campaign .panel .panel-body .disableTab {\n    cursor: not-allowed !important; }\n\n.errorBox {\n  border-left: 5px solid #f7043a !important; }\n\n.has-error .form-control {\n  border-left: 5px solid #f7043a; }\n\n.has-error .form-control:focus {\n  box-shadow: aliceblue; }\n\n.has-success .form-control {\n  border-left: 5px solid #a6c733; }\n\n.has-success .form-control:focus {\n  border: 1px solid #a6c733;\n  border-left: 5px solid #a6c733; }\n\n.alignTitle {\n  margin-bottom: 20px; }\n\n@media only screen and (min-width: 320px) and (max-width: 860px) {\n  .main-campaign .panel .panel-body .wizard .profileTab a .tabText {\n    display: none; }\n  .main-campaign .panel .panel-body .wizard .profileTab a .profileIcon {\n    margin-right: 0; }\n  .profileContainer .profileContent .profileForm .userImageContainer {\n    margin-bottom: 40px; }\n    .profileContainer .profileContent .profileForm .userImageContainer .profileDiv {\n      left: 20px;\n      bottom: -40px;\n      padding: 0; }\n    .profileContainer .profileContent .profileForm .userImageContainer .profileImage {\n      width: 94%;\n      font-size: 13px; }\n  .profileContainer .sub-little-signUp-error {\n    font-size: 12px; }\n  .profileContainer .userUrlContainer .userUrlBox {\n    width: 99%; }\n    .profileContainer .userUrlContainer .userUrlBox .userUrlInner {\n      padding: 0; }\n    .profileContainer .userUrlContainer .userUrlBox .userUrlButton {\n      letter-spacing: 0;\n      width: 95%; }\n  .profileContainer .userUrlContainer .urlCancelButtons {\n    width: 37%;\n    font-size: 13px; }\n  .profileContainer .userUrlContainer .urlButtons {\n    width: 37%;\n    font-size: 13px; } }\n\n.adjustBottom {\n  margin-bottom: 15px; }\n\n@media only screen and (min-width: 767px) {\n  .adjustTab {\n    padding-right: 0; } }\n\n.addUserContainer {\n  margin: 0 2.5% 50px 2.5%;\n  padding: 15px;\n  background: white;\n  min-width: 95%;\n  border-radius: 3px;\n  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1); }\n  .addUserContainer .profileImage {\n    font-size: 15px;\n    color: #777777; }\n  .addUserContainer .inputbutton {\n    text-align: center;\n    margin: 1.9% 0 2% 0; }\n  .addUserContainer .form-control {\n    border-radius: 3px; }\n  .addUserContainer .form-control[disabled] {\n    color: grey;\n    border-color: lightgrey; }\n  .addUserContainer .disableSubmit {\n    opacity: 0.8;\n    cursor: not-allowed; }\n    .addUserContainer .disableSubmit:hover {\n      opacity: 0.8;\n      cursor: not-allowed; }\n  .addUserContainer .profileContent {\n    margin-top: 2%;\n    margin-left: 2.5%;\n    margin-right: 0%; }\n  .addUserContainer .btnNext {\n    float: right;\n    width: 150px;\n    height: 85%; }\n    @media screen and (max-width: 767px) {\n      .addUserContainer .btnNext {\n        width: 35%; } }\n  .addUserContainer .btnBackStyle {\n    float: left;\n    width: 150px;\n    height: 85%; }\n    @media screen and (max-width: 767px) {\n      .addUserContainer .btnBackStyle {\n        width: 35%; } }\n  .addUserContainer .small {\n    font-size: 100%; }\n  .addUserContainer .profileDiv {\n    padding-bottom: 25px; }\n  .addUserContainer .disableSubmit {\n    opacity: 0.8;\n    cursor: not-allowed; }\n    .addUserContainer .disableSubmit:hover {\n      opacity: 0.8;\n      cursor: not-allowed; }\n  .addUserContainer .help-block {\n    color: red; }\n  .addUserContainer .sub-little-text {\n    font-size: 12px; }\n\n@media only screen and (min-device-width: 310px) and (max-device-width: 320px) {\n  .profileForm {\n    padding-right: 0 !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

});
//# sourceMappingURL=addAlmirah.module.chunk.js.map