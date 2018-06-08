webpackJsonp(["signUp.module"],{

/***/ "./src/app/pages/signUp/signUp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return signUp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_services__ = __webpack_require__("./src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_validators_blank_validator__ = __webpack_require__("./src/app/theme/validators/blank.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__appServices_application__ = __webpack_require__("./src/app/appServices/application.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_authentication__ = __webpack_require__("./src/app/app.authentication.ts");
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









var signUp = (function (_super) {
    __extends(signUp, _super);
    function signUp(authentication, fb, router, appService, toastr, vRef, _spinner) {
        var _this = _super.call(this) || this;
        _this.authentication = authentication;
        _this.router = router;
        _this.appService = appService;
        _this.toastr = toastr;
        _this._spinner = _spinner;
        _this.submitted = false;
        _this.fileUploadArray = [];
        _this.skillsArray = [];
        _this.skillsArray1 = [];
        _this.form = fb.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__theme_validators_blank_validator__["a" /* BlankSpaceValidator */].validate])],
            'age': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__theme_validators_blank_validator__["a" /* BlankSpaceValidator */].validate])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8)])],
            'skill': [''],
            'fileUpload': [''],
        });
        return _this;
    }
    // onSubmit
    signUp.prototype.onSubmit = function (value) {
        var _this = this;
        this._spinner.show();
        var data = {
            name: value.name,
            age: value.age,
            password: value.password,
            skills: this.skillsArray1,
            pictures: this.fileUploadArray,
        };
        // Api call to sign up, if success signUpSuccess(data) and if error signUpFail(error)
        this.appService.userSignUp(data).subscribe(function (data) { return _this.signUpSuccess(data); }, function (error) { return _this.signUpFail(error); });
    };
    /**
     * if signup success
     * @param data
     */
    signUp.prototype.signUpSuccess = function (res) {
        if (res) {
            this._spinner.hide();
            this.authentication.setLoggedIn(res.data[0].original);
            this.toastr.success('SignUp Successful');
            this.router.navigate(['/dashboard']);
        }
    };
    /**
     * if signup fail
     * @param Error
     */
    signUp.prototype.signUpFail = function (err) {
        this._spinner.hide();
        if (err.error && err.error.message) {
            this.toastr.error(err.error.message);
        }
        else {
            this.toastr.error('Server error');
        }
    };
    signUp.prototype.addSkill = function (event) {
        if (event) {
            var skillData = {
                skill: event,
            };
            this.skillsArray.push(skillData);
            this.skillsArray1.push(event);
            this.form.controls['skill'].setValue('');
        }
        else {
            this.toastr.error('Skill should not be empty');
        }
    };
    /**
     * function call when file changes from upload functionality.
     * @param event
     */
    signUp.prototype.onFileChange = function (event) {
        var _this = this;
        if (this.fileUploadArray.length <= 1) {
            var reader_1 = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                var file_1 = event.target.files[0];
                reader_1.readAsDataURL(file_1);
                reader_1.onload = function () {
                    var base64 = btoa(reader_1.result);
                    if (_this.fileUploadArray.length == 0) {
                        var fileType = file_1.type.split('/');
                        if (fileType[0] == 'image') {
                            var fileData = {
                                name: file_1.name,
                                type: file_1.type,
                                data: reader_1.result.split(',')[1],
                                encrypted: base64,
                            };
                            _this.fileUploadArray.push(fileData);
                        }
                        else {
                            _this.toastr.error('Please select Image');
                        }
                    }
                    else {
                        _this.fileUploadArray.map(function (data) {
                            if (data.encrypted == base64) {
                                _this.toastr.error('Images should be different');
                            }
                            else {
                                var fileType = file_1.type.split('/');
                                if (fileType[0] == 'image') {
                                    var fileData = {
                                        name: file_1.name,
                                        type: file_1.type,
                                        data: reader_1.result.split(',')[1],
                                        encrypted: base64,
                                    };
                                    _this.fileUploadArray.push(fileData);
                                }
                                else {
                                    _this.toastr.error('Please select Image');
                                }
                            }
                        });
                    }
                };
            }
        }
    };
    signUp.prototype.clearFile = function () {
        this.fileInput.nativeElement.value = '';
        this.fileUploadArray = [];
    };
    /**
     *  To navigate to forgot password page.
     */
    signUp.prototype.navigateToForgotPassword = function () {
        this.router.navigate(['/forgot-password']);
    };
    /**
     *  To navigate to Home page.
     */
    signUp.prototype.navigateToHome = function () {
        this.router.navigate(['']);
    };
    /**
     *  To navigate to sign in page.
     */
    signUp.prototype.navigateToSignIn = function () {
        this.router.navigate(['/login']);
    };
    signUp.prototype.trimContent = function (value, control) {
        if (value) {
            this.form.controls[control].setValue(value.trim());
        }
        return value.trim();
    };
    return signUp;
}(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* AppConstant */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], signUp.prototype, "fileInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('name'),
    __metadata("design:type", Object)
], signUp.prototype, "firstField", void 0);
signUp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'signUp',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("./src/app/pages/signUp/signUp.html"),
        styles: [__webpack_require__("./src/app/pages/signUp/signUp.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__app_authentication__["a" /* AuthenticationHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__app_authentication__["a" /* AuthenticationHelper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__appServices_application__["a" /* ApplicationAdminServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__appServices_application__["a" /* ApplicationAdminServices */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__theme_services__["c" /* BaThemeSpinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__theme_services__["c" /* BaThemeSpinner */]) === "function" && _h || Object])
], signUp);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=signUp.component.js.map

