webpackJsonp(["viewTermsAndConditions.module"],{

/***/ "../../../../../src/app/pages/viewTermsAndConditions/viewTermsAndConditions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return viewTermsAndConditionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table_index__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_authentication__ = __webpack_require__("../../../../../src/app/app.authentication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appServices_application__ = __webpack_require__("../../../../../src/app/appServices/application.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_services_baThemeSpinner_baThemeSpinner_service__ = __webpack_require__("../../../../../src/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_validators_email_validator__ = __webpack_require__("../../../../../src/app/theme/validators/email.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__theme_validators_blank_validator__ = __webpack_require__("../../../../../src/app/theme/validators/blank.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__theme_validators_equalPasswords_validator__ = __webpack_require__("../../../../../src/app/theme/validators/equalPasswords.validator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ButtonViewComponent = (function () {
    function ButtonViewComponent() {
        this.renderValue = [];
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ButtonViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderValue = [];
        this.value.forEach(function (val) {
            if (val) {
                _this.renderValue.push(val);
            }
        });
    };
    ButtonViewComponent.prototype.onClick = function () {
        this.save.emit(this.rowData);
    };
    return ButtonViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ButtonViewComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ButtonViewComponent.prototype, "rowData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ButtonViewComponent.prototype, "save", void 0);
ButtonViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'category-view',
        styles: [__webpack_require__("../../../../../src/app/pages/viewTermsAndConditions/viewTermsAndConditions.scss")],
        template: "        \n    <span *ngFor=\"let value of this.renderValue \">\n        <span class=\"tagsSmart\">{{value}} </span>\n    </span>\n  ",
    })
], ButtonViewComponent);

var viewTermsAndConditionsComponent = (function () {
    function viewTermsAndConditionsComponent(router, adminServices, fb, authentication, appService, toastr, vRef, _spinner) {
        this.router = router;
        this.adminServices = adminServices;
        this.fb = fb;
        this.authentication = authentication;
        this.appService = appService;
        this.toastr = toastr;
        this._spinner = _spinner;
        this.source = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table_index__["a" /* LocalDataSource */]();
        this.termsList = [];
        this.current_page = 1;
        this.perPage = 10;
        this.showError = false;
        this.settingComponent = true;
        this.passwordComponent = false;
        this.notificationComponent = false;
        this.accreditionComponent = false;
        this.settings = {
            mode: 'external',
            actions: {
                columnTitle: 'Actions',
            },
            columns: {
                tag_name: {
                    title: 'Categories',
                    type: 'custom',
                    renderComponent: ButtonViewComponent,
                    onComponentInitFunction: function (instance) {
                        instance.save.subscribe(function (row) {
                        });
                    },
                },
                status: {
                    title: 'Status',
                },
            },
            add: {
                addButtonContent: '',
                createButtonContent: '',
                cancelButtonContent: '',
                confirmCreate: true,
            },
            edit: {
                editButtonContent: '<i class="ion-edit" title="Edit Terms"></i>',
                saveButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="ion-trash-b" title="Delete Terms"></i>',
                confirmDelete: true,
            },
        };
        this.authentication.setChangedContentTopText('Terms And Conditions');
    }
    viewTermsAndConditionsComponent.prototype.ngOnInit = function () {
        this.getVendorDetails();
    };
    viewTermsAndConditionsComponent.prototype.onCustom = function (data) {
        if (data.action == 'vendor_prices_route') {
        }
    };
    viewTermsAndConditionsComponent.prototype.userBasicInfo = function () {
        var _this = this;
        this.form = this.fb.group({
            'firstName': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_9__theme_validators_blank_validator__["a" /* BlankSpaceValidator */].validate])),
            'lastName': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_9__theme_validators_blank_validator__["a" /* BlankSpaceValidator */].validate])),
            'email': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_8__theme_validators_email_validator__["a" /* EmailValidator */].validate])),
            'phoneNumber': this.fb.control(''),
            'profile_img': this.fb.control(''),
            'chooseImage': this.fb.control(''),
        });
        this.changePasswordForm = this.fb.group({
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(16)])],
            'passwords': this.fb.group({
                'newPassword': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8)])],
                'confirmPassword': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8)])],
            }, { validator: __WEBPACK_IMPORTED_MODULE_11__theme_validators_equalPasswords_validator__["a" /* EqualPasswordsValidator */].validate('newPassword', 'confirmPassword') }),
        });
        this.changePasswordForm.valueChanges.subscribe(function (data) {
            if (data.password && data.password.length > 0
                && data.passwords.newPassword &&
                data.passwords.newPassword.length > 0) {
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
    viewTermsAndConditionsComponent.prototype.setUserData = function (userData) {
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
    viewTermsAndConditionsComponent.prototype.triggers = function () {
        this.fileUpload.nativeElement.click();
    };
    viewTermsAndConditionsComponent.prototype.addVendor = function () {
        this.router.navigate(['addTermsAndCondition']);
    };
    viewTermsAndConditionsComponent.prototype.editVendor = function (event) {
        this.router.navigate(['editTermsAndCondition'], { queryParams: { id: event.data.id_terms } });
    };
    viewTermsAndConditionsComponent.prototype.deleteVendor = function (event) {
        this.tagId = event.data.id_tag;
        this.termId = event.data.id_terms;
        this.deleteVendorModal.open();
    };
    viewTermsAndConditionsComponent.prototype.deleteVendorFinal = function () {
        var _this = this;
        this.deleteVendorModal.close();
        this._spinner.show();
        var deleteId = {
            id_term: this.termId,
            id_tag: this.tagId,
        };
        this.appService.deleteTerms(deleteId).subscribe(function (data) { return _this.deleteVendorSuccess(data); }, function (error) { return _this.deleteVendorFail(error); });
    };
    viewTermsAndConditionsComponent.prototype.deleteVendorSuccess = function (data) {
        if (data.code < 0) {
            // toastr.error(data.message);
            this.deleteVendorModal.close();
        }
        else {
            this._spinner.hide();
            this.toastr.success('Terms and Conditions deleted successfully');
            this.deleteVendorModal.close();
            this.getVendorDetails();
        }
    };
    viewTermsAndConditionsComponent.prototype.deleteVendorFail = function (err) {
        this._spinner.hide();
        if (err.error && err.error.message) {
            this.toastr.error(err.error.message);
        }
        else if (typeof (err.error) !== 'undefined') {
            this.toastr.error('Server error');
        }
    };
    viewTermsAndConditionsComponent.prototype.getPageData = function (page) {
        console.log(page, 'PAGE');
        this.current_page = page;
        this.getVendorDetails();
    };
    viewTermsAndConditionsComponent.prototype.getVendorDetails = function () {
        var _this = this;
        var data = {
            page_number: this.current_page,
            limit: this.perPage,
        };
        this.appService.getTermsData(data).subscribe(function (data) { return _this.getVendorsSuccess(data); }, function (error) { return _this.getVendorsFail(error); });
    };
    viewTermsAndConditionsComponent.prototype.getVendorsSuccess = function (res) {
        var mockArray = [];
        this.termsList = [];
        this.termsList = Array.from(res.data[0]);
        this.totalCount = res.data[1];
        mockArray = res.data[0];
        mockArray.forEach(function (val) {
            val.status = 'Yes';
        });
        this.source.load(mockArray);
    };
    viewTermsAndConditionsComponent.prototype.getVendorsFail = function (err) {
        if (err.error && err.error.message) {
            this.toastr.error(err.error.message);
        }
        else if (typeof (err.error) !== 'undefined') {
            this.toastr.error('Server error');
        }
    };
    return viewTermsAndConditionsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileUpload'),
    __metadata("design:type", Object)
], viewTermsAndConditionsComponent.prototype, "fileUpload", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deleteVendorModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10_ng2_modal__["Modal"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_ng2_modal__["Modal"]) === "function" && _b || Object)
], viewTermsAndConditionsComponent.prototype, "deleteVendorModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('firstName'),
    __metadata("design:type", Object)
], viewTermsAndConditionsComponent.prototype, "firstField", void 0);
viewTermsAndConditionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'viewTermsAndConditions',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__("../../../../../src/app/pages/viewTermsAndConditions/viewTermsAndConditions.scss")],
        template: __webpack_require__("../../../../../src/app/pages/viewTermsAndConditions/viewTermsAndConditions.html"),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__appServices_application__["a" /* ApplicationAdminServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__appServices_application__["a" /* ApplicationAdminServices */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__app_authentication__["a" /* AuthenticationHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_authentication__["a" /* AuthenticationHelper */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__appServices_application__["a" /* ApplicationAdminServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__appServices_application__["a" /* ApplicationAdminServices */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7__theme_services_baThemeSpinner_baThemeSpinner_service__["a" /* BaThemeSpinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__theme_services_baThemeSpinner_baThemeSpinner_service__["a" /* BaThemeSpinner */]) === "function" && _k || Object])
], viewTermsAndConditionsComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=viewTermsAndConditions.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/viewTermsAndConditions/viewTermsAndConditions.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profileContainer\">\n    <div >\n        <button style=\"margin-left:1%;margin-bottom: 10px\" (click)=\"addVendor()\" type=\"button\" class=\"btn btn-primary alignDeleteButton pull-right \" ><i class=\"add-item-icon ion-plus-round\"></i> Add T&C </button>\n    </div>\n    <div class=\"profileContent \" *ngIf=\"settingComponent\">\n        <div id=\"viewTerms\" class=\"smarttable\" type=\"html\">\n            <ng2-smart-table [settings]=\"settings\"\n                             [source]=\"source\"\n                             (edit) = \"editVendor($event)\"\n                             (delete)= \"deleteVendor($event)\">\n            </ng2-smart-table>\n        </div>\n        <div class=\"paginationControl\">\n            <div *ngFor='let data of termsList | paginate : { itemsPerPage: this.perPage, currentPage: current_page, id : \"listItem\", totalItems: totalCount }'></div>\n            <pagination-controls class=\"pageControl\" (pageChange)=\"getPageData($event)\" id=\"listItem\"\n                                 nextLabel=\"Next\">\n            </pagination-controls>\n        </div>\n    </div>\n</div>\n\n<div class=\"confirmUserActiveContainer\">\n    <modal #deleteVendorModal [closeOnOutsideClick]=\"false\">\n        <modal-header>\n            <div class=\"test\"><span class=\"headerText\">Are you sure you want to delete this Term & Condition?</span></div>\n        </modal-header>\n        <modal-content>\n            <div class=\"confirmButtonsContainer\">\n                <div class=\"confirmButtons\">\n                    <div class=\"noButton\">\n                        <button class=\"noConfirm\" (click)=\"deleteVendorModal.close()\">No</button>\n                    </div>\n                    <div class=\"yesButton\">\n                        <button class=\"yesConfirm\" (click)=\"deleteVendorFinal()\">Yes</button>\n                    </div>\n                </div>\n            </div>\n        </modal-content>\n    </modal>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/viewTermsAndConditions/viewTermsAndConditions.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewTermsAndConditionsModule", function() { return viewTermsAndConditionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewTermsAndConditions_component__ = __webpack_require__("../../../../../src/app/pages/viewTermsAndConditions/viewTermsAndConditions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewTermsAndConditions_routing__ = __webpack_require__("../../../../../src/app/pages/viewTermsAndConditions/viewTermsAndConditions.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var viewTermsAndConditionsModule = (function () {
    function viewTermsAndConditionsModule() {
    }
    return viewTermsAndConditionsModule;
}());
viewTermsAndConditionsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_5__viewTermsAndConditions_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_modal__["ModalModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_smart_table__["b" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__["a" /* NgxPaginationModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__viewTermsAndConditions_component__["b" /* viewTermsAndConditionsComponent */], __WEBPACK_IMPORTED_MODULE_4__viewTermsAndConditions_component__["a" /* ButtonViewComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__viewTermsAndConditions_component__["a" /* ButtonViewComponent */]
        ],
        providers: []
    })
], viewTermsAndConditionsModule);

