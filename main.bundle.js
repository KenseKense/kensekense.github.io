webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_about_component__ = __webpack_require__("../../../../../src/app/pages/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact_component__ = __webpack_require__("../../../../../src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact_form_component__ = __webpack_require__("../../../../../src/app/pages/contact/contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bio_bio_component__ = __webpack_require__("../../../../../src/app/pages/bio/bio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_misc_misc_component__ = __webpack_require__("../../../../../src/app/pages/misc/misc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_books_books_component__ = __webpack_require__("../../../../../src/app/pages/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_resume_resume_component__ = __webpack_require__("../../../../../src/app/pages/about/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_bulletin_bulletin_component__ = __webpack_require__("../../../../../src/app/pages/bulletin/bulletin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//imports









var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__pages_about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'contactform', component: __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact_form_component__["a" /* ContactFormComponent */] },
    { path: 'bio', component: __WEBPACK_IMPORTED_MODULE_6__pages_bio_bio_component__["a" /* BioComponent */] },
    { path: 'misc', component: __WEBPACK_IMPORTED_MODULE_7__pages_misc_misc_component__["a" /* MiscComponent */] },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_8__pages_books_books_component__["a" /* BooksComponent */] },
    { path: 'resume', component: __WEBPACK_IMPORTED_MODULE_9__pages_about_resume_resume_component__["a" /* ResumeComponent */] },
    { path: 'bulletin', component: __WEBPACK_IMPORTED_MODULE_10__pages_bulletin_bulletin_component__["a" /* BulletinComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Landing Page';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about_component__ = __webpack_require__("../../../../../src/app/pages/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact_component__ = __webpack_require__("../../../../../src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact_form_component__ = __webpack_require__("../../../../../src/app/pages/contact/contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_submitted_component__ = __webpack_require__("../../../../../src/app/pages/contact/submitted.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_resume_resume_component__ = __webpack_require__("../../../../../src/app/pages/about/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_bio_bio_component__ = __webpack_require__("../../../../../src/app/pages/bio/bio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_misc_misc_component__ = __webpack_require__("../../../../../src/app/pages/misc/misc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_books_books_component__ = __webpack_require__("../../../../../src/app/pages/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__util_loading_component__ = __webpack_require__("../../../../../src/app/util/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_bulletin_bulletin_component__ = __webpack_require__("../../../../../src/app/pages/bulletin/bulletin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact_form_component__["a" /* ContactFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_submitted_component__["a" /* SubmittedComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_about_resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_bio_bio_component__["a" /* BioComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_misc_misc_component__["a" /* MiscComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_books_books_component__["a" /* BooksComponent */],
                __WEBPACK_IMPORTED_MODULE_20__util_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_bulletin_bulletin_component__["a" /* BulletinComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_19__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ". {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody {\n  background-color: transparent;\n}\n\n.navi {\n  background-color: #69bf64;\n  height: 100%;\n  padding: 10px;\n}\n\n.navibtn {\n  color: #141414;\n  padding: 10px;\n  background-color: #69bf64;\n}\n\n.d-inline-block {\n\n}\n\n.navibtn:hover {\n  text-decoration: none;\n  background-color: #73b36f;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\r\n<html>\r\n<body>\r\n  <div class=\"navi\">\r\n    <a href='/home' class=\"navibtn\">Home</a>\r\n    <div ngbDropdown class=\"d-inline-block\">\r\n      <a class=\"navibtn\" ngbDropdownToggle>About</a>\r\n      <div ngbDropdownMenu>\r\n        <a href='/about' class=\"dropdown-item\">Info</a>\r\n        <a href='/bio' class=\"dropdown-item\">Bio</a>\r\n        <a href='/resume' class=\"dropdown-item\">Resume</a>\r\n      </div>\r\n    </div>\r\n    <a href='/contact' class=\"navibtn\">Contact</a>\r\n    <a href='/misc' class=\"navibtn\">Misc</a>\r\n  </div>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ". {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.about {\r\n  padding-top: 50px;\r\n  padding-bottom: 20px;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n}\r\n\r\np {\r\n  padding: 30px;\r\n  font-size: 14px;\r\n}\r\n\r\nimg {\r\n  padding: 1px;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  font-size: 42px;\r\n}\r\n\r\n.sec {\r\n  background-color: #F1F3F4;\r\n  border-radius: 8px;\r\n  text-align: justify;\r\n  padding: 5px\r\n}\r\n\r\n.bottom {\r\n  text-align: center;\r\n}\r\n\r\na {\r\n  background: #DFDFDF;\r\n  padding: 10px;\r\n  color: #141414;\r\n  border-radius: 8px;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none;\r\n  background: #D3D3D3;\r\n}\r\n\r\n.bio{\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.resume {\r\n  padding-bottom: 6px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\r\n  <body>\r\n    <!--Navbar-->\r\n    <app-navbar></app-navbar>\r\n    <!--ABOUT-->\r\n    <div class=\"about\">\r\n      <h3 class=\"title\">A Simple Web-App!</h3>\r\n      <hr>\r\n      <div class=\"sec\">\r\n        <p> <img src='./../../../assets/images/angular.png' class=\"logo\" alt='angular logo'> Angular defined front-end. Mainly page routing and organizational logic. Page layout and design written with HTML and CSS.\r\n        Challenges included learning and managing Anguar while building good development practices.</p>\r\n      </div>\r\n      <br>\r\n      <div class=\"sec\">\r\n        <p> <img src='./../../../assets/images/firebaselogo.png' class='logo' alt='firebase logo'> Firebase acts as access/storage of data as a back-end. File storage and access (ie: downloadable resume, book data, direct message) uses Firestore. Firebase is super flexible and made the back-end access and integration with Angular extremely easy.</p>\r\n      </div>\r\n      <hr>\r\n      <div class=\"bottom\">\r\n        <a href='/bio'><img class='bio' src='./../../../assets/images/bio.png'>My Bio</a>\r\n        <a href='/resume'><img class='resume' src='./../../../assets/images/paper.png'>My Resume</a>\r\n      </div>\r\n    </div>\r\n\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/pages/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/about/resume/resume.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/about/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html>\n<body>\n  <a class=\"btn btn-primary\" [href]=\"profileUrl | async\" download >Download</a>\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/pages/about/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(storage) {
        this.storage = storage;
        var ref = this.storage.ref('ning_tientso_resume.pdf');
        this.profileUrl = ref.getDownloadURL();
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resume',
            template: __webpack_require__("../../../../../src/app/pages/about/resume/resume.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/about/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/bio/bio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ". {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\np {\r\n  text-align: justify;\r\n}\r\n\r\n.profile {\r\n  width: 200px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.ro {\r\n  padding: 50px;\r\n}\r\n\r\n.backtotop {\r\n  padding: 10px;\r\n  background: #ADD8E6;\r\n  border-radius: 8px;\r\n  color: #141414;\r\n}\r\n\r\n.backtotop:hover {\r\n  text-decoration: none;\r\n  background: #9bc2cf;\r\n}\r\n\r\n.totop {\r\n  text-align: center;\r\n}\r\n\r\n@media only screen and (min-width: 480px){\r\n  .ro {\r\n    padding: 60px;\r\n  }\r\n\r\n  .profile {\r\n    float: right;\r\n    padding-left: 30px;\r\n  }\r\n  .profile:after {\r\n    clear: both;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/bio/bio.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html>\n<body>\n  <a name=\"top\"></a>\n  <!--NAVBAR-->\n  <app-navbar></app-navbar>\n  <!--BIO-->\n  <div class=\"ro\">\n    <div class=\"co\">\n      <img class=\"profile\" src='./../../../assets/images/kensebio.jpeg'>\n    </div>\n    <div class=\"co\">\n      <h2>About Me</h2>\n      <p>Names: Tien-Tso, Ning, Kense, 甯天佐, 닝켄세, ケンセ, Кенсе\n      <br>\n      Age: 22\n      <br>\n      Nationality: USA\n      <br>\n      Bio: A name is a home, and in that way I am lucky I have so many.\n      I enjoy learning languages and reading books.\n      <br>\n      Currently Studying: Korean and Machine Learning</p>\n    </div>\n    <div class=\"co\">\n      <h2>Places I've Been</h2>\n      <p>I was born in 1996 in Taipei to a wonderful family.\n         We immigrated to the United States in the year 2000,\n         and I grew up as an Asian-American in New York.\n         As I got older, I started to learn more about my\n         surroundings. Today, I've spent time and have connections\n         in South Korea, Taiwan, Japan, and all across the United States.\n         I hope one day that I will truly have my name across the globe.</p>\n      <h2>Education</h2>\n      <p>I went to Wake Forest University in Winston-Salem in order to pursue my dream of\n      collegiate Policy-Debate. The dream died somewhere along the way, but\n      in its place, a new-found love for learning languages.\n      <br>\n      Majoring in Computer Science, I have always believed that there were\n      \"ghosts in machines.\"</p>\n    </div>\n    <hr>\n    <div class=\"bot\">\n      <h2>What Have I Done?</h2>\n      <p>I absolutely hate this question and its implications. It is because it is impossible to explain to someone whom you have never met before\n      about the things you do. It puts the burden on me to explain to you, when you can ask more specific questions instead. But, here it is:</p>\n      <p>It is difficult to put into words in order to explain the effects of spending\n      a big majority of my development years (from High-School throughout University) pursuing\n      Policy Debate. The reason why it is very difficult to explain is because I believe that\n      Collegiate Policy Debate is extremely insulated and non-transparent. It is an activity\n      that has a lot of benefits in terms of preparing its competitors to do rigorous research,\n      prepare an approach, face problems with solutions, think competitively according to game theory, and more importantly,\n      it teaches competitors how to win. Despite these facts, in tandem with the highly-competitive, weakness-exploiting nature\n      of the activity, competitors seem to simplify the process of the activity in explanation to outsiders in order to\n      spend more time preparing to win more debates. They simply do not care what the rest of the world thinks about their\n      beloved activity. I don't think that this is wrong, and I myself have done this many times for the same reason too.\n      However, the downfall of this approach is that to people outside the activity, simply nothing makes sense.\n      The world of Collegiate Policy Debate looks and feels archaically ridiculous to those now who not only never had a complete picture,\n      they see something shockingly similar, but the key facts are all different. It is as if you are staring at the Mona Lisa, but the plaque\n      is insisting that it is entitled Lina Mosa, and it is by Leonardo of the Ninja Turtles. You are nonetheless staring at the same picture. Probably.\n      </p>\n      <p>Even my explanation now seems pointless. What is this round-about and lengthy explanation that seems unrelated?\n      Well, to be fair, there is way too much to unpack here, so I can only ask you to remain patient and continue reading. It will, hopefully,\n      tie itself up quite nicely. Now that I have sort of placed into words the struggles I think affect explaining debate, please hold onto those\n      words while I give you some more words.\n      </p>\n      <p>When we are young and impressionable, we tend to have dreams of doing something or pursuing something. For some, it might be to be a professional\n      sports player. Or perhaps a professional Go player. Regardless of what this dream is, some people choose to pour their heart and soul into trying\n      to achieve that dream. They start small. First, they simply do their homework later at night because it is more interesting to practice dribbling.\n      Soon, they will skip homework entirely because after practice they wish to stay in the rink longer to practice by themselves. They might even decide\n      after a while that sacrificing their summers in order to attend camp will be a good idea. Their thoughts will be filled with achieving their dream\n      that they will start to sacrifice opportunities. Part time jobs, internships, and anything not related to achieving the dream will seem meaningless\n      and unimportant. After all, if it does not help you win and achieve that dream, it is okay to give up. We are still young. There is still time.\n      That is a dream. It will fill our thoughts until we give up parts of ourselves to achieving it. Weekends will disappear, time will move on without us,\n      and people will leave us behind. Now it's not all bad. Some people make dreams come true. They work hard and it pays off. Well, that's not the case everytime.\n      Sometimes these dreams don't become a reality, and we look back on it wondering if the time we spent chasing that dream was worth it turning its back on us.\n      We wonder if we did enough. If we were the one that turned our back and not the other way around.\n      </p>\n      <p>Do you have a better idea now? The energy, joy, pride, pain, friendships, learning, growth. Everything we pour into achieving our dream, we wish it would\n      return to us and be of some use to us once we no longer pursue our dreams. Or rather, once we are no longer able to. It is because of this pain of not being able to\n      achieve our dreams, that make us so bitter and unwilling to explain to others. It is because we assume right off the bat that others never had a dream that they fought\n      for as hard as we had fought for ours. Of course, we know this not to be the truth, but it is our pride in chasing our dream that prevents us from being vulnerable about not being\n      able to have succeeded. It is also why important years can go by with us seemingly having done nothing to show for it.\n      </p>\n      <p>How do you explain your dream to someone you have never met in a cover letter? How do you explain how hard you tried to achieve that dream within a resume; by listing the things you gave up?\n      How do you explain to someone you have never met why you gave up? How can you trust them to understand you instead of making comments about working harder?\n      How can you trust someone you have never met to understand your dream?</p>\n      <p>No. It seems to me that it is better to have an empty resume. To find a new dream. To forget about the pains of the past and take those lessons when we continue forward. Sometimes\n      it is best just to start from the ground up. Although we are behind, we won't be behind for long. Just don't be so upset that we are not so forthcoming or seem aloof. Don't be so confused as to why\n      we have an empty resume. Once we find the next dream, I'm sure it'll fill up again.</p>\n    </div>\n    <hr>\n    <div class=\"totop\">\n      <a class=\"backtotop\" href='/bio#top'>Back to Top</a>\n    </div>\n  </div>\n\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/pages/bio/bio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BioComponent = /** @class */ (function () {
    function BioComponent() {
    }
    BioComponent.prototype.ngOnInit = function () {
    };
    BioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bio',
            template: __webpack_require__("../../../../../src/app/pages/bio/bio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/bio/bio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BioComponent);
    return BioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/books/books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".{\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.bookshelf {\r\n  padding-top: 50px;\r\n  padding-bottom: 20px;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.booklist {\r\n  text-align: justify;\r\n  padding: 10px;\r\n}\r\n\r\n@media only screen and (min-width: 480px) {\r\n  .bookshelf {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    padding-left: 60px;\r\n    padding-right: 60px;\r\n  }\r\n}\r\n\r\n.title {\r\n  font-size: 24px;\r\n  font-style: oblique;\r\n}\r\n\r\n.author {\r\n  font-size: 16px;\r\n  font-style: italic;\r\n}\r\n\r\n.book {\r\n  padding: 3px;\r\n}\r\n\r\n.shelflabel {\r\n  font-size: 42px;\r\n  padding-top: 15px;\r\n  text-align: center;\r\n}\r\n\r\n.sort {\r\n  padding: 5px;\r\n  text-align: center;\r\n}\r\n\r\n.booklist {\r\n  padding-top: 10px;\r\n  list-style: none;\r\n}\r\n\r\n.backtotop {\r\n  padding: 10px;\r\n  background: #ADD8E6;\r\n  border-radius: 8px;\r\n  color: #141414;\r\n  display: inline-block;\r\n}\r\n\r\n.bottom {\r\n  text-align: center;\r\n}\r\n\r\n.backtotop:hover {\r\n  text-decoration: none;\r\n  background: #9bc2cf;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html>\n<body>\n  <a name=\"top\"></a>\n  <!--NAVBAR-->\n  <app-navbar></app-navbar>\n\n  <div class=\"bookshelf\">\n\n    <h3 class=\"shelflabel\">My Bookshelf</h3>\n    <div class=\"sort\">\n      <div ngbDropdown class=\"d-inline-block\">\n        <button class=\"btn\" ngbDropdownToggle>Sort By</button>\n        <div ngbDropdownMenu>\n          <button class=\"dropdown-item\" (click)=\"byTitle()\">Title</button>\n          <button class=\"dropdown-item\" (click)=\"byAuthor()\">Author</button>\n          <button class=\"dropdown-item\" (click)=\"byRating()\">Rating</button>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"loading\">\n      <app-loading></app-loading>\n    </div>\n\n    <ul class=\"booklist\">\n      <li class=\"book\" *ngFor=\"let item of bookList | async\">\n        <p class=\"title\">{{ item.Title }}</p>\n        <p class=\"author\">{{ item.Author }}</p>\n        <p class=\"rating\">{{ item.Rating }} /10</p>\n        <p class=\"coment\">{{ item.Comment }}</p>\n        <hr>\n      </li>\n    </ul>\n    <div class=\"bottom\">\n      <a class=\"backtotop\" href='/books#top'>Back to Top</a>\n    </div>\n  </div>\n\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/pages/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksComponent = /** @class */ (function () {
    function BooksComponent(db) {
        this.db = db;
        this.loading = true;
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fsBookList = this.db.collection('books', function (ref) { return ref.orderBy('Rating', 'desc'); });
        this.bookList = this.fsBookList.valueChanges();
        this.bookList.subscribe(function () { return _this.loading = false; });
    };
    BooksComponent.prototype.byTitle = function () {
        var _this = this;
        this.fsBookList = this.db.collection('books', function (ref) { return ref.orderBy('Title'); });
        this.bookList = this.fsBookList.valueChanges();
        this.bookList.subscribe(function () { return _this.loading = false; });
    };
    BooksComponent.prototype.byAuthor = function () {
        var _this = this;
        this.fsBookList = this.db.collection('books', function (ref) { return ref.orderBy('Author'); });
        this.bookList = this.fsBookList.valueChanges();
        this.bookList.subscribe(function () { return _this.loading = false; });
    };
    BooksComponent.prototype.byRating = function () {
        var _this = this;
        this.fsBookList = this.db.collection('books', function (ref) { return ref.orderBy('Rating', 'desc'); });
        this.bookList = this.fsBookList.valueChanges();
        this.bookList.subscribe(function () { return _this.loading = false; });
    };
    BooksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-books',
            template: __webpack_require__("../../../../../src/app/pages/books/books.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/bulletin/bulletin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ". {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.bulletinboard {\r\n  padding-top: 30px;\r\n  padding-bottom: 30px;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  text-align: center;\r\n  list-style: none;\r\n}\r\n\r\n.bulletin {\r\n  text-align: justify;\r\n}\r\n\r\n.date {\r\n  font-style: italic;\r\n}\r\n\r\n.subject {\r\n  font-style: oblique;\r\n  font-size: 18px;\r\n}\r\n\r\n.backtotop {\r\n  padding: 10px;\r\n  background: #ADD8E6;\r\n  border-radius: 8px;\r\n  color: #141414;\r\n  display: inline-block;\r\n}\r\n\r\n.bottom {\r\n  text-align: center;\r\n}\r\n\r\n.backtotop:hover {\r\n  text-decoration: none;\r\n  background: #9bc2cf;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/bulletin/bulletin.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n  <a name=\"top\"></a>\n  <!--NAVBAR-->\n  <app-navbar></app-navbar>\n\n  <!--Bulletin-->\n  <div *ngIf=\"loading\">\n    <app-loading></app-loading>\n  </div>\n  <ul class=\"bulletinboard\">\n    <li class=\"bulletin\" *ngFor=\"let item of bulletinList | async\">\n      <p class=\"subject\">{{ item.subject }}</p>\n      <p class=\"date\">Posted: {{ item.date }}</p>\n      <p class=\"body\">{{ item.body }}</p>\n      <hr>\n    </li>\n    <div class=\"bottom\">\n      <a class=\"backtotop\" href='/bulletin#top'>Back to Top</a>\n    </div>\n  </ul>\n\n\n</body>\n<html>\n"

/***/ }),

/***/ "../../../../../src/app/pages/bulletin/bulletin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BulletinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BulletinComponent = /** @class */ (function () {
    function BulletinComponent(db) {
        this.db = db;
        this.loading = true;
    }
    BulletinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fsBulletinList = this.db.collection('bulletin');
        this.bulletinList = this.fsBulletinList.valueChanges();
        this.bulletinList.subscribe(function () { return _this.loading = false; });
    };
    BulletinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bulletin',
            template: __webpack_require__("../../../../../src/app/pages/bulletin/bulletin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/bulletin/bulletin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], BulletinComponent);
    return BulletinComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/contact/contact-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".{\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.dmbox {\r\n  padding-top: 50px;\r\n  padding-bottom: 20px;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact-form.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n  <body>\n    <!--navbar-->\n    <app-navbar></app-navbar>\n\n    <!--form-->\n    <div class=\"dmbox\">\n      <div class=\"container\">\n        <h1>Direct Message</h1>\n        <form #sendmsg (ngSubmit)=\"sendData(sendmsg)\">\n\n          <div class=\"form-group\">\n            <label for=\"name\">Name *</label>\n            <input type=\"text\" [(ngModel)]=\"msg.name\" name=\"name\" class=\"form-control\" placeholder=\"Name\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"email\">Email *</label>\n            <input type=\"text\" [(ngModel)]=\"msg.email\" name=\"email\" class=\"form-control\" placeholder=\"your-email@naver.com\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"message\">Message *</label>\n            <input type=\"text\" [(ngModel)]=\"msg.message\" name=\"message\" class=\"form-control\" placeholder=\"Your message here.\">\n          </div>\n\n          <!--submit button-->\n          <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n        </form>\n        <app-submitted *ngIf=\"submitted\"></app-submitted>\n\n      </div>\n    </div>\n\n  </body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(afs, router) {
        this.afs = afs;
        this.router = router;
        this.submitted = false;
        this.msg = {
            name: '',
            email: '',
            message: ''
        };
    }
    ContactFormComponent.prototype.sendData = function (form) {
        this.afs.collection('messages').add(this.msg);
        form.reset();
        this.submitted = true;
        this.router.navigate(['/contactform']);
    };
    ContactFormComponent.prototype.ngOnInit = function () {
        this.submitted = false;
    };
    ContactFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-form',
            template: __webpack_require__("../../../../../src/app/pages/contact/contact-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/contact/contact-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ". {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.callingcard {\r\n  padding-top: 50px;\r\n  padding-bottom: 20px;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  text-align: center;\r\n}\r\n\r\nimg {\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.speech {\r\n  background-color: #DFDFDF;\r\n  padding: 6px;\r\n  border-radius: 8px;\r\n}\r\n\r\n@media only screen and (min-width:480px){\r\n  .speech {\r\n    background-color: #DFDFDF;\r\n    padding: 6px;\r\n    border-radius: 8px;\r\n    display: inline-block;\r\n    width: 360px;\r\n\r\n\r\n  }\r\n}\r\n\r\nul, li {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.gmail {\r\n  padding: 10px;\r\n  background-color: #DFDFDF;\r\n  color: #141414;\r\n  border-radius: 8px;\r\n}\r\n\r\n.gmail:hover {\r\n  text-decoration: none;\r\n  background-color: #D3D3D3;\r\n}\r\n\r\n.instabutton{\r\n  padding: 14px;\r\n  padding-bottom: 15px;\r\n  color: #141414;\r\n  background-color: #DFDFDF;\r\n  border-radius: 8px;\r\n}\r\n\r\n.instabutton:hover {\r\n  text-decoration: none;\r\n  background-color: #D3D3D3;\r\n}\r\n\r\n.dmbutton {\r\n  margin: 10px;\r\n  padding: 10px;\r\n  background: #ADD8E6;\r\n  border-radius: 8px;\r\n  color: #141414;\r\n}\r\n\r\n.dmbutton:hover {\r\n  text-decoration: none;\r\n  background: #9bc2cf;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n    <!--NAVBAR-->\n    <app-navbar></app-navbar>\n    <!--CONTACT-->\n    <div class=\"callingcard\">\n      <h2 class=\"title\">Contacts</h2>\n      <img src='./../../../assets/images/pairi.gif'>\n      <br>\n      <p class=\"speech\">Feel free to send me a message here, or email me! You can also follow\n      me on Instagram (pictures say what words cannot, no?).</p>\n      <ul>\n        <li><a href='mailto:kensening@gmail.com' target=\"_blank\" class=\"gmail\"><img src='./../../../assets/images/gmail.png'> kensening@gmail.com</a></li>\n        <br>\n        <li><a href='https://www.instagram.com/babbykense' target=\"_blank\" class=\"instabutton\"><img src='./../../../assets/images/instagram3.png'> babbykense</a></li>\n        <br>\n        <li><a class=\"dmbutton\" href='/contactform'>Send a Direct Message</a></li>\n      </ul>\n    </div>\n\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/contact/submitted.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/contact/submitted.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Message Sent!<h3>\n"

/***/ }),

/***/ "../../../../../src/app/pages/contact/submitted.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmittedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubmittedComponent = /** @class */ (function () {
    function SubmittedComponent() {
    }
    SubmittedComponent.prototype.ngOnInit = function () {
    };
    SubmittedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-submitted',
            template: __webpack_require__("../../../../../src/app/pages/contact/submitted.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/contact/submitted.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubmittedComponent);
    return SubmittedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ". {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-size: cover;\r\n  background-color: #EDD8BB;\r\n  height: 100vh;\r\n}\r\n\r\n.landing {\r\n  text-align: center;\r\n  background: #EDD8BB;\r\n  padding: 100px;\r\n}\r\n\r\n.logo {\r\n  max-width: 240px;\r\n  width: 100%;\r\n}\r\n\r\n.banner {\r\n  padding: 10px;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none;\r\n  border: 2px solid #EF8E7D;\r\n}\r\n\r\n.button{\r\n  color: #141414;\r\n  background: #E2AA87;\r\n  padding: 5px;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\r\n<body>\r\n  <div class=\"landing\">\r\n    <img src='./../../../assets/images/updatedgreen.png' class='logo'>\r\n    <h2 class=\"banner\">kensekense</h2>\r\n    <p>A name is a home so I am glad I have so many.</p>\r\n    <a href='/about' class=\"button\">Learn More</a>\r\n  </div>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/misc/misc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ". {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.miscbox {\r\n  padding-top: 50px;\r\n  padding-bottom: 20px;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  text-align: center;\r\n}\r\n\r\nul, li {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhr {\r\n  width: 60%;\r\n}\r\n\r\n.readingbutton{\r\n  padding: 10px;\r\n  background-color: #88E188;\r\n  border-radius: 8px;\r\n  color: #141414;\r\n}\r\n\r\n.book {\r\n  padding-bottom: 4px;\r\n}\r\n\r\n.bulletin {\r\n  padding-bottom: 4px;\r\n}\r\n\r\n.readingbutton:hover {\r\n  text-decoration: none;\r\n  background-color: #77c477;\r\n}\r\n\r\n.morebutton{\r\n  padding: 10px;\r\n  background-color: #f0df56;\r\n  border-radius: 8px;\r\n  color: #141414;\r\n}\r\n\r\n.more {\r\n  padding-bottom: 4px;\r\n}\r\n\r\n.morebutton:hover {\r\n  text-decoration: none;\r\n  background-color: #e7d11d;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/misc/misc.component.html":
/***/ (function(module, exports) {

module.exports = "<!--NAVBAR-->\n<app-navbar></app-navbar>\n\n<!--MISC-->\n<div class='miscbox'>\n  <h2>Fun Things!</h2>\n  <hr>\n  <ul>\n    <li>\n    <a href='/books' class=\"readingbutton\"><img class='book' src='./../../../assets/images/book.png'> My Reading List</a>\n    </li>\n    <br>\n    <li>\n    <a href='/bulletin' class=\"readingbutton\"><img class='bulletin' src='./../../../assets/images/bulletin.png'> Bulletin Board</a>\n    </li>\n\n    <!--COMinG SoonN BUTTON-->\n    <br>\n    <li>\n    <a class=\"morebutton\"><img class='more' src='./../../../assets/images/soon.png'> Coming Soon!</a>\n    </li>\n  </ul>\n  <hr>\n  <p>More things to come soon!</p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/misc/misc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiscComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MiscComponent = /** @class */ (function () {
    function MiscComponent() {
    }
    MiscComponent.prototype.ngOnInit = function () {
    };
    MiscComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-misc',
            template: __webpack_require__("../../../../../src/app/pages/misc/misc.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/misc/misc.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MiscComponent);
    return MiscComponent;
}());



/***/ }),

/***/ "../../../../../src/app/util/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loading',
            template: "\n    <img src=\"./../../assets/images/loading.svg\">\n  ",
            styles: ["\n    :host {\n      display: block;\n    }\n    img {\n      display: block;\n      margin: 20px auto;\n      width: 50px;\n    }\n  "]
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDZP6hUNeeKe83ZitsAOdQ9xRSPOYFR0R0",
        authDomain: "project-playground-918f1.firebaseapp.com",
        databaseURL: "https://project-playground-918f1.firebaseio.com",
        projectId: "project-playground-918f1",
        storageBucket: "project-playground-918f1.appspot.com",
        messagingSenderId: "574606563848"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map