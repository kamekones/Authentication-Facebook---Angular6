(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/FileUpload/fileupload.ts":
/*!************************************************!*\
  !*** ./src/app/admin/FileUpload/fileupload.ts ***!
  \************************************************/
/*! exports provided: FileUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return FileUpload; });
var FileUpload = /** @class */ (function () {
    function FileUpload(file) {
        this.file = file;
    }
    return FileUpload;
}());



/***/ }),

/***/ "./src/app/admin/admin.Module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.Module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _admin_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.routing */ "./src/app/admin/admin.routing.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/admin/components/account/account.component.ts");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/admin/components/banner/banner.component.ts");
/* harmony import */ var _components_book_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/book/book.component */ "./src/app/admin/components/book/book.component.ts");
/* harmony import */ var _components_buy_buy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/buy/buy.component */ "./src/app/admin/components/buy/buy.component.ts");
/* harmony import */ var _components_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/inbox/inbox.component */ "./src/app/admin/components/inbox/inbox.component.ts");
/* harmony import */ var _components_dashboards_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboards/dashboard.component */ "./src/app/admin/components/dashboards/dashboard.component.ts");
/* harmony import */ var _components_members_member_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/members/member.component */ "./src/app/admin/components/members/member.component.ts");
/* harmony import */ var _components_module_module_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/module/module.component */ "./src/app/admin/components/module/module.component.ts");
/* harmony import */ var _components_sell_sell_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sell/sell.component */ "./src/app/admin/components/sell/sell.component.ts");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/setting/setting.component */ "./src/app/admin/components/setting/setting.component.ts");
/* harmony import */ var _components_transport_transport_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/transport/transport.component */ "./src/app/admin/components/transport/transport.component.ts");
/* harmony import */ var _components_detail_uploads_detail_upload_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/detail-uploads/detail-upload.component */ "./src/app/admin/components/detail-uploads/detail-upload.component.ts");
/* harmony import */ var _components_list_uploads_list_upload_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/list-uploads/list-upload.component */ "./src/app/admin/components/list-uploads/list-upload.component.ts");
/* harmony import */ var _components_form_uploads_form_upload_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/form-uploads/form-upload.component */ "./src/app/admin/components/form-uploads/form-upload.component.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/upload.service */ "./src/app/admin/services/upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























// export const firebaseConfig = {
//   apiKey: "AIzaSyCvxxjDMjIG5RfYXHv0V1HjfhWVfaGqcjM",
//   authDomain: "mebooks-5de3f.firebaseapp.com",
//   databaseURL: "https://mebooks-5de3f.firebaseio.com",
//   projectId: "mebooks-5de3f",
//   storageBucket: "mebooks-5de3f.appspot.com",
//   messagingSenderId: "411345558211"
// };
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"],
                _components_account_account_component__WEBPACK_IMPORTED_MODULE_9__["AccountComponent"],
                _components_members_member_component__WEBPACK_IMPORTED_MODULE_15__["MemberComponent"],
                _components_dashboards_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_10__["BannerComponent"],
                _components_book_book_component__WEBPACK_IMPORTED_MODULE_11__["BookComponent"],
                _components_buy_buy_component__WEBPACK_IMPORTED_MODULE_12__["BuyComponent"],
                _components_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_13__["InboxComponent"],
                _components_module_module_component__WEBPACK_IMPORTED_MODULE_16__["ModuleComponent"],
                _components_sell_sell_component__WEBPACK_IMPORTED_MODULE_17__["SellComponent"],
                _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_18__["SettingComponent"],
                _components_transport_transport_component__WEBPACK_IMPORTED_MODULE_19__["TransportComponent"],
                _components_list_uploads_list_upload_component__WEBPACK_IMPORTED_MODULE_21__["ListUploadComponent"],
                _components_form_uploads_form_upload_component__WEBPACK_IMPORTED_MODULE_22__["FormUploadComponent"],
                _components_detail_uploads_detail_upload_component__WEBPACK_IMPORTED_MODULE_20__["DetailsUploadComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _admin_routing__WEBPACK_IMPORTED_MODULE_4__["adminRouting"],
                // AngularFireModule.initializeApp(firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
            ],
            providers: [
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"],
                _services_upload_service__WEBPACK_IMPORTED_MODULE_23__["UploadFileService"]
            ],
            bootstrap: [_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1.page-header {\r\n    margin-top: -5px;\r\n}\r\n\r\n.sidebar {\r\n    padding-left: 0;\r\n}\r\n\r\n.main-container {\r\n    background: #FFF;\r\n    padding-top: 15px;\r\n    margin-top: -20px;\r\n}\r\n\r\n.footer {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t</button>\r\n            <a class=\"navbar-brand\" style=\"margin-left: 10px; margin-top: 1px;\" href=\"#\" [routerLink]=\"['/admin/dashboard']\">\r\n                <img width=\"100px\" class=\"img-responsive\" src=\"assets/img/mebooks.png\">\r\n            </a>\r\n        </div>\r\n\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <form class=\"navbar-form navbar-left\" method=\"GET\" role=\"search\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search\">\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-search\"></i></button>\r\n            </form>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a href=\"#\" [routerLink]=\"['']\" target=\"_blank\">Visit Web</a></li>\r\n                <li class=\"dropdown \">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">\r\n\t\t\t\t\t\tAccount\r\n\t\t\t\t\t\t<span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\" role=\"menu\">\r\n                        <li><a href=\"#\" [routerLink]=\"['/admin/account']\"><i class=\"fa fa-user\"></i> {{displayName}}</a></li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\" (click)=\"this.auth.signOut()\"><span class=\"glyphicon glyphicon-off\"></span> Logout</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- /.navbar-collapse -->\r\n    </div>\r\n    <!-- /.container-fluid -->\r\n</nav>\r\n<div class=\"container-fluid main-container\">\r\n    <div class=\"col-md-2 sidebar\">\r\n        <ul class=\"nav nav-pills nav-stacked admin-menu\">\r\n            <li><a href=\"#\" [routerLink]=\"['/admin/dashboard']\"><i class=\"fa fa-home fa-fw\"></i>Dashboard</a></li>\r\n            <li><a href=\"#\" [routerLink]=\"['/admin/module']\"><i class=\"fa fa-list-alt fa-fw\"></i>Module</a></li>\r\n            <li><a href=\"#\" [routerLink]=\"['/admin/member']\"><i class=\"fa fa-bar-chart-o fa-fw\"></i>Member</a></li>\r\n            <li><a href=\"#\" [routerLink]=\"['/admin/banner']\"><i class=\"fa fa-table fa-fw\"></i>Banner</a></li>\r\n            <li><a href=\"#\" [routerLink]=\"['/admin/book']\"><i class=\"fa fa-tasks fa-fw\"></i>Books</a></li>\r\n            <li><a href=\"#\" [routerLink]=\"['/admin/sell']\"><i class=\"fa fa-calendar fa-fw\"></i>Sell</a></li>\r\n            <li>\r\n                <a data-toggle=\"collapse\" data-target=\"#buy\" class=\"collapsed active\"><i class=\"fa fa-book fa-fw\"></i>Buy <span class=\"caret\"></span></a>\r\n                <ul class=\"nav admin-menu collapse\" id=\"buy\">\r\n                    <li><a href=\"#\" [routerLink]=\"['/admin/buy']\">Payment</a></li>\r\n                    <li><a href=\"#\" [routerLink]=\"['/admin/transport']\">Transportation</a></li>\r\n                </ul>\r\n            </li>\r\n            <li><a href=\"#\" data-target-id=\"applications\" [routerLink]=\"['/admin/inbox']\"><i class=\"fa fa-pencil fa-fw\"></i>Inbox</a></li>\r\n            <li><a href=\"#\" data-target-id=\"settings\" [routerLink]=\"['/admin/setting']\"><i class=\"fa fa-cogs fa-fw\"></i>Settings</a></li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"col-md-10 content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/Map */ "./node_modules/rxjs/add/operator/Map.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_providers_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users/providers/auth.service */ "./src/app/users/providers/auth.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminComponent = /** @class */ (function () {
    function AdminComponent(router, fb, auth, db2) {
        this.router = router;
        this.fb = fb;
        this.auth = auth;
        this.db2 = db2;
        this.accessToken = localStorage.getItem('token');
        this.uid = localStorage.getItem('uid');
        this.userList = db2.list('users/' + this.uid + '/account');
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getUserAdmin();
    };
    AdminComponent.prototype.getUserAdmin = function () {
        var _this = this;
        this.userList.snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return ({ key: action.key, value: action.payload.val() }); });
        }).subscribe(function (items) {
            _this.displayName = items[4].value;
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _users_providers_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.routing.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.routing.ts ***!
  \****************************************/
/*! exports provided: appRoutingProviders, adminRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminRouting", function() { return adminRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/admin/components/account/account.component.ts");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/admin/components/banner/banner.component.ts");
/* harmony import */ var _components_book_book_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/book/book.component */ "./src/app/admin/components/book/book.component.ts");
/* harmony import */ var _components_buy_buy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/buy/buy.component */ "./src/app/admin/components/buy/buy.component.ts");
/* harmony import */ var _components_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/inbox/inbox.component */ "./src/app/admin/components/inbox/inbox.component.ts");
/* harmony import */ var _components_dashboards_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboards/dashboard.component */ "./src/app/admin/components/dashboards/dashboard.component.ts");
/* harmony import */ var _components_members_member_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/members/member.component */ "./src/app/admin/components/members/member.component.ts");
/* harmony import */ var _components_module_module_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/module/module.component */ "./src/app/admin/components/module/module.component.ts");
/* harmony import */ var _components_sell_sell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sell/sell.component */ "./src/app/admin/components/sell/sell.component.ts");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/setting/setting.component */ "./src/app/admin/components/setting/setting.component.ts");
/* harmony import */ var _components_transport_transport_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/transport/transport.component */ "./src/app/admin/components/transport/transport.component.ts");
/* harmony import */ var _users_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../users/guards/admin.guard */ "./src/app/users/guards/admin.guard.ts");














var appRoutes = [
    { path: 'admin',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"],
        canActivate: [_users_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]],
        children: [
            { path: '', component: _components_dashboards_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_users_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]] },
            { path: 'dashboard', component: _components_dashboards_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_users_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]] },
            { path: 'module', component: _components_module_module_component__WEBPACK_IMPORTED_MODULE_9__["ModuleComponent"], canActivate: [_users_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]] },
            { path: 'member', component: _components_members_member_component__WEBPACK_IMPORTED_MODULE_8__["MemberComponent"], canActivate: [_users_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]] },
            { path: 'banner', component: _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"], canActivate: [_users_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]] },
            { path: 'book', component: _components_book_book_component__WEBPACK_IMPORTED_MODULE_4__["BookComponent"], canActivate: [_users_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]] },
            { path: 'sell', component: _components_sell_sell_component__WEBPACK_IMPORTED_MODULE_10__["SellComponent"], canActivate: [_users_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]] },
            { path: 'buy', component: _components_buy_buy_component__WEBPACK_IMPORTED_MODULE_5__["BuyComponent"], canActivate: [_users_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]] },
            { path: 'inbox', component: _components_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_6__["InboxComponent"], canActivate: [_users_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]] },
            { path: 'setting', component: _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_11__["SettingComponent"], canActivate: [_users_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]] },
            { path: 'account', component: _components_account_account_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"], canActivate: [_users_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]] },
            { path: 'transport', component: _components_transport_transport_component__WEBPACK_IMPORTED_MODULE_12__["TransportComponent"], canActivate: [_users_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]] },
        ]
    },
];
var appRoutingProviders = [];
var adminRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/admin/components/account/account.component.css":
/*!****************************************************************!*\
  !*** ./src/app/admin/components/account/account.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/account/account.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/account/account.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>จัดการบัญชี | Admin</title>\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        Account Management\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\r\n        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/components/account/account.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/account/account.component.ts ***!
  \***************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/Map */ "./node_modules/rxjs/add/operator/Map.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/admin/components/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/admin/components/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/banner/banner.component.css":