//# sourceMappingURL=viewTermsAndConditions.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/viewTermsAndConditions/viewTermsAndConditions.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewTermsAndConditions_component__ = __webpack_require__("../../../../../src/app/pages/viewTermsAndConditions/viewTermsAndConditions.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__viewTermsAndConditions_component__["b" /* viewTermsAndConditionsComponent */],
        children: []
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);
//# sourceMappingURL=viewTermsAndConditions.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/viewTermsAndConditions/viewTermsAndConditions.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #374767; }\n    .auth-block a:hover {\n      color: #2f3c58; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.paginationControl {\n  width: 100%;\n  float: left;\n  padding: 0 15px; }\n  .paginationControl #listItem .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n  .paginationControl #listItem .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .paginationControl #listItem .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .paginationControl #listItem .ngx-pagination a {\n    color: #606c71; }\n    .paginationControl #listItem .ngx-pagination a:hover {\n      background: transparent; }\n  .paginationControl #listItem .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n  .paginationControl #listItemNew .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n  .paginationControl #listItemNew .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .paginationControl #listItemNew .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .paginationControl #listItemNew .ngx-pagination a {\n    color: #606c71; }\n    .paginationControl #listItemNew .ngx-pagination a:hover {\n      background: transparent; }\n  .paginationControl #listItemNew .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n  .paginationControl #listItem ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n    .paginationControl #listItem ul li:hover {\n      background: transparent; }\n  .paginationControl #listItemNew ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n    .paginationControl #listItemNew ul li:hover {\n      background: transparent; }\n  .paginationControl .pageControl {\n    cursor: pointer;\n    padding: 0 10px; }\n    .paginationControl .pageControl ul {\n      padding: 10px 0;\n      margin: 0;\n      float: left; }\n\n.btn-danger {\n  margin-left: 3px; }\n\n.btn-primary {\n  margin-right: 3px; }\n\n.btn:hover {\n  -webkit-transform: none;\n          transform: none; }\n\n.help-block {\n  color: red; }\n\n.modal-header {\n  margin: 0 auto; }\n\n.fa-rupee:before, .fa-inr:before {\n  content: \"\\F156\";\n  margin-right: 14px !important; }\n\n.ion-edit:before {\n  content: \"\\F2BF\";\n  color: #000000; }\n\n.text-spacing {\n  margin-bottom: 1%; }\n\n.disableSubmit {\n  opacity: 0.8;\n  cursor: not-allowed; }\n  .disableSubmit:hover {\n    opacity: 0.8;\n    cursor: not-allowed !important; }\n\n.purchase_table .ion-edit:before {\n  content: \"\\F2BF\";\n  margin-right: 10px;\n  color: #000000; }\n\n.ion-trash-b:before {\n  content: \"\\F252\";\n  color: #ff0000; }\n\n.fa-envelope-o:before {\n  margin-right: 10px; }\n\n.form-control[disabled] {\n  color: grey;\n  border-color: lightgrey; }\n\n#vendorPurchaseTable table > thead > tr > th:first-child {\n  text-align: center; }\n\n.tagsSmart {\n  background: #F1F3F6;\n  color: #282828;\n  display: inline-block;\n  border: 1px solid lightgray;\n  padding: 0 10px 0 10px;\n  margin: 2px 2px 2px 2px;\n  border-radius: 90px; }\n\ntable th, table td {\n  border: 1px solid #ddd; }\n\ntable .ng2-smart-actions {\n  text-align: center;\n  color: #374767; }\n\ntable .ng2-smart-title a {\n  color: #374767; }\n\ntable .ng2-smart-title a:hover {\n  text-decoration: none; }\n\n.modal-body-data {\n  margin-bottom: 15px; }\n\ntable .ng2-smart-actions {\n  width: 100px !important; }\n\n.inputbox {\n  border-radius: 3px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0px;\n  padding-left: 2%;\n  border: 1px solid gainsboro;\n  outline: none;\n  box-shadow: none;\n  color: #555555; }\n\n.inputbox::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: gainsboro; }\n\n.inputbox::-moz-placeholder {\n  /* Firefox 19+ */\n  color: gainsboro; }\n\n.inputbox:-ms-input-placeholder {\n  /* IE 10+ */\n  color: gainsboro; }\n\n.inputbox:-moz-placeholder {\n  /* Firefox 18- */\n  color: gainsboro; }\n\n.inputbox:focus, .inputbox:active {\n  border-color: #A5C9BB;\n  outline: 0;\n  outline: thin dotted \\9;\n  /* -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6); */\n  box-shadow: inset 0 1px 1px rgba(0, 220, 0, 0.075), 0 0 8px rgba(0, 225, 0, 0.2); }\n\n.inputbutton {\n  height: 58px;\n  line-height: 2.8;\n  margin: 3% 0 -2% 0; }\n\n.btnStyle {\n  width: 100%;\n  height: 100%;\n  background-color: #195C94;\n  color: white;\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer; }\n  .btnStyle:focus {\n    outline: none;\n    box-shadow: 0px 0px 2px 2px #59a453; }\n\n.passwordErrorMessage {\n  float: left;\n  margin-top: -35px;\n  width: 100%;\n  margin-bottom: 10px; }\n\n.divAlignLeft {\n  float: left; }\n\n.divAlignRight {\n  float: right; }\n\n.Quotedatepicker .mydp .currmonth:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .selector {\n  z-index: 1;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selection {\n  height: 33px !important;\n  color: #757575;\n  font-size: 15px !important;\n  position: relative;\n  text-align: left;\n  padding-left: 8px;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selbtngroup {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclear {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnclear:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpicker {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclearenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .mydp .btnpicker {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnpicker:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpickerenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .help-block {\n  color: red; }\n\nrl-tag-input-item {\n  margin-bottom: 3px; }\n\nselect[multiple]:focus option:checked {\n  background: #3b5998 linear-gradient(0deg, #3b5998 0%, #3b5998 100%); }\n\nrl-tag-input input {\n  font-family: 'Conv_Avenir' !important;\n  font-size: 14px !important; }\n\nrl-tag-input input::-webkit-input-placeholder {\n  color: grey; }\n\nrl-tag-input-item {\n  font-family: 'Conv_Avenir' !important;\n  font-size: 14px !important; }\n\n.required:after {\n  content: \"*\";\n  color: red; }\n\n.auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #374767; }\n    .auth-block a:hover {\n      color: #2f3c58; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.confirmUserActiveContainer .modal-footer {\n  display: none; }\n\n.confirmUserActiveContainer .fade {\n  opacity: 1 !important; }\n\n.confirmUserActiveContainer .confirmButtonsContainer {\n  width: 100%;\n  padding: 20px 0 0 0; }\n  .confirmUserActiveContainer .confirmButtonsContainer .confirmButtons {\n    width: 50%;\n    margin: 0 auto; }\n    .confirmUserActiveContainer .confirmButtonsContainer .confirmButtons .yesButton {\n      width: 49%;\n      float: right; }\n      .confirmUserActiveContainer .confirmButtonsContainer .confirmButtons .yesButton .yesConfirm {\n        width: 90%;\n        height: 35px;\n        background-color: #59a453 !important;\n        border: none;\n        font-size: 13px;\n        border-radius: 3px;\n        outline: none;\n        color: white;\n        cursor: pointer; }\n    .confirmUserActiveContainer .confirmButtonsContainer .confirmButtons .noButton {\n      width: 49%;\n      float: left; }\n      .confirmUserActiveContainer .confirmButtonsContainer .confirmButtons .noButton .noConfirm {\n        width: 90%;\n        height: 35px;\n        background-color: #F95372 !important;\n        border: none;\n        font-size: 13px;\n        border-radius: 3px;\n        outline: none;\n        color: white;\n        cursor: pointer; }\n\n.confirmUserActiveContainer .modal-dialog {\n  top: 25%; }\n\n.confirmUserActiveContainer .modal-content {\n  padding: 20px; }\n\n.confirmUserActiveContainer button.close {\n  position: absolute;\n  right: 0;\n  padding-right: 15px;\n  padding-top: 5px;\n  cursor: pointer; }\n\n.confirmUserActiveContainer .modal-body {\n  padding: 0 0 20px;\n  top: 20px; }\n\nbody .modal-backdrop.fade {\n  opacity: 0.6; }\n\n.main-campaign {\n  padding-top: 110px; }\n  .main-campaign .panel .panel-body .wizard {\n    min-width: 95%;\n    float: left;\n    background: #fff;\n    margin: 0 2.5%;\n    border: 1px solid #E0E0E0; }\n    .main-campaign .panel .panel-body .wizard .profileTab {\n      width: 25%;\n      float: left;\n      text-align: center;\n      border-right: 1px solid #E0E0E0;\n      height: 50px;\n      line-height: 50px;\n      cursor: pointer;\n      font-size: 12px; }\n      .main-campaign .panel .panel-body .wizard .profileTab:last-child {\n        border-right: none; }\n      .main-campaign .panel .panel-body .wizard .profileTab a {\n        text-transform: uppercase; }\n        .main-campaign .panel .panel-body .wizard .profileTab a .profileIcon {\n          margin-right: 10px; }\n  .main-campaign .panel .panel-body .currentTab {\n    border-bottom: 3px solid #195C94;\n    color: #195C94; }\n  .main-campaign .panel .panel-body .disableTab {\n    cursor: not-allowed !important; }\n\n.ion-document:before {\n  content: \"\\F12F\"; }\n\n.alignIonEdit {\n  margin-right: 0px !important; }\n\n#viewTerms .ion-edit:before {\n  content: \"\\F2BF\";\n  margin-right: 14px;\n  color: #000000; }\n\n#viewTerms .ion-trash-b:before {\n  content: \"\\F252\";\n  color: #ff0000; }\n\n#viewTerms .fa-rupee:before, #viewTerms .fa-inr:before {\n  content: \"\\F156\";\n  margin-right: 3px; }\n\n.profileContainer {\n  margin: 91px 2.5% 50px 2.5%;\n  padding: 15px;\n  background: white;\n  min-width: 95%;\n  overflow-y: auto;\n  border-radius: 3px;\n  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1); }\n  .profileContainer .inputbutton {\n    text-align: center;\n    margin: 1.9% 0 2% 0; }\n  .profileContainer .form-control[disabled] {\n    color: grey;\n    border-color: lightgrey; }\n  .profileContainer .form-control {\n    border-radius: 3px; }\n  .profileContainer .required {\n    color: red; }\n  .profileContainer .profileContent {\n    margin-top: 2%;\n    margin-left: 2.5%;\n    margin-right: 0%; }\n    .profileContainer .profileContent .profileInput {\n      padding-bottom: 30px;\n      float: left; }\n  .profileContainer .userImageContainer {\n    position: relative; }\n    .profileContainer .userImageContainer .profileDiv {\n      position: absolute;\n      bottom: 21px;\n      left: 180px;\n      padding-right: 0; }\n      .profileContainer .userImageContainer .profileDiv .profileImage {\n        font-size: 14px;\n        color: #777777;\n        padding: 10px;\n        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);\n        border-radius: 3px;\n        border: 1px solid #E0E0E0;\n        background: #f1f3f6;\n        width: 100%; }\n  .profileContainer .userUrlContainer {\n    padding-top: 15px;\n    padding-bottom: 30px; }\n    .profileContainer .userUrlContainer .userUrl {\n      font-weight: 600;\n      padding-top: 1%;\n      padding-bottom: 2%; }\n    .profileContainer .userUrlContainer .userUrlMessage {\n      padding-bottom: 1%; }\n    .profileContainer .userUrlContainer .userUrlBox {\n      border: 1px solid #E0E0E0;\n      width: 97%;\n      margin: 2% 1.5%;\n      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);\n      background-color: #f1f3f6;\n      border-radius: 3px; }\n      .profileContainer .userUrlContainer .userUrlBox .userUrlButton {\n        background-color: white;\n        height: 25px;\n        margin-top: 15px;\n        margin-bottom: 15px;\n        letter-spacing: 1px;\n        text-align: center;\n        border: 1px solid #E0E0E0;\n        width: 40%;\n        border-radius: 3px;\n        color: grey; }\n    .profileContainer .userUrlContainer .urlButtons {\n      float: right;\n      height: 45px;\n      margin-left: 1%;\n      width: 19.6%;\n      color: white;\n      font-size: medium;\n      cursor: pointer;\n      font-weight: bold;\n      background-color: #195C94;\n      border-radius: 3px;\n      border: none; }\n    .profileContainer .userUrlContainer .urlCancelButtons {\n      float: right;\n      height: 45px;\n      margin-left: 1%;\n      font-size: medium;\n      color: grey;\n      font-weight: bold;\n      cursor: pointer;\n      width: 19.6%;\n      background-color: white;\n      border-radius: #f1f3f6;\n      border-radius: 3px;\n      border: 1px solid; }\n    .profileContainer .userUrlContainer .buttonsUrl {\n      float: left;\n      padding-top: 10px; }\n  .profileContainer .userImage {\n    width: 150px;\n    height: auto;\n    margin: 0 6px 6px 0; }\n    .profileContainer .userImage .userProfileImage {\n      border: 1px solid #E0E0E0;\n      border-radius: 3px;\n      width: 100%;\n      margin-left: 0.4%; }\n  .profileContainer .userImageDiv {\n    padding-bottom: 15px;\n    padding-top: 11px;\n    float: left; }\n  .profileContainer .changePasswordContent {\n    text-align: center;\n    margin-top: 2%;\n    margin-left: 2.5%;\n    margin-right: 0%; }\n    .profileContainer .changePasswordContent .changePasswordInput {\n      height: 53px;\n      margin: 1.9% 0 0 0;\n      display: inline-block; }\n    .profileContainer .changePasswordContent .confirmButtonsContainer {\n      display: inline-block; }\n    .profileContainer .changePasswordContent .confirmPassword {\n      padding-right: 0;\n      padding-left: 0; }\n    .profileContainer .changePasswordContent .right-border {\n      border-bottom-right-radius: 3px;\n      border-top-right-radius: 3px; }\n    .profileContainer .changePasswordContent .input-group .input-group-addon {\n      border-bottom-left-radius: 3px;\n      border-top-left-radius: 3px; }\n    .profileContainer .changePasswordContent input::-webkit-input-placeholder {\n      color: #666666; }\n  .profileContainer .changePasswordErrorMessage {\n    margin-top: -15px;\n    width: 100%; }\n  .profileContainer .disableSubmit {\n    opacity: 0.8;\n    cursor: not-allowed; }\n    .profileContainer .disableSubmit:hover {\n      opacity: 0.8;\n      cursor: not-allowed; }\n  .profileContainer .small {\n    font-size: 100%; }\n  .profileContainer .disableSubmit {\n    opacity: 0.8;\n    cursor: not-allowed; }\n    .profileContainer .disableSubmit:hover {\n      opacity: 0.8;\n      cursor: not-allowed; }\n  .profileContainer .help-block {\n    color: red; }\n  .profileContainer .sub-little-signUp-error {\n    font-size: 14px; }\n  .profileContainer .sectionTitle {\n    font-weight: 600;\n    padding-top: 1%;\n    padding-bottom: 2%; }\n  .profileContainer .sectionTitleImage {\n    font-weight: 600;\n    padding-top: 1%;\n    padding-bottom: 1%; }\n\n#viewTerms {\n  overflow-x: auto; }\n\n.tagsSmart {\n  background: #F1F3F6;\n  color: #282828;\n  display: inline-block;\n  padding: 0 10px 0 10px;\n  margin: 1px 2px 1px 2px;\n  border-radius: 90px; }\n\n@media only screen and (min-device-width: 310px) and (max-device-width: 320px) {\n  .profileForm {\n    padding-right: 0 !important; } }\n\n@media only screen and (min-width: 320px) and (max-width: 768px) {\n  .main-campaign .panel .panel-body .wizard .profileTab a .tabText {\n    display: none; }\n  .main-campaign .panel .panel-body .wizard .profileTab a .profileIcon {\n    margin-right: 0; }\n  .profileContainer .profileContent .profileForm .userImageContainer {\n    margin-bottom: 40px; }\n    .profileContainer .profileContent .profileForm .userImageContainer .profileDiv {\n      left: 20px;\n      bottom: -40px;\n      padding: 0; }\n    .profileContainer .profileContent .profileForm .userImageContainer .profileImage {\n      width: 94%;\n      font-size: 13px; }\n  .profileContainer .sub-little-signUp-error {\n    font-size: 12px; }\n  .profileContainer .userUrlContainer .userUrlBox {\n    width: 99%; }\n    .profileContainer .userUrlContainer .userUrlBox .userUrlInner {\n      padding: 0; }\n    .profileContainer .userUrlContainer .userUrlBox .userUrlButton {\n      letter-spacing: 0;\n      width: 95%; }\n  .profileContainer .userUrlContainer .urlCancelButtons {\n    width: 37%;\n    font-size: 13px; }\n  .profileContainer .userUrlContainer .urlButtons {\n    width: 37%;\n    font-size: 13px; } }\n\n.smarttable {\n  width: 100%; }\n\n@media only screen and (min-width: 450px) and (max-width: 767px) {\n  .profileContainer .userUrlContainer .userUrlBox .userUrlButton {\n    letter-spacing: 0;\n    width: 60%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

});
//# sourceMappingURL=viewTermsAndConditions.module.chunk.js.map