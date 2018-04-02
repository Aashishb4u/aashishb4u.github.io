webpackJsonp(["forgotPassword.module"],{

/***/ "../../../../../src/app/pages/forgotPassword/forgotPassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return forgotPassword; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_authentication__ = __webpack_require__("../../../../../src/app/app.authentication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_validators_email_validator__ = __webpack_require__("../../../../../src/app/theme/validators/email.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__appServices_application__ = __webpack_require__("../../../../../src/app/appServices/application.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var forgotPassword = (function (_super) {
    __extends(forgotPassword, _super);
    function forgotPassword(fb, router, appService, toastr, vRef, _spinner, authentication) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.appService = appService;
        _this.toastr = toastr;
        _this._spinner = _spinner;
        _this.authentication = authentication;
        _this.submitted = false;
        _this.form = fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__theme_validators_email_validator__["a" /* EmailValidator */].validate])],
        });
        return _this;
    }
    forgotPassword.prototype.ngAfterViewInit = function () {
        this.emailField.first.nativeElement.focus();
    };
    //onSubmit
    forgotPassword.prototype.onSubmit = function (values) {
        var _this = this;
        var userEmail = {
            email: values.email
        };
        // Api call to generate code, if success generateCodeSuccess(data) and if error generateCodeFail(error)
        this.appService.generateCode(userEmail).subscribe(function (data) { return _this.generateCodeSuccess(data); }, function (error) { return _this.generateCodeFail(error); });
    };
    //if generate code success
    forgotPassword.prototype.generateCodeSuccess = function (data) {
        this.router.navigate(['/reset-password']);
        this.toastr.success(data.success.data.message);
    };
    //if generate code fail
    forgotPassword.prototype.generateCodeFail = function (Error) {
        if (Error.error && Error.error.message) {
            this.toastr.error(Error.error.message);
        }
        else {
            this.toastr.error('Server error');
        }
    };
    forgotPassword.prototype.navigateToHome = function () {
        this.router.navigate(['']);
    };
    forgotPassword.prototype.navigateToSignIn = function () {
        this.router.navigate(['/login']);
    };
    forgotPassword.prototype.navigateToResetPassword = function () {
        this.router.navigate(['/reset-password']);
    };
    return forgotPassword;
}(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* AppConstant */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('emailField'),
    __metadata("design:type", Object)
], forgotPassword.prototype, "emailField", void 0);
forgotPassword = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'forgotPassword',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/forgotPassword/forgotPassword.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/forgotPassword/forgotPassword.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__appServices_application__["a" /* ApplicationAdminServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__appServices_application__["a" /* ApplicationAdminServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__theme_services__["c" /* BaThemeSpinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__theme_services__["c" /* BaThemeSpinner */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__app_authentication__["a" /* AuthenticationHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_authentication__["a" /* AuthenticationHelper */]) === "function" && _g || Object])
], forgotPassword);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=forgotPassword.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forgotPassword/forgotPassword.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"forgotPasswordContainer\">\n    <div class=\"row forgotPasswordSegment\">\n        <div class=\"col-md-12 signUpdivStyle\">\n            <div class=\"signUpTitle signUpdivStyle\"><img [src]=\"LogoImage\" (click)=\"navigateToHome()\"></div>\n        </div>\n        <div class=\"col-md-12 signup\">\n            <div class=\"forgotPasswordText\">Forgot Password</div>\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\n                <div class=\"form-group row col-md-12 inputbutton signUpdivStyle\"\n                     [ngClass]=\"{'has-error': (!form.get('email').valid && form.get('email').touched), 'has-success': (form.get('email').valid && form.get('email').touched)}\">\n                    <div class=\"input-group sign-up-input\">\n                        <span class=\"input-group-addon\" id=\"basic-addon2\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span>\n                        <input #emailField formControlName=\"email\" type=\"email\" class=\"form-control inputbox right-border\"\n                               id=\"inputEmail3\" placeholder=\"Email\" autofocus tabindex=\"1\">\n                    </div>\n                    <div class=\"signUpErrorMessage\">\n                    <span *ngIf=\"!form.get('email').valid && form.get('email').touched\"\n                          class=\"help-block sub-little-signUp-error confpass\">Email is {{!form.get('email').valid && form.get('email').value === ''?'required':'not valid'}}.</span>\n                    </div>\n                </div>\n\n                <div class=\"form-group row col-md-12 inputbutton submitButton signUpdivStyle\">\n                    <input [ngClass]=\"{'disableSubmit' : (!form.valid || submitted) }\"\n                           [disabled]=\"!form.valid || submitted\"\n                           type=\"submit\" class=\"btnStyle signUpButton\" value=\"SEND\" tabindex=\"2\">\n                </div>\n            </form>\n            <div class=\"col-md-12 alreadyHaveAccount signUpdivStyle\">\n                <div class=\"col-md-12 signUpdivStyle signUpFooter\">\n                    <span>Already have an account?</span>\n                    <a (keyup.enter)=\"navigateToSignIn()\" (click)=\"navigateToSignIn()\" tabindex=\"3\"><span class=\"forgotPassword\" >Sign In</span></a>\n                    <div class=\"col-md-12\">\n                    <span>Have code?</span>\n                    <a (keyup.enter)=\"navigateToResetPassword()\" (click)=\"navigateToResetPassword()\" tabindex=\"4\"><span class=\"forgotPassword\" >Set your Password</span></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/forgotPassword/forgotPassword.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function() { return ForgotPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotPassword_component__ = __webpack_require__("../../../../../src/app/pages/forgotPassword/forgotPassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgotPassword_routing__ = __webpack_require__("../../../../../src/app/pages/forgotPassword/forgotPassword.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ForgotPasswordModule = (function () {
    function ForgotPasswordModule() {
    }
    return ForgotPasswordModule;
}());
ForgotPasswordModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__forgotPassword_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__forgotPassword_component__["a" /* forgotPassword */]
        ]
    })
], ForgotPasswordModule);

