webpackJsonp(["login.module"],{

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appServices_application__ = __webpack_require__("./src/app/appServices/application.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_authentication__ = __webpack_require__("./src/app/app.authentication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_services__ = __webpack_require__("./src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
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








var Login = (function (_super) {
    __extends(Login, _super);
    function Login(fb, router, toastr, appService, _spinner, authentication, vRef) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.toastr = toastr;
        _this.appService = appService;
        _this._spinner = _spinner;
        _this.authentication = authentication;
        _this.submitted = false;
        _this.form = fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8)])]
        });
        if (_this.authentication.isLoggedIn()) {
            // If token exist at localstorage then goes to dashboard.
            _this.router.navigate(['dashboard']);
        }
        else {
            // else goes to login again.
            _this.router.navigate(['login']);
        }
        FB.init({
            appId: '206515609891723',
            cookie: true,
            xfbml: true,
            version: 'v2.8',
        });
        return _this;
    }
    /**
     * get userName and password from login page and call service
     * @param loginData
     */
    Login.prototype.onSubmit = function (loginData) {
        var _this = this;
        this.submitted = true;
        this._spinner.show();
        var data = {
            'name': loginData.email,
            'password': loginData.password,
        };
        this.appService.userLogin(data).subscribe(function (data) { return _this.loginSuccess(data); }, function (error) { return _this.loginFail(error); });
    };
    /**
     * if err
     * @param err
     */
    Login.prototype.loginFail = function (err) {
        if (err.error && err.error.message) {
            this.toastr.error(err.error.message);
        }
        else {
            this.toastr.error('Server error');
        }
        this._spinner.hide();
        this.submitted = false;
    };
    /**
     * if login success
     * @param result
     */
    Login.prototype.loginSuccess = function (res) {
        this._spinner.hide();
        if (res.data.code < 0) {
            this.toastr.error('Log in failed');
        }
        else {
            this.authentication.setLoggedIn(res);
            this.toastr.success('Login Successful');
            this.router.navigate(['dashboard']);
        }
    };
    /**
     *  To navigate to sign up page.
     */
    Login.prototype.navigateToSignUp = function () {
        this.router.navigate(['/signup']);
    };
    /**
     *  To navigate to forgot password page.
     */
    Login.prototype.navigateToForwardPassword = function () {
        this.router.navigate(['/forgot-password']);
    };
    Login.prototype.onFacebookLoginClick = function () {
        var _this = this;
        this._spinner.show();
        FB.login(function (response) {
            _this.statusChangeCallback(response);
        }, { scope: 'email', return_scopes: true });
    };
    // Function for send facebook data to server
    Login.prototype.statusChangeCallback = function (resp) {
        if (resp.status === 'connected') {
            var self_1 = this;
            FB.api('/me?fields=id,name,email,first_name,last_name,gender,' +
                'picture.width(150).height(150),age_range,friends', function (result) {
                var signUpData = {
                    'first_name': result.first_name.trim(),
                    'last_name': result.last_name.trim(),
                    'email': result.email,
                    'device_token': '6a0974954e45d826239fc3c150734619745ca33e',
                    'ud_id': '12345678',
                    'device_os': 'ios',
                    'profileImageURL': result.picture.data.url,
                };
                self_1._spinner.hide();
                self_1.appService.loginWithFacebook(signUpData).subscribe(function (next) {
                    self_1.loginSuccess(next);
                }, function (Error) {
                    self_1._spinner.hide();
                    if (Error.error && Error.error.message) {
                        self_1.toastr.error(Error.error.message);
                    }
                    else {
                        self_1.toastr.error('Server error');
                    }
                });
            });
        }
        else if (resp.status === 'not_authorized') {
            FB.resetFB();
            this.toastr.error(this.constants.FBERROR);
        }
        else {
            FB.resetFB();
            this.toastr.error(this.constants.FBALERT);
        }
    };
    return Login;
}(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* AppConstant */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__app_constant__["b" /* Constants */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__app_constant__["b" /* Constants */]) === "function" && _a || Object)
], Login.prototype, "constants", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('emailField'),
    __metadata("design:type", Object)
], Login.prototype, "emailField", void 0);
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__("./src/app/pages/login/login.html"),
        styles: [__webpack_require__("./src/app/pages/login/login.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__appServices_application__["a" /* ApplicationAdminServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__appServices_application__["a" /* ApplicationAdminServices */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__theme_services__["c" /* BaThemeSpinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__theme_services__["c" /* BaThemeSpinner */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__app_authentication__["a" /* AuthenticationHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_authentication__["a" /* AuthenticationHelper */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _h || Object])
], Login);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/pages/login/login.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loginContainer\">\n    <div class=\"row loginSegment\">\n\n        <div class=\"loginBody\">\n            <div style=\"padding: 5%\">\n                <div class=\"col-md-12\">\n                    <div class=\"loginTitle\"><img [src]=\"LogoImage\"></div>\n                </div>\n                <div class=\"col-md-12\">\n                    <h2><b>Deck Of Cards</b></h2>\n                </div>\n                <div class=\"col-md-12 signIn\">\n                    <div class=\"signInText\">Sign In</div>\n                </div>\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\n                    <div class=\"form-group row col-md-12 inputbutton emaildiv\"\n                         [ngClass]=\"{'has-error': (!form.get('email').valid && form.get('email').touched), 'has-success': (form.get('email').valid && form.get('email').touched)}\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"fa fa-user\"\n                                                                                 aria-hidden=\"true\"></i></span>\n                            <input #emailField formControlName=\"email\" type=\"email\" class=\"form-control inputbox right-border\"\n                                   id=\"inputEmail3\" placeholder=\"Name\" autofocus tabindex=\"1\">\n                        </div>\n                        <div class=\"signUpErrorMessage\">\n                            <span *ngIf=\"!form.get('email').valid && form.get('email').touched\"\n                            class=\"help-block sub-little-signUp-error confpass\">Name is required.</span>\n                        </div>\n                    </div>\n                    <div class=\"form-group row col-md-12 inputbutton passwordtext\"\n                         [ngClass]=\"{'has-error': (!form.get('password').valid && form.get('password').touched), 'has-success': (form.get('password').valid && form.get('password').touched)}\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\" id=\"basic-addon\"><i class=\"fa fa-key\"\n                                                                                aria-hidden=\"true\"></i></span>\n                            <input formControlName=\"password\" type=\"password\" class=\"form-control inputbox right-border\"\n                                   id=\"inputPassword3\" placeholder=\"Password\" maxlength=\"16\" tabindex=\"2\">\n                        </div>\n                        <div class=\"signUpErrorMessage\">\n                            <span *ngIf=\"!form.get('password').valid && form.get('password').touched && form.get('password').value != ''\"\n                                  class=\"help-block sub-little-signUp-error confpass\"> Password should be 8 digit long. </span>\n                            <span *ngIf=\"form.get('password').touched && form.get('password').value == '' \"\n                                  class=\"help-block sub-little-signUp-error confpass\">Password Id is Required. </span>\n                        </div>\n                    </div>\n                    <div class=\"form-group row col-md-12 inputbutton submitButton\">\n                        <input [ngClass]=\"{'disableSubmit' : (!form.valid) }\"\n                               [disabled]=\"!form.valid\" type=\"submit\" class=\"btnStyle\" tabindex=\"3\" value=\"SIGN IN\">\n                    </div>\n                </form>\n            </div>\n            <div class=\"col-md-12 signin\" style=\"display: inline-block;\">\n                <div class=\"col-md-12\">\n                    <span>Don't have an account?</span>\n                    <a (keyup.enter)=\"navigateToSignUp()\" tabindex=\"4\"><span class=\"forgotPassword\" [routerLink]=\"['/signup']\">Sign Up</span></a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__("./src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_routing__ = __webpack_require__("./src/app/pages/login/login.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_5__login_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* Login */]
        ]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "./src/app/pages/login/login.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__login_component__["a" /* Login */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);