/*!**************************************************************!*\
  !*** ./src/app/admin/components/banner/banner.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    border-radius: 0px\r\n}"

/***/ }),

/***/ "./src/app/admin/components/banner/banner.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/banner/banner.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>จัดการภาพสไลด์ | Admin</title>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        Banner Management\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div style=\"color: blue; margin-bottom: 20px\">\r\n            <h1>{{title}}</h1>\r\n            <h3>{{description}}</h3>\r\n        </div>\r\n\r\n        <form-upload></form-upload>\r\n\r\n        <br/>\r\n        <br/>\r\n\r\n        <list-upload></list-upload>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/components/banner/banner.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/components/banner/banner.component.ts ***!
  \*************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/Map */ "./node_modules/rxjs/add/operator/Map.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/admin/components/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/admin/components/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/book/book.component.css":
/*!**********************************************************!*\
  !*** ./src/app/admin/components/book/book.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/book/book.component.html":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/book/book.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        Book Management\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\r\n        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/components/book/book.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/components/book/book.component.ts ***!
  \*********************************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/Map */ "./node_modules/rxjs/add/operator/Map.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookComponent = /** @class */ (function () {
    function BookComponent() {
    }
    BookComponent.prototype.ngOnInit = function () {
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/admin/components/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/admin/components/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/buy/buy.component.css":
/*!********************************************************!*\
  !*** ./src/app/admin/components/buy/buy.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/buy/buy.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/components/buy/buy.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        Buying Management\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\r\n        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/components/buy/buy.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/components/buy/buy.component.ts ***!
  \*******************************************************/
/*! exports provided: BuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyComponent", function() { return BuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/Map */ "./node_modules/rxjs/add/operator/Map.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BuyComponent = /** @class */ (function () {
    function BuyComponent() {
    }
    BuyComponent.prototype.ngOnInit = function () {
    };
    BuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'buy',
            template: __webpack_require__(/*! ./buy.component.html */ "./src/app/admin/components/buy/buy.component.html"),
            styles: [__webpack_require__(/*! ./buy.component.css */ "./src/app/admin/components/buy/buy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BuyComponent);
    return BuyComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/dashboards/dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/dashboards/dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/dashboards/dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/components/dashboards/dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        Dashboard\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\r\n        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/components/dashboards/dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/components/dashboards/dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/Map */ "./node_modules/rxjs/add/operator/Map.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/admin/components/dashboards/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/admin/components/dashboards/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/detail-uploads/detail-upload.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/components/detail-uploads/detail-upload.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    border-radius: 0px\r\n}"

/***/ }),

/***/ "./src/app/admin/components/detail-uploads/detail-upload.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/components/detail-uploads/detail-upload.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- {{fileUpload.name}} -->\r\n<button (click)='deleteFileUpload(fileUpload)' class=\"btn btn-danger btn-xs\" style=\"float: right\">Delete</button>\r\n<img src=\"{{fileUpload.url}}\" alt=\"{{fileUpload.name}}\" style=\"max-width:350px\" />"

/***/ }),

/***/ "./src/app/admin/components/detail-uploads/detail-upload.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/components/detail-uploads/detail-upload.component.ts ***!
  \****************************************************************************/
/*! exports provided: DetailsUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsUploadComponent", function() { return DetailsUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/admin/services/upload.service.ts");
/* harmony import */ var _FileUpload_fileupload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../FileUpload/fileupload */ "./src/app/admin/FileUpload/fileupload.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsUploadComponent = /** @class */ (function () {
    function DetailsUploadComponent(uploadService) {
        this.uploadService = uploadService;
    }
    DetailsUploadComponent.prototype.ngOnInit = function () {
    };
    DetailsUploadComponent.prototype.deleteFileUpload = function (fileUpload) {
        this.uploadService.deleteFileUpload(fileUpload);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _FileUpload_fileupload__WEBPACK_IMPORTED_MODULE_2__["FileUpload"])
    ], DetailsUploadComponent.prototype, "fileUpload", void 0);
    DetailsUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'details-upload',
            template: __webpack_require__(/*! ./detail-upload.component.html */ "./src/app/admin/components/detail-uploads/detail-upload.component.html"),
            styles: [__webpack_require__(/*! ./detail-upload.component.css */ "./src/app/admin/components/detail-uploads/detail-upload.component.css")]
        }),
        __metadata("design:paramtypes", [_services_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadFileService"]])
    ], DetailsUploadComponent);
    return DetailsUploadComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/form-uploads/form-upload.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/form-uploads/form-upload.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    border-radius: 0px\r\n}"

/***/ }),

/***/ "./src/app/admin/components/form-uploads/form-upload.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/components/form-uploads/form-upload.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentFileUpload\" class=\"progress\">\r\n    <div class=\"progress-bar progress-bar-info progress-bar-striped\" role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{width:progress.percentage+'%'}\">\r\n        {{progress.percentage}}%</div>\r\n</div>\r\n\r\n<label class=\"btn btn-default\"> <input type=\"file\"\r\n\t(change)=\"selectFile($event)\">\r\n</label>\r\n\r\n<button class=\"btn btn-success\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">Upload</button>"

/***/ }),

/***/ "./src/app/admin/components/form-uploads/form-upload.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/components/form-uploads/form-upload.component.ts ***!
  \************************************************************************/
/*! exports provided: FormUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUploadComponent", function() { return FormUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/admin/services/upload.service.ts");
/* harmony import */ var _FileUpload_fileupload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../FileUpload/fileupload */ "./src/app/admin/FileUpload/fileupload.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormUploadComponent = /** @class */ (function () {
    function FormUploadComponent(uploadService) {
        this.uploadService = uploadService;
        this.progress = { percentage: 0 };
    }
    FormUploadComponent.prototype.ngOnInit = function () {
    };
    FormUploadComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    FormUploadComponent.prototype.upload = function () {
        var file = this.selectedFiles.item(0);
        this.currentFileUpload = new _FileUpload_fileupload__WEBPACK_IMPORTED_MODULE_2__["FileUpload"](file);
        this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
    };
    FormUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-upload',
            template: __webpack_require__(/*! ./form-upload.component.html */ "./src/app/admin/components/form-uploads/form-upload.component.html"),
            styles: [__webpack_require__(/*! ./form-upload.component.css */ "./src/app/admin/components/form-uploads/form-upload.component.css")]
        }),
        __metadata("design:paramtypes", [_services_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadFileService"]])
    ], FormUploadComponent);
    return FormUploadComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/inbox/inbox.component.css":
/*!************************************************************!*\
  !*** ./src/app/admin/components/inbox/inbox.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/inbox/inbox.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/components/inbox/inbox.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        Inbox Management\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\r\n        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/components/inbox/inbox.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/inbox/inbox.component.ts ***!
  \***********************************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/Map */ "./node_modules/rxjs/add/operator/Map.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InboxComponent = /** @class */ (function () {
    function InboxComponent() {
    }
    InboxComponent.prototype.ngOnInit = function () {
    };
    InboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inbox',
            template: __webpack_require__(/*! ./inbox.component.html */ "./src/app/admin/components/inbox/inbox.component.html"),
            styles: [__webpack_require__(/*! ./inbox.component.css */ "./src/app/admin/components/inbox/inbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/list-uploads/list-upload.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/list-uploads/list-upload.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-body {\r\n    border-radius: 0px;\r\n}"

/***/ }),

/***/ "./src/app/admin/components/list-uploads/list-upload.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/components/list-uploads/list-upload.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">List of Images</div>\r\n    <div *ngFor=\"let file of fileUploads\">\r\n        <div class=\"panel-body\">\r\n            <details-upload [fileUpload]='file'></details-upload>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/components/list-uploads/list-upload.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/components/list-uploads/list-upload.component.ts ***!
  \************************************************************************/
