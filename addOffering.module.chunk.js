webpackJsonp(["addOffering.module"],{

/***/ "../../../../../src/app/pages/addOffering/addOffering.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOffering; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_authentication__ = __webpack_require__("../../../../../src/app/app.authentication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appServices_application__ = __webpack_require__("../../../../../src/app/appServices/application.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_services_baThemeSpinner_baThemeSpinner_service__ = __webpack_require__("../../../../../src/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_addOffering__ = __webpack_require__("../../../../../src/app/pages/constants/addOffering.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddOffering = (function () {
    function AddOffering(router, adminServices, fb, authentication, appService, toastr, vRef, _spinner) {
        this.router = router;
        this.adminServices = adminServices;
        this.fb = fb;
        this.authentication = authentication;
        this.appService = appService;
        this.toastr = toastr;
        this._spinner = _spinner;
        this.showError = false;
        this.dateError = false;
        this.fromDate = '';
        this.toDate = '';
        this.issuerData = __WEBPACK_IMPORTED_MODULE_7__constants_addOffering__["a" /* OFFERINGS_CONSTANTS */].ISSUER_LIST.issuersList;
        this.typeOfOfferings = __WEBPACK_IMPORTED_MODULE_7__constants_addOffering__["a" /* OFFERINGS_CONSTANTS */].TYPE_OF_OFFERING_LIST.typeOfOfferingList;
        this.issueTypeList = __WEBPACK_IMPORTED_MODULE_7__constants_addOffering__["a" /* OFFERINGS_CONSTANTS */].ISSUE_TYPES.typeOfIssueList;
        this.dealTypeList = __WEBPACK_IMPORTED_MODULE_7__constants_addOffering__["a" /* OFFERINGS_CONSTANTS */].DEAL_TYPES.typeOfDealList;
        this.investmentTypeList = __WEBPACK_IMPORTED_MODULE_7__constants_addOffering__["a" /* OFFERINGS_CONSTANTS */].INVESTMENT_TYPES.typeOfInvestmentList;
        this.myDatePickerOptions = {
            dateFormat: 'mm/dd/yyyy',
            todayBtnTxt: 'Today',
            dayLabels: { su: 'S', mo: 'M', tu: 'T', we: 'W', th: 'T', fr: 'F', sa: 'S' },
            monthLabels: {
                1: 'Jan',
                2: 'Feb',
                3: 'Mar',
                4: 'Apr',
                5: 'May',
                6: 'Jun',
                7: 'Jul',
                8: 'Aug',
                9: 'Sep',
                10: 'Oct',
                11: 'Nov',
                12: 'Dec'
            },
            showTodayBtn: false,
            inline: false,
            firstDayOfWeek: 'su',
            editableDateField: false,
            showClearDateBtn: false,
            openSelectorOnInputClick: true,
            disableUntil: {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                day: new Date().getDate() - 1
            },
        };
        this.authentication.setChangedContentTopText('Add Offering');
    }
    AddOffering.prototype.ngAfterViewInit = function () {
        this.isIssuer.first.nativeElement.focus();
    };
    AddOffering.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.addOfferingInfo();
        this.offeringForm.controls['typeOfOffering'].patchValue("1");
        this.offeringForm.controls['issueType'].patchValue("1");
        this.offeringForm.controls['dealType'].patchValue("1");
        this.offeringForm.controls['investmentType'].patchValue("1");
    };
    AddOffering.prototype.addOfferingInfo = function () {
        this.offeringForm = this.fb.group({
            'selectIssuer': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            'issueName': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            'typeOfOffering': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            'issueType': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            'dealType': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            'investmentType': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            'percentageRaised': this.fb.control(''),
            'offeringAmount': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            'minimumOfferingAmount': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            'startDate': this.fb.control(''),
            'endDate': this.fb.control(''),
            'minimumSubcriptionAmount': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            'unitPrice': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            'maxAmount': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            'inputType': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            'numberOfUnits': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            'offeringText': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            'stampingText': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            'previewHomepage': this.fb.control(''),
            'displayMarketplace': this.fb.control(''),
        });
    };
    //onSubmit
    AddOffering.prototype.onSubmit = function (value) {
        var _this = this;
        this._spinner.show();
        var offeringData = {
            'issuer': value.selectIssuer,
            'issueName': value.issueName,
            'typeOfOffering': value.typeOfOffering,
            'issueType': value.issueType,
            'dealType': value.dealType,
            'type': value.investmentType,
            'percentageRaised': value.percentageRaised,
            'offeringAmount': value.offeringAmount,
            'minOfferingAmount': value.minimumOfferingAmount,
            'minimumSubscriptionAmount': value.minimumSubcriptionAmount,
            'unitPrice': value.unitPrice,
            'maxAmount': value.maxAmount,
            'inputType': value.inputType,
            'numberOfUnits': value.numberOfUnits,
            'offeringText': value.offeringText,
            'stampingText': value.stampingText,
            'previewOnHomepage': value.previewHomepage,
            'displayInMarketPlace': value.displayMarketplace,
            'startDate': value.startDate.formatted,
            'endDate': value.endDate.formatted,
        };
        // Api call to edit profile, if success editUserProfile(data) and if error editUserProfileFail(error)
        this.appService.createOffering(offeringData).subscribe(function (data) { return _this.createOfferingSuccess(data); }, function (error) { return _this.createOfferingFail(error); });
    };
    //if edit profile success
    AddOffering.prototype.createOfferingSuccess = function (offeringSuccessData) {
        if (offeringSuccessData) {
            // this.setUserData(userData);
            this._spinner.hide();
            this.toastr.success('Offering created successfully.');
            this.offeringForm.reset();
        }
    };
    //if edit profile fail
    AddOffering.prototype.createOfferingFail = function (err) {
        this._spinner.hide();
        if (err.error && err.error.message) {
            this.toastr.error(err.error.message);
        }
        else if (typeof (err.error) !== 'undefined') {
            this.toastr.error('Server error');
        }
    };
    // Function for date picker date change event.
    AddOffering.prototype.onDateChanged = function (event) {
        if (new Date(this.offeringForm.controls['startDate'].value.jsdate) > new Date(event.jsdate)) {
            this.dateError = true;
        }
        else {
            this.dateError = false;
        }
    };
    // Function for date picker date change event.
    AddOffering.prototype.onStartDateChanged = function (event) {
        if (typeof this.offeringForm.controls['endDate'].value.jsdate !== 'undefined') {
            if (new Date(this.offeringForm.controls['endDate'].value.jsdate) < new Date(event.jsdate)) {
                this.dateError = true;
            }
            else {
                this.dateError = false;
            }
        }
    };
    return AddOffering;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('isIssuer'),
    __metadata("design:type", Object)
], AddOffering.prototype, "isIssuer", void 0);
AddOffering = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'addOffering',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__("../../../../../src/app/pages/addOffering/addOffering.scss")],
        template: __webpack_require__("../../../../../src/app/pages/addOffering/addOffering.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__appServices_application__["a" /* ApplicationAdminServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__appServices_application__["a" /* ApplicationAdminServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_authentication__["a" /* AuthenticationHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_authentication__["a" /* AuthenticationHelper */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__appServices_application__["a" /* ApplicationAdminServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__appServices_application__["a" /* ApplicationAdminServices */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__theme_services_baThemeSpinner_baThemeSpinner_service__["a" /* BaThemeSpinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__theme_services_baThemeSpinner_baThemeSpinner_service__["a" /* BaThemeSpinner */]) === "function" && _h || Object])
], AddOffering);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=addOffering.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/addOffering/addOffering.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"addOfferingContainer\">\n    <div class=\"addOfferingContent divAlignLeft\">\n        <form [formGroup]=\"offeringForm\" (ngSubmit)=\"onSubmit(offeringForm.value)\">\n            <div class=\"col-md-12 profileForm divAlignLeft\">\n                <!--form controls start here-->\n                <div class=\"col-md-12 divAlignLeft\">\n                    <div class=\"col-md-6 addOfferingInput\">\n                        <div>\n                            <label class=\"labelStyle\">Select Issuer&nbsp;<i class=\"required\">*</i></label>\n                            <select #isIssuer class=\"form-control selectBox\" formControlName=\"selectIssuer\" autofocus>\n                                <option value=\"\" disabled selected>Select One</option>\n                                <option *ngFor=\"let issuer of issuerData\" value=\"{{issuer.value}}\">\n                                    {{issuer.value}}\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                             <span *ngIf=\"!offeringForm.get('selectIssuer').valid && offeringForm.get('selectIssuer').touched\"\n                                   class=\"help-block sub-little-signUp-error\">Issuer is required.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 addOfferingInput\">\n                        <div>\n                            <label class=\"labelStyle\">Issue name&nbsp;<i class=\"required\">*</i></label>\n                            <input formControlName=\"issueName\" type=\"text\" class=\"form-control\" maxlength=\"60\">\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                            <span *ngIf=\"!offeringForm.get('issueName').valid && offeringForm.get('issueName').touched\"\n                                  class=\"help-block sub-little-signUp-error\">Issue name is required.</span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-12 divAlignLeft\">\n                    <div class=\"col-md-6 addOfferingInput\">\n                        <div>\n                            <label class=\"labelStyle\">Type of Offering&nbsp;<i class=\"required\">*</i></label>\n                            <select class=\"form-control selectBox\" formControlName=\"typeOfOffering\">\n                                <option *ngFor=\"let type of typeOfOfferings\" value=\"{{type.value}}\">\n                                    {{type.value}}\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                            <span *ngIf=\"!offeringForm.get('typeOfOffering').valid && offeringForm.get('typeOfOffering').touched\"\n                                  class=\"help-block sub-little-signUp-error\">Type of offerings is required and must be valid.\n                            </span>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6 addOfferingInput\">\n                        <div>\n                            <label class=\"labelStyle\">Type&nbsp;<i class=\"required\">*</i></label>\n                            <select class=\"form-control selectBox\" formControlName=\"investmentType\">\n                                <option *ngFor=\"let investmentType of investmentTypeList \"\n                                        value=\"{{investmentType.value}}\">\n                                    {{investmentType.value}}\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                            <span *ngIf=\"!offeringForm.get('investmentType').valid && offeringForm.get('investmentType').touched\"\n                                  class=\"help-block sub-little-signUp-error\">\n                                Type field is required.\n                            </span>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"col-md-12 divAlignLeft\">\n                    <div class=\"col-md-6 addOfferingInput\">\n                        <div>\n                            <label class=\"labelStyle\">Issue Type&nbsp;<i class=\"required\">*</i></label>\n                            <select class=\"form-control selectBox\" formControlName=\"issueType\">\n                                <option *ngFor=\"let issueType of issueTypeList \" value=\"{{issueType.value}}\">\n                                    {{issueType.value}}\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                            <span *ngIf=\"!offeringForm.get('issueType').valid && offeringForm.get('issueType').touched\"\n                                  class=\"help-block sub-little-signUp-error\">\n                                Issue type is required.\n                            </span>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6 addOfferingInput\">\n                        <div>\n                            <label class=\"labelStyle\">Deal Type&nbsp;<i class=\"required\">*</i></label>\n                            <select class=\"form-control selectBox\" formControlName=\"dealType\">\n                                <option *ngFor=\"let dealType of dealTypeList \" value=\"{{dealType.value}}\">\n                                    {{dealType.value}}\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                            <span *ngIf=\"!offeringForm.get('dealType').valid && offeringForm.get('dealType').touched\"\n                                  class=\"help-block sub-little-signUp-error\">\n                                Deal type is required.\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-12 divAlignLeft\">\n                    <div class=\"col-md-4 divAlignLeft addOfferingInput\">\n                        <div>\n                            <label class=\"labelStyle\">Percentage Raised %</label>\n                            <input formControlName=\"percentageRaised\" type=\"text\" class=\"form-control\"\n                                   onkeypress=\"if(event.charCode > 31 && (event.charCode < 48 || event.charCode > 57)){\n                                return false;\n                                }\" maxlength=\"9\">\n\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                            <span *ngIf=\"!offeringForm.get('percentageRaised').valid && offeringForm.get('percentageRaised').touched\"\n                                  class=\"help-block sub-little-signUp-error confpass\">Percentage Raise is required.\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 addOfferingInput \">\n                        <div>\n                            <label class=\"labelStyle\">Offering Amount ($)&nbsp;<i class=\"required\">*</i></label>\n                            <input formControlName=\"offeringAmount\" type=\"text\" class=\"form-control\"\n                                   onkeypress=\"if(event.charCode > 31 && (event.charCode < 48 || event.charCode > 57)){\n                                return false;\n                                }\" maxlength=\"9\">\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                        <span *ngIf=\"!offeringForm.get('offeringAmount').valid && offeringForm.get('offeringAmount').touched\"\n                              class=\"help-block sub-little-signUp-error confpass\">Offering Amount is required.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 divAlignLeft addOfferingInput\">\n                        <div>\n                            <label class=\"labelStyle\">Minimum Offering Amount ($)&nbsp;<i class=\"required\">*</i></label>\n                            <input formControlName=\"minimumOfferingAmount\" type=\"text\" class=\"form-control\"\n                                   onkeypress=\"if(event.charCode > 31 && (event.charCode < 48 || event.charCode > 57)){\n                                return false;\n                                }\" maxlength=\"9\">\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                        <span *ngIf=\"!offeringForm.get('minimumOfferingAmount').valid && offeringForm.get('minimumOfferingAmount').touched\"\n                              class=\"help-block sub-little-signUp-error confpass\">Minimum Offering Amount is required.</span>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class=\"col-md-12 divAlignLeft\">\n                    <div class=\"col-md-12 addOfferingInput\">\n                        <div>\n\n                            <label class=\"labelStyle radioLabelHead\">Input Type:&nbsp;<i class=\"required\">*</i> </label>\n                            <span class=\"radioSpan\">\n                                <span class=\"radioMobile\">\n                                    <input type=\"radio\" class=\"radioButtonInput\"\n                                           formControlName=\"inputType\" name=\"inputType\"\n                                           id=\"inputTypeDollar\" value=\"Dollar Amount\"/>\n                                     <label for=\"inputTypeDollar\" class=\"labelStyle radioLabel\">Dollar Amount</label>\n                                </span>\n\n                                <span class=\"radioMobile radioLeft\">\n                                    <input type=\"radio\"  class=\"radioButtonInput\"\n                                           formControlName=\"inputType\" name=\"inputType\"\n                                           id=\"inputTypeShare\" value=\"Shares\"/>\n                                    <label for=\"inputTypeShare\" class=\"labelStyle radioLabel\">Shares</label>\n                                </span>\n                            </span>\n\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                            <span *ngIf=\"!offeringForm.get('inputType').valid && offeringForm.get('inputType').touched\"\n                                  class=\"help-block sub-little-signUp-error\">\n                                Input type is required.\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-12 divAlignLeft\">\n                    <div class=\"col-md-4 divAlignLeft addOfferingInput\">\n                        <div>\n                            <label class=\"labelStyle\">Max Amount ($)&nbsp;<i class=\"required\">*</i></label>\n                            <input formControlName=\"maxAmount\" type=\"text\" class=\"form-control\"\n                                   onkeypress=\"if(event.charCode > 31 && (event.charCode < 48 || event.charCode > 57)){\n                                return false;\n                                }\" maxlength=\"9\">\n\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                            <span *ngIf=\"!offeringForm.get('maxAmount').valid && offeringForm.get('maxAmount').touched\"\n                                  class=\"help-block sub-little-signUp-error confpass\">Max Amount is required.\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4  divAlignLeft addOfferingInput\">\n                        <div>\n                            <label class=\"labelStyle\">Unit Price ($)&nbsp;<i class=\"required\">*</i></label>\n                            <input formControlName=\"unitPrice\" type=\"text\" class=\"form-control\"\n                                   onkeypress=\"if(event.charCode > 31 && (event.charCode < 48 || event.charCode > 57)){\n                                return false;\n                                }\" maxlength=\"9\">\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                        <span *ngIf=\"!offeringForm.get('unitPrice').valid && offeringForm.get('unitPrice').touched\"\n                              class=\"help-block sub-little-signUp-error confpass\">Unit Price is required.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 divAlignLeft addOfferingInput\">\n                        <div>\n                            <label class=\"labelStyle\">Minimum Subscription Amount ($)&nbsp;<i class=\"required\">*</i></label>\n                            <input formControlName=\"minimumSubcriptionAmount\" type=\"text\" class=\"form-control\"  onkeypress=\"if(event.charCode > 31 && (event.charCode < 48 || event.charCode > 57)){\n                                return false;\n                                }\" maxlength=\"9\">\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                        <span *ngIf=\"!offeringForm.get('minimumSubcriptionAmount').valid && offeringForm.get('minimumSubcriptionAmount').touched\"\n                              class=\"help-block sub-little-signUp-error confpass\">Field can't remain empty..</span>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class=\"col-md-12 divAlignLeft\">\n                    <div class=\"col-md-4 divAlignLeft addOfferingInput\">\n                        <div>\n                            <label class=\"labelStyle\">Start Date&nbsp;<i class=\"required\">*</i></label>\n                            <span class=\"Quotedatepicker\">\n                                       <my-date-picker formControlName=\"startDate\" [selDate]=\"fromDate\" #datepicker\n                                                       placeholder=\"MM/DD/YYYY\" secondaryPlaceholder=\"MM/DD/YYYY\"\n                                                       name=\"mydate\" [options]=\"myDatePickerOptions\" (dateChanged)=\"onStartDateChanged($event)\"required>\n                                       </my-date-picker>\n                            </span>\n\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                            <span *ngIf=\"!offeringForm.get('startDate').valid && offeringForm.get('startDate').touched\"\n                                  class=\"help-block sub-little-signUp-error confpass\">Start date is required.\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 addOfferingInput divAlignLeft\">\n                        <div>\n                            <label class=\"labelStyle\">End Date&nbsp;<i class=\"required\">*</i></label>\n                            <span class=\"Quotedatepicker\">\n                                       <my-date-picker formControlName=\"endDate\" [selDate]=\"toDate\" #datepicker\n                                                       placeholder=\"MM/DD/YYYY\" secondaryPlaceholder=\"MM/DD/YYYY\"\n                                                       name=\"mydate\" [options]=\"myDatePickerOptions\"\n                                                       (dateChanged)=\"onDateChanged($event)\" required>\n                                       </my-date-picker>\n                            </span>\n                        </div>\n                        <div *ngIf=\"dateError\" class=\"profileErrorMessage\">\n                        <span class=\"help-block sub-little-signUp-error confpass\">End date can't be less than start date.</span>\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                        <span *ngIf=\"!offeringForm.get('endDate').valid && offeringForm.get('endDate').touched\"\n                              class=\"help-block sub-little-signUp-error confpass\">End date is required.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 addOfferingInput divAlignLeft\">\n                        <div>\n                            <label class=\"labelStyle\">Number of Units&nbsp;<i class=\"required\">*</i></label>\n                            <input formControlName=\"numberOfUnits\" type=\"text\" class=\"form-control\"  onkeypress=\"if(event.charCode > 31 && (event.charCode < 48 || event.charCode > 57)){\n                                return false;\n                                }\" maxlength=\"9\">\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                        <span *ngIf=\"!offeringForm.get('numberOfUnits').valid && offeringForm.get('numberOfUnits').touched\"\n                              class=\"help-block sub-little-signUp-error confpass\">Number Of Units is required.</span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-12 divAlignLeft\">\n                    <div class=\"col-md-6 addOfferingInput\">\n                        <div>\n\n                            <label class=\"labelStyle radioLabelHead\">Preview On Homepage? </label>\n\n                           <span class=\"radioSpan\">\n                               <span class=\"radioMobile\">\n                                  <input type=\"radio\" class=\"radioButtonInput\"\n                                         formControlName=\"previewHomepage\" name=\"previewHomepage\"\n                                         id=\"previewYes\" value=\"true\"/>\n                                   <label for=\"previewYes\" class=\"labelStyle radioLabel\">Yes</label>\n                               </span>\n                               <span class=\"radioMobile radioLeft\">\n                                   <input type=\"radio\" class=\"radioButtonInput\"\n                                          formControlName=\"previewHomepage\" name=\"previewHomepage\"\n                                          id=\"previewNo\" value=\"flase\"/>\n                                    <label for=\"previewNo\" class=\"labelStyle radioLabel\">No</label>\n                               </span>\n                           </span>\n\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                            <span *ngIf=\"!offeringForm.get('previewHomepage').valid && offeringForm.get('previewHomepage').touched\"\n                                  class=\"help-block sub-little-signUp-error\">\n                                Input type is required.\n                            </span>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6 addOfferingInput\">\n                        <div>\n                            <label class=\"labelStyle radioLabelHead\">Display in Marketplace? </label>\n                            <span class=\"radioSpan\">\n                                <span class=\"radioMobile\">\n                                    <input type=\"radio\" class=\"radioButtonInput\"\n                                   formControlName=\"displayMarketplace\" name=\"displayMarketplace\"\n                                   id=\"displayYes\" value=\"true\"/>\n                                    <label for=\"displayYes\" class=\"labelStyle radioLabel\">Yes</label>\n                                </span>\n                               <span class=\"radioMobile radioLeft\">\n                                   <input type=\"radio\" class=\"radioButtonInput\"\n                                   formControlName=\"displayMarketplace\" name=\"displayMarketplace\"\n                                   id=\"displayNo\" value=\"false\"/>\n                                    <label for=\"displayNo\" class=\"labelStyle radioLabel\">No</label>\n                               </span>\n                            </span>\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                            <span *ngIf=\"!offeringForm.get('displayMarketplace').valid && offeringForm.get('displayMarketplace').touched\"\n                                  class=\"help-block sub-little-signUp-error\">\n                                Input type is required.\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-12 divAlignLeft\">\n                    <div class=\"col-md-12 addOfferingInput\">\n                        <div>\n                            <label class=\"labelStyle\">Offering text&nbsp;<i class=\"required\">*</i></label>\n                            <!--<ckeditor formControlName=\"offeringText\" [(ngModel)]=\"content\"-->\n                                      <!--class=\"form-control ckEditor\"></ckeditor>-->\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                            <span *ngIf=\"!offeringForm.get('offeringText').valid && offeringForm.get('offeringText').touched\"\n                                  class=\"help-block sub-little-signUp-error\">\n                                Offering text is required.\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-12 divAlignLeft\">\n                    <div class=\"col-md-12 addOfferingInput\">\n                        <div>\n                            <label class=\"labelStyle\">Stamping text&nbsp;<i class=\"required\">*</i></label>\n                            <input formControlName=\"stampingText\" type=\"text\" class=\"form-control\" maxlength=\"60\">\n                        </div>\n                        <div class=\"profileErrorMessage\">\n                            <span *ngIf=\"!offeringForm.get('stampingText').valid && offeringForm.get('stampingText').touched\"\n                                  class=\"help-block sub-little-signUp-error\">\n                                Stamping text is required.\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class=\"col-md-12 form-group inputbutton submitButton divAlignLeft\">\n                    <button [ngClass]=\"{'disableSubmit' : (!offeringForm.valid) }\"\n                            [disabled]=\"!offeringForm.valid\" type=\"submit\" class=\"btnStyle\">ADD OFFERING\n                    </button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/addOffering/addOffering.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOfferingModule", function() { return AddOfferingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addOffering_component__ = __webpack_require__("../../../../../src/app/pages/addOffering/addOffering.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addOffering_routing__ = __webpack_require__("../../../../../src/app/pages/addOffering/addOffering.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { CKEditorModule } from 'ng2-ckeditor';
var AddOfferingModule = (function () {
    function AddOfferingModule() {
    }
    return AddOfferingModule;
}());
AddOfferingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_5__addOffering_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_modal__["ModalModule"],
            __WEBPACK_IMPORTED_MODULE_8_mydatepicker__["MyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_smart_table__["b" /* Ng2SmartTableModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__addOffering_component__["a" /* AddOffering */]
        ],
        providers: []
    })
], AddOfferingModule);