//# sourceMappingURL=login.routing.js.map

/***/ }),

/***/ "./src/app/pages/login/login.scss":
/***/ (function(module, exports) {

module.exports = ".auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n\n.auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n\n.auth-block p {\n    font-size: 16px; }\n\n.auth-block a {\n    text-decoration: none;\n    outline: none;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n    color: #374767; }\n\n.auth-block a:hover {\n      color: #2f3c58; }\n\n.auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n\n.auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n\n.auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n\n.auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n\n.auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n\n.auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n\n.al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n\n.al-share-auth .al-share li {\n      margin-left: 24px; }\n\n.al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n\n.al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n\n.auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n\n.auth-block p {\n    font-size: 16px; }\n\n.auth-block a {\n    text-decoration: none;\n    outline: none;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n    color: #374767; }\n\n.auth-block a:hover {\n      color: #2f3c58; }\n\n.auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n\n.auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n\n.auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n\n.auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n\n.auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n\n.auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n\n.al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n\n.al-share-auth .al-share li {\n      margin-left: 24px; }\n\n.al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n\n.al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.paginationControl {\n  width: 100%;\n  float: left;\n  padding: 0 15px; }\n\n.paginationControl #listItem .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n\n.paginationControl #listItem .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n\n.paginationControl #listItem .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n\n.paginationControl #listItem .ngx-pagination a {\n    color: #606c71; }\n\n.paginationControl #listItem .ngx-pagination a:hover {\n      background: transparent; }\n\n.paginationControl #listItem .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n\n.paginationControl #listItem ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n\n.paginationControl #listItem ul li:hover {\n      background: transparent; }\n\n.paginationControl .pageControl {\n    cursor: pointer;\n    padding: 0 10px; }\n\n.paginationControl .pageControl ul {\n      padding: 10px 0;\n      margin: 0;\n      float: left; }\n\n.btn-danger {\n  margin-left: 3px; }\n\n.btn-primary {\n  margin-right: 3px; }\n\n.btn:hover {\n  -webkit-transform: none;\n          transform: none; }\n\n.fa-rupee:before, .fa-inr:before {\n  content: \"\\F156\";\n  margin-right: 14px !important; }\n\n.ion-edit:before {\n  content: \"\\F2BF\";\n  color: #000000; }\n\n.ion-trash-b:before {\n  content: \"\\F252\";\n  color: #ff0000; }\n\ntable th, table td {\n  border: 1px solid #ddd; }\n\ntable .ng2-smart-actions {\n  text-align: center;\n  color: #374767; }\n\ntable .ng2-smart-title a {\n  color: #374767; }\n\ntable .ng2-smart-title a:hover {\n  text-decoration: none; }\n\n.inputbox {\n  border-radius: 3px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0px;\n  padding-left: 2%;\n  border: 1px solid gainsboro;\n  outline: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #666666; }\n\n.inputbox::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #666666; }\n\n.inputbox::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #666666; }\n\n.inputbox:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #666666; }\n\n.inputbox:-moz-placeholder {\n  /* Firefox 18- */\n  color: #666666; }\n\n.inputbox:focus, .inputbox:active {\n  border-color: #A5C9BB;\n  outline: 0;\n  outline: thin dotted \\9;\n  /* -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6); */\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 220, 0, 0.075), 0 0 8px rgba(0, 225, 0, 0.2);\n          box-shadow: inset 0 1px 1px rgba(0, 220, 0, 0.075), 0 0 8px rgba(0, 225, 0, 0.2); }\n\n.inputbutton {\n  line-height: 2.8;\n  margin: 3% 0 -2% 0; }\n\n.btnStyle {\n  width: 100%;\n  height: 100%;\n  background-color: #195C94;\n  color: white;\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer; }\n\n.btnStyle:focus {\n    outline: none;\n    -webkit-box-shadow: 0px 0px 2px 2px #59a453;\n            box-shadow: 0px 0px 2px 2px #59a453; }\n\n.passwordErrorMessage {\n  float: left;\n  margin-top: -35px;\n  width: 100%;\n  margin-bottom: 10px; }\n\n.divAlignLeft {\n  float: left; }\n\n.divAlignRight {\n  float: right; }\n\n.Quotedatepicker .mydp .currmonth:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .selector {\n  z-index: 1;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selection {\n  height: 33px !important;\n  color: #757575;\n  font-size: 15px !important;\n  position: relative;\n  text-align: left;\n  padding-left: 8px;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selbtngroup {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclear {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnclear:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpicker {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclearenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .mydp .btnpicker {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnpicker:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpickerenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .help-block {\n  color: red; }\n\nrl-tag-input-item {\n  margin-bottom: 3px; }\n\nrl-tag-input input {\n  font-family: 'Conv_Avenir' !important; }\n\nrl-tag-input input::-webkit-input-placeholder {\n  color: grey; }\n\nrl-tag-input-item {\n  font-family: 'Conv_Avenir' !important; }\n\n@media screen and (min-width: 200px) and (max-width: 700px) {\n  .loginSegment {\n    width: 100% !important; }\n  .signInText {\n    display: inline-block;\n    width: 27%;\n    padding: 0; } }\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  .loginSegment {\n    width: 60% !important; }\n  .signInText {\n    display: inline-block;\n    width: 27%; } }\n\n.loginContainer {\n  text-align: center; }\n\n.loginContainer .loginSegment {\n    width: 28%;\n    display: inline-block; }\n\n.loginContainer .loginSegment div {\n      text-align: center;\n      font-size: 17px;\n      font-weight: 500;\n      margin-bottom: 15px;\n      letter-spacing: 0.005em; }\n\n.loginContainer .loginSegment .loginTitle {\n      width: 60%;\n      display: inline-block; }\n\n.loginContainer .loginSegment .loginTitle img {\n        width: 100%;\n        height: 100%; }\n\n.loginContainer .loginSegment .loginBody {\n      border: 1px solid gainsboro;\n      background-color: #fff;\n      border-radius: 3px;\n      margin-top: 10px; }\n\n.loginContainer .loginSegment .loginBody .signIn {\n        padding-top: 1.4%;\n        padding-bottom: 3%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n\n.loginContainer .loginSegment .loginBody .signIn .signInText {\n          width: 80%;\n          margin: 0 auto;\n          font-size: 17px; }\n\n.loginContainer .loginSegment .loginBody .emaildiv {\n        margin-bottom: 16px; }\n\n.loginContainer .loginSegment .loginBody .submitButton {\n        margin-top: 7%; }\n\n.loginContainer .loginSegment .loginBody .passwordtext {\n        margin-top: 0px; }\n\n.loginContainer .loginSegment .loginBody .disableSubmit {\n        opacity: 0.8;\n        cursor: not-allowed; }\n\n.loginContainer .loginSegment .loginBody .disableSubmithover {\n          opacity: 0.8;\n          cursor: not-allowed; }\n\n.loginContainer .loginSegment .loginBody .input-group {\n        height: 55px; }\n\n.loginContainer .loginSegment .loginBody .input-group .input-group-addon {\n          border-bottom-left-radius: 3px;\n          border-top-left-radius: 3px; }\n\n.loginContainer .loginSegment .loginBody .right-border {\n        border-bottom-right-radius: 3px;\n        border-top-right-radius: 3px; }\n\n.loginContainer .loginSegment .loginBody .signin {\n        padding-bottom: 4.5%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n\n.loginContainer .loginSegment .loginBody .signin div {\n          padding-top: 5px; }\n\n.loginContainer .loginSegment .loginBody .signin a {\n          color: #59a453; }\n\n.loginContainer .loginSegment .loginBody .signin .forgotPassword {\n          cursor: pointer;\n          font-size: 17px;\n          color: #59a453;\n          outline: none; }\n\n.loginContainer .loginSegment .loginBody .signin .forgotPassword:hover {\n            text-decoration: underline; }\n\n.loginContainer .loginSegment .loginBody .facebook-login {\n        display: inline-block;\n        padding-left: 9%;\n        padding-right: 9%;\n        height: 74px;\n        position: relative; }\n\n.loginContainer .loginSegment .loginBody .facebook-login i {\n          position: absolute;\n          border-right: thin solid white;\n          color: white;\n          font-size: 40px;\n          height: 57px;\n          padding-right: 14px;\n          padding-left: 12px;\n          padding-top: 10px; }\n\n.loginBody .has-error .form-control {\n  border: 1px solid #fa758e; }\n\n.loginBody .has-success .form-control {\n  border: 1px solid #59a453; }\n\n.loginBody .signUpErrorMessage {\n  float: left;\n  margin-top: -35px;\n  width: 100%; }\n\n.loginBody .help-block {\n  color: red; }\n\n.loginBody .sub-little-signUp-error {\n  font-size: 12px; }\n"

/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map