/***/ }),

/***/ "./src/app/pages/signUp/signUp.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signUpContainer\">\n    <div class=\"row signUpSegment\">\n        <div class=\"col-md-12 signup\">\n            <div class=\"col-md-12 signUpdivStyle\">\n                <div class=\"signUpTitle\"><img [src]=\"LogoImage\" (click)=\"navigateToHome()\"></div>\n            </div>\n            <div class=\"col-md-12\">\n                <h2><b>Deck Of Cards</b></h2>\n            </div>\n            <div class=\"signUpText\">Sign Up</div>\n            <form [formGroup]=\"form\" class=\"form-horizontal\">\n                <div class=\"form-group row col-md-12 inputbutton emaildiv signUpdivStyle\"\n                     [ngClass]=\"{'has-error': (!form.get('name').valid && form.get('name').touched), 'has-success': (form.get('name').valid && form.get('name').touched)}\">\n                    <div class=\"input-group sign-up-input\">\n                        <span class=\"input-group-addon\" id=\"basic-addon\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>\n                        <input formControlName=\"name\" type=\"text\" class=\"form-control inputbox right-border\"\n                               id=\"inputFirstName\" placeholder=\"name\" #name (blur)=\"name.value = trimContent(name.value, 'name')\" maxlength=\"30\"  tabindex=\"1\">\n                    </div>\n                    <div class=\"signUpErrorMessage\">\n                    <span *ngIf=\"!form.get('name').valid && form.get('name').touched\"\n                          class=\"help-block sub-little-signUp-error confpass\">Name is required.</span>\n                    </div>\n                </div>\n\n                <div class=\"form-group row col-md-12 inputbutton emaildiv signUpdivStyle\"\n                     [ngClass]=\"{'has-error': (!form.get('age').valid && form.get('age').touched), 'has-success': (form.get('age').valid && form.get('age').touched)}\">\n                    <div class=\"input-group sign-up-input\">\n                        <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"fa fa-venus-mars\" aria-hidden=\"true\"></i></span>\n\n                        <input formControlName=\"age\" type=\"text\" class=\"form-control inputbox right-border\"\n                               id=\"inputLastName\" placeholder=\"Age\" min=\"0\" max=\"99\" pattern=\"([0-9]+\\s?){2}$\" maxlength=\"2\" tabindex=\"2\">\n                    </div>\n                    <div class=\"signUpErrorMessage\">\n                    <span *ngIf=\"!form.get('age').valid && form.get('age').touched\"\n                          class=\"help-block sub-little-signUp-error confpass\">Age is required.</span>\n                    </div>\n                </div>\n\n                <div class=\"form-group row col-md-12 inputbutton emaildiv signUpdivStyle\"\n                     [ngClass]=\"{'has-error': (!form.get('password').valid && form.get('password').touched), 'has-success': (form.get('password').valid && form.get('password').touched)}\">\n                    <div class=\"input-group sign-up-input\">\n                        <span class=\"input-group-addon\" ><i class=\"fa fa fa-key\" aria-hidden=\"true\"></i></span>\n\n                        <input formControlName=\"password\" class=\"form-control inputbox right-border\"\n                                placeholder=\"Password\" type=\"password\" maxlength=\"10\">\n                    </div>\n                    <div class=\"signUpErrorMessage\">\n                            <span *ngIf=\"!form.get('password').valid && form.get('password').touched && form.get('password').value != ''\"\n                                  class=\"help-block sub-little-signUp-error confpass\"> Password should be 8 digit long. </span>\n                        <span *ngIf=\"form.get('password').touched && form.get('password').value == '' \"\n                              class=\"help-block sub-little-signUp-error confpass\">Password Id is Required. </span>\n                    </div>\n                </div>\n\n                <div  class=\"form-group row col-md-12 inputbutton signUpdivStyle\">\n                            <div *ngIf=\"this.skillsArray.length == 0\" style=\"margin: 0 auto\"><span style=\"font-size: 12px; color: red;\" ><i>add skill and enter</i></span></div>\n                            <span style=\"padding: 0; border-radius: 2px; overflow: hidden; border: 1px solid #3b5998; display: block; color: #3b5998; margin: 5px\"\n                                  *ngFor=\"let item of skillsArray, let j =index\">\n                        <span class=\"btn btn-default\" style=\" overflow: hidden;text-overflow: ellipsis; \">\n                            <i style=\"padding: 0 1px 0 1px\" class=\"fa fa-tag fa-1x\"></i>\n                            {{item.skill}}</span>\n                        <span (click)=\"this.skillsArray.splice(j,1)\" class=\"btn btn-default\">\n                            <i class=\"fa fa-close\"></i>\n                                </span>\n                    </span>\n                </div>\n\n                <div class=\"form-group row col-md-12 inputbutton emaildiv signUpdivStyle\"\n                     [ngClass]=\"{'has-error': (!form.get('skill').valid && form.get('skill').touched), 'has-success': (form.get('skill').valid && form.get('skill').touched)}\">\n                    <div class=\"input-group sign-up-input\">\n                        <span class=\"input-group-addon\" ><i class=\"fa fa-black-tie\" aria-hidden=\"true\"></i></span>\n\n                        <input maxlength=\"20\" (keyup.enter)=\"form.get('skill').valid && addSkill(form.controls['skill'].value)\"\n                               formControlName=\"skill\" type=\"text\" class=\"form-control inputbox right-border\"\n                               placeholder=\"skill\" tabindex=\"2\">\n                    </div>\n                    <div class=\"signUpErrorMessage\">\n                    </div>\n                </div>\n                <div class=\"form-group row col-md-12 inputbutton signUpdivStyle\">\n                <span style=\"overflow: hidden; width: 80%; display: flex; text-overflow: ellipsis; color: #3b5998; margin: 5px\"\n                      *ngFor=\"let files of fileUploadArray, let j =index\">\n                        <span class=\"btn btn-default\"\n                              style=\"border: 1px solid #3b5998; overflow: hidden;text-overflow: ellipsis; \">\n                            <i style=\"padding: 0 5px 0 5px\" class=\"fa fa-file\"></i>\n                            {{files.name}}</span>\n                        <span (click)=\"this.fileUploadArray.splice(j,1)\" class=\"btn btn-default\"\n                              style=\"border: 1px solid #3b5998;color: red;\"><i class=\"fa fa-trash\"></i></span>\n                    </span>\n                </div>\n\n                <div class=\"form-group row col-md-12 inputbutton emaildiv signUpdivStyle\"\n                     [ngClass]=\"{'has-error': (!form.get('skill').valid && form.get('skill').touched), 'has-success': (form.get('skill').valid && form.get('skill').touched)}\">\n                    <div class=\"input-group sign-up-input\">\n                        <input [disabled]=\"this.fileUploadArray == 2\" style=\"font-size: 12px; height: 40px;\" type=\"file\" formControlName=\"fileUpload\" (change)=\"onFileChange($event)\" #fileInput multiple>\n                    </div>\n                    <div class=\"signUpErrorMessage\">\n                    </div>\n                </div>\n\n\n                <div class=\"form-group row col-md-12 inputbutton submitButton signUpdivStyle\">\n                    <button (click)=\"onSubmit(form.value)\" [ngClass]=\"{'disableSubmit' : (form.invalid || fileUploadArray == 0 || skillsArray == 0) }\"\n                           [disabled]=\"form.invalid || fileUploadArray == 0 || skillsArray == 0\"\n                           type=\"submit\" class=\"btnStyle signUpButton\" tabindex=\"2\">SIGN UP</button>\n                </div>\n\n            </form>\n            <div class=\"col-md-12 alreadyHaveAccount signUpdivStyle\">\n                <div class=\"col-md-12 signUpdivStyle signUpFooter\">\n                    <span>Already have an account?</span>\n                    <a tabindex=\"5\" (click)=\"navigateToSignIn()\"><span class=\"forgotPassword\">Sign In</span></a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/signUp/signUp.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function() { return SignUpModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signUp_component__ = __webpack_require__("./src/app/pages/signUp/signUp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signUp_routing__ = __webpack_require__("./src/app/pages/signUp/signUp.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SignUpModule = (function () {
    function SignUpModule() {
    }
    return SignUpModule;
}());
SignUpModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__signUp_routing__["a" /* routing */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__signUp_component__["a" /* signUp */]
        ]
    })
], SignUpModule);