/*! exports provided: ListUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUploadComponent", function() { return ListUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/admin/services/upload.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListUploadComponent = /** @class */ (function () {
    function ListUploadComponent(uploadService) {
        this.uploadService = uploadService;
    }
    ListUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploadService.getFileUploads(6).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (fileUploads) {
            _this.fileUploads = fileUploads;
        });
    };
    ListUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'list-upload',
            template: __webpack_require__(/*! ./list-upload.component.html */ "./src/app/admin/components/list-uploads/list-upload.component.html"),
            styles: [__webpack_require__(/*! ./list-upload.component.css */ "./src/app/admin/components/list-uploads/list-upload.component.css")]
        }),
        __metadata("design:paramtypes", [_services_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadFileService"]])
    ], ListUploadComponent);
    return ListUploadComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/members/member.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/members/member.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/members/member.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/components/members/member.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        Member Management\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\r\n        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/components/members/member.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/components/members/member.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberComponent", function() { return MemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/Map */ "./node_modules/rxjs/add/operator/Map.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberComponent = /** @class */ (function () {
    function MemberComponent() {
    }
    MemberComponent.prototype.ngOnInit = function () {
    };
    MemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'member',
            template: __webpack_require__(/*! ./member.component.html */ "./src/app/admin/components/members/member.component.html"),
            styles: [__webpack_require__(/*! ./member.component.css */ "./src/app/admin/components/members/member.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/module/module.component.css":
/*!**************************************************************!*\
  !*** ./src/app/admin/components/module/module.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/module/module.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/module/module.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        Module Management\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\r\n        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/components/module/module.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/components/module/module.component.ts ***!
  \*************************************************************/
/*! exports provided: ModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleComponent", function() { return ModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/Map */ "./node_modules/rxjs/add/operator/Map.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModuleComponent = /** @class */ (function () {
    function ModuleComponent() {
    }
    ModuleComponent.prototype.ngOnInit = function () {
    };
    ModuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'module',
            template: __webpack_require__(/*! ./module.component.html */ "./src/app/admin/components/module/module.component.html"),
            styles: [__webpack_require__(/*! ./module.component.css */ "./src/app/admin/components/module/module.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModuleComponent);
    return ModuleComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/sell/sell.component.css":
/*!**********************************************************!*\
  !*** ./src/app/admin/components/sell/sell.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/sell/sell.component.html":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/sell/sell.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        Selling Management\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\r\n        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/components/sell/sell.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/components/sell/sell.component.ts ***!
  \*********************************************************/
/*! exports provided: SellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellComponent", function() { return SellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/Map */ "./node_modules/rxjs/add/operator/Map.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SellComponent = /** @class */ (function () {
    function SellComponent() {
    }
    SellComponent.prototype.ngOnInit = function () {
    };
    SellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sell',
            template: __webpack_require__(/*! ./sell.component.html */ "./src/app/admin/components/sell/sell.component.html"),
            styles: [__webpack_require__(/*! ./sell.component.css */ "./src/app/admin/components/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SellComponent);
    return SellComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/setting/setting.component.css":
/*!****************************************************************!*\
  !*** ./src/app/admin/components/setting/setting.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/setting/setting.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/setting/setting.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        Setting\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\r\n        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/components/setting/setting.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/setting/setting.component.ts ***!
  \***************************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/Map */ "./node_modules/rxjs/add/operator/Map.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingComponent = /** @class */ (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/admin/components/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.css */ "./src/app/admin/components/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/transport/transport.component.css":
/*!********************************************************************!*\
  !*** ./src/app/admin/components/transport/transport.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/transport/transport.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/transport/transport.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        Transport Management\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\r\n        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/components/transport/transport.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/transport/transport.component.ts ***!
  \*******************************************************************/
/*! exports provided: TransportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportComponent", function() { return TransportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/Map */ "./node_modules/rxjs/add/operator/Map.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransportComponent = /** @class */ (function () {
    function TransportComponent() {
    }
    TransportComponent.prototype.ngOnInit = function () {
    };
    TransportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'transport',
            template: __webpack_require__(/*! ./transport.component.html */ "./src/app/admin/components/transport/transport.component.html"),
            styles: [__webpack_require__(/*! ./transport.component.css */ "./src/app/admin/components/transport/transport.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TransportComponent);
    return TransportComponent;
}());



/***/ }),

/***/ "./src/app/admin/services/upload.service.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/services/upload.service.ts ***!
  \**************************************************/
/*! exports provided: UploadFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileService", function() { return UploadFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadFileService = /** @class */ (function () {
    function UploadFileService(db) {
        this.db = db;
        this.basePath = '/banners';
    }
    UploadFileService.prototype.pushFileToStorage = function (fileUpload, progress) {
        var _this = this;
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + fileUpload.file.name).put(fileUpload.file);
        uploadTask.on(firebase__WEBPACK_IMPORTED_MODULE_2__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // in progress
            var snap = snapshot;
            progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        }, function (error) {
            // fail
            console.log(error);
        }, function () {
            // success
            fileUpload.url = uploadTask.snapshot.downloadURL;
            fileUpload.name = fileUpload.file.name;
            _this.saveFileData(fileUpload);
        });
    };
    UploadFileService.prototype.saveFileData = function (fileUpload) {
        this.db.list(this.basePath + "/").push(fileUpload);
    };
    UploadFileService.prototype.getFileUploads = function (numberItems) {
        return this.db.list(this.basePath, function (ref) {
            return ref.limitToLast(numberItems);
        });
    };
    UploadFileService.prototype.deleteFileUpload = function (fileUpload) {
        var _this = this;
        this.deleteFileDatabase(fileUpload.key)
            .then(function () {
            _this.deleteFileStorage(fileUpload.name);
        })
            .catch(function (error) { return console.log(error); });
    };
    UploadFileService.prototype.deleteFileDatabase = function (key) {
        return this.db.list(this.basePath + "/").remove(key);
    };
    UploadFileService.prototype.deleteFileStorage = function (name) {
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    UploadFileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UploadFileService);
    return UploadFileService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/Map */ "./node_modules/rxjs/add/operator/Map.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebaseConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_admin_Module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.Module */ "./src/app/admin/admin.Module.ts");
/* harmony import */ var _users_user_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/user.module */ "./src/app/users/user.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var firebaseConfig = {
    apiKey: "AIzaSyCvxxjDMjIG5RfYXHv0V1HjfhWVfaGqcjM",
    authDomain: "mebooks-5de3f.firebaseapp.com",
    databaseURL: "https://mebooks-5de3f.firebaseio.com",
    projectId: "mebooks-5de3f",
    storageBucket: "mebooks-5de3f.appspot.com",
    messagingSenderId: "411345558211"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            ],
            imports: [
                _admin_admin_Module__WEBPACK_IMPORTED_MODULE_10__["AdminModule"],
                _users_user_module__WEBPACK_IMPORTED_MODULE_11__["UserModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["routing"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
            ],
            providers: [
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var appRoutes = [
    { path: '', redirectTo: '/user', pathMatch: 'full' },
];
var appRoutingProviders = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/users/components/banner/banner.component.css":
/*!**************************************************************!*\
  !*** ./src/app/users/components/banner/banner.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-control.left,\r\n.carousel-control.right {\r\n    background-image: none;\r\n}\r\n\r\n.carousel-fade .carousel-inner .item {\r\n    opacity: 0;\r\n    transition-property: opacity;\r\n    overflow: hidden;\r\n}\r\n\r\n.item.active img {\r\n    transition: -webkit-transform 5000ms linear 0s;\r\n    transition: transform 5000ms linear 0s;\r\n    transition: transform 5000ms linear 0s, -webkit-transform 5000ms linear 0s;\r\n    -webkit-transform: scale(1.05, 1.05);\r\n            transform: scale(1.05, 1.05);\r\n}\r\n\r\n@media all and (transform-3d), (-webkit-transform-3d) {\r\n    .carousel-fade .carousel-inner>.item.next,\r\n    .carousel-fade .carousel-inner>.item.active.right {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n        transform: translate3d(0, 0, 0);\r\n    }\r\n    .carousel-fade .carousel-inner>.item.prev,\r\n    .carousel-fade .carousel-inner>.item.active.left {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n        transform: translate3d(0, 0, 0);\r\n    }\r\n    .carousel-fade .carousel-inner>.item.next.left,\r\n    .carousel-fade .carousel-inner>.item.prev.right,\r\n    .carousel-fade .carousel-inner>.item.active {\r\n        opacity: 1;\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n        transform: translate3d(0, 0, 0);\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/users/components/banner/banner.component.html":
/*!***************************************************************!*\
  !*** ./src/app/users/components/banner/banner.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section-white\">\r\n    <div class=\"container\">\r\n        <div id=\"carousel\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\r\n            <ol class=\"carousel-indicators\">\r\n                <li data-target=\"#carousel\" *ngFor=\"let banners of fileUploads;let i = index\" [attr.data-slide-to]=\"i\" [ngClass]=\"{'active': i == '0'}\"></li>\r\n            </ol>\r\n\r\n            <div class=\"carousel-inner carousel-zoom\">\r\n                <div *ngFor=\"let banners of fileUploads;let i = index\" [ngClass]=\"{'item': i != null,'active': i == '0'}\">\r\n                    <img class=\"img-responsive\" src=\"{{banners.url}}\" alt=\"{{banners.name}}\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/users/components/banner/banner.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/users/components/banner/banner.component.ts ***!
  \*************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/Map */ "./node_modules/rxjs/add/operator/Map.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_services_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../admin/services/upload.service */ "./src/app/admin/services/upload.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BannerComponent = /** @class */ (function () {
    function BannerComponent(uploadService) {
        this.uploadService = uploadService;
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.getBanner();
    };
    BannerComponent.prototype.getBanner = function () {
        var _this = this;
        this.uploadService.getFileUploads(6).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (fileUploads) {
            _this.fileUploads = fileUploads;
        });
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/users/components/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/users/components/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_services_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadFileService"]])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/users/components/cart/cart.component.css":
/*!**********************************************************!*\
  !*** ./src/app/users/components/cart/cart.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/components/cart/cart.component.html":
/*!***********************************************************!*\
  !*** ./src/app/users/components/cart/cart.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>ตร้าสินค้า | MEBOOKs</title>\r\n\r\n<br>\r\n<div class=\"container\">\r\n    <div class=\"col\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item\"><a [routerLink]=\"['']\">Home</a></li>\r\n                <!-- <li class=\"item\"><a href=\"category.html\">หน้าแรก</a></li> -->\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">ตะกร้าสินค้า</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/users/components/cart/cart.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/users/components/cart/cart.component.ts ***!
  \*********************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/Map */ "./node_modules/rxjs/add/operator/Map.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/users/components/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/users/components/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/users/components/home/home.component.css":
/*!**********************************************************!*\
  !*** ./src/app/users/components/home/home.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/components/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/users/components/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>หน้าแรก | MEBOOKs</title>\r\n\r\n<app-banner></app-banner>"

/***/ }),

/***/ "./src/app/users/components/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/users/components/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/users/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/users/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/users/components/profiles/address.ts":
/*!******************************************************!*\
  !*** ./src/app/users/components/profiles/address.ts ***!
  \******************************************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var Address = /** @class */ (function () {
    function Address(name, address, sub_district, district, province, postcode, tel) {
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/users/components/profiles/bank.ts":
/*!***************************************************!*\
  !*** ./src/app/users/components/profiles/bank.ts ***!
  \***************************************************/
/*! exports provided: Banks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banks", function() { return Banks; });
var Banks = /** @class */ (function () {
    function Banks(bank, numberbank, account, branch, province) {
    }
    return Banks;
}());



/***/ }),

/***/ "./src/app/users/components/profiles/profile.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/users/components/profiles/profile.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " a {\r\n     padding: 1%;\r\n     text-align: left;\r\n     font-family: 'Kanit', sans-serif;\r\n }\r\n \r\n input {\r\n     border-radius: 0px;\r\n     font-family: 'Kanit', sans-serif;\r\n }\r\n \r\n .alert-danger {\r\n     border-radius: 0px;\r\n     font-family: 'Kanit', sans-serif;\r\n }\r\n \r\n select {\r\n     border-radius: 0px;\r\n     font-family: 'Kanit', sans-serif;\r\n }\r\n \r\n h4 {\r\n     font-family: 'Kanit', sans-serif;\r\n }\r\n \r\n button {\r\n     font-family: 'Kanit', sans-serif;\r\n }\r\n \r\n .btn-outline-success#btn-account {\r\n     float: left;\r\n }\r\n \r\n @media (min-width: 768px) {\r\n     .btn-outline-success#btn-account {\r\n         float: right;\r\n         margin-right: 17%;\r\n     }\r\n }\r\n \r\n .alert-danger {\r\n     width: 78%;\r\n     /* margin-left: 20%;\r\n    margin: auto;  */\r\n }\r\n \r\n td#delete {\r\n     text-align: center;\r\n }\r\n \r\n /* h4#main {\r\n     text-align: left;\r\n     font-size: 200%;\r\n } */\r\n \r\n td {\r\n     text-align: left;\r\n }\r\n \r\n #submit {\r\n     padding: 10%;\r\n     text-align: left;\r\n }\r\n \r\n .form-control {\r\n     width: 50%;\r\n }\r\n \r\n h4#history {\r\n     text-align: left;\r\n     font-size: 150%;\r\n     margin-left: 5%;\r\n }\r\n \r\n table#tbhistory {\r\n     width: 90%;\r\n     margin-left: 5%;\r\n     font-size: 90%;\r\n }\r\n \r\n button {\r\n     border-radius: 0px;\r\n }\r\n \r\n table,\r\n td {\r\n     text-align: left;\r\n     width: 80%;\r\n     margin-left: 10%;\r\n }\r\n \r\n div.solid {\r\n     float: left;\r\n     display: block;\r\n     width: 93%;\r\n     border-radius: 0px;\r\n     border: 2px solid rgb(207, 207, 207);\r\n     padding: 20px;\r\n }\r\n \r\n p {\r\n     text-align: left;\r\n }\r\n \r\n p#json {\r\n     margin-left: 10%;\r\n }\r\n \r\n button#delect {\r\n     display: block;\r\n     float: right;\r\n     margin-right: 0%;\r\n     margin-top: -17%;\r\n }\r\n \r\n button {\r\n     border-radius: 0px;\r\n }\r\n \r\n button {\r\n     border-radius: 0px;\r\n }\r\n \r\n .btn-outline-success#done {\r\n     float: right;\r\n     margin-right: 170px;\r\n }\r\n \r\n button#address {\r\n     padding-right: 76px;\r\n     padding-left: 76px;\r\n     margin-left: 1%;\r\n }\r\n \r\n button#bank {\r\n     padding-right: 60px;\r\n     padding-left: 60px;\r\n     margin-left: 1%;\r\n }\r\n \r\n h4 {\r\n     padding: 1%;\r\n     text-align: left;\r\n }\r\n \r\n h4#main {\r\n     text-align: left;\r\n     font-size: 200%;\r\n }\r\n \r\n #submit {\r\n     padding: 10%;\r\n     text-align: left;\r\n }\r\n \r\n .form-control {\r\n     width: 50%;\r\n }\r\n \r\n #plus {\r\n     text-align: left;\r\n     margin-left: -15%;\r\n }\r\n \r\n h4#historys {\r\n     text-align: left;\r\n     font-size: 150%;\r\n     margin-left: 5%;\r\n }\r\n \r\n table#tbhistorys {\r\n     width: 80%;\r\n     margin: auto;\r\n     font-size: 90%;\r\n }\r\n \r\n .remove {\r\n     float: right;\r\n     display: block;\r\n }\r\n \r\n /* ------------------------------------------------------- */"

/***/ }),

/***/ "./src/app/users/components/profiles/profile.component.html":
/*!******************************************************************!*\
  !*** ./src/app/users/components/profiles/profile.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>\r\n    บัญชีผู้ใช้ | MEBOOKs</title>\r\n<link href=\"https://fonts.googleapis.com/css?family=Kanit\" rel=\"stylesheet\">\r\n<script src=\"https://www.gstatic.com/firebasejs/${JSCORE_VERSION}/firebase.js\"></script>\r\n\r\n\r\n<br>\r\n<div class=\"container\">\r\n    <div class=\"col\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item\"><a [routerLink]=\"['']\">Home</a></li>\r\n                <!-- <li class=\"item\"><a href=\"category.html\">หน้าแรก</a></li> -->\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">ข้อมูลส่วนตัว</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                            <p>\r\n                                <span class=\"glyphicon glyphicon-user\">\r\n                        </span> ข้อมูล</p>\r\n                        </h4>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-body form-horizontal payment-form\">\r\n                                <br>\r\n\r\n\r\n                                <form (ngSubmit)=\"user()\" #userForm=\"ngForm\">\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"firstname\" class=\"col-sm-3 control-label\">ชื่อ</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input type=\"name\" class=\"form-control\" id=\"firstname\" placeholder=\"ชื่อ\" required [(ngModel)]=\"model.fname\" name=\"fname\" #fname=\"ngModel\" style=\"width:78%;\">\r\n                                            <div [hidden]=\"fname.valid || fname.pristine\" class=\"alert alert-danger\">กรุณากรอกชื่อ</div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"lastname\" class=\"col-sm-3 control-label\">นามสกุล</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input type=\"name\" class=\"form-control\" id=\"lasttname\" placeholder=\"นามสกุล\" required [(ngModel)]=\"model.lname\" name=\"lname\" #lname=\"ngModel\" style=\"width:78%;\">\r\n                                            <div [hidden]=\"lname.valid || lname.pristine\" class=\"alert alert-danger\">กรุณากรอกนามสกุล</div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"email\" class=\"col-sm-3 control-label\">อีเมล</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"อีเมล\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required [(ngModel)]=\"model.email\" name=\"email\" #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" style=\"width:78%;\">\r\n                                            <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\r\n                                                <div [hidden]=\"!email.hasError('required')\">กรุณากรอกอีเมล</div>\r\n                                                <div [hidden]=\"!email.hasError('pattern')\">รูปแบบอีเมลควรเป็น\r\n                                                    <small>\r\n                                                    <b>joe@abc.com</b>\r\n                                                </small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"phonenumber\" class=\"col-sm-3 control-label\">โทรศัพท์มือถือ</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input type=\"text\" pattern=\"\" class=\"form-control\" id=\"phone\" name=\"tel\" placeholder=\"08X XXX XXXX\" required pattern=\"[0-9]*\" minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"model.tel\" #tel=\"ngModel\" style=\"width:78%;\">\r\n                                            <div [hidden]=\"tel.valid || tel.pristine\" class=\"alert alert-danger\">\r\n                                                <div [hidden]=\"!tel.hasError('minlength')\">เบอร์ติดต่อควรมี 10 ตัว</div>\r\n                                                <div [hidden]=\"!tel.hasError('required')\">กรุณากรอกเบอ์โทรศัพท์มือถือ</div>\r\n                                                <div [hidden]=\"!tel.hasError('pattern')\">เบอร์เบอ์โทรศัพท์มือถือควรเป็นตัวเลขทั้งหมด</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n                                    <div class=\"form-group\" id=\"btn-account\">\r\n                                        <div class=\"btn btn-outline-success\" id=\"btn-account\">\r\n                                            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!userForm.form.valid\">\r\n                                                บันทึกข้อมูล\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <!--=======================ที่อยู่======================================= -->\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                            <p><i class=\"fa fa-address-card-o\"></i>&nbsp; ที่อยู่ของฉัน</p>\r\n                        </h4>\r\n                    </div>\r\n\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"panel panel-default\">\r\n                            <br>\r\n                            <div class=\"row\" *ngFor=\"let address of addressUsers\">\r\n                                <div class=\"col-sm-offset-3 col-sm-6\">\r\n                                    <ul class=\"list-group\">\r\n                                        <li class=\"list-group-item\">\r\n                                            <button type=\"button\" class=\"btn btn-danger btn-xs remove\" (click)=\"removeAddress(address.key)\">ลบ</button>\r\n                                            <p>{{address.value.name}} บ้านเลขที่ {{address.value.address}} ต.{{address.value.sub_district}} </p>\r\n                                            <p>อ.{{address.value.district}} จ.{{address.value.province}} {{address.value.postcode}}</p>\r\n                                            <p>เบอร์ติดต่อ {{address.value.phone}}</p>\r\n\r\n                                        </li>\r\n\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\" id=\"plus\">\r\n                                <div class=\"btn btn-outline-success\" style=\"margin-left: 15%;\">\r\n                                    <button [hidden]=\"countAdress==2\" [hidden]=\"this.increse\" type=\"button\" class=\"btn btn-success\" (click)=\"increaseAdd('add')\">\r\n                            + Add another address\r\n                          </button>\r\n                                </div>\r\n                                <div class=\"btn btn-outline-success\" style=\"margin-left: -3%\" *ngIf=\"this.increse\">\r\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancalAdd()\" id=\"address\">\r\n                            ปิด\r\n                          </button>\r\n                                </div>\r\n                            </div>\r\n                            <br>\r\n                            <hr style=\"margin: 5px\" *ngIf=\"this.increse\">\r\n\r\n\r\n                            <div class=\"panel-body form-horizontal payment-form\" *ngIf=\"this.increse\">\r\n                                <form (ngSubmit)=\"addressUser()\" #addressForm=\"ngForm\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"name\" class=\"col-sm-3 control-label\">ชื่อสกุล</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"fullname\" name=\"name\" placeholder=\"ชื่อ-นามสกุล\" [(ngModel)]=\"address.name\" required style=\"width:78%;\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"address\" class=\"col-sm-3 control-label\">ที่อยู่</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"ที่อยู่\" [(ngModel)]=\"address.address\" style=\"width:78%;\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"town\" class=\"col-sm-3 control-label\">ตำบล</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"town\" name=\"sub_district\" placeholder=\"ตำบล\" [(ngModel)]=\"address.sub_district\" style=\"width:78%;\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"city\" class=\"col-sm-3 control-label\">อำเภอ</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"city \" name=\"district\" placeholder=\"อำเภอ\" [(ngModel)]=\"address.district\" style=\"width:78%;\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"country\" class=\"col-sm-3 control-label\">จังหวัด</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select id=\"country\" name=\"province\" class=\"form-control\" [(ngModel)]=\"address.province\" style=\"width:78%;\">\r\n                                                <option value=\"\" selected=\"selected\">(โปรดเลือกจังหวัด)</option>\r\n                                                <option value=\"กรุงเทพมหานคร\">กรุงเทพมหานคร </option>\r\n                                                <option value=\"กระบี่\">กระบี่ </option>\r\n                                                <option value=\"กาญจนบุรี\">กาญจนบุรี </option>\r\n                                                <option value=\"กาฬสินธุ์\">กาฬสินธุ์ </option>\r\n                                                <option value=\"กำแพงเพชร\">กำแพงเพชร </option>\r\n                                                <option value=\"ขอนแก่น\">ขอนแก่น </option>\r\n                                                <option value=\"จันทบุรี\">จันทบุรี </option>\r\n                                                <option value=\"ฉะเชิงเทรา\">ฉะเชิงเทรา </option>\r\n                                                <option value=\"ชลบุรี\">ชลบุรี </option>\r\n                                                <option value=\"ชัยนาท\">ชัยนาท </option>\r\n                                                <option value=\"ชัยภูมิ\">ชัยภูมิ </option>\r\n                                                <option value=\"ชุมพร\">ชุมพร </option>\r\n                                                <option value=\"เชียงราย\">เชียงราย </option>\r\n                                                <option value=\"เชียงใหม่\">เชียงใหม่ </option>\r\n                                                <option value=\"ตรัง\">ตรัง</option>\r\n                                                <option value=\"ตราด\">ตราด </option>\r\n                                                <option value=\"ตาก\">ตาก </option>\r\n                                                <option value=\"นครนายก\">นครนายก </option>\r\n                                                <option value=\"นครปฐม\">นครปฐม </option>\r\n                                                <option value=\"นครพนม\">นครพนม </option>\r\n                                                <option value=\"นครราชสีมา\">นครราชสีมา </option>\r\n                                                <option value=\"นครศรีธรรมราช\">นครศรีธรรมราช </option>\r\n                                                <option value=\"นครสวรรค์\">นครสวรรค์ </option>\r\n                                                <option value=\"นนทบุรี\">นนทบุรี </option>\r\n                                                <option value=\"นราธิวาส\">นราธิวาส </option>\r\n                                                <option value=\"น่าน\">น่าน </option>\r\n                                                <option value=\"บึงกาฬ\">บึงกาฬ </option>\r\n                                                <option value=\"บุรีรัมย์\">บุรีรัมย์ </option>\r\n                                                <option value=\"ปทุมธานี\">ปทุมธานี </option>\r\n                                                <option value=\"ประจวบคีรีขันธ์\">ประจวบคีรีขันธ์ </option>\r\n                                                <option value=\"ปราจีนบุรี\">ปราจีนบุรี </option>\r\n                                                <option value=\"ปัตตานี\">ปัตตานี </option>\r\n                                                <option value=\"พระนครศรีอยุธยา\">พระนครศรีอยุธยา </option>\r\n                                                <option value=\"พังงา\">พังงา </option>\r\n                                                <option value=\"พัทลุง\">พัทลุง </option>\r\n                                                <option value=\"พิจิตร\">พิจิตร </option>\r\n                                                <option value=\"พิษณุโลก\">พิษณุโลก </option>\r\n                                                <option value=\"เพชรบุรี\">เพชรบุรี </option>\r\n                                                <option value=\"เพชรบูรณ์\">เพชรบูรณ์ </option>\r\n                                                <option value=\"แพร่\">แพร่ </option>\r\n                                                <option value=\"พะเยา\">พะเยา </option>\r\n                                                <option value=\"ภูเก็ต\">ภูเก็ต </option>\r\n                                                <option value=\"มหาสารคาม\">มหาสารคาม </option>\r\n                                                <option value=\"มุกดาหาร\">มุกดาหาร </option>\r\n                                                <option value=\"มุกดาหาร\">แม่ฮ่องสอน </option>\r\n                                                <option value=\"ยะลา\">ยะลา </option>\r\n                                                <option value=\"ยโสธร\">ยโสธร </option>\r\n                                                <option value=\"ร้อยเอ็ด\">ร้อยเอ็ด </option>\r\n                                                <option value=\"ระนอง\">ระนอง </option>\r\n                                                <option value=\"ระยอง\">ระยอง </option>\r\n                                                <option value=\"ราชบุรี\">ราชบุรี </option>\r\n                                                <option value=\"ลพบุรี\">ลพบุรี </option>\r\n                                                <option value=\"ลำปาง\">ลำปาง </option>\r\n                                                <option value=\"ลำพูน\">ลำพูน </option>\r\n                                                <option value=\"เลย\">เลย </option>\r\n                                                <option value=\"ศรีสะเกษ\">ศรีสะเกษ </option>\r\n                                                <option value=\"สกลนคร\">สกลนคร </option>\r\n                                                <option value=\"สงขลา\">สงขลา </option>\r\n                                                <option value=\"สตูล\">สตูล </option>\r\n                                                <option value=\"สมุทรปราการ\">สมุทรปราการ </option>\r\n                                                <option value=\"สมุทรสงคราม\">สมุทรสงคราม </option>\r\n                                                <option value=\"สมุทรสาคร\">สมุทรสาคร </option>\r\n                                                <option value=\"สระแก้ว\">สระแก้ว </option>\r\n                                                <option value=\"สระบุรี\">สระบุรี </option>\r\n                                                <option value=\"สิงห์บุรี\">สิงห์บุรี </option>\r\n                                                <option value=\"สุโขทัย\">สุโขทัย </option>\r\n                                                <option value=\"สุพรรณบุรี\">สุพรรณบุรี </option>\r\n                                                <option value=\"สุราษฎร์ธานี\">สุราษฎร์ธานี </option>\r\n                                                <option value=\"สุรินทร์\">สุรินทร์ </option>\r\n                                                <option value=\"หนองคาย\">หนองคาย </option>\r\n                                                <option value=\"หนองบัวลำภู\">หนองบัวลำภู </option>\r\n                                                <option value=\"อ่างทอง\">อ่างทอง </option>\r\n                                                <option value=\"อุดรธานี\">อุดรธานี </option>\r\n                                                <option value=\"อุทัยธานี\">อุทัยธานี </option>\r\n                                                <option value=\"อุตรดิตถ์\">อุตรดิตถ์ </option>\r\n                                                <option value=\"อุบลราชธานี\">อุบลราชธานี </option>\r\n                                                <option value=\"อำนาจเจริญ\">อำนาจเจริญ</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"zip\" class=\"col-sm-3 control-label\">รหัสไปรษณีย์</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"zip \" name=\"postcode\" placeholder=\"รหัสไปรษณีย์\" [(ngModel)]=\"address.postcode\" style=\"width:78%;\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"phone\" class=\"col-sm-3 control-label\">เบอร์ติดต่อ</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"phone\" name=\"phone\" placeholder=\"เบอร์โทรศัพท์\" [(ngModel)]=\"address.phone\" style=\"width:78%;\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"btn btn-outline-success\" id=\"btn-account\">\r\n                                            <button type=\"submit\" class=\"btn btn-success \" [disabled]=\"!addressForm.form.valid\">\r\n                                                เพิ่ม\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                            <p><i class=\"fa fa-money\"></i>&nbsp; ธนาคารของฉัน</p>\r\n                        </h4>\r\n                    </div>\r\n\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"panel panel-default\">\r\n                            <br>\r\n                            <div>\r\n                                <h4 class=\"panel-title\" id=\"historys\">\r\n                                    <p>บัญชีธนาคารของคุณ</p>\r\n                                </h4>\r\n                                <br>\r\n                                <div class=\"table-responsive\">\r\n                                    <table class=\"table table-striped\" border=\"1\" id=\"tbhistorys\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th style=\"width:30%\">ธนาคาร</th>\r\n                                                <th>ชื่อบัญชี</th>\r\n                                                <th>เลขที่บัญชี</th>\r\n                                                <th></th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody *ngIf=\"countBanks!=0\">\r\n                                            <tr *ngFor=\"let bank of banksUsers\">\r\n                                                <th>{{bank.value.account}}</th>\r\n                                                <th>{{bank.value.bank}}</th>\r\n                                                <th>{{bank.value.numberbank}}</th>\r\n                                                <th>\r\n                                                    <button class=\"btn btn-danger btn-xs\" (click)=\"removeBank(bank.key)\">\r\n                                                    ลบ\r\n                                                </button>\r\n                                                </th>\r\n                                            </tr>\r\n                                            <tr *ngIf=\"banksUsers.length == 0\">\r\n                                                <th>-</th>\r\n                                                <th>-</th>\r\n                                                <th>-</th>\r\n                                                <th>-</th>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"form-group\" id=\"plus\">\r\n                                <div class=\"btn btn-outline-success\" style=\"margin-left: 15%;\">\r\n                                    <button [hidden]=\"countBanks==3\" [hidden]=\"this.plus\" type=\"button\" class=\"btn btn-success \" (click)=\"plusBank('bank')\">\r\n                            + Add new a bank\r\n                          </button>\r\n                                </div>\r\n                                <div class=\"btn btn-outline-success\" style=\"margin-left: -3%\" *ngIf=\"this.plus\">\r\n                                    <button type=\"button\" id=\"bank\" class=\"btn btn-danger\" (click)=\"cancalBank()\">\r\n                            ปิด\r\n                          </button>\r\n                                </div>\r\n                            </div>\r\n                            <br>\r\n                            <hr style=\"margin: 5px\" *ngIf=\"this.plus\">\r\n                            <div class=\"panel-body form-horizontal payment-form\" *ngIf=\"this.plus\">\r\n\r\n                                <form #bankForm=\"ngForm\" (ngSubmit)=\"saveBank()\">\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"bank\" class=\"col-sm-3 control-label\">ธนาคาร</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select id=\"bank\" name=\"bank\" class=\"form-control\" [(ngModel)]=\"banks.bank\" style=\"width:78%;\">\r\n                                                <option value=\"\" selected=\"selected\">(โปรดเลือกธนาคาร)</option>\r\n                                                <option value=\"KTB\">ธนาคารกรุงไทย | KTB </option>\r\n                                                <option value=\"SCB\">ธนาคารไทยพาณิช | SCB </option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"idBank\" class=\"col-sm-3 control-label\">เลขบัญชี</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"idBank\" name=\"numberbank\" placeholder=\"เลขบัญชี\" [(ngModel)]=\"banks.numberbank\" style=\"width:78%;\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"nameBank\" class=\"col-sm-3 control-label\">ชื่อบัญชี</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"nameBank\" name=\"account\" placeholder=\"ชื่อบัญชี\" [(ngModel)]=\"banks.account\" style=\"width:78%;\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"branch\" class=\"col-sm-3 control-label\">สาขา</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"branch \" name=\"branch\" placeholder=\"สาขา\" [(ngModel)]=\"banks.branch\" style=\"width:78%;\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"country\" class=\"col-sm-3 control-label\">จังหวัด</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select id=\"country\" name=\"province\" class=\"form-control\" [(ngModel)]=\"banks.province\" style=\"width:78%;\">\r\n                                                <option value=\"\" selected=\"selected\">(โปรดเลือกจังหวัด)</option>\r\n                                                <option value=\"กรุงเทพมหานคร\">กรุงเทพมหานคร </option>\r\n                                                <option value=\"กระบี่\">กระบี่ </option>\r\n                                                <option value=\"กาญจนบุรี\">กาญจนบุรี </option>\r\n                                                <option value=\"กาฬสินธุ์\">กาฬสินธุ์ </option>\r\n                                                <option value=\"กำแพงเพชร\">กำแพงเพชร </option>\r\n                                                <option value=\"ขอนแก่น\">ขอนแก่น </option>\r\n                                                <option value=\"จันทบุรี\">จันทบุรี </option>\r\n                                                <option value=\"ฉะเชิงเทรา\">ฉะเชิงเทรา </option>\r\n                                                <option value=\"ชลบุรี\">ชลบุรี </option>\r\n                                                <option value=\"ชัยนาท\">ชัยนาท </option>\r\n                                                <option value=\"ชัยภูมิ\">ชัยภูมิ </option>\r\n                                                <option value=\"ชุมพร\">ชุมพร </option>\r\n                                                <option value=\"เชียงราย\">เชียงราย </option>\r\n                                                <option value=\"เชียงใหม่\">เชียงใหม่ </option>\r\n                                                <option value=\"ตรัง\">ตรัง</option>\r\n                                                <option value=\"ตราด\">ตราด </option>\r\n                                                <option value=\"ตาก\">ตาก </option>\r\n                                                <option value=\"นครนายก\">นครนายก </option>\r\n                                                <option value=\"นครปฐม\">นครปฐม </option>\r\n                                                <option value=\"นครพนม\">นครพนม </option>\r\n                                                <option value=\"นครราชสีมา\">นครราชสีมา </option>\r\n                                                <option value=\"นครศรีธรรมราช\">นครศรีธรรมราช </option>\r\n                                                <option value=\"นครสวรรค์\">นครสวรรค์ </option>\r\n                                                <option value=\"นนทบุรี\">นนทบุรี </option>\r\n                                                <option value=\"นราธิวาส\">นราธิวาส </option>\r\n                                                <option value=\"น่าน\">น่าน </option>\r\n                                                <option value=\"บึงกาฬ\">บึงกาฬ </option>\r\n                                                <option value=\"บุรีรัมย์\">บุรีรัมย์ </option>\r\n                                                <option value=\"ปทุมธานี\">ปทุมธานี </option>\r\n                                                <option value=\"ประจวบคีรีขันธ์\">ประจวบคีรีขันธ์ </option>\r\n                                                <option value=\"ปราจีนบุรี\">ปราจีนบุรี </option>\r\n                                                <option value=\"ปัตตานี\">ปัตตานี </option>\r\n                                                <option value=\"พระนครศรีอยุธยา\">พระนครศรีอยุธยา </option>\r\n                                                <option value=\"พังงา\">พังงา </option>\r\n                                                <option value=\"พัทลุง\">พัทลุง </option>\r\n                                                <option value=\"พิจิตร\">พิจิตร </option>\r\n                                                <option value=\"พิษณุโลก\">พิษณุโลก </option>\r\n                                                <option value=\"เพชรบุรี\">เพชรบุรี </option>\r\n                                                <option value=\"เพชรบูรณ์\">เพชรบูรณ์ </option>\r\n                                                <option value=\"แพร่\">แพร่ </option>\r\n                                                <option value=\"พะเยา\">พะเยา </option>\r\n                                                <option value=\"ภูเก็ต\">ภูเก็ต </option>\r\n                                                <option value=\"มหาสารคาม\">มหาสารคาม </option>\r\n                                                <option value=\"มุกดาหาร\">มุกดาหาร </option>\r\n                                                <option value=\"มุกดาหาร\">แม่ฮ่องสอน </option>\r\n                                                <option value=\"ยะลา\">ยะลา </option>\r\n                                                <option value=\"ยโสธร\">ยโสธร </option>\r\n                                                <option value=\"ร้อยเอ็ด\">ร้อยเอ็ด </option>\r\n                                                <option value=\"ระนอง\">ระนอง </option>\r\n                                                <option value=\"ระยอง\">ระยอง </option>\r\n                                                <option value=\"ราชบุรี\">ราชบุรี </option>\r\n                                                <option value=\"ลพบุรี\">ลพบุรี </option>\r\n                                                <option value=\"ลำปาง\">ลำปาง </option>\r\n                                                <option value=\"ลำพูน\">ลำพูน </option>\r\n                                                <option value=\"เลย\">เลย </option>\r\n                                                <option value=\"ศรีสะเกษ\">ศรีสะเกษ </option>\r\n                                                <option value=\"สกลนคร\">สกลนคร </option>\r\n                                                <option value=\"สงขลา\">สงขลา </option>\r\n                                                <option value=\"สตูล\">สตูล </option>\r\n                                                <option value=\"สมุทรปราการ\">สมุทรปราการ </option>\r\n                                                <option value=\"สมุทรสงคราม\">สมุทรสงคราม </option>\r\n                                                <option value=\"สมุทรสาคร\">สมุทรสาคร </option>\r\n                                                <option value=\"สระแก้ว\">สระแก้ว </option>\r\n                                                <option value=\"สระบุรี\">สระบุรี </option>\r\n                                                <option value=\"สิงห์บุรี\">สิงห์บุรี </option>\r\n                                                <option value=\"สุโขทัย\">สุโขทัย </option>\r\n                                                <option value=\"สุพรรณบุรี\">สุพรรณบุรี </option>\r\n                                                <option value=\"สุราษฎร์ธานี\">สุราษฎร์ธานี </option>\r\n                                                <option value=\"สุรินทร์\">สุรินทร์ </option>\r\n                                                <option value=\"หนองคาย\">หนองคาย </option>\r\n                                                <option value=\"หนองบัวลำภู\">หนองบัวลำภู </option>\r\n                                                <option value=\"อ่างทอง\">อ่างทอง </option>\r\n                                                <option value=\"อุดรธานี\">อุดรธานี </option>\r\n                                                <option value=\"อุทัยธานี\">อุทัยธานี </option>\r\n                                                <option value=\"อุตรดิตถ์\">อุตรดิตถ์ </option>\r\n                                                <option value=\"อุบลราชธานี\">อุบลราชธานี </option>\r\n                                                <option value=\"อำนาจเจริญ\">อำนาจเจริญ</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"btn btn-outline-success\" id=\"btn-account\">\r\n                                            <button type=\"submit\" class=\"btn btn-success \" [disabled]=\"!bankForm.form.valid\">\r\n                                                บันทึก\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/users/components/profiles/profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/users/components/profiles/profile.component.ts ***!
  \****************************************************************/
/*! exports provided: Item, ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/users/services/data.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/app/users/components/profiles/user.ts");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address */ "./src/app/users/components/profiles/address.ts");
/* harmony import */ var _bank__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bank */ "./src/app/users/components/profiles/bank.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(db2, dService) {
        this.db2 = db2;
        this.dService = dService;
        this.uid = localStorage.getItem('uid');
        this.model = new _user__WEBPACK_IMPORTED_MODULE_4__["User"]("", "", "", "");
        this.banks = new _bank__WEBPACK_IMPORTED_MODULE_6__["Banks"]("", "", "", "", "");
        this.address = new _address__WEBPACK_IMPORTED_MODULE_5__["Address"]("", "", "", "", "", "", "");
        this.submitted = false;
        this.items = null;
        this.userList = db2.list('users/' + this.uid + '/account');
        this.addressList = db2.list("users/" + this.uid + "/address");
        this.banksList = db2.list("users/" + this.uid + "/banks");
    }
    ProfileComponent.prototype.user = function () {
        this.submitted = true;
        if (!this.model["fname"] || !this.model["lname"] || !this.model["email"] || !this.model["tel"] || this.model["fname"] == "" || this.model["lname"] == "" ||
            this.model["email"] == "" || this.model["tel"] == "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                type: 'error',
                title: 'Oops!!',
                text: 'โปรดกรอกข้อมูลให้ครบถ้วน!',
            });
        }
        else {
            this.dService.addUsers(this.model);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                position: 'center',
                type: 'success',
                title: 'Saved',
                showConfirmButton: false,
                timer: 1000,
            });
        }
    };
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        this.userList.snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return ({ key: action.key, value: action.payload.val() }); });
        }).subscribe(function (items) {
            _this.model["email"] = items[0].value;
            _this.model["fname"] = items[1].value;
            _this.model["lname"] = items[3].value;
            if (items[5].value) {
                _this.model["tel"] = items[5].value;
            }
            else {
                _this.model["tel"] = "";
            }
        });
    };
    ProfileComponent.prototype.addressUser = function () {
        if (this.address['name'] == "" || this.address["address"] == "" || this.address["sub_district"] == "" || this.address["district"] == ""
            || this.address['province'] == "" || this.address['postcode'] == "" || this.address['tel'] == "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                type: 'error',
                title: 'Oops!!',
                text: 'โปรดกรอกข้อมูลให้ครบถ้วน!',
            });
        }
        else {
            this.db2.list("users/" + this.uid + "/address").push(this.address);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                position: 'center',
                type: 'success',
                title: 'Saved',
                showConfirmButton: false,
                timer: 1000,
            });
            this.increse = localStorage.removeItem('add');
        }
    };
    ProfileComponent.prototype.getAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.addressUsers = [];
                this.addressList.snapshotChanges().map(function (actions) {
                    return actions.map(function (action) { return ({ key: action.key, value: action.payload.val() }); });
                }).subscribe(function (items) {
                    for (var i in items) {
                        // localStorage.setItem('AdressId', items[i].key);
                        _this.addressUsers[i] = items[i];
                    }
                    _this.countAdress = _this.addressUsers.length;
                });
                return [2 /*return*/];
            });
        });
    };
    ProfileComponent.prototype.removeAddress = function (id) {
        var _this = this;
        this.db2.list("users/" + this.uid + "/address").remove(id).then(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                position: 'center',
                type: 'success',
                title: 'Deleted',
                showConfirmButton: false,
                timer: 1000,
            });
            _this.getAddress();
        });
    };
    ProfileComponent.prototype.saveBank = function () {
        if (this.banks['bank'] == "" || this.banks["numberbank"] == "" || this.banks["account"] == "" || this.banks["branch"] == ""
            || this.address['province'] == "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                type: 'error',
                title: 'Oops!!',
                text: 'โปรดกรอกข้อมูลให้ครบถ้วน!',
            });
        }
        else {
            this.db2.list("users/" + this.uid + "/banks").push(this.banks);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                position: 'center',
                type: 'success',
                title: 'Saved',
                showConfirmButton: false,
                timer: 1000,
            });
            this.plus = localStorage.removeItem('bank');
        }
    };
    ProfileComponent.prototype.getBanks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.banksUsers = [];
                this.banksList.snapshotChanges().map(function (actions) {
                    return actions.map(function (action) { return ({ key: action.key, value: action.payload.val() }); });
                }).subscribe(function (items) {
                    for (var i in items) {
                        // localStorage.setItem('AdressId', items[i].key);
                        _this.banksUsers[i] = items[i];
                    }
                    _this.countBanks = _this.banksUsers.length;
                });
                return [2 /*return*/];
            });
        });
    };
    ProfileComponent.prototype.removeBank = function (id) {
        var _this = this;
        this.db2.list("users/" + this.uid + "/banks").remove(id).then(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                position: 'center',
                type: 'success',
                title: 'Deleted',
                showConfirmButton: false,
                timer: 1000,
            });
            _this.getBanks();
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.getAddress();
        this.getBanks();
    };
    ProfileComponent.prototype.increaseAdd = function (add) {
        localStorage.setItem('add', add);
        // if (this.count != 2) {
        this.increse = localStorage.getItem('add');
        // } else {
        //   alert("สามารถบันทึกที่อยู่ได้เพียง 2 ที่อยู่")
        // }
    };
    ProfileComponent.prototype.plusBank = function (bank) {
        localStorage.setItem('bank', bank);
        // if (this.countBank != 3) {
        this.plus = localStorage.getItem('bank');
        // } else {
        //   alert("สามารถบันทึกบัญชีธนาคารได้เพียง 3 บัญชี")
        // }
    };
    ProfileComponent.prototype.cancalAdd = function () {
        this.increse = localStorage.removeItem('add');
    };
    ProfileComponent.prototype.cancalBank = function () {
        this.plus = localStorage.removeItem('bank');
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/users/components/profiles/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/users/components/profiles/profile.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/users/components/profiles/user.ts":
/*!***************************************************!*\
  !*** ./src/app/users/components/profiles/user.ts ***!
  \***************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(fname, lname, email, tel) {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/users/guards/admin.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/users/guards/admin.guard.ts ***!
  \*********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/auth.service */ "./src/app/users/providers/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(auth, router) {
        this.auth = auth;
        this.router = router;
        this.isAdmin = localStorage.getItem("isAdmin");
    }
    AdminGuard.prototype.canActivate = function () {
        if (this.isAdmin == 'false' || !localStorage.getItem("token")) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/users/guards/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/users/guards/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = /** @class */ (function () {
    function AuthGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    // canActivate(
    //     next: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot): Observable<boolean> | boolean {
    //     return this.afAuth.authState
    //         .take(1)
    //         .map(user => !!user)
    //         .do(loggedIn => {
    //             if (!loggedIn) {
    //                 this.router.navigate(['']);
    //             }
    //         })
    // }
    AuthGuard.prototype.canActivate = function () {
        if (!localStorage.getItem("token") && !localStorage.getItem("uid")) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/users/member.login.ts":
/*!***************************************!*\
  !*** ./src/app/users/member.login.ts ***!
  \***************************************/
/*! exports provided: MemberLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberLogin", function() { return MemberLogin; });
var MemberLogin = /** @class */ (function () {
    function MemberLogin(email, password) {
    }
    return MemberLogin;
}());



/***/ }),

/***/ "./src/app/users/member.signup.ts":
/*!****************************************!*\
  !*** ./src/app/users/member.signup.ts ***!
  \****************************************/
/*! exports provided: MemberSignup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberSignup", function() { return MemberSignup; });
var MemberSignup = /** @class */ (function () {
    function MemberSignup(username, email, password, confirmPassword) {
    }
    return MemberSignup;
}());



/***/ }),

