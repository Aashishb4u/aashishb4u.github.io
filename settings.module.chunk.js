webpackJsonp(["settings.module"],{

/***/ "../../../../../src/app/pages/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_authentication__ = __webpack_require__("../../../../../src/app/app.authentication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appServices_application__ = __webpack_require__("../../../../../src/app/appServices/application.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_services_baThemeSpinner_baThemeSpinner_service__ = __webpack_require__("../../../../../src/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_validators_email_validator__ = __webpack_require__("../../../../../src/app/theme/validators/email.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_validators_blank_validator__ = __webpack_require__("../../../../../src/app/theme/validators/blank.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__theme_validators_equalPasswords_validator__ = __webpack_require__("../../../../../src/app/theme/validators/equalPasswords.validator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var settings = (function () {
    function settings(router, adminServices, fb, authentication, appService, toastr, vRef, _spinner) {
        this.router = router;
        this.adminServices = adminServices;
        this.fb = fb;
        this.authentication = authentication;
        this.appService = appService;
        this.toastr = toastr;
        this._spinner = _spinner;
        this.showError = false;
        this.settingComponent = true;
        this.passwordComponent = false;
        this.notificationComponent = false;
        this.accreditionComponent = false;
        this.authentication.setChangedContentTopText('Settings');
    }
    settings.prototype.ngOnInit = function () {
        // window.scrollTo(0, 0);
        // this.userBasicInfo();
        // this.getUserProfileDetails();
    };
    // ngAfterViewInit() {
    //     this.firstField.first.nativeElement.focus();
    // }
    settings.prototype.userBasicInfo = function () {
        var _this = this;
        this.form = this.fb.group({
            'firstName': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_8__theme_validators_blank_validator__["a" /* BlankSpaceValidator */].validate])),
            'lastName': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_8__theme_validators_blank_validator__["a" /* BlankSpaceValidator */].validate])),
            'email': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_7__theme_validators_email_validator__["a" /* EmailValidator */].validate])),
            'phoneNumber': this.fb.control(''),
            'profile_img': this.fb.control(''),
            'chooseImage': this.fb.control(''),
        });
        this.changePasswordForm = this.fb.group({
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(16)])],
            'passwords': this.fb.group({
                'newPassword': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8)])],
                'confirmPassword': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8)])]
            }, { validator: __WEBPACK_IMPORTED_MODULE_10__theme_validators_equalPasswords_validator__["a" /* EqualPasswordsValidator */].validate('newPassword', 'confirmPassword') })
        });
        this.changePasswordForm.valueChanges.subscribe(function (data) {
            if (data.password && data.password.length > 0 && data.passwords.newPassword && data.passwords.newPassword.length > 0) {
                if (data.password == data.passwords.newPassword) {
                    _this.showError = true;
                }
                else {
                    _this.showError = false;
                }
            }
        });
    };
    /**
     * To set user user data initially on page load.
     */
    settings.prototype.setUserData = function (userData) {
        this.getUserData = userData;
        if (this.getUserData.firstName) {
            this.form.controls['firstName'].setValue(this.getUserData.firstName);
        }
        if (this.getUserData.lastName) {
            this.form.controls['lastName'].setValue(this.getUserData.lastName);
        }
        if (this.getUserData.email) {
            this.form.controls['email'].setValue(this.getUserData.email);
        }
        if (this.getUserData.mobileNumber) {
            if (this.getUserData.mobileNumber.length > 0) {
                var mobileNo = this.getUserData.mobileNumber[0];
                this.form.controls['phoneNumber'].setValue(mobileNo);
            }
        }
        if (this.getUserData.profileImageURL) {
            this.imageUrl = this.getUserData.profileImageURL;
        }
    };
    settings.prototype.triggers = function () {
        this.fileUpload.nativeElement.click();
    };
    /**
     * Function to load image.
     */
    settings.prototype.fileChangeListener = function ($event) {
        var _this = this;
        var image = new Image();
        var file = $event.target.files[0];
        if ($event.target.files.length != 0) {
            if (file.type.substring(0, 5) == 'image') {
                var myReader = new FileReader();
                myReader.onloadend = function (loadEvent) {
                    image.src = loadEvent.target.result;
                    if (file.size <= 2000000) {
                        var a = image.src.split(',')[1];
                        _this.form.controls['profile_img'].patchValue(image.src);
                        _this.toastr.success('Image uploaded successfully');
                        _this.previewImage(image.src);
                    }
                    else {
                        $event.target.value = '';
                        _this.toastr.error('File should be less than 2 MB');
                    }
                };
                myReader.readAsDataURL(file);
            }
            else {
                $event.target.value = '';
                this.toastr.error('Invalid File type');
            }
        }
    };
    settings.prototype.previewImage = function (src) {
        this.form.controls['profile_img'].patchValue(src);
        this.imageUrl = src;
    };
    //onSubmit
    settings.prototype.onSubmit = function (value) {
        var _this = this;
        this._spinner.show();
        var profileData = {
            'first_name': value.firstName,
            'last_name': value.lastName,
            'email': value.email,
            'mobile_number': value.phoneNumber,
            'profile_image': value.profile_img
        };
        // Api call to edit profile, if success editUserProfile(data) and if error editUserProfileFail(error)
        this.appService.editUserProfile(profileData).subscribe(function (data) { return _this.editProfileSuccess(data); }, function (error) { return _this.editProfileFail(error); });
    };
    // Api call to get user profile, if success getUserProfileSuccess(data) and if error getUserProfileFail(error)
    settings.prototype.getUserProfileDetails = function () {
        var _this = this;
        this.appService.getUserProfile().subscribe(function (data) { return _this.getUserProfileSuccess(data); }, function (error) { return _this.getUserProfileFail(error); });
    };
    //if get user profile success
    settings.prototype.getUserProfileSuccess = function (resultantUserData) {
        var userData = resultantUserData.success.data.user;
        this.setUserData(userData);
    };
    //if get user profile fail
    settings.prototype.getUserProfileFail = function (err) {
        if (err.error && err.error.message) {
            this.toastr.error(err.error.message);
        }
        else if (typeof (err.error) !== 'undefined') {
            this.toastr.error('Server error');
        }
    };
    //if edit profile success
    settings.prototype.editProfileSuccess = function (profileData) {
        if (profileData.success.data.user) {
            var userData = profileData.success.data.user;
            this.authentication.setUserLocal(profileData);
            // this.form.reset();
            // this.setUserData(userData);
            this.authentication.userValueChangedEvent(userData);
            this.authentication.setUser(userData);
            this._spinner.hide();
            this.toastr.success('Profile updated successfully.');
        }
    };
    //if edit profile fail
    settings.prototype.editProfileFail = function (err) {
        this._spinner.hide();
        if (err.error && err.error.message) {
            this.toastr.error(err.error.message);
        }
        else if (typeof (err.error) !== 'undefined') {
            this.toastr.error('Server error');
        }
    };
    /**
     * Function to submit data for changing password.
     */
    settings.prototype.onChangePasswordSubmit = function (data) {
        var _this = this;
        this._spinner.show();
        var changePasswordData = {
            old_password: data.password,
            new_password: data.passwords.newPassword
        };
        this.adminServices.changePassword(changePasswordData).subscribe(function (data) { return _this.changePasswordSuccess(data); }, function (error) { return _this.changePasswordFail(error); });
    };
    //if change password success
    settings.prototype.changePasswordSuccess = function (result) {
        this._spinner.hide();
        this.toastr.success('Password changed successfully.');
        this.changePasswordForm.reset();
        this.showError = false;
    };
    //if change password fail
    settings.prototype.changePasswordFail = function (err) {
        this._spinner.hide();
        if (err.error && err.error.message) {
            this.toastr.error(err.error.message);
        }
        else if (typeof (err.error) !== 'undefined') {
            this.toastr.error('Server error');
        }
    };
    // Function to make selected tab active and other's inactive.
    settings.prototype.changeTab = function (id) {
        if (id == "password") {
            this.passwordComponent = true;
            this.settingComponent = false;
            this.notificationComponent = false;
            this.accreditionComponent = false;
        }
        else if (id == "notification") {
            this.notificationComponent = true;
            this.settingComponent = false;
            this.passwordComponent = false;
            this.accreditionComponent = false;
        }
        else if (id == "accredition") {
            this.accreditionComponent = true;
            this.settingComponent = false;
            this.passwordComponent = false;
            this.notificationComponent = false;
        }
        else {
            this.settingComponent = true;
            this.accreditionComponent = false;
            this.passwordComponent = false;
            this.notificationComponent = false;
        }
    };
    settings.prototype.trimContent = function (value, control) {
        if (value) {
            this.form.controls[control].setValue(value.trim());
        }
        return value.trim();
    };
    return settings;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileUpload'),
    __metadata("design:type", Object)
], settings.prototype, "fileUpload", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('confirmUserChangePasswordModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9_ng2_modal__["Modal"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ng2_modal__["Modal"]) === "function" && _a || Object)
], settings.prototype, "confirmUserChangePasswordModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('firstName'),
    __metadata("design:type", Object)
], settings.prototype, "firstField", void 0);
settings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'settings',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__("../../../../../src/app/pages/settings/settings.scss")],
        template: __webpack_require__("../../../../../src/app/pages/settings/settings.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__appServices_application__["a" /* ApplicationAdminServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__appServices_application__["a" /* ApplicationAdminServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__app_authentication__["a" /* AuthenticationHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_authentication__["a" /* AuthenticationHelper */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__appServices_application__["a" /* ApplicationAdminServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__appServices_application__["a" /* ApplicationAdminServices */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__theme_services_baThemeSpinner_baThemeSpinner_service__["a" /* BaThemeSpinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__theme_services_baThemeSpinner_baThemeSpinner_service__["a" /* BaThemeSpinner */]) === "function" && _j || Object])
], settings);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"main-campaign\">-->\n    <!--<div class=\"panel panel-primary\">-->\n        <!--<div class=\"panel-body\">-->\n            <!--<div class=\"wizard\">-->\n                <!--<div class=\"profileTab\" [ngClass]=\"{'currentTab' : settingComponent}\" id=\"setting\"-->\n                     <!--(click)=\"changeTab('setting')\"><a><i class=\"fa fa-cog profileIcon\" aria-hidden=\"true\"></i><span class=\"tabText\">Settings</span></a>-->\n                <!--</div>-->\n                <!--<div class=\"profileTab\" [ngClass]=\"{'currentTab' : passwordComponent}\" id=\"password\"-->\n                     <!--(click)=\"changeTab('password')\"><a><i class=\"fa fa-key profileIcon\" aria-hidden=\"true\"></i><span class=\"tabText\">Change-->\n                    <!--Password</span></a></div>-->\n                <!--<div class=\"profileTab disableTab\" [ngClass]=\"{'currentTab' : notificationComponent}\" id=\"notification\"-->\n                <!--&gt;<a><i class=\"fa fa-bell profileIcon\" aria-hidden=\"true\"></i><span class=\"tabText\">Notifications</span></a>-->\n                <!--</div>-->\n                <!--&lt;!&ndash;(click)=\"changeTab('notification')\"&ndash;&gt;-->\n                <!--<div class=\"profileTab disableTab\" [ngClass]=\"{'currentTab' : accreditionComponent}\" id=\"accredition\"-->\n                <!--&gt;<a><i class=\"fa fa-file profileIcon\" aria-hidden=\"true\"></i><span class=\"tabText\">Accreditation</span></a>-->\n                <!--</div>-->\n                <!--&lt;!&ndash;(click)=\"changeTab('accredition')\"&ndash;&gt;-->\n            <!--</div>-->\n        <!--</div>-->\n    <!--</div>-->\n<!--</div>-->\n<div class=\"profileContainer\">\n    <div class=\"container\">\n        <div style=\"margin: 0;\" class=\"col-sm-12 col-xs-12 col-lg-12 col-md-12 row  \">\n            <div class=\"col-sm-12 col-xs-12 col-lg-4 col-md-6 list-group adjust-list-buttons\">\n                <a [routerLink]=\"['/viewTags']\" class=\"list-group-item\" ><i class=\"fa fa-tags\"></i>&nbsp; &nbsp; Tags </a>\n            </div>\n            <!--<div class=\"col-sm-12 col-xs-12 col-lg-6 col-md-12 list-group adjust-list-buttons\">-->\n                <!--<a [routerLink]=\"['/viewTemplates']\" class=\"list-group-item\" ><i class=\"fa fa-sticky-note-o\"></i>&nbsp; &nbsp; Templates </a>-->\n            <!--</div>-->\n        </div>\n        <div style=\"margin: 0; margin-bottom: 350px;\" class=\"col-sm-12 col-xs-12 col-lg-12 col-md-12 row  \">\n        </div>\n    </div>\n</div>\n<!--<div class=\"profileContainer\">-->\n    <!--<div class=\"profileContent divAlignLeft\" *ngIf=\"settingComponent\">-->\n        <!--<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">-->\n            <!--<div class=\"col-md-12 profileForm divAlignLeft\">-->\n                <!--&lt;!&ndash;image section&ndash;&gt;-->\n                <!--<div class=\"col-md-12 divAlignLeft userImageContainer\">-->\n                    <!--<div class=\"col-md-12 sectionTitleImage\">-->\n                        <!--Profile Picture-->\n                    <!--</div>-->\n                    <!--<div class=\"col-md-3 userImageDiv\">-->\n                        <!--<div class=\"userImage\">-->\n                            <!--<img class=\"userProfileImage\" [src]=\"imageUrl\">-->\n                        <!--</div>-->\n                    <!--</div>-->\n                    <!--<div class=\"col-md-9 profileDiv\">-->\n                        <!--&lt;!&ndash;<p class=\"small\">Choose your profile pic.</p>&ndash;&gt;-->\n                        <!--<input formControlName=\"chooseImage\" #fileUpload class=\"profileImage\" type=\"file\"-->\n                               <!--(change)=\"fileChangeListener($event)\">-->\n                    <!--</div>-->\n                <!--</div>-->\n\n                <!--&lt;!&ndash;url section&ndash;&gt;-->\n                <!--<div class=\"col-md-12 divAlignLeft userUrlContainer\">-->\n                    <!--<div class=\"col-md-12 userUrl\">-->\n                        <!--Your Profile URL-->\n                    <!--</div>-->\n                    <!--<div class=\"col-md-12 userUrlMessage\">-->\n                        <!--Your profile will be accessible from the following URL-->\n                    <!--</div>-->\n                    <!--<div class=\"col-md-12 userUrlBox\">-->\n                        <!--<div class=\"col-md-12 userUrlInner\">-->\n                            <!--<input type=\"text\" class=\"userUrlButton\" value=\"http://equity.tudip.uk/user\">-->\n                        <!--</div>-->\n                    <!--</div>-->\n                    <!--<div class=\"col-md-12 buttonsUrl\">-->\n                        <!--<div>-->\n                            <!--<input type=\"button\" class=\"urlCancelButtons\" value=\"CANCEL\">-->\n\n                            <!--<input type=\"button\" class=\"urlButtons\" value=\"SAVE\">-->\n                        <!--</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n\n                 <!--&lt;!&ndash;user info section&ndash;&gt;-->\n                <!--<div class=\"col-md-12 divAlignLeft\">-->\n                    <!--<div class=\"col-md-12 sectionTitle\">-->\n                        <!--User Information-->\n                    <!--</div>-->\n                    <!--<div class=\"col-md-6 profileInput\">-->\n                        <!--<div>-->\n                            <!--<label class=\"labelStyle\">First Name&nbsp;<i class=\"required\">*</i></label>-->\n                            <!--<input formControlName=\"firstName\" type=\"text\" class=\"form-control\" #firstName (blur)=\"firstName.value = trimContent(firstName.value, 'firstName')\" maxlength=\"30\">-->\n                        <!--</div>-->\n                        <!--<div class=\"profileErrorMessage\">-->\n                             <!--<span *ngIf=\"!form.get('firstName').valid && form.get('firstName').touched\"-->\n                                   <!--class=\"help-block sub-little-signUp-error\">First Name is required.</span>-->\n                        <!--</div>-->\n                    <!--</div>-->\n                    <!--<div class=\"col-md-6 profileInput\">-->\n                        <!--<div>-->\n                            <!--<label class=\"labelStyle\">Last Name&nbsp;<i class=\"required\">*</i></label>-->\n                            <!--<input formControlName=\"lastName\" type=\"text\" class=\"form-control\" #lastName (blur)=\"lastName.value = trimContent(lastName.value, 'lastName')\" maxlength=\"30\">-->\n                        <!--</div>-->\n                        <!--<div class=\"profileErrorMessage\">-->\n                            <!--<span *ngIf=\"!form.get('lastName').valid && form.get('lastName').touched\"-->\n                                  <!--class=\"help-block sub-little-signUp-error\">Last Name is required.</span>-->\n                        <!--</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n\n                <!--<div class=\"col-md-12 divAlignLeft\">-->\n                    <!--<div class=\"col-md-6 profileInput\">-->\n                        <!--<div style=\"\">-->\n                            <!--<label class=\"labelStyle\">Email&nbsp;<i class=\"required\">*</i></label>-->\n                            <!--<input disabled formControlName=\"email\" type=\"text\" class=\"form-control\" maxlength=\"60\">-->\n                        <!--</div>-->\n                        <!--<div class=\"profileErrorMessage\">-->\n                            <!--<span *ngIf=\"!form.get('email').valid && form.get('email').touched\"-->\n                                  <!--class=\"help-block sub-little-signUp-error\">Email is required and must be valid.-->\n                            <!--</span>-->\n                        <!--</div>-->\n                    <!--</div>-->\n                    <!--<div class=\"col-md-6 profileInput\">-->\n                        <!--<div>-->\n                            <!--<label class=\"labelStyle\">Mobile Number</label>-->\n                            <!--<input formControlName=\"phoneNumber\" type=\"text\" class=\"form-control\"-->\n                                   <!--minlength=\"12\" maxlength=\"12\"  ngControl=\"phoneNumber\"-->\n                               <!--onkeyup=\"var x =this.value.replace(/\\D/g, '').match(/(\\d{0,3})(\\d{0,3})(\\d{0,4})/);-->\n                                        <!--this.value = !x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '')+(x[4] ? '-' + x[4] : '');\"-->\n                               <!--onkeypress=\"if(event.charCode < 48 || event.charCode > 57){return false};\" >-->\n                        <!--</div>-->\n                        <!--<div class=\"profileErrorMessage\">-->\n                            <!--<span *ngIf=\"!form.get('phoneNumber').valid && form.get('phoneNumber').touched\"-->\n                              <!--class=\"help-block sub-little-signUp-error\">-->\n                                <!--Phone number should have 10 digits.-->\n                            <!--</span>-->\n                        <!--</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n\n                <!--<div class=\"col-md-12 form-group inputbutton submitButton\" style=\"float: left;\">-->\n                    <!--<button [ngClass]=\"{'disableSubmit' : (!form.valid || submitted) }\"-->\n                            <!--[disabled]=\"!form.valid || submitted\" type=\"submit\" class=\"btnStyle\">UPDATE PROFILE-->\n                    <!--</button>-->\n                    <!--&lt;!&ndash;<button [disabled]=\"form.invalid\" type=\"submit\" class=\"btnStyle\">UPDATE PROFILE&ndash;&gt;-->\n                    <!--&lt;!&ndash;</button>&ndash;&gt;-->\n                <!--</div>-->\n\n            <!--</div>-->\n        <!--</form>-->\n    <!--</div>-->\n\n    <!--&lt;!&ndash;Change Password page&ndash;&gt;-->\n    <!--<div class=\"profileContent changePasswordContent\" *ngIf=\"passwordComponent\">-->\n        <!--<form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"onChangePasswordSubmit(changePasswordForm.value)\">-->\n            <!--<div class=\"col-md-12 divAlignLeft\">-->\n\n                    <!--&lt;!&ndash;current password&ndash;&gt;-->\n                    <!--<div class=\"form-group  col-md-6  changePasswordInput\"-->\n                         <!--[ngClass]=\"{'has-error': (!changePasswordForm.get('password').valid && changePasswordForm.get('password').touched),-->\n                                     <!--'has-success': (changePasswordForm.get('password').valid && changePasswordForm.get('password').touched)}\">-->\n                        <!--<div class=\"input-group\">-->\n                                        <!--<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"fa fa-key\"-->\n                                                                                             <!--aria-hidden=\"true\"></i></span>-->\n                            <!--<input #currentPasswordField formControlName=\"password\" type=\"password\"-->\n                                   <!--class=\"form-control right-border\"-->\n                                   <!--id=\"inputPassword1\" placeholder=\"Current password\" autocomplete=\"off\" maxlength=\"16\">-->\n                        <!--</div>-->\n                        <!--<div class=\"changePasswordErrorMessage\">-->\n                                        <!--<span *ngIf=\"!changePasswordForm.get('password').valid && changePasswordForm.get('password').touched\"-->\n                                              <!--class=\"help-block sub-little-signUp-error\">Password must be 8 characters long.</span>-->\n                        <!--</div>-->\n                    <!--</div>-->\n\n\n\n                    <!--<div class=\"confirmButtonsContainer col-md-6\" formGroupName=\"passwords\">-->\n                        <!--&lt;!&ndash;new password&ndash;&gt;-->\n                        <!--<div class=\"form-group col-md-12 divAlignLeft confirmPassword changePasswordInput\"-->\n                             <!--[ngClass]=\"{'has-error': (!changePasswordForm.get('passwords').get('newPassword').valid && changePasswordForm.get('passwords').get('newPassword').touched  || showError),-->\n                                     <!--'has-success': (changePasswordForm.get('passwords').get('newPassword').valid && changePasswordForm.get('passwords').get('newPassword').touched)}\">-->\n\n                            <!--<div class=\"input-group\">-->\n                                            <!--<span class=\"input-group-addon\" id=\"basic-addon2\"><i class=\"fa fa-key\"-->\n                                                                                                 <!--aria-hidden=\"true\"></i></span>-->\n                                <!--<input formControlName=\"newPassword\" type=\"password\"-->\n                                       <!--class=\"form-control right-border\"-->\n                                       <!--id=\"inputPassword5\" placeholder=\"New password\" autocomplete=\"off\" maxlength=\"16\">-->\n                            <!--</div>-->\n                            <!--<div class=\"changePasswordErrorMessage\">-->\n                            <!--<span *ngIf=\"showError\"-->\n                                  <!--class=\"help-block sub-little-signUp-error confpass\">New password can't be the same as current password.</span>-->\n                            <!--</div>-->\n                            <!--<div class=\"changePasswordErrorMessage\">-->\n                                        <!--<span *ngIf=\"!changePasswordForm.get('passwords').get('newPassword').valid && changePasswordForm.get('passwords').get('newPassword').touched\"-->\n                                              <!--class=\"help-block sub-little-signUp-error\">Password must be 8 characters long.</span>-->\n                            <!--</div>-->\n                        <!--</div>-->\n                          <!--&lt;!&ndash;confirm password&ndash;&gt;-->\n                        <!--<div class=\"form-group col-md-12 divAlignLeft confirmPassword changePasswordInput\"-->\n                             <!--[ngClass]=\"{'has-error':!changePasswordForm.get('passwords').valid && (changePasswordForm.get('passwords').get('newPassword').touched && changePasswordForm.get('passwords').get('confirmPassword').touched),-->\n                                     <!--'has-success': (changePasswordForm.get('passwords').get('confirmPassword').valid && changePasswordForm.get('passwords').get('confirmPassword').touched)}\">-->\n                            <!--<div class=\"input-group\">-->\n                                            <!--<span class=\"input-group-addon\" id=\"basic-addon3\"><i class=\"fa fa-key\"-->\n                                                                                                 <!--aria-hidden=\"true\"></i></span>-->\n                                <!--<input formControlName=\"confirmPassword\" type=\"password\"-->\n                                       <!--class=\"form-control right-border\" id=\"inputPassword6\"-->\n                                       <!--placeholder=\"Confirm Password\" autocomplete=\"off\" maxlength=\"16\">-->\n                            <!--</div>-->\n                            <!--<div class=\"changePasswordErrorMessage\">-->\n                                            <!--<span *ngIf=\"!changePasswordForm.get('passwords').valid && (changePasswordForm.get('passwords').get('newPassword').touched && changePasswordForm.get('passwords').get('confirmPassword').touched)\"-->\n                                                  <!--class=\"help-block sub-little-signUp-error\">Password doesn't match.</span>-->\n                            <!--</div>-->\n                        <!--</div>-->\n                    <!--</div>-->\n\n\n                <!--<div class=\"col-md-12 divAlignLeft form-group inputbutton submitButton\">-->\n                    <!--<button [ngClass]=\"{'disableSubmit' : (!changePasswordForm.valid || submitted || showError) }\"-->\n                            <!--[disabled]=\"!changePasswordForm.valid || submitted || showError\" type=\"submit\" class=\"btnStyle\">SUBMIT-->\n                    <!--</button>-->\n                <!--</div>-->\n\n            <!--</div>-->\n        <!--</form>-->\n    <!--</div>-->\n    <!--<div class=\"\" *ngIf=\"notificationComponent\">-->\n        <!--<h2>Notification</h2>-->\n    <!--</div>-->\n    <!--<div class=\"\" *ngIf=\"accreditionComponent\">-->\n        <!--<h2>Acc</h2>-->\n    <!--</div>-->\n<!--</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_component__ = __webpack_require__("../../../../../src/app/pages/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_routing__ = __webpack_require__("../../../../../src/app/pages/settings/settings.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_5__settings_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_modal__["ModalModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_smart_table__["b" /* Ng2SmartTableModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__settings_component__["a" /* settings */]
        ],
        providers: []
    })
], SettingsModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_component__ = __webpack_require__("../../../../../src/app/pages/settings/settings.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__settings_component__["a" /* settings */],
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);
//# sourceMappingURL=settings.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #374767; }\n    .auth-block a:hover {\n      color: #2f3c58; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.paginationControl {\n  width: 100%;\n  float: left;\n  padding: 0 15px; }\n  .paginationControl #listItem .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n  .paginationControl #listItem .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .paginationControl #listItem .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .paginationControl #listItem .ngx-pagination a {\n    color: #606c71; }\n    .paginationControl #listItem .ngx-pagination a:hover {\n      background: transparent; }\n  .paginationControl #listItem .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n  .paginationControl #listItemNew .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n  .paginationControl #listItemNew .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .paginationControl #listItemNew .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .paginationControl #listItemNew .ngx-pagination a {\n    color: #606c71; }\n    .paginationControl #listItemNew .ngx-pagination a:hover {\n      background: transparent; }\n  .paginationControl #listItemNew .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n  .paginationControl #listItem ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n    .paginationControl #listItem ul li:hover {\n      background: transparent; }\n  .paginationControl #listItemNew ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n    .paginationControl #listItemNew ul li:hover {\n      background: transparent; }\n  .paginationControl .pageControl {\n    cursor: pointer;\n    padding: 0 10px; }\n    .paginationControl .pageControl ul {\n      padding: 10px 0;\n      margin: 0;\n      float: left; }\n\n.btn-danger {\n  margin-left: 3px; }\n\n.btn-primary {\n  margin-right: 3px; }\n\n.btn:hover {\n  -webkit-transform: none;\n          transform: none; }\n\n.help-block {\n  color: red; }\n\n.modal-header {\n  margin: 0 auto; }\n\n.fa-rupee:before, .fa-inr:before {\n  content: \"\\F156\";\n  margin-right: 14px !important; }\n\n.ion-edit:before {\n  content: \"\\F2BF\";\n  color: #000000; }\n\n.text-spacing {\n  margin-bottom: 1%; }\n\n.disableSubmit {\n  opacity: 0.8;\n  cursor: not-allowed; }\n  .disableSubmit:hover {\n    opacity: 0.8;\n    cursor: not-allowed !important; }\n\n.purchase_table .ion-edit:before {\n  content: \"\\F2BF\";\n  margin-right: 10px;\n  color: #000000; }\n\n.ion-trash-b:before {\n  content: \"\\F252\";\n  color: #ff0000; }\n\n.fa-envelope-o:before {\n  margin-right: 10px; }\n\n.form-control[disabled] {\n  color: grey;\n  border-color: lightgrey; }\n\n#vendorPurchaseTable table > thead > tr > th:first-child {\n  text-align: center; }\n\n.tagsSmart {\n  background: #F1F3F6;\n  color: #282828;\n  display: inline-block;\n  border: 1px solid lightgray;\n  padding: 0 10px 0 10px;\n  margin: 2px 2px 2px 2px;\n  border-radius: 90px; }\n\ntable th, table td {\n  border: 1px solid #ddd; }\n\ntable .ng2-smart-actions {\n  text-align: center;\n  color: #374767; }\n\ntable .ng2-smart-title a {\n  color: #374767; }\n\ntable .ng2-smart-title a:hover {\n  text-decoration: none; }\n\n.modal-body-data {\n  margin-bottom: 15px; }\n\ntable .ng2-smart-actions {\n  width: 100px !important; }\n\n.inputbox {\n  border-radius: 3px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0px;\n  padding-left: 2%;\n  border: 1px solid gainsboro;\n  outline: none;\n  box-shadow: none;\n  color: #555555; }\n\n.inputbox::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: gainsboro; }\n\n.inputbox::-moz-placeholder {\n  /* Firefox 19+ */\n  color: gainsboro; }\n\n.inputbox:-ms-input-placeholder {\n  /* IE 10+ */\n  color: gainsboro; }\n\n.inputbox:-moz-placeholder {\n  /* Firefox 18- */\n  color: gainsboro; }\n\n.inputbox:focus, .inputbox:active {\n  border-color: #A5C9BB;\n  outline: 0;\n  outline: thin dotted \\9;\n  /* -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6); */\n  box-shadow: inset 0 1px 1px rgba(0, 220, 0, 0.075), 0 0 8px rgba(0, 225, 0, 0.2); }\n\n.inputbutton {\n  height: 58px;\n  line-height: 2.8;\n  margin: 3% 0 -2% 0; }\n\n.btnStyle {\n  width: 100%;\n  height: 100%;\n  background-color: #195C94;\n  color: white;\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer; }\n  .btnStyle:focus {\n    outline: none;\n    box-shadow: 0px 0px 2px 2px #59a453; }\n\n.passwordErrorMessage {\n  float: left;\n  margin-top: -35px;\n  width: 100%;\n  margin-bottom: 10px; }\n\n.divAlignLeft {\n  float: left; }\n\n.divAlignRight {\n  float: right; }\n\n.Quotedatepicker .mydp .currmonth:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .selector {\n  z-index: 1;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selection {\n  height: 33px !important;\n  color: #757575;\n  font-size: 15px !important;\n  position: relative;\n  text-align: left;\n  padding-left: 8px;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selbtngroup {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclear {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnclear:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpicker {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclearenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .mydp .btnpicker {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnpicker:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpickerenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .help-block {\n  color: red; }\n\nrl-tag-input-item {\n  margin-bottom: 3px; }\n\nselect[multiple]:focus option:checked {\n  background: #3b5998 linear-gradient(0deg, #3b5998 0%, #3b5998 100%); }\n\nrl-tag-input input {\n  font-family: 'Conv_Avenir' !important;\n  font-size: 14px !important; }\n\nrl-tag-input input::-webkit-input-placeholder {\n  color: grey; }\n\nrl-tag-input-item {\n  font-family: 'Conv_Avenir' !important;\n  font-size: 14px !important; }\n\n.required:after {\n  content: \"*\";\n  color: red; }\n\n.auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #374767; }\n    .auth-block a:hover {\n      color: #2f3c58; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\nbody .modal-backdrop.fade {\n  opacity: 0.6; }\n\n.adjust-list-buttons {\n  margin-top: 1%; }\n\n.main-campaign {\n  padding-top: 110px; }\n  .main-campaign .panel .panel-body .wizard {\n    min-width: 95%;\n    float: left;\n    background: #fff;\n    margin: 0 2.5%;\n    border: 1px solid #E0E0E0; }\n    .main-campaign .panel .panel-body .wizard .profileTab {\n      width: 25%;\n      float: left;\n      text-align: center;\n      border-right: 1px solid #E0E0E0;\n      height: 50px;\n      line-height: 50px;\n      cursor: pointer;\n      font-size: 12px; }\n      .main-campaign .panel .panel-body .wizard .profileTab:last-child {\n        border-right: none; }\n      .main-campaign .panel .panel-body .wizard .profileTab a {\n        text-transform: uppercase; }\n        .main-campaign .panel .panel-body .wizard .profileTab a .profileIcon {\n          margin-right: 10px; }\n  .main-campaign .panel .panel-body .currentTab {\n    font-size: 14px !important;\n    border-bottom: 3px solid #195C94;\n    color: #195C94; }\n  .main-campaign .panel .panel-body .disableTab {\n    cursor: not-allowed !important; }\n\n.profileContainer {\n  margin: 91px 2.5% 50px 2.5%;\n  padding: 15px;\n  background: white;\n  min-width: 95%;\n  overflow-y: auto;\n  border-radius: 3px;\n  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1); }\n  .profileContainer .inputbutton {\n    text-align: center;\n    margin: 1.9% 0 2% 0; }\n  .profileContainer .form-control[disabled] {\n    color: grey;\n    border-color: lightgrey; }\n  .profileContainer .form-control {\n    border-radius: 3px; }\n  .profileContainer .required {\n    color: red; }\n  .profileContainer .profileContent {\n    margin-top: 2%;\n    margin-left: 2.5%;\n    margin-right: 0%; }\n    .profileContainer .profileContent .profileInput {\n      padding-bottom: 30px;\n      float: left; }\n  .profileContainer .userImageContainer {\n    position: relative; }\n    .profileContainer .userImageContainer .profileDiv {\n      position: absolute;\n      bottom: 21px;\n      left: 180px;\n      padding-right: 0; }\n      .profileContainer .userImageContainer .profileDiv .profileImage {\n        font-size: 14px;\n        color: #777777;\n        padding: 10px;\n        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);\n        border-radius: 3px;\n        border: 1px solid #E0E0E0;\n        background: #f1f3f6;\n        width: 100%; }\n  .profileContainer .userUrlContainer {\n    padding-top: 15px;\n    padding-bottom: 30px; }\n    .profileContainer .userUrlContainer .userUrl {\n      font-weight: 600;\n      padding-top: 1%;\n      padding-bottom: 2%; }\n    .profileContainer .userUrlContainer .userUrlMessage {\n      padding-bottom: 1%; }\n    .profileContainer .userUrlContainer .userUrlBox {\n      border: 1px solid #E0E0E0;\n      width: 97%;\n      margin: 2% 1.5%;\n      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);\n      background-color: #f1f3f6;\n      border-radius: 3px; }\n      .profileContainer .userUrlContainer .userUrlBox .userUrlButton {\n        background-color: white;\n        height: 25px;\n        margin-top: 15px;\n        margin-bottom: 15px;\n        letter-spacing: 1px;\n        text-align: center;\n        border: 1px solid #E0E0E0;\n        width: 40%;\n        border-radius: 3px;\n        color: grey; }\n    .profileContainer .userUrlContainer .urlButtons {\n      float: right;\n      height: 45px;\n      margin-left: 1%;\n      width: 19.6%;\n      color: white;\n      font-size: medium;\n      cursor: pointer;\n      font-weight: bold;\n      background-color: #195C94;\n      border-radius: 3px;\n      border: none; }\n    .profileContainer .userUrlContainer .urlCancelButtons {\n      float: right;\n      height: 45px;\n      margin-left: 1%;\n      font-size: medium;\n      color: grey;\n      font-weight: bold;\n      cursor: pointer;\n      width: 19.6%;\n      background-color: white;\n      border-radius: #f1f3f6;\n      border-radius: 3px;\n      border: 1px solid; }\n    .profileContainer .userUrlContainer .buttonsUrl {\n      float: left;\n      padding-top: 10px; }\n  .profileContainer .userImage {\n    width: 150px;\n    height: auto;\n    margin: 0 6px 6px 0; }\n    .profileContainer .userImage .userProfileImage {\n      border: 1px solid #E0E0E0;\n      border-radius: 3px;\n      width: 100%;\n      margin-left: 0.4%; }\n  .profileContainer .userImageDiv {\n    padding-bottom: 15px;\n    padding-top: 11px;\n    float: left; }\n  .profileContainer .btnStyle {\n    width: 18%;\n    height: 85%;\n    float: right;\n    margin-right: 15px; }\n    @media screen and (min-width: 768px) and (max-width: 1100px) {\n      .profileContainer .btnStyle {\n        width: 28%; } }\n    @media screen and (max-width: 767px) {\n      .profileContainer .btnStyle {\n        width: 80%; } }\n  .profileContainer .changePasswordContent {\n    text-align: center;\n    margin-top: 2%;\n    margin-left: 2.5%;\n    margin-right: 0%; }\n    .profileContainer .changePasswordContent .changePasswordInput {\n      height: 53px;\n      margin: 1.9% 0 0 0;\n      display: inline-block; }\n    .profileContainer .changePasswordContent .confirmButtonsContainer {\n      display: inline-block; }\n    .profileContainer .changePasswordContent .confirmPassword {\n      padding-right: 0;\n      padding-left: 0; }\n    .profileContainer .changePasswordContent .right-border {\n      border-bottom-right-radius: 3px;\n      border-top-right-radius: 3px; }\n    .profileContainer .changePasswordContent .input-group .input-group-addon {\n      border-bottom-left-radius: 3px;\n      border-top-left-radius: 3px; }\n    .profileContainer .changePasswordContent input::-webkit-input-placeholder {\n      color: #666666; }\n  .profileContainer .changePasswordErrorMessage {\n    margin-top: -15px;\n    width: 100%; }\n  .profileContainer .disableSubmit {\n    opacity: 0.8;\n    cursor: not-allowed; }\n    .profileContainer .disableSubmit:hover {\n      opacity: 0.8;\n      cursor: not-allowed; }\n  .profileContainer .small {\n    font-size: 100%; }\n  .profileContainer .disableSubmit {\n    opacity: 0.8;\n    cursor: not-allowed; }\n    .profileContainer .disableSubmit:hover {\n      opacity: 0.8;\n      cursor: not-allowed; }\n  .profileContainer .help-block {\n    color: red; }\n  .profileContainer .sub-little-signUp-error {\n    font-size: 14px; }\n  .profileContainer .sectionTitle {\n    font-weight: 600;\n    padding-top: 1%;\n    padding-bottom: 2%; }\n  .profileContainer .sectionTitleImage {\n    font-weight: 600;\n    padding-top: 1%;\n    padding-bottom: 1%; }\n\n@media only screen and (min-device-width: 310px) and (max-device-width: 320px) {\n  .profileForm {\n    padding-right: 0 !important; } }\n\n@media only screen and (min-width: 320px) and (max-width: 768px) {\n  .main-campaign .panel .panel-body .wizard .profileTab a .tabText {\n    display: none; }\n  .main-campaign .panel .panel-body .wizard .profileTab a .profileIcon {\n    margin-right: 0; }\n  .profileContainer .profileContent .profileForm .userImageContainer {\n    margin-bottom: 40px; }\n    .profileContainer .profileContent .profileForm .userImageContainer .profileDiv {\n      left: 20px;\n      bottom: -40px;\n      padding: 0; }\n    .profileContainer .profileContent .profileForm .userImageContainer .profileImage {\n      width: 94%;\n      font-size: 13px; }\n  .profileContainer .sub-little-signUp-error {\n    font-size: 12px; }\n  .profileContainer .userUrlContainer .userUrlBox {\n    width: 99%; }\n    .profileContainer .userUrlContainer .userUrlBox .userUrlInner {\n      padding: 0; }\n    .profileContainer .userUrlContainer .userUrlBox .userUrlButton {\n      letter-spacing: 0;\n      width: 95%; }\n  .profileContainer .userUrlContainer .urlCancelButtons {\n    width: 37%;\n    font-size: 13px; }\n  .profileContainer .userUrlContainer .urlButtons {\n    width: 37%;\n    font-size: 13px; } }\n\n@media only screen and (min-width: 450px) and (max-width: 767px) {\n  .profileContainer .userUrlContainer .userUrlBox .userUrlButton {\n    letter-spacing: 0;\n    width: 60%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

});
//# sourceMappingURL=settings.module.chunk.js.map