//# sourceMappingURL=signUp.module.js.map

/***/ }),

/***/ "./src/app/pages/signUp/signUp.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signUp_component__ = __webpack_require__("./src/app/pages/signUp/signUp.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__signUp_component__["a" /* signUp */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);
//# sourceMappingURL=signUp.routing.js.map

/***/ }),

/***/ "./src/app/pages/signUp/signUp.scss":
/***/ (function(module, exports) {

module.exports = ".auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n\n.auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n\n.auth-block p {\n    font-size: 16px; }\n\n.auth-block a {\n    text-decoration: none;\n    outline: none;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n    color: #374767; }\n\n.auth-block a:hover {\n      color: #2f3c58; }\n\n.auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n\n.auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n\n.auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n\n.auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n\n.auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n\n.auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n\n.al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n\n.al-share-auth .al-share li {\n      margin-left: 24px; }\n\n.al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n\n.al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n\n.auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n\n.auth-block p {\n    font-size: 16px; }\n\n.auth-block a {\n    text-decoration: none;\n    outline: none;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n    color: #374767; }\n\n.auth-block a:hover {\n      color: #2f3c58; }\n\n.auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n\n.auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n\n.auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n\n.auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n\n.auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n\n.auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n\n.al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n\n.al-share-auth .al-share li {\n      margin-left: 24px; }\n\n.al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n\n.al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.paginationControl {\n  width: 100%;\n  float: left;\n  padding: 0 15px; }\n\n.paginationControl #listItem .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n\n.paginationControl #listItem .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n\n.paginationControl #listItem .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n\n.paginationControl #listItem .ngx-pagination a {\n    color: #606c71; }\n\n.paginationControl #listItem .ngx-pagination a:hover {\n      background: transparent; }\n\n.paginationControl #listItem .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n\n.paginationControl #listItem ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n\n.paginationControl #listItem ul li:hover {\n      background: transparent; }\n\n.paginationControl .pageControl {\n    cursor: pointer;\n    padding: 0 10px; }\n\n.paginationControl .pageControl ul {\n      padding: 10px 0;\n      margin: 0;\n      float: left; }\n\n.btn-danger {\n  margin-left: 3px; }\n\n.btn-primary {\n  margin-right: 3px; }\n\n.btn:hover {\n  -webkit-transform: none;\n          transform: none; }\n\n.fa-rupee:before, .fa-inr:before {\n  content: \"\\F156\";\n  margin-right: 14px !important; }\n\n.ion-edit:before {\n  content: \"\\F2BF\";\n  color: #000000; }\n\n.ion-trash-b:before {\n  content: \"\\F252\";\n  color: #ff0000; }\n\ntable th, table td {\n  border: 1px solid #ddd; }\n\ntable .ng2-smart-actions {\n  text-align: center;\n  color: #374767; }\n\ntable .ng2-smart-title a {\n  color: #374767; }\n\ntable .ng2-smart-title a:hover {\n  text-decoration: none; }\n\n.inputbox {\n  border-radius: 3px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0px;\n  padding-left: 2%;\n  border: 1px solid gainsboro;\n  outline: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #666666; }\n\n.inputbox::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #666666; }\n\n.inputbox::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #666666; }\n\n.inputbox:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #666666; }\n\n.inputbox:-moz-placeholder {\n  /* Firefox 18- */\n  color: #666666; }\n\n.inputbox:focus, .inputbox:active {\n  border-color: #A5C9BB;\n  outline: 0;\n  outline: thin dotted \\9;\n  /* -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6); */\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 220, 0, 0.075), 0 0 8px rgba(0, 225, 0, 0.2);\n          box-shadow: inset 0 1px 1px rgba(0, 220, 0, 0.075), 0 0 8px rgba(0, 225, 0, 0.2); }\n\n.inputbutton {\n  line-height: 2.8;\n  margin: 3% 0 -2% 0; }\n\n.btnStyle {\n  width: 100%;\n  height: 100%;\n  background-color: #195C94;\n  color: white;\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer; }\n\n.btnStyle:focus {\n    outline: none;\n    -webkit-box-shadow: 0px 0px 2px 2px #59a453;\n            box-shadow: 0px 0px 2px 2px #59a453; }\n\n.passwordErrorMessage {\n  float: left;\n  margin-top: -35px;\n  width: 100%;\n  margin-bottom: 10px; }\n\n.divAlignLeft {\n  float: left; }\n\n.divAlignRight {\n  float: right; }\n\n.Quotedatepicker .mydp .currmonth:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .selector {\n  z-index: 1;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selection {\n  height: 33px !important;\n  color: #757575;\n  font-size: 15px !important;\n  position: relative;\n  text-align: left;\n  padding-left: 8px;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selbtngroup {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclear {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnclear:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpicker {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclearenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .mydp .btnpicker {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnpicker:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpickerenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .help-block {\n  color: red; }\n\nrl-tag-input-item {\n  margin-bottom: 3px; }\n\nrl-tag-input input {\n  font-family: 'Conv_Avenir' !important; }\n\nrl-tag-input input::-webkit-input-placeholder {\n  color: grey; }\n\nrl-tag-input-item {\n  font-family: 'Conv_Avenir' !important; }\n\n.signUpContainer {\n  text-align: center; }\n\n.signUpContainer .signUpSegment {\n    width: 30%;\n    display: inline-block; }\n\n.signUpContainer .signUpSegment .signUpdivStyle {\n      text-align: center;\n      margin: 5%;\n      font-size: 17px;\n      font-weight: 500;\n      letter-spacing: 0.005em; }\n\n.signUpContainer .signUpSegment .signUpTitle {\n      width: 100%;\n      display: inline-block;\n      margin-top: 15%; }\n\n.signUpContainer .signUpSegment .signUpTitle img {\n        cursor: pointer;\n        width: 60%; }\n\n.signUpContainer .signUpSegment .signup {\n      border: 1px solid gainsboro;\n      background-color: #fff;\n      border-radius: 3px;\n      margin-top: 10px;\n      cursor: text; }\n\n.signUpContainer .signUpSegment .signup .signUpdivStyle {\n        text-align: center;\n        font-size: 17px;\n        margin-top: 5%;\n        margin-bottom: 16px;\n        font-weight: 500;\n        letter-spacing: 0.005em;\n        cursor: text; }\n\n.signUpContainer .signUpSegment .signup .signUpdivStyle .sign-up-input {\n          height: 95%; }\n\n.signUpContainer .signUpSegment .signup .right-border {\n        border-bottom-right-radius: 5px;\n        border-top-right-radius: 5px; }\n\n.signUpContainer .signUpSegment .signup .input-group .input-group-addon {\n        border-bottom-left-radius: 5px;\n        border-top-left-radius: 5px; }\n\n.signUpContainer .signUpSegment .signup .emaildiv {\n        margin-bottom: 16px; }\n\n.signUpContainer .signUpSegment .signup .submitButton {\n        margin-top: 5%;\n        cursor: pointer; }\n\n.signUpContainer .signUpSegment .signup .signUpText {\n        width: 80%;\n        margin: 0 auto;\n        margin-top: 7%;\n        font-size: 17px; }\n\n.signUpContainer .signUpSegment .signup .disableSubmit {\n        opacity: 0.8;\n        cursor: not-allowed; }\n\n.signUpContainer .signUpSegment .signup .disableSubmit:hover {\n          opacity: 0.8;\n          cursor: not-allowed; }\n\n.signUpContainer .signUpSegment .signup .help-block {\n        color: red; }\n\n.signUpContainer .signUpSegment .signup .sub-little-text {\n        font-size: 12px; }\n\n.signUpContainer .signUpSegment .signup .alreadyHaveAccount {\n        margin-bottom: 5%; }\n\n.signUpContainer .signUpSegment .signUpErrorMessage {\n      float: left;\n      margin-top: -35px;\n      width: 100%; }\n\n.signUpContainer .signUpSegment .sub-little-signUp-error {\n      font-size: 12px; }\n\n.signUpContainer .signUpSegment a {\n      color: #59a453; }\n\n.signUpContainer .signUpSegment .forgotPassword {\n      cursor: pointer;\n      font-size: 17px;\n      color: #59a453; }\n\n.signUpContainer .signUpSegment .forgotPassword:hover {\n        text-decoration: underline; }\n\n@media screen and (min-width: 200px) and (max-width: 700px) {\n  .signUpSegment {\n    width: 100%; }\n  .horizontalLine {\n    display: inline-block;\n    width: 35%; }\n    .horizontalLine hr {\n      margin-top: -4px;\n      margin-bottom: 0; }\n  .signUpText {\n    display: inline-block;\n    width: 27%;\n    padding: 0; } }\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  .signUpSegment {\n    width: 60% !important; }\n  .signUpText {\n    display: inline-block;\n    width: 27%; } }\n\n@media screen and (min-width: 200px) and (max-width: 700px) {\n  .signUpSegment {\n    width: 100% !important; }\n  .signUpText {\n    display: inline-block;\n    width: 27%;\n    padding: 0; } }\n"

/***/ }),

/***/ "./src/app/theme/validators/blank.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankSpaceValidator; });
/**
 * Created by lt-68 on 3/11/17.
 */
var BlankSpaceValidator = (function () {
    function BlankSpaceValidator() {
    }
    BlankSpaceValidator.validate = function (c) {
        var blankSpace_REGEXP = /.*\S.*/;
        return blankSpace_REGEXP.test(c.value) ? null : { validateBlankSpace: { valid: false } };
    };
    return BlankSpaceValidator;
}());

//# sourceMappingURL=blank.validator.js.map

/***/ })

});
//# sourceMappingURL=signUp.module.chunk.js.map