//# sourceMappingURL=addOffering.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/addOffering/addOffering.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addOffering_component__ = __webpack_require__("../../../../../src/app/pages/addOffering/addOffering.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__addOffering_component__["a" /* AddOffering */],
        children: []
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);
//# sourceMappingURL=addOffering.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/addOffering/addOffering.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #374767; }\n    .auth-block a:hover {\n      color: #2f3c58; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.paginationControl {\n  width: 100%;\n  float: left;\n  padding: 0 15px; }\n  .paginationControl #listItem .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n  .paginationControl #listItem .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .paginationControl #listItem .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .paginationControl #listItem .ngx-pagination a {\n    color: #606c71; }\n    .paginationControl #listItem .ngx-pagination a:hover {\n      background: transparent; }\n  .paginationControl #listItem .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n  .paginationControl #listItemNew .ngx-pagination .current {\n    background: #195C94;\n    color: #fff; }\n  .paginationControl #listItemNew .ngx-pagination .pagination-previous {\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .paginationControl #listItemNew .ngx-pagination .pagination-next {\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .paginationControl #listItemNew .ngx-pagination a {\n    color: #606c71; }\n    .paginationControl #listItemNew .ngx-pagination a:hover {\n      background: transparent; }\n  .paginationControl #listItemNew .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    margin-left: 0.9px;\n    color: #cacaca;\n    cursor: not-allowed; }\n  .paginationControl #listItem ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n    .paginationControl #listItem ul li:hover {\n      background: transparent; }\n  .paginationControl #listItemNew ul li {\n    border: 1px solid #d6d6d6;\n    margin-left: -2px;\n    height: 35px;\n    text-align: center;\n    min-width: 35px;\n    line-height: 27px; }\n    .paginationControl #listItemNew ul li:hover {\n      background: transparent; }\n  .paginationControl .pageControl {\n    cursor: pointer;\n    padding: 0 10px; }\n    .paginationControl .pageControl ul {\n      padding: 10px 0;\n      margin: 0;\n      float: left; }\n\n.btn-danger {\n  margin-left: 3px; }\n\n.btn-primary {\n  margin-right: 3px; }\n\n.btn:hover {\n  -webkit-transform: none;\n          transform: none; }\n\n.help-block {\n  color: red; }\n\n.modal-header {\n  margin: 0 auto; }\n\n.fa-rupee:before, .fa-inr:before {\n  content: \"\\F156\";\n  margin-right: 14px !important; }\n\n.ion-edit:before {\n  content: \"\\F2BF\";\n  color: #000000; }\n\n.text-spacing {\n  margin-bottom: 1%; }\n\n.disableSubmit {\n  opacity: 0.8;\n  cursor: not-allowed; }\n  .disableSubmit:hover {\n    opacity: 0.8;\n    cursor: not-allowed !important; }\n\n.purchase_table .ion-edit:before {\n  content: \"\\F2BF\";\n  margin-right: 10px;\n  color: #000000; }\n\n.ion-trash-b:before {\n  content: \"\\F252\";\n  color: #ff0000; }\n\n.fa-envelope-o:before {\n  margin-right: 10px; }\n\n.form-control[disabled] {\n  color: grey;\n  border-color: lightgrey; }\n\n#vendorPurchaseTable table > thead > tr > th:first-child {\n  text-align: center; }\n\n.tagsSmart {\n  background: #F1F3F6;\n  color: #282828;\n  display: inline-block;\n  border: 1px solid lightgray;\n  padding: 0 10px 0 10px;\n  margin: 2px 2px 2px 2px;\n  border-radius: 90px; }\n\ntable th, table td {\n  border: 1px solid #ddd; }\n\ntable .ng2-smart-actions {\n  text-align: center;\n  color: #374767; }\n\ntable .ng2-smart-title a {\n  color: #374767; }\n\ntable .ng2-smart-title a:hover {\n  text-decoration: none; }\n\n.modal-body-data {\n  margin-bottom: 15px; }\n\ntable .ng2-smart-actions {\n  width: 100px !important; }\n\n.inputbox {\n  border-radius: 3px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0px;\n  padding-left: 2%;\n  border: 1px solid gainsboro;\n  outline: none;\n  box-shadow: none;\n  color: #555555; }\n\n.inputbox::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: gainsboro; }\n\n.inputbox::-moz-placeholder {\n  /* Firefox 19+ */\n  color: gainsboro; }\n\n.inputbox:-ms-input-placeholder {\n  /* IE 10+ */\n  color: gainsboro; }\n\n.inputbox:-moz-placeholder {\n  /* Firefox 18- */\n  color: gainsboro; }\n\n.inputbox:focus, .inputbox:active {\n  border-color: #A5C9BB;\n  outline: 0;\n  outline: thin dotted \\9;\n  /* -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6); */\n  box-shadow: inset 0 1px 1px rgba(0, 220, 0, 0.075), 0 0 8px rgba(0, 225, 0, 0.2); }\n\n.inputbutton {\n  height: 58px;\n  line-height: 2.8;\n  margin: 3% 0 -2% 0; }\n\n.btnStyle {\n  width: 100%;\n  height: 100%;\n  background-color: #195C94;\n  color: white;\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer; }\n  .btnStyle:focus {\n    outline: none;\n    box-shadow: 0px 0px 2px 2px #59a453; }\n\n.passwordErrorMessage {\n  float: left;\n  margin-top: -35px;\n  width: 100%;\n  margin-bottom: 10px; }\n\n.divAlignLeft {\n  float: left; }\n\n.divAlignRight {\n  float: right; }\n\n.Quotedatepicker .mydp .currmonth:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .selector {\n  z-index: 1;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selection {\n  height: 33px !important;\n  color: #757575;\n  font-size: 15px !important;\n  position: relative;\n  text-align: left;\n  padding-left: 8px;\n  boder-radius: 3px; }\n\n.Quotedatepicker .mydp .selbtngroup {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclear {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnclear:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpicker {\n  height: 33px !important; }\n\n.Quotedatepicker .mydp .btnclearenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .mydp .btnpicker {\n  color: #757575; }\n\n.Quotedatepicker .mydp .btnpicker:hover {\n  background-color: #59a453 !important; }\n\n.Quotedatepicker .mydp .btnpickerenabled:hover {\n  background-color: #5fbe7e;\n  color: #fff; }\n\n.Quotedatepicker .help-block {\n  color: red; }\n\nrl-tag-input-item {\n  margin-bottom: 3px; }\n\nselect[multiple]:focus option:checked {\n  background: #3b5998 linear-gradient(0deg, #3b5998 0%, #3b5998 100%); }\n\nrl-tag-input input {\n  font-family: 'Conv_Avenir' !important;\n  font-size: 14px !important; }\n\nrl-tag-input input::-webkit-input-placeholder {\n  color: grey; }\n\nrl-tag-input-item {\n  font-family: 'Conv_Avenir' !important;\n  font-size: 14px !important; }\n\n.required:after {\n  content: \"*\";\n  color: red; }\n\n.auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #374767; }\n    .auth-block a:hover {\n      color: #2f3c58; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\nbody {\n  font-family: 'Conv_Avenir'; }\n\n.addOfferingContainer {\n  margin: 91px 2.5% 50px 2.5%;\n  padding: 15px;\n  background: white;\n  min-width: 95%;\n  overflow-y: auto;\n  border-radius: 3px;\n  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1); }\n  .addOfferingContainer .inputbutton {\n    text-align: center;\n    margin: 1.9% 0 2% 0; }\n  .addOfferingContainer .form-control[disabled] {\n    color: grey;\n    border-color: lightgrey; }\n  .addOfferingContainer .form-control {\n    border-radius: 3px; }\n  .addOfferingContainer .required {\n    color: red; }\n  .addOfferingContainer .addOfferingContent {\n    margin-top: 2%;\n    margin-left: 2.5%;\n    margin-right: 0%; }\n    .addOfferingContainer .addOfferingContent .addOfferingInput {\n      padding-bottom: 30px;\n      float: left; }\n  .addOfferingContainer .radioButtonInput {\n    vertical-align: middle; }\n  .addOfferingContainer .selectBox {\n    cursor: pointer; }\n  .addOfferingContainer .btnStyle {\n    width: 18%;\n    height: 85%;\n    float: right;\n    margin-right: 15px; }\n    @media screen and (min-width: 768px) and (max-width: 1100px) {\n      .addOfferingContainer .btnStyle {\n        width: 28%; } }\n    @media screen and (max-width: 767px) {\n      .addOfferingContainer .btnStyle {\n        width: 80%; } }\n  .addOfferingContainer .radioLeft {\n    margin-left: 7%; }\n  .addOfferingContainer .radioSpan {\n    margin-left: 3%; }\n  .addOfferingContainer .disableSubmit {\n    opacity: 0.8;\n    cursor: not-allowed; }\n    .addOfferingContainer .disableSubmit:hover {\n      opacity: 0.8;\n      cursor: not-allowed; }\n  .addOfferingContainer .small {\n    font-size: 100%; }\n  .addOfferingContainer .disableSubmit {\n    opacity: 0.8;\n    cursor: not-allowed; }\n    .addOfferingContainer .disableSubmit:hover {\n      opacity: 0.8;\n      cursor: not-allowed; }\n  .addOfferingContainer .help-block {\n    color: red; }\n  .addOfferingContainer .sub-little-signUp-error {\n    font-size: 14px; }\n  .addOfferingContainer .ckEditor {\n    /* border-radius: 3px; */\n    padding: 0; }\n    .addOfferingContainer .ckEditor #cke_editor1 {\n      border-radius: 3px;\n      border: 0.3px solid lightgrey; }\n\n@media only screen and (min-width: 421px) and (max-width: 768px) {\n  .addOfferingContainer .addOfferingContent .radioSpan {\n    margin-left: 10px; }\n  .addOfferingContainer .addOfferingContent .radioLeft {\n    margin-left: 7%; } }\n\n@media only screen and (min-width: 320px) and (max-width: 420px) {\n  .addOfferingContainer .addOfferingContent .radioLabelHead {\n    display: block; }\n  .addOfferingContainer .addOfferingContent .radioMobile {\n    display: block; }\n  .addOfferingContainer .addOfferingContent .radioSpan {\n    float: left;\n    margin-top: 10px;\n    margin-left: 0; }\n  .addOfferingContainer .addOfferingContent .radioLeft {\n    margin-left: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

});
//# sourceMappingURL=addOffering.module.chunk.js.map