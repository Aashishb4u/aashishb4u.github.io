webpackJsonp(["item.module"],{

/***/ "../../../../../src/app/pages/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return itemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table_index__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_authentication__ = __webpack_require__("../../../../../src/app/app.authentication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appServices_application__ = __webpack_require__("../../../../../src/app/appServices/application.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__appServices_paginationService__ = __webpack_require__("../../../../../src/app/appServices/paginationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_services_baThemeSpinner_baThemeSpinner_service__ = __webpack_require__("../../../../../src/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__theme_validators_email_validator__ = __webpack_require__("../../../../../src/app/theme/validators/email.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__theme_validators_blank_validator__ = __webpack_require__("../../../../../src/app/theme/validators/blank.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__theme_validators_equalPasswords_validator__ = __webpack_require__("../../../../../src/app/theme/validators/equalPasswords.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_Subject__);
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
        styles: [__webpack_require__("../../../../../src/app/pages/item/item.scss")],
        template: "\n    <span *ngFor=\"let value of this.renderValue \">\n        <span class=\"tagsSmart\">{{value}} </span>\n    </span>\n  ",
    })
], ButtonViewComponent);

var itemComponent = (function () {
    function itemComponent(router, pageServices, fb, authentication, appService, toastr, vRef, _spinner) {
        var _this = this;
        this.router = router;
        this.pageServices = pageServices;
        this.fb = fb;
        this.authentication = authentication;
        this.appService = appService;
        this.toastr = toastr;
        this._spinner = _spinner;
        this.source = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table_index__["a" /* LocalDataSource */]();
        this.itemList = [];
        this.modelChanged = new __WEBPACK_IMPORTED_MODULE_13_rxjs_Subject__["Subject"]();
        this.perPage = 10;
        this.current_page = 1;
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
                name: {
                    title: 'Item Name',
                },
                description: {
                    title: 'Item Description',
                },
                tag_list: {
                    title: 'Categories',
                    type: 'custom',
                    renderComponent: ButtonViewComponent,
                    onComponentInitFunction: function (instance) {
                        instance.save.subscribe(function (row) {
                        });
                    },
                },
            },
            add: {
                addButtonContent: '',
                createButtonContent: '',
                cancelButtonContent: '',
                confirmCreate: true,
            },
            edit: {
                editButtonContent: '<i class="ion-edit" title="Edit Items"></i>',
                saveButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="ion-trash-b" title="Delete Items"></i>',
                confirmDelete: true,
            },
        };
        this.authentication.setChangedContentTopText('Items');
        this.modelChanged
            .debounceTime(300) // wait 300ms after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe(function (str) {
            _this.getItemsBySearch(str.trim());
        });
    }
    itemComponent.prototype.getPageData = function (page) {
        this.current_page = page;
        this.getItemDetails(page);
    };
    itemComponent.prototype.changedItem = function (event) {
        this.modelChanged.next(event);
    };
    itemComponent.prototype.ngOnInit = function () {
        this.getItemDetails(this.current_page);
    };
    itemComponent.prototype.userBasicInfo = function () {
        var _this = this;
        this.form = this.fb.group({
            'firstName': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_10__theme_validators_blank_validator__["a" /* BlankSpaceValidator */].validate])),
            'lastName': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_10__theme_validators_blank_validator__["a" /* BlankSpaceValidator */].validate])),
            'email': this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_9__theme_validators_email_validator__["a" /* EmailValidator */].validate])),
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
            }, { validator: __WEBPACK_IMPORTED_MODULE_12__theme_validators_equalPasswords_validator__["a" /* EqualPasswordsValidator */].validate('newPassword', 'confirmPassword') }),
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
    itemComponent.prototype.setUserData = function (userData) {
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
    itemComponent.prototype.triggers = function () {
        this.fileUpload.nativeElement.click();
    };
    itemComponent.prototype.addItem = function () {
        this.router.navigate(['addItem']);
    };
    itemComponent.prototype.editItem = function (event) {
        this.router.navigate(['editItem'], { queryParams: { id: event.data.id } });
    };
    itemComponent.prototype.deleteVendor = function (event) {
        this.vendorId = event.data.id;
        this.deleteVendorModal.open();
    };
    itemComponent.prototype.deleteVendorFinal = function () {
        var _this = this;
        this.deleteVendorModal.close();
        this._spinner.show();
        var deleteId = {
            id: this.vendorId,
        };
        this.appService.deleteItem(deleteId).subscribe(function (data) { return _this.deleteVendorSuccess(data); }, function (error) { return _this.deleteVendorFail(error); });
    };
    itemComponent.prototype.deleteVendorSuccess = function (data) {
        this._spinner.hide();
        if (data.data.message == '-300') {
            this.toastr.error('Item can not be deleted as used in Purchase Order');
            this.deleteVendorModal.close();
        }
        else if (data.data.message == '-301') {
            this.toastr.error('Item can not be deleted as used in Item Vendors');
            this.deleteVendorModal.close();
        }
        else {
            this.toastr.success('Item deleted successfully');
            this.deleteVendorModal.close();
            this.getItemDetails(this.current_page);
        }
    };
    itemComponent.prototype.deleteVendorFail = function (err) {
        this._spinner.hide();
        if (err.error && err.error.message) {
            this.toastr.error(err.error.message);
        }
        else if (typeof (err.error) !== 'undefined') {
            this.toastr.error('Server error');
        }
    };
    itemComponent.prototype.getItemDetails = function (page) {
        var _this = this;
        this._spinner.show();
        this.pageServices.getItems(page).subscribe(function (data) { return _this.getVendorsSuccess(data); }, function (error) { return _this.getVendorsFail(error); });
    };
    itemComponent.prototype.getItemsBySearch = function (event) {
        var _this = this;
        this._spinner.show();
        var searchValue = { search_input: event };
        this.pageServices.getItemsBySearch(searchValue, this.current_page).subscribe(function (data) { return _this.getVendorsSuccess(data); }, function (error) { return _this.getVendorsFail(error); });
    };
    itemComponent.prototype.getVendorsSuccess = function (res) {
        var response = res.data[0];
        this.itemList = [];
        this.totalCount = '';
        this.source.reset();
        this.itemList = Array.from(response.data);
        this.totalCount = response.total;
        var mockArray = [];
        mockArray[0] = response.data;
        mockArray[0].forEach(function (val) {
            if (val.tag_name) {
                if (val.tag_name.indexOf(',') == -1) {
                    val.tag_list = val.tag_name.split();
                }
                else {
                    val.tag_list = val.tag_name.split(',');
                }
            }
            else {
                val.tag_list = [];
            }
        });
        this.source.load(mockArray[0]);
        this._spinner.hide();
    };
    itemComponent.prototype.getVendorsFail = function (err) {
        if (err.error && err.error.message) {
            this.toastr.error(err.error.message);
        }
        else if (typeof (err.error) !== 'undefined') {
            this.toastr.error('Server error');
        }
    };
    return itemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileUpload'),
    __metadata("design:type", Object)
], itemComponent.prototype, "fileUpload", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deleteVendorModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11_ng2_modal__["Modal"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_ng2_modal__["Modal"]) === "function" && _b || Object)
], itemComponent.prototype, "deleteVendorModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('firstName'),
    __metadata("design:type", Object)
], itemComponent.prototype, "firstField", void 0);
itemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'viewItem',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__("../../../../../src/app/pages/item/item.scss")],
        template: __webpack_require__("../../../../../src/app/pages/item/item.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_7__appServices_paginationService__["a" /* PaginationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__appServices_paginationService__["a" /* PaginationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__appServices_paginationService__["a" /* PaginationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__app_authentication__["a" /* AuthenticationHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_authentication__["a" /* AuthenticationHelper */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__appServices_application__["a" /* ApplicationAdminServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__appServices_application__["a" /* ApplicationAdminServices */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__theme_services_baThemeSpinner_baThemeSpinner_service__["a" /* BaThemeSpinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__theme_services_baThemeSpinner_baThemeSpinner_service__["a" /* BaThemeSpinner */]) === "function" && _k || Object])
], itemComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=item.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/item/item.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profileContainer\">\n\n    <div class=\"profileContent \" *ngIf=\"settingComponent\">\n        <div>\n            <input placeholder=\"Search Items\" style=\"width: 200px;\" [(ngModel)]=\"this.searchvalue\" (ngModelChange)=\"changedItem($event)\" type=\"text\" class=\"form-control pull-left\"/>\n            <button style=\"margin-left:1%;margin-bottom: 10px\" (click)=\"addItem()\" type=\"button\" class=\"btn btn-primary alignDeleteButton pull-right \" ><i class=\"add-item-icon ion-plus-round\"></i> Add Item </button>\n        </div>\n        <div id=\"viewItems\" class=\"smarttable\" type=\"html\">\n            <ng2-smart-table [settings]=\"settings\"\n                             [source]=\"source\"\n                             (edit) = \"editItem($event)\"\n                             (delete)= \"deleteVendor($event)\">\n            </ng2-smart-table>\n        </div>\n        <div class=\"paginationControl\">\n            <div *ngFor='let data of itemList | paginate : { itemsPerPage: this.perPage, currentPage: current_page, id : \"listItem\", totalItems: totalCount }'></div>\n            <pagination-controls class=\"pageControl\" (pageChange)=\"getPageData($event)\" id=\"listItem\"\n                                 nextLabel=\"Next\">\n            </pagination-controls>\n        </div>\n    </div>\n</div>\n\n<div class=\"confirmUserActiveContainer\">\n    <modal #deleteVendorModal [closeOnOutsideClick]=\"false\">\n        <modal-header>\n            <div class=\"test\"><span class=\"headerText\">Are you sure you want to delete this Item?</span></div>\n        </modal-header>\n        <modal-content>\n            <div class=\"confirmButtonsContainer\">\n                <div class=\"confirmButtons\">\n                    <div class=\"noButton\">\n                        <button class=\"noConfirm\" (click)=\"deleteVendorModal.close()\">No</button>\n                    </div>\n                    <div class=\"yesButton\">\n                        <button class=\"yesConfirm\" (click)=\"deleteVendorFinal()\">Yes</button>\n                    </div>\n                </div>\n            </div>\n        </modal-content>\n    </modal>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/item/item.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemModule", function() { return itemModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_component__ = __webpack_require__("../../../../../src/app/pages/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_routing__ = __webpack_require__("../../../../../src/app/pages/item/item.routing.ts");
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









var itemModule = (function () {
    function itemModule() {
    }
    return itemModule;
}());
itemModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_5__item_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_modal__["ModalModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_smart_table__["b" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__["a" /* NgxPaginationModule */],
        ],
        // declarations: [
        //     itemComponent,
        // ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__item_component__["b" /* itemComponent */], __WEBPACK_IMPORTED_MODULE_4__item_component__["a" /* ButtonViewComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__item_component__["a" /* ButtonViewComponent */]
        ],
        providers: [],
    })
], itemModule);

//# sourceMappingURL=item.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/item/item.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_component__ = __webpack_require__("../../../../../src/app/pages/item/item.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__item_component__["b" /* itemComponent */],
        children: []
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);
//# sourceMappingURL=item.routing.js.map

/***/ })

});
//# sourceMappingURL=item.module.chunk.js.map