//# sourceMappingURL=forgotPassword.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forgotPassword/forgotPassword.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forgotPassword_component__ = __webpack_require__("../../../../../src/app/pages/forgotPassword/forgotPassword.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__forgotPassword_component__["a" /* forgotPassword */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);
//# sourceMappingURL=forgotPassword.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forgotPassword/forgotPassword.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #374767; }\n    .auth-block a:hover {\n      color: #2f3c58; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #374767; }\n    .auth-block a:hover {\n      color: #2f3c58; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.paginationControl {\n  width: 100%;\n  float: left;\n  padding: 0 15px; }\n  .paginationControl #listItem .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n  .paginationControl #listItem .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .paginationControl #listItem .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .paginationControl #listItem .ngx-pagination a {\n    color: #606c71; }\n    .paginationControl #listItem .ngx-pagination a:hover {\n      background: transparent; }\n  .paginationControl #listItem .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n  .paginationControl #listItemNew .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n  .paginationControl #listItemNew .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .paginationControl #listItemNew .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .paginationControl #listItemNew .ngx-pagination a {\n    color: #606c71; }\n    .paginationControl #listItemNew .ngx-pagination a:hover {\n      background: transparent; }\n  .paginationControl #listItemNew .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n  .paginationControl #listItem ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n    .paginationControl #listItem ul li:hover {\n      background: transparent; }\n  .paginationControl #listItemNew ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n    .paginationControl #listItemNew ul li:hover {\n      background: transparent; }\n  .paginationControl .pageControl {\n    cursor: pointer;\n    padding: 0 10px; }\n    .paginationControl .pageControl ul {\n      padding: 10px 0;\n      margin: 0;\n      float: left; }\n\n.btn-danger {\n  margin-left: 3px; }\n\n.btn-primary {\n  margin-right: 3px; }\n\n.btn:hover {\n  -webkit-transform: none;\n          transform: none; }\n\n.help-block {\n  color: red; }\n\n.modal-header {\n  margin: 0 auto; }\n\n.fa-rupee:before, .fa-inr:before {\n  content: \"\\F156\";\n  margin-right: 14px !important; }\n\n.ion-edit:before {\n  content: \"\\F2BF\";\n  color: #000000; }\n\n.text-spacing {\n  margin-bottom: 1%; }\n\n.disableSubmit {\n  opacity: 0.8;\n  cursor: not-allowed; }\n  .disableSubmit:hover {\n    opacity: 0.8;\n    cursor: not-allowed !important; }\n\n.purchase_table .ion-edit:before {\n  content: \"\\F2BF\";\n  margin-right: 10px;\n  color: #000000; }\n\n.ion-trash-b:before {\n  content: \"\\F252\";\n  color: #ff0000; }\n\n.fa-envelope-o:before {\n  margin-right: 10px; }\n\n.form-control[disabled] {\n  color: grey;\n  border-color: lightgrey; }\n\n#vendorPurchaseTable table > thead > tr > th:first-child {\n  text-align: center; }\n\n.tagsSmart {\n  background: #F1F3F6;\n  color: #282828;\n  display: inline-block;\n  border: 1px solid lightgray;\n  padding: 0 10px 0 10px;\n  margin: 2px 2px 2px 2px;\n  border-radius: 90px; }\n\ntable th, table td {\n  border: 1px solid #ddd; }\n\ntable .ng2-smart-actions {\n  text-align: center;\n  color: #374767; }\n\ntable .ng2-smart-title a {\n  color: #374767; }\n\ntable .ng2-smart-title a:hover {\n  text-decoration: none; }\n\n.modal-body-data {\n  margin-bottom: 15px; }\n\ntable .ng2-smart-actions {\n  width: 100px !important; }\n\n.inputbox {\n  border-radius: 3px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0px;\n  padding-left: 2%;\n  border: 1px solid gainsboro;\n  outline: none;\n  box-shadow: none;\n  color: #555555; }\n\n.inputbox::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: gainsboro; }\n\n.inputbox::-moz-placeholder {\n  /* Firefox 19+ */\n  color: gainsboro; }\n\n.inputbox:-ms-input-placeholder {\n  /* IE 10+ */\n  color: gainsboro; }\n\n.inputbox:-moz-placeholder {\n  /* Firefox 18- */\n  color: gainsboro; }\n\n.inputbox:focus, .inputbox:active {\n  border-color: #A5C9BB;\n  outline: 0;\n  outline: thin dotted \\9;\n  /* -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6); */\n  box-shadow: inset 0 1px 1px rgba(0, 220, 0, 0.075), 0 0 8px rgba(0, 225, 0, 0.2); }\n\n.inputbutton {\n  height: 58px;\n  line-height: 2.8;\n  margin: 3% 0 -2% 0; }\n\n.btnStyle {\n  width: 100%;\n  height: 100%;\n  background-color: #195C94;\n  color: white;\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer; }\n  .btnStyle:focus {\n    outline: none;\n    box-shadow: 0px 0px 2px 2px #59a453; }\n\n.passwordErrorMessage {\n  float: left;\n  margin-top: -35px;\n  width: 100%;\n  margin-bottom: 10px; }\n\n.divAlignLeft {\n  float: left; }\n\n.divAlignRight {\n  float: right; }\n\n.Quotedatepicker .mydp .currmonth:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .selector {\n  z-index: 1;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selection {\n  height: 33px !important;\n  color: #757575;\n  font-size: 15px !important;\n  position: relative;\n  text-align: left;\n  padding-left: 8px;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selbtngroup {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclear {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnclear:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpicker {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclearenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .mydp .btnpicker {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnpicker:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpickerenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .help-block {\n  color: red; }\n\nrl-tag-input-item {\n  margin-bottom: 3px; }\n\nselect[multiple]:focus option:checked {\n  background: #3b5998 linear-gradient(0deg, #3b5998 0%, #3b5998 100%); }\n\nrl-tag-input input {\n  font-family: 'Conv_Avenir' !important;\n  font-size: 14px !important; }\n\nrl-tag-input input::-webkit-input-placeholder {\n  color: grey; }\n\nrl-tag-input-item {\n  font-family: 'Conv_Avenir' !important;\n  font-size: 14px !important; }\n\n.required:after {\n  content: \"*\";\n  color: red; }\n\n.forgotPasswordContainer {\n  text-align: center; }\n  .forgotPasswordContainer .forgotPasswordSegment {\n    width: 28%;\n    display: inline-block; }\n    .forgotPasswordContainer .forgotPasswordSegment .signUpdivStyle {\n      text-align: center;\n      font-size: 17px;\n      font-weight: 500;\n      letter-spacing: 0.005em; }\n    .forgotPasswordContainer .forgotPasswordSegment .signUpTitle {\n      width: 100%;\n      display: inline-block;\n      margin-top: 15%; }\n      .forgotPasswordContainer .forgotPasswordSegment .signUpTitle img {\n        cursor: pointer;\n        width: 60%; }\n    .forgotPasswordContainer .forgotPasswordSegment .signup {\n      border: 1px solid gainsboro;\n      background-color: #fff;\n      border-radius: 3px;\n      margin-top: 10px;\n      cursor: text; }\n      .forgotPasswordContainer .forgotPasswordSegment .signup .signUpdivStyle {\n        text-align: center;\n        font-size: 17px;\n        margin-top: 6%;\n        margin-bottom: 16px;\n        font-weight: 500;\n        letter-spacing: 0.005em;\n        cursor: text; }\n        .forgotPasswordContainer .forgotPasswordSegment .signup .signUpdivStyle .sign-up-input {\n          height: 95%; }\n      .forgotPasswordContainer .forgotPasswordSegment .signup .right-border {\n        border-bottom-right-radius: 3px;\n        border-top-right-radius: 3px; }\n      .forgotPasswordContainer .forgotPasswordSegment .signup .input-group .input-group-addon {\n        border-bottom-left-radius: 3px;\n        border-top-left-radius: 3px; }\n      .forgotPasswordContainer .forgotPasswordSegment .signup .emaildiv {\n        margin-bottom: 2px; }\n      .forgotPasswordContainer .forgotPasswordSegment .signup .submitButton {\n        margin-top: 5.1%;\n        cursor: pointer; }\n      .forgotPasswordContainer .forgotPasswordSegment .signup .forgotPasswordText {\n        width: 80%;\n        margin: 0 auto;\n        margin-top: 7%;\n        font-size: 17px; }\n      .forgotPasswordContainer .forgotPasswordSegment .signup .disableSubmit {\n        opacity: 0.8;\n        cursor: not-allowed; }\n        .forgotPasswordContainer .forgotPasswordSegment .signup .disableSubmit:hover {\n          opacity: 0.8;\n          cursor: not-allowed; }\n      .forgotPasswordContainer .forgotPasswordSegment .signup .help-block {\n        color: red; }\n      .forgotPasswordContainer .forgotPasswordSegment .signup .sub-little-text {\n        font-size: 12px; }\n      .forgotPasswordContainer .forgotPasswordSegment .signup .alreadyHaveAccount {\n        margin-bottom: 5%; }\n    .forgotPasswordContainer .forgotPasswordSegment .signUpErrorMessage {\n      float: left;\n      margin-top: -35px;\n      width: 100%; }\n    .forgotPasswordContainer .forgotPasswordSegment .sub-little-signUp-error {\n      font-size: 12px; }\n    .forgotPasswordContainer .forgotPasswordSegment a {\n      color: #59a453; }\n    .forgotPasswordContainer .forgotPasswordSegment .forgotPassword {\n      cursor: pointer;\n      font-size: 17px;\n      color: #59a453; }\n      .forgotPasswordContainer .forgotPasswordSegment .forgotPassword:hover {\n        text-decoration: underline; }\n    .forgotPasswordContainer .forgotPasswordSegment .signUpFooter {\n      line-height: initial; }\n\n@media screen and (min-width: 200px) and (max-width: 700px) {\n  .forgotPasswordSegment {\n    width: 100%; }\n  .horizontalLine {\n    display: inline-block;\n    width: 35%; }\n    .horizontalLine hr {\n      margin-top: -4px;\n      margin-bottom: 0; }\n  .forgotPasswordText {\n    display: inline-block;\n    width: 27%;\n    padding: 0; } }\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  .forgotPasswordSegment {\n    width: 60% !important; }\n  .forgotPasswordText {\n    display: inline-block;\n    width: 27%; } }\n\n@media screen and (min-width: 200px) and (max-width: 700px) {\n  .forgotPasswordSegment {\n    width: 100% !important; }\n  .forgotPasswordText {\n    display: inline-block;\n    width: 27%;\n    padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

});
//# sourceMappingURL=forgotPassword.module.chunk.js.map