/***/ "./src/app/users/password.match.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/users/password.match.directive.ts ***!
  \***************************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return EqualValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual) {
        this.validateEqual = validateEqual;
    }
    EqualValidator_1 = EqualValidator;
    EqualValidator.prototype.validate = function (c) {
        // self value (e.g. retype password)
        var v = c.value;
        // control value (e.g. password)
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value)
            return {
                validateEqual: false
            };
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('validateEqual')),
        __metadata("design:paramtypes", [String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());



/***/ }),

/***/ "./src/app/users/providers/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/users/providers/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(afAuth, db, router, afs) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.afs = afs;
        this.authState = null;
        this.dataUser = null;
        this.memberUser = null;
        this.checkLogin = [];
        this.uid = localStorage.getItem('uid');
        this.userList = db.list('users/' + this.uid + '/account');
        this.user = afAuth.authState;
        this.afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            return this.authenticated ? this.authState : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserObservable", {
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserAnonymous", {
        get: function () {
            return this.authenticated ? this.authState.isAnonymous : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserDisplayName", {
        get: function () {
            if (!this.authState) {
                return 'Guest';
            }
            else if (this.currentUserAnonymous) {
                return 'Anonymous';
            }
            else {
                return this.authState['displayName'] || 'User without a Name';
            }
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.googleLogin = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.facebookLogin = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.socialSignIn = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (res) {
            localStorage.setItem('token', res.credential.accessToken);
            localStorage.setItem('uid', res.user.uid);
            _this.authState = res.user;
            _this.dataUser = res.additionalUserInfo;
            if (_this.dataUser.isNewUser == true) {
                _this.dataUser.profile['tel'] = "";
                console.log(_this.dataUser);
                _this.updateUserData();
            }
            _this.getUser();
            location.reload();
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afAuth.auth.signInAnonymously()
            .then(function (user) {
            _this.authState = user;
            // this.router.navigate([''])
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.emailSignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            localStorage.setItem('token', _this.authState.refreshToken);
            localStorage.setItem('uid', _this.authState.uid);
            _this.authState['username'] = localStorage.getItem('username');
            _this.authState['name'] = "";
            _this.authState['lname'] = "";
            _this.authState['tel'] = "";
            _this.addUserEmail();
            window.location.reload();
            _this.router.navigate(['']);
        })
            .catch(function (error) { return error; });
    };
    AuthService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            localStorage.setItem('token', _this.authState.refreshToken);
            localStorage.setItem('uid', _this.authState.uid);
            console.log(_this.authState);
            window.location.reload();
            _this.router.navigate(['']);
        })
            .catch(function (error) { return error; });
    };
    AuthService.prototype.resetPassword = function (email) {
        var fbAuth = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]();
        return fbAuth.sendPasswordResetEmail(email)
            .then(function () { return console.log('email sent'); })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.getCurrentLoggedIn = function () {
        this.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                // this.router.navigate([''])
            }
        });
    };
    AuthService.prototype.signOut = function () {
        localStorage.clear();
        this.afAuth.auth.signOut();
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            position: 'center',
            type: 'success',
            title: 'ออกจากระบบ',
            showConfirmButton: false,
            timer: 1500
        });
        window.location.reload();
    };
    AuthService.prototype.updateUserData = function () {
        var path = "users/" + this.currentUserId + "/account"; // Endpoint on firebase
        var userRef = this.db.object(path);
        var data = {
            email: this.dataUser.profile.email,
            name: this.dataUser.profile.name,
            isAdmin: false,
            fname: this.dataUser.profile.first_name,
            lname: this.dataUser.profile.last_name,
            tel: this.dataUser.profile.tel
        };
        userRef.update(data)
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.addUserEmail = function () {
        var path = "users/" + this.currentUserId + "/account"; // Endpoint on firebase
        var userEmail = this.db.object(path);
        var data = {
            email: this.authState.email,
            name: this.authState.name,
            isAdmin: false,
            fname: this.authState.username,
            lname: this.authState.lname,
            tel: this.authState.tel
        };
        userEmail.update(data)
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.LoginUser = function () {
        var path = "users/" + this.currentUserId + "/account"; // Endpoint on firebase
        var userEmail = this.db.object(path);
        var data = {
            email: this.authState.email,
        };
        userEmail.update(data)
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.getUser = function () {
        var _this = this;
        this.userList.snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return ({ key: action.key, value: action.payload.val() }); });
        }).subscribe(function (items) {
            _this.tel = items[4].value;
            if (_this.tel == undefined) {
                _this.updateUserData();
                window.location.reload();
            }
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/users/services/data.service.ts":
/*!************************************************!*\
  !*** ./src/app/users/services/data.service.ts ***!
  \************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(db2, http) {
        this.db2 = db2;
        this.http = http;
        this.uid = localStorage.getItem('uid');
    }
    DataService.prototype.addUsers = function (value) {
        var path = '/users/' + this.uid + '/account'; // Endpoint on firebase
        var userRef = this.db2.object(path);
        var data = {
            name: value.fname + " " + value.lname,
            fname: value.fname,
            lname: value.lname,
            email: value.email,
            tel: value.tel
        };
        userRef.update(data)
            .catch(function (error) { return console.log(error); });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/users/user.component.css":
/*!******************************************!*\
  !*** ./src/app/users/user.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 15px;\r\n    font-size: 12px;\r\n    padding: 2em;\r\n    font-family: 'Kanit', sans-serif;\r\n}\r\n\r\n.btn {\r\n    border-radius: 0px;\r\n    font-family: 'Kanit', sans-serif;\r\n}\r\n\r\ninput {\r\n    border-radius: 0px;\r\n    font-family: 'Kanit', sans-serif;\r\n}\r\n\r\n.alert-danger {\r\n    border-radius: 0px;\r\n    font-family: 'Kanit', sans-serif;\r\n}\r\n\r\np {\r\n    font-family: 'Kanit', sans-serif;\r\n}\r\n\r\nh3 {\r\n    font-family: 'Kanit', sans-serif;\r\n}\r\n\r\nhtml {\r\n    margin: 40px auto;\r\n    text-align: center;\r\n}\r\n\r\n.img-modal {\r\n    width: 20%;\r\n    margin-top: -6%;\r\n    margin: -10%;\r\n    margin-left: 0%;\r\n}\r\n\r\n/* --------------------facebook---------------------------- */\r\n\r\n.btn-facebook {\r\n    background: #3B5998;\r\n    border-radius: 0;\r\n    color: #fff;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #263961;\r\n}\r\n\r\n.btn-facebook:link,\r\n.btn-facebook:visited {\r\n    color: #fff;\r\n}\r\n\r\n.btn-facebook:active,\r\n.btn-facebook:hover {\r\n    background: #263961;\r\n    color: #fff;\r\n}\r\n\r\n.active-cyan-4 input[type=text]:focus:not([readonly]) {\r\n    border: 1px solid #4dd0e1;\r\n    box-shadow: 0 0 0 1px #4dd0e1;\r\n}\r\n\r\n.login-or {\r\n    position: relative;\r\n    font-size: 18px;\r\n    color: #aaa;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.span-or {\r\n    display: block;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: -2px;\r\n    margin-left: -25px;\r\n    background-color: #fff;\r\n    width: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.hr-or {\r\n    background-color: #cdcdcd;\r\n    height: 1px;\r\n    margin-top: 0px !important;\r\n    margin-bottom: 0px !important;\r\n}\r\n\r\n/* ------------------- cart ---------------------- */\r\n\r\n.badge {\r\n    background-color: #E75959;\r\n    border-radius: 10px;\r\n    color: white;\r\n    display: inline-block;\r\n    font-size: 12px;\r\n    line-height: 1;\r\n    padding: 3px 7px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n}\r\n\r\n.cart-shopping {\r\n    margin-left: 0%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .cart-shopping {\r\n        margin-left: 0%;\r\n    }\r\n    .badge {\r\n        background-color: #E75959;\r\n        border-radius: 10px;\r\n        color: white;\r\n        display: inline-block;\r\n        font-size: 12px;\r\n        line-height: 1;\r\n        padding: 3px 7px;\r\n        text-align: center;\r\n        vertical-align: middle;\r\n        white-space: nowrap;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/users/user.component.html":
/*!*******************************************!*\
  !*** ./src/app/users/user.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\r\n<nav class=\"navbar-default\">\r\n    <div class=\"container\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n            <a class=\"navbar-brand\" style=\"margin-left: 10px; margin-top: 1px;\" href=\"#\" [routerLink]=\"['/user']\">\r\n                <img width=\"100px\" class=\"img-responsive\" src=\"assets/img/mebooks.png\">\r\n            </a>\r\n        </div>\r\n\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n\r\n\r\n\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">วิศวกรรมศาสตร์ <span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">เครื่องกล</a></li>\r\n                        <li><a href=\"#\">ยานยนต์</a></li>\r\n                        <li><a href=\"#\">อากาศยานต์</a></li>\r\n                        <li><a href=\"#\">ไฟฟ้า</a></li>\r\n                        <li><a href=\"#\">เคมี</a></li>\r\n                        <li><a href=\"#\">สาขาอื่นๆ</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">เตรียมสอบมัธยม <span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">GAT/PAT</a></li>\r\n                        <li><a href=\"#\">ฟิสิกส์</a></li>\r\n                        <li><a href=\"#\">เคมี</a></li>\r\n                        <li><a href=\"#\">ชีววิทยา</a></li>\r\n                        <li><a href=\"#\">คณิตศาสตร์</a></li>\r\n                        <li><a href=\"#\">ภาษาอังกฤษ</a></li>\r\n                        <li><a href=\"#\">วิชาอื่นๆ</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">ภาษาต่างประเทศ </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">กฎหมาย </a>\r\n                </li>\r\n            </ul>\r\n\r\n\r\n\r\n\r\n\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li *ngIf=\"!accessToken\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-shopping-bag\" aria-hidden=\"true\"></i></a></li>\r\n                <li *ngIf=\"accessToken\" class=\"cart-shopping\"><a href=\"#\" [routerLink]=\"['cart']\"><i class=\"fa fa-shopping-bag\" aria-hidden=\"true\"></i><span class=\"badge\">3</span></a></li>\r\n                <li *ngIf=\"!accessToken\">\r\n                    <a href=\"#MyModal\" data-toggle=\"modal\" data-target=\"#myModal\">ลงชื่อเข้าใช้</a>\r\n                </li>\r\n                <li class=\"dropdown\" *ngIf=\"accessToken\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">บัญชีผู้ใช้ \r\n                                                    <span class=\"caret\"></span>\r\n                                                </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li>\r\n                            <a href=\"#\" [routerLink]=\"['/user/profile']\"><i class=\"fa fa-user\"></i>&nbsp; บัญชีคุณ{{displayName}}</a>\r\n                        </li>\r\n                        <li *ngIf=\"isAdmin==true\">\r\n                            <a href=\"#\" [routerLink]=\"['/admin/dashboard']\" target=\"_blank\"><i class=\"fa fa-gears\"></i>&nbsp; Admin</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\" (click)=\"this.auth.signOut()\"><span class=\"glyphicon glyphicon-off\"></span>&nbsp; ออกจากระบบ</a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n\r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!--Modal Singin-->\r\n        <div id=\"loginbox\" class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <img class=\"img-modal\" src=\"assets/img/mebooks.png\">\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div style=\"text-align: center\">\r\n                    <!--<button class=\"btn btn-primary btn-lg btn3d\" (click)=\"facebook()\"> FACEBOOK </button>-->\r\n                    <button title=\"Facebook\" class=\"btn btn-facebook btn-lg\" (click)=\"facebook()\" style=\"width:50%;\"><i class=\"fa fa-facebook fa-fw\"></i>  FACEBOOK</button>\r\n                </div>\r\n                <br>\r\n                <div class=\"login-or\">\r\n                    <hr class=\"hr-or\">\r\n                    <span class=\"span-or\">หรือ</span>\r\n                </div>\r\n                <br>\r\n                <form (ngSubmit)=\"login()\" #memberLoginForm=\"ngForm\">\r\n                    <div class=\"form-group\">\r\n                        <!--<label for=\"inputUsernameEmail\">อีเมล</label>-->\r\n                        <input type=\"text\" class=\"form-control\" id=\"inputUsernameEmail\" placeholder=\"Email\" name=\"email\" required [(ngModel)]=\"memberLogin.email\" #email=\"ngModel\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <a style=\"float: right; color:#F0BD33\" class=\"pull-right\" (click)=\"resetPassword()\">ลืมรหัสผ่าน</a>\r\n                        <!--<label for=\"inputPassword\">รหัสผ่าน</label>-->\r\n                        <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\" name=\"password\" required [(ngModel)]=\"memberLogin.password\" #password=\"ngModel\">\r\n                    </div>\r\n\r\n                    <br><br>\r\n                    <p>ยังไม่มีบัญชีผู้ใช้ใช่ไหม? <a style=\"color:#F0BD33\" onClick=\"$('#loginbox').hide(); $('#signupbox').show()\"> ลงทะเบียนที่นี่</a></p>\r\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!memberLoginForm.form.valid\">เข้าสู่ระบบ</button>\r\n                </form>\r\n            </div>\r\n            <br>\r\n        </div>\r\n\r\n\r\n        <!-- Modal Signup -->\r\n        <div class=\"modal-content\" id=\"signupbox\" style=\"display:none;\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <img class=\"img-modal\" src=\"assets/img/mebooks.png\">\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <h3 style=\"margin: center;\">สมัครสมาชิก</h3>\r\n                <form (ngSubmit)=\"signup()\" #memberSignupForm=\"ngForm\">\r\n                    <div class=\"form-group\">\r\n                        <!--<label for=\"inputUsername\">ชื่อผู้ใช้</label>-->\r\n                        <input type=\"text\" class=\"form-control\" id=\"inputUsername\" placeholder=\"ชื่อผู้ใช้\" name=\"username\" required [(ngModel)]=\"memberSignup.username\" #username=\"ngModel\">\r\n                        <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">กรุณากรอกชื่อผู้ใช้</div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <!--<label for=\"inputEmail\">อีเมล</label>-->\r\n                        <input type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"อีเมล\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"email\" required [(ngModel)]=\"memberSignup.email\" #email=\"ngModel\">\r\n                        <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\r\n                            <div [hidden]=\"!email.hasError('required')\">กรุณากรอกอีเมล</div>\r\n                            <div [hidden]=\"!email.hasError('pattern')\">รูปแบบอีเมลควรเป็น\r\n                                <small>\r\n                                    <b>joe@abc.com</b>\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <!--<label for=\"password\">รหัสผ่าน</label>-->\r\n                        <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"หัสผ่านอย่างน้อย 6 ตัว\" minlength=\"6\" [(ngModel)]=\"memberSignup.password\" name=\"password\" #password=\"ngModel\">\r\n                        <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\" role=\"alert\">\r\n                            <div [hidden]=\"!password.hasError('minlength')\">รหัสผ่านอย่างน้อย 6 ตัวอักษร</div>\r\n                        </div>\r\n                        <!-- <div [hidden]=\"!password.hasError('minlength')\">Password ต้องมากกว่า 6 ตัวอักษร</div> -->\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <!--<label for=\"inputConfirmPassword\">ยืนยันรหัสผ่าน</label>-->\r\n                        <input type=\"password\" class=\"form-control\" id=\"inputConfirmPassword\" placeholder=\"ยืนยันรหัสผ่าน\" validateEqual=\"password\" name=\"confirmPassword\" required [(ngModel)]=\"memberSignup.confirmPassword\" #confirmPassword=\"ngModel\">\r\n                        <div [hidden]=\"confirmPassword.valid || confirmPassword.pristine\" class=\"alert alert-danger\">\r\n                            รหัสผ่านไม่ต้องกัน\r\n                        </div>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!memberSignupForm.form.valid\"> ลงทะเบียน</button>\r\n                </form>\r\n                <br>\r\n                <p>ถ้ามีบัญชีผู้ใช้แล้ว <a id=\"signinlink\" style=\"color:#F0BD33\" onclick=\"$('#signupbox').hide(); $('#loginbox').show()\">เข้าสู่ระบบที่นี่</a>\r\n            </div>\r\n            <br>\r\n        </div>\r\n    </div>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/users/user.component.ts":
/*!*****************************************!*\
  !*** ./src/app/users/user.component.ts ***!
  \*****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers/auth.service */ "./src/app/users/providers/auth.service.ts");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/Map */ "./node_modules/rxjs/add/operator/Map.js");
/* harmony import */ var rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_Map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _member_signup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./member.signup */ "./src/app/users/member.signup.ts");
/* harmony import */ var _member_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./member.login */ "./src/app/users/member.login.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var UserComponent = /** @class */ (function () {
    function UserComponent(router, fb, auth, db2) {
        this.router = router;
        this.fb = fb;
        this.auth = auth;
        this.db2 = db2;
        this.memberSignup = new _member_signup__WEBPACK_IMPORTED_MODULE_6__["MemberSignup"]("", "", "", "");
        this.memberLogin = new _member_login__WEBPACK_IMPORTED_MODULE_7__["MemberLogin"]("", "");
        this.submitted = false;
        this.accessToken = localStorage.getItem('token');
        this.uid = localStorage.getItem('uid');
        auth.getCurrentLoggedIn();
        this.userList = db2.list('users/' + this.uid + '/account');
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserComponent.prototype.signup = function () {
        this.submitted = true;
        console.log(this.memberSignup);
        localStorage.setItem('username', this.memberSignup['username']);
        this.auth.emailSignUp(this.memberSignup['email'], this.memberSignup['password'])
            .then(function (res) {
            console.log(res);
            if (res && res.code == 'auth/email-already-in-use') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    type: 'error',
                    title: 'Oops!!',
                    text: 'อีเมลนี้มีคนใช้แล้ว!',
                });
            }
            else {
                if (res == undefined) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                        position: 'center',
                        type: 'success',
                        title: 'เข้าสู่ระบบสำเร็จ',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    };
    UserComponent.prototype.login = function () {
        this.submitted = true;
        this.auth.emailLogin(this.memberLogin['email'], this.memberLogin['password'])
            .then(function (res) {
            console.log(res);
            if (res && res.code == 'auth/user-not-found' || res.code == "auth/invalid-email") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    type: 'error',
                    title: 'Oops!!',
                    text: 'อีเมลไม่ถูดต้อง!',
                });
            }
            else if (res && res.code == 'auth/wrong-password') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    type: 'error',
                    title: 'Oops!!',
                    text: 'รหัสผ่านไม่ถูกต้อง!',
                });
            }
            else if (res == undefined) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    position: 'center',
                    type: 'success',
                    title: 'เข้าสู่ระบบสำเร็จ',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        });
    };
    UserComponent.prototype.facebook = function () {
        this.auth.facebookLogin().then(function (res) {
            if (res == undefined) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    position: 'center',
                    type: 'success',
                    title: 'เข้าสู่ระบบสำเร็จ',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };
    UserComponent.prototype.getUser = function () {
        var _this = this;
        this.userList.snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return ({ key: action.key, value: action.payload.val() }); });
        }).subscribe(function (items) {
            _this.isAdmin = items[2].value;
            localStorage.setItem('isAdmin', items[2].value);
            localStorage.setItem('displayName', items[1].value);
            _this.displayName = localStorage.getItem('displayName');
        });
    };
    UserComponent.prototype.resetPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var email;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: 'โปรดใส่ Email ของคุณ',
                            input: 'email',
                            inputPlaceholder: 'Enter your email address'
                        })];
                    case 1:
                        email = (_a.sent()).value;
                        if (email) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()('ตรวจสอบ Email ของคุณ');
                            this.auth.resetPassword(email).then(function (res) {
                                console.log(res);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/users/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/users/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/users/user.module.ts":
/*!**************************************!*\
  !*** ./src/app/users/user.module.ts ***!
  \**************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.routing */ "./src/app/users/user.routing.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.component */ "./src/app/users/user.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/users/components/home/home.component.ts");
/* harmony import */ var _components_profiles_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profiles/profile.component */ "./src/app/users/components/profiles/profile.component.ts");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/users/components/banner/banner.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/users/components/cart/cart.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/data.service */ "./src/app/users/services/data.service.ts");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./providers/auth.service */ "./src/app/users/providers/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/users/guards/auth.guard.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/users/guards/admin.guard.ts");
/* harmony import */ var _password_match_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./password.match.directive */ "./src/app/users/password.match.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// export const firebaseConfig = {
//   apiKey: "AIzaSyCvxxjDMjIG5RfYXHv0V1HjfhWVfaGqcjM",
//   authDomain: "mebooks-5de3f.firebaseapp.com",
//   databaseURL: "https://mebooks-5de3f.firebaseio.com",
//   projectId: "mebooks-5de3f",
//   storageBucket: "mebooks-5de3f.appspot.com",
//   messagingSenderId: "411345558211"
// };
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_profiles_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_11__["BannerComponent"],
                _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"],
                _password_match_directive__WEBPACK_IMPORTED_MODULE_17__["EqualValidator"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _user_routing__WEBPACK_IMPORTED_MODULE_4__["userRouting"],
                // AngularFireModule.initializeApp(firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
            ],
            providers: [
                _services_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"],
                _providers_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"],
                _guards_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AdminGuard"]
            ],
            bootstrap: [_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/users/user.routing.ts":
/*!***************************************!*\
  !*** ./src/app/users/user.routing.ts ***!
  \***************************************/
/*! exports provided: appRoutingProviders, userRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRouting", function() { return userRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.component */ "./src/app/users/user.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/users/components/home/home.component.ts");
/* harmony import */ var _components_profiles_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profiles/profile.component */ "./src/app/users/components/profiles/profile.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/users/components/cart/cart.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/users/guards/auth.guard.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/users/guards/admin.guard.ts");







var appRoutes = [
    {
        path: 'user',
        component: _user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"],
        children: [
            { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'profile', component: _components_profiles_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
            { path: 'cart', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"] },
        ]
    },
];
var appRoutingProviders = [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_6__["AdminGuard"]];
var userRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Acer\Desktop\mebooks.net\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map