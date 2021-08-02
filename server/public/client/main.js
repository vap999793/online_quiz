(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\myLearning\nodejs\Online Assessment by using database\client\src\main.ts */"zUnb");


/***/ }),

/***/ "3Ctc":
/*!******************************************************************!*\
  !*** ./src/app/services/registerLogin/register-login.service.ts ***!
  \******************************************************************/
/*! exports provided: RegisterLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLoginService", function() { return RegisterLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class RegisterLoginService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:5000/candidates/register';
        this.loginUrl = 'http://localhost:5000/candidates/login';
    }
    postCandidates(regCand) {
        return this.http.post(this.baseUrl, regCand);
    }
    loginCandidate(loginCredentials) {
        return this.http.post(this.loginUrl, loginCredentials);
    }
}
RegisterLoginService.ɵfac = function RegisterLoginService_Factory(t) { return new (t || RegisterLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RegisterLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegisterLoginService, factory: RegisterLoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "JbZv":
/*!***************************************************************!*\
  !*** ./src/app/components/start-test/start-test.component.ts ***!
  \***************************************************************/
/*! exports provided: StartTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartTestComponent", function() { return StartTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_questions_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/questions/questions.service */ "zP5E");



class StartTestComponent {
    // readonly questionsUrl = 'http://localhost:5000/questions';
    // questionObj:questions = new questions({});
    constructor(router, questionService) {
        this.router = router;
        this.questionService = questionService;
    }
    ngOnInit() {
    }
    startTestEventHandler() {
        // this.questionService.getQuestion().subscribe((res)=>{
        //   console.log(res);
        this.router.navigateByUrl('questions/1');
        // })
    }
}
StartTestComponent.ɵfac = function StartTestComponent_Factory(t) { return new (t || StartTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_questions_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"])); };
StartTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartTestComponent, selectors: [["app-start-test"]], decls: 19, vars: 0, consts: [[1, "container"], [1, "instructions"], [1, "bg-light", "text-align-center"], ["type", "button", "value", "Start Test", 1, "start", 3, "click"]], template: function StartTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please read the below points carefully.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Maximum score: 150 points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "10 marks will be awarded for each question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Zero marks will be awarded if not attempted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "There is no negative marking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "There are total 15 questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Click on start test to begin.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartTestComponent_Template_input_click_18_listener() { return ctx.startTestEventHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".start[_ngcontent-%COMP%]:hover{\r\n    color: green;\r\n    background-color: rgb(214, 245, 214);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LXRlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3RhcnQtdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJ0OmhvdmVye1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjQ1LCAyMTQpO1xyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 50, vars: 0, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6", "crossorigin", "anonymous"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["routerLink", "", "routerLinkActive", "active", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "routerLink", "/home", "routerLinkActive", "active", 1, "nav-link", "active"], ["routerLink", "candidates/register", "routerLinkActive", "active", 1, "nav-link", "navtxt"], ["routerLink", "candidates/login", "routerLinkActive", "active", 1, "nav-link", "navtxt"], [1, "d-flex"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "me-2"], ["type", "submit", 1, "btn", "btn-outline-success"], [1, "container"], [1, "page-footer", "font-small", "bg-dark", "pt-4", "mt-4"], [1, "container1"], [1, "list-unstyled", "list-inline", "text-center", "py-2"], [1, "list-inline-item"], ["id", "register", 1, "mb-1"], ["id", "signup1", 1, "list-inline-item"], ["href", "candidates/register", "id", "signup", 1, "btn", "btn-outline-white", "btn-rounded"], [1, "footer-copyright", "text-center", "py-3"], ["href", "https://www.google.com", "target", "_blank"], ["href", "https://www.facebook.com/vishal.prajapati.77398143", "target", "_blank", 1, "ml-3"], [1, "fa", "fa-facebook"], [1, "fa", "fa-twitter"], [1, "fa", "fa-search"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hello, world!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "footer", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Register for free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sign up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u00A9 2020 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Company info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".image_small[_ngcontent-%COMP%]{\r\n    width: 3vw;\r\n    height: 3vw;\r\n}\r\n\r\n.footer-copyright[_ngcontent-%COMP%]{\r\n    color: burlywood;\r\n}\r\n\r\n.footer-copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: crimson;\r\n\r\n}\r\n\r\n.container1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #f44336;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.container1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: green;\r\n  }\r\n\r\n#signup1[_ngcontent-%COMP%]{\r\n    border: 2px solid rgb(235, 150, 150);\r\n    \r\n}\r\n\r\n#signup1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    \r\n    background-color: darkcyan;\r\n    \r\n}\r\n\r\n#register[_ngcontent-%COMP%]{\r\n    color: aliceblue;\r\n}\r\n\r\n#signup[_ngcontent-%COMP%]{\r\n    color: cornsilk;\r\n}\r\n\r\n#register[_ngcontent-%COMP%]{\r\n    color: aliceblue;\r\n}\r\n\r\n#signup[_ngcontent-%COMP%]{\r\n    color: aliceblue;\r\n}\r\n\r\n#signup1[_ngcontent-%COMP%]{\r\n    border: 2px solid rgb(235, 150, 150);\r\n}\r\n\r\n#signup1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: 3px solid bisque;\r\n    \r\n}\r\n\r\n.footer-copyright[_ngcontent-%COMP%]{\r\n    color: burlywood;\r\n}\r\n\r\n.footer-copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: crimson;\r\n\r\n}\r\n\r\n.make_right[_ngcontent-%COMP%]{\r\n    float: right;\r\n    margin-left: 110vh;\r\n}\r\n\r\n.imgSize[_ngcontent-%COMP%]{\r\n    width: 4vw;\r\n    height: 3vw;\r\n}\r\n\r\n.imageDimension[_ngcontent-%COMP%]{\r\n    height: 250px;\r\n}\r\n\r\n.row1[_ngcontent-%COMP%]{\r\n    background-color: rgb(213, 248, 248);\r\n}\r\n\r\n.main[_ngcontent-%COMP%]{\r\n    background-color: beige;\r\n}\r\n\r\n.latestPart[_ngcontent-%COMP%]{\r\n    background-color: rgb(204, 240, 212);\r\n}\r\n\r\n#dropdown_part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    background-color: darkgreen;\r\n}\r\n\r\n#nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: darkred;\r\n}\r\n\r\n\r\n\r\n.form-container.[_ngcontent-%COMP%]{\r\n\tborder-radius: 10px;\r\n\tpadding: 30px;\r\n}\r\n\r\n.container1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #f44336;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.container1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: green;\r\n  }\r\n\r\n.login_part[_ngcontent-%COMP%]{\r\n    border: 2px solid rgb(79, 21, 185);\r\n    border-radius: 6px;\r\n}\r\n\r\n.login_run[_ngcontent-%COMP%]{\r\n    \r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width:466px){\r\n    .login_part[_ngcontent-%COMP%]{\r\n        height: 160vw;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:367px){\r\n    .login_part[_ngcontent-%COMP%]{\r\n        height: 170vw;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:356px){\r\n    .login_part[_ngcontent-%COMP%]{\r\n        height: 180vw;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:320px){\r\n    .login_part[_ngcontent-%COMP%]{\r\n        height: 220vw;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:280px){\r\n    .login_part[_ngcontent-%COMP%]{\r\n        height: 270vw;\r\n    }\r\n}\r\n\r\n.login_title[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n.login_heading[_ngcontent-%COMP%]{\r\n    background-color: rgb(32, 33, 36);\r\n    color: white;\r\n}\r\n\r\n.on_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    background-color: darkolivegreen;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    background-color: rgb(189, 241, 200);\r\n}\r\n\r\n.navbg[_ngcontent-%COMP%]{\r\n    background-color: rgb(59, 113, 230);\r\n}\r\n\r\n#navcolor[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: red;\r\n}\r\n\r\n.navtxt[_ngcontent-%COMP%]{\r\n    color: rgb(19, 224, 19);\r\n    font-weight: bolder;\r\n}\r\n\r\n.simpli[_ngcontent-%COMP%]{\r\n    \r\n    color: rgb(240, 88, 88);\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVIO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7O0FBRWxCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLG9DQUFvQztJQUNwQyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsMEJBQTBCOztBQUU5Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBR0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx3QkFBd0I7O0FBRTVCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUdBLG9DQUFvQzs7QUFDcEM7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtBQUNkOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtFQUN6Qjs7QUFFRjtJQUNJLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxREFBcUQ7SUFDckQsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmJnc2V0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvYmdsb2dpbi5qcGcnKTtcclxufSAqL1xyXG5cclxuLmltYWdlX3NtYWxse1xyXG4gICAgd2lkdGg6IDN2dztcclxuICAgIGhlaWdodDogM3Z3O1xyXG59XHJcblxyXG4uZm9vdGVyLWNvcHlyaWdodHtcclxuICAgIGNvbG9yOiBidXJseXdvb2Q7XHJcbn1cclxuXHJcbi5mb290ZXItY29weXJpZ2h0IGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxuXHJcbn1cclxuXHJcbi5jb250YWluZXIxIGJ1dHRvbiB7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIxIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICB9XHJcblxyXG4gICNzaWdudXAxe1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzNSwgMTUwLCAxNTApO1xyXG4gICAgLyogY29sb3I6IGNvcm5zaWxrOyAqL1xyXG59XHJcblxyXG4jc2lnbnVwMSBhOmhvdmVye1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgYmlzcXVlOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XHJcbiAgICBcclxufVxyXG5cclxuI3JlZ2lzdGVye1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuI3NpZ251cHtcclxuICAgIGNvbG9yOiBjb3Juc2lsaztcclxufVxyXG5cclxuXHJcbiNyZWdpc3RlcntcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcblxyXG4jc2lnbnVwe1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuI3NpZ251cDF7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjM1LCAxNTAsIDE1MCk7XHJcbn1cclxuXHJcbiNzaWdudXAxIGE6aG92ZXJ7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBiaXNxdWU7XHJcbiAgICBcclxufVxyXG5cclxuLmZvb3Rlci1jb3B5cmlnaHR7XHJcbiAgICBjb2xvcjogYnVybHl3b29kO1xyXG59XHJcblxyXG4uZm9vdGVyLWNvcHlyaWdodCBhOmhvdmVye1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcblxyXG59XHJcblxyXG4ubWFrZV9yaWdodHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMTB2aDtcclxufVxyXG5cclxuLmltZ1NpemV7XHJcbiAgICB3aWR0aDogNHZ3O1xyXG4gICAgaGVpZ2h0OiAzdnc7XHJcbn1cclxuXHJcbi5pbWFnZURpbWVuc2lvbntcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5yb3cxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMywgMjQ4LCAyNDgpO1xyXG59XHJcblxyXG4ubWFpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG59XHJcblxyXG4ubGF0ZXN0UGFydHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDI0MCwgMjEyKTtcclxufVxyXG5cclxuI2Ryb3Bkb3duX3BhcnQgYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcclxufVxyXG5cclxuI25hdi1pdGVtIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogZGFya3JlZDtcclxufVxyXG5cclxuXHJcbi8qIHNldCBwYWRkaW5nIGFuZCBzaXplIG9mIHRoIGZvcm0gKi9cclxuLmZvcm0tY29udGFpbmVyLntcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIxIGJ1dHRvbiB7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIxIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICB9XHJcblxyXG4ubG9naW5fcGFydHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig3OSwgMjEsIDE4NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuLmxvZ2luX3J1bntcclxuICAgIC8qIHBhZGRpbmc6MnB4OyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ2NnB4KXtcclxuICAgIC5sb2dpbl9wYXJ0e1xyXG4gICAgICAgIGhlaWdodDogMTYwdnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzY3cHgpe1xyXG4gICAgLmxvZ2luX3BhcnR7XHJcbiAgICAgICAgaGVpZ2h0OiAxNzB2dztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozNTZweCl7XHJcbiAgICAubG9naW5fcGFydHtcclxuICAgICAgICBoZWlnaHQ6IDE4MHZ3O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMHB4KXtcclxuICAgIC5sb2dpbl9wYXJ0e1xyXG4gICAgICAgIGhlaWdodDogMjIwdnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MjgwcHgpe1xyXG4gICAgLmxvZ2luX3BhcnR7XHJcbiAgICAgICAgaGVpZ2h0OiAyNzB2dztcclxuICAgIH1cclxufVxyXG5cclxuLmxvZ2luX3RpdGxle1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5sb2dpbl9oZWFkaW5ne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMywgMzYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ub25fYnV0dG9uIGJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtvbGl2ZWdyZWVuO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAyNDEsIDIwMCk7XHJcbn1cclxuXHJcbi5uYXZiZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgMTEzLCAyMzApO1xyXG59XHJcblxyXG4jbmF2Y29sb3IgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5uYXZ0eHR7XHJcbiAgICBjb2xvcjogcmdiKDE5LCAyMjQsIDE5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5zaW1wbGl7XHJcbiAgICAvKiB3aWR0aDoxNnZ3OyAqL1xyXG4gICAgY29sb3I6IHJnYigyNDAsIDg4LCA4OCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_registerLogin_register_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/registerLogin/register-login.service */ "3Ctc");





class LoginComponent {
    constructor(router, fb, regLoginService) {
        this.router = router;
        this.fb = fb;
        this.regLoginService = regLoginService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])]
        });
    }
    readLoginCredentials(form) {
        let email = form.getElementsByTagName("input").namedItem('email').value;
        let password = form.getElementsByTagName("input").namedItem('password').value;
        let loginCredentials = {
            email: email,
            password: password
        };
        return loginCredentials;
    }
    candidateLogin(event) {
        event.preventDefault();
        let form = event.target;
        let loginCandidate = this.readLoginCredentials(form);
        console.log(loginCandidate);
        this.regLoginService.loginCandidate(loginCandidate).subscribe((res) => {
            console.log(res);
            this.router.navigateByUrl('/candidates/startTest');
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_registerLogin_register_login_service__WEBPACK_IMPORTED_MODULE_3__["RegisterLoginService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 25, vars: 1, consts: [[1, "container-fluid", "bgregister"], [1, "make_center"], [1, "row", "justify-content-center"], [1, "col-12", "col-sm-6", "col-md-6", "mt-2", "mb-2"], [1, "form-container", 3, "formGroup", "submit"], [1, "form-group"], [1, "text-center", "font-weight-bold"], ["for", "InputEmail1"], ["type", "email", "formControlName", "email", "id", "emails", "aria-describeby", "emailHelp", "placeholder", "Enter email", "autocomplete", "off", "ng-required", "true", "name", "email", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "Password", "name", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "rem"], ["type", "checkbox", "name", "remember"], [1, "container1"], ["type", "reset", 1, "cancelbtn", "btn", "btn-primary", "btn-block"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_4_listener($event) { return ctx.candidateLogin($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["form[_ngcontent-%COMP%]{\r\n\tbackground: rgb(139, 212, 235);\r\n}\r\n\r\n.form-container[_ngcontent-%COMP%]{\r\n\tborder-radius: 10px;\r\n\tpadding: 30px;\r\n}\r\n.container1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #f44336;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n.container1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: green;\r\n  }\r\n.btn[_ngcontent-%COMP%] {\r\n    \r\n    margin: 0px 0px;\r\n    background-color: black;\r\n    color: white;\r\n    padding: 0px 5px;\r\n    border: 2px solid grey;\r\n    border-radius: 10px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n}\r\n.btn[_ngcontent-%COMP%]:hover{\r\n    background-color: cadetblue;\r\n}\r\n@media screen and (max-width:508px){\r\n    .form-container[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n}\r\n.make_center[_ngcontent-%COMP%]{\r\n    margin-top: 1vw;\r\n}\r\n.bg_color[_ngcontent-%COMP%]{\r\n    \r\n    background-image: url('https://www.solidbackgrounds.com/images/website/950x534/950x534-blue-abstract-noise-free-website-background-image.jpg');\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsOEJBQThCO0FBQy9CO0FBQ0Esb0NBQW9DO0FBQ3BDO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7QUFDZDtBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksdUJBQXVCO0VBQ3pCO0FBR0E7SUFDRSx3Q0FBd0M7SUFDeEMsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLDhJQUE4STs7QUFFbEoiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5mb3Jte1xyXG5cdGJhY2tncm91bmQ6IHJnYigxMzksIDIxMiwgMjM1KTtcclxufVxyXG4vKiBzZXQgcGFkZGluZyBhbmQgc2l6ZSBvZiB0aCBmb3JtICovXHJcbi5mb3JtLWNvbnRhaW5lcntcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIxIGJ1dHRvbiB7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIxIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICB9XHJcblxyXG5cclxuICAuYnRuIHtcclxuICAgIC8qIGZvbnQtZmFtaWx5OiAnQmFsb28gQmhhaScsIGN1cnNpdmU7ICovXHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1MDhweCl7XHJcbiAgICAuZm9ybS1jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYWtlX2NlbnRlcntcclxuICAgIG1hcmdpbi10b3A6IDF2dztcclxufVxyXG5cclxuLmJnX2NvbG9ye1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjUxLCAyNTIpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3d3dy5zb2xpZGJhY2tncm91bmRzLmNvbS9pbWFnZXMvd2Vic2l0ZS85NTB4NTM0Lzk1MHg1MzQtYmx1ZS1hYnN0cmFjdC1ub2lzZS1mcmVlLXdlYnNpdGUtYmFja2dyb3VuZC1pbWFnZS5qcGcnKTtcclxuICAgIFxyXG59Il19 */"] });


/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_registerLogin_register_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/registerLogin/register-login.service */ "3Ctc");





class RegisterComponent {
    constructor(router, fb, regLoginService) {
        this.router = router;
        this.fb = fb;
        this.regLoginService = regLoginService;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            // mobile:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            // username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])]
        });
    }
    get f() {
        return this.registerForm.controls;
    }
    readValuesFromForm(f) {
        // let _id = (<HTMLInputElement>f.getElementsByTagName("input").namedItem('_id')).value; 
        let firstname = f.getElementsByTagName("input").namedItem('firstname').value;
        let lastname = f.getElementsByTagName("input").namedItem('lastname').value;
        let email = f.getElementsByTagName("input").namedItem('email').value;
        let mobile = f.getElementsByTagName("input").namedItem('mobile').value;
        let password = f.getElementsByTagName("input").namedItem('password').value;
        let confirmPassword = f.getElementsByTagName("input").namedItem('confirmPassword').value;
        let regCandidates = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            mobile: mobile,
            password: password,
            confirmPassword: confirmPassword
        };
        return regCandidates;
    }
    empSubmit(event) {
        event.preventDefault();
        let form = event.target;
        let registeringEmployee = this.readValuesFromForm(form);
        console.log(registeringEmployee);
        this.regLoginService.postCandidates(registeringEmployee).subscribe((res) => {
            console.log(res);
            this.router.navigateByUrl('/candidates/login');
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_registerLogin_register_login_service__WEBPACK_IMPORTED_MODULE_3__["RegisterLoginService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 42, vars: 1, consts: [[1, "container-fluid", "bgregister"], [1, "make_center"], [1, "row", "justify-content-center"], [1, "col-12", "col-sm-6", "col-md-6", "mt-2", "mb-2"], [1, "form-container", 3, "formGroup", "submit"], [1, "form-group"], [1, "text-center", "font-weight-bold"], ["for", "InputPassword1"], ["type", "text", "formControlName", "firstname", "id", "emails", "aria-describeby", "emailHelp", "placeholder", "Enter your firstname", "autocomplete", "off", "ng-required", "true", "name", "firstname", 1, "form-control"], ["type", "text", "formControlName", "lastname", "id", "emails", "aria-describeby", "emailHelp", "placeholder", "Enter your lastname", "autocomplete", "off", "ng-required", "true", "name", "lastname", 1, "form-control"], ["for", "InputEmail1"], ["type", "email", "formControlName", "email", "id", "emails", "aria-describeby", "emailHelp", "placeholder", "Enter email", "autocomplete", "off", "ng-required", "true", "name", "email", 1, "form-control"], ["for", "mobileNumber"], ["formControlName", "mobile", "id", "mobile", "type", "number", "placeholder", "Enter your 10 digits mobile number", "name", "mobile", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "Password", "name", "password", 1, "form-control"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm Password", "name", "confirmPassword", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "rem"], ["type", "checkbox", "name", "remember"], [1, "container1"], ["type", "reset", 1, "cancelbtn", "btn", "btn-primary", "btn-block"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "register works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_6_listener($event) { return ctx.empSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Registration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"]], styles: ["form[_ngcontent-%COMP%]{\r\n    background: rgb(199, 234, 245);\r\n    opacity: .9;\r\n}\r\n\r\n.form-container[_ngcontent-%COMP%]{\r\n\tborder-radius: 10px;\r\n\tpadding: 30px;\r\n}\r\n.container1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #f44336;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n.container1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: green;\r\n  }\r\n.btn[_ngcontent-%COMP%] {\r\n    \r\n    margin: 0px 0px;\r\n    background-color: black;\r\n    color: white;\r\n    padding: 0px 5px;\r\n    border: 2px solid grey;\r\n    border-radius: 10px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n}\r\n.btn[_ngcontent-%COMP%]:hover{\r\n    background-color: cadetblue;\r\n}\r\n@media screen and (max-width:508px){\r\n    .form-container[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n}\r\n.make_center[_ngcontent-%COMP%]{\r\n    margin-top: 1vw;\r\n}\r\n.bgregister[_ngcontent-%COMP%]{\r\n    background-image: url('https://wpamelia.com/wp-content/uploads/2019/02/4k-wallpaper-architecture-background-1308624.jpg');\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLFdBQVc7QUFDZjtBQUNBLG9DQUFvQztBQUNwQztDQUNDLG1CQUFtQjtDQUNuQixhQUFhO0FBQ2Q7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0Usd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0o7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHlIQUF5SDtBQUM3SCIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZvcm17XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk5LCAyMzQsIDI0NSk7XHJcbiAgICBvcGFjaXR5OiAuOTtcclxufVxyXG4vKiBzZXQgcGFkZGluZyBhbmQgc2l6ZSBvZiB0aCBmb3JtICovXHJcbi5mb3JtLWNvbnRhaW5lcntcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIxIGJ1dHRvbiB7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIxIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgLyogZm9udC1mYW1pbHk6ICdCYWxvbyBCaGFpJywgY3Vyc2l2ZTsgKi9cclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUwOHB4KXtcclxuICAgIC5mb3JtLWNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLm1ha2VfY2VudGVye1xyXG4gICAgbWFyZ2luLXRvcDogMXZ3O1xyXG59XHJcblxyXG4uYmdyZWdpc3RlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly93cGFtZWxpYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDIvNGstd2FsbHBhcGVyLWFyY2hpdGVjdHVyZS1iYWNrZ3JvdW5kLTEzMDg2MjQuanBnJyk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_start_test_start_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/start-test/start-test.component */ "JbZv");
/* harmony import */ var _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/questions/questions.component */ "nzub");
/* harmony import */ var _components_finish_test_finish_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/finish-test/finish-test.component */ "vswt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _components_start_test_start_test_component__WEBPACK_IMPORTED_MODULE_8__["StartTestComponent"],
        _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_9__["QuestionsComponent"],
        _components_finish_test_finish_test_component__WEBPACK_IMPORTED_MODULE_10__["FinishTestComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();


/***/ }),

/***/ "nzub":
/*!*************************************************************!*\
  !*** ./src/app/components/questions/questions.component.ts ***!
  \*************************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_questions_questions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/questions/questions.service */ "zP5E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function QuestionsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionsComponent_div_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.nextQuestionEventHandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.currentRadioSelected < 0 ? true : false);
} }
function QuestionsComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionsComponent_ng_template_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.finishTestEventHandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Finish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.currentRadioSelected < 0 ? true : false);
} }
class QuestionsComponent {
    constructor(questionService, activatedRoute, router) {
        this.questionService = questionService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.questionArray = new Array();
        this.currentQuestion = [];
        // this.currentQuestionNumber = 1;
        this.currentQuestionNumber = parseInt(this.activatedRoute.snapshot.params["questionNumber"]);
        this.questionService.getCurrentQuestion(this.currentQuestionNumber).subscribe((res) => {
            console.log(res);
            this.currentQuestion = res;
        });
        this.currentRadioSelected = -1;
    }
    ngOnInit() {
    }
    nextQuestionEventHandler() {
        let correctOption;
        if (this.currentRadioSelected == 0) {
            correctOption = this.currentQuestion[0].optionA;
        }
        else if (this.currentRadioSelected == 1) {
            correctOption = this.currentQuestion[0].optionB;
        }
        else if (this.currentRadioSelected == 2) {
            correctOption = this.currentQuestion[0].optionC;
        }
        else {
            correctOption = this.currentQuestion[0].optionD;
        }
        let currQuestionObj = {
            questionNumber: this.currentQuestionNumber,
            question: this.currentQuestion[0].question,
            optionA: this.currentQuestion[0].optionA,
            optionB: this.currentQuestion[0].optionB,
            optionC: this.currentQuestion[0].optionC,
            optionD: this.currentQuestion[0].optionD,
            correctOption: correctOption
        };
        this.questionService.submitCurrentQuestion(currQuestionObj).subscribe((res) => {
            console.log(res);
        });
        this.currentQuestionNumber = 1 + parseInt(this.activatedRoute.snapshot.params["questionNumber"]);
        this.questionService.getCurrentQuestion(this.currentQuestionNumber).subscribe((res) => {
            // console.log(res);
            this.currentQuestion = res;
        });
        this.router.navigateByUrl(`questions/${this.currentQuestionNumber}`);
        this.currentRadioSelected = -1;
    }
    finishTestEventHandler() {
        let correctOption;
        if (this.currentRadioSelected == 0) {
            correctOption = this.currentQuestion[0].optionA;
        }
        else if (this.currentRadioSelected == 1) {
            correctOption = this.currentQuestion[0].optionB;
        }
        else if (this.currentRadioSelected == 2) {
            correctOption = this.currentQuestion[0].optionC;
        }
        else {
            correctOption = this.currentQuestion[0].optionD;
        }
        let currQuestionObj = {
            questionNumber: this.currentQuestionNumber,
            question: this.currentQuestion[0].question,
            optionA: this.currentQuestion[0].optionA,
            optionB: this.currentQuestion[0].optionB,
            optionC: this.currentQuestion[0].optionC,
            optionD: this.currentQuestion[0].optionD,
            correctOption: correctOption
        };
        this.questionService.submitCurrentQuestion(currQuestionObj).subscribe((res) => {
            console.log(res);
        });
        this.router.navigateByUrl(`finish`);
        // this.currentRadioSelected = -1;
    }
    changeAnswer(event) {
        const value = event.target.value;
        console.log(value);
        this.currentRadioSelected = parseInt(value);
    }
}
QuestionsComponent.ɵfac = function QuestionsComponent_Factory(t) { return new (t || QuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_questions_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
QuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionsComponent, selectors: [["app-questions"]], decls: 23, vars: 8, consts: [[1, "container-fluid", "min-vh-100"], [1, "row", "min-vh-100"], [1, "col-md-12"], [1, "card-header", "mb-3", "bgtest"], [1, "card-title"], ["name", "demo"], ["type", "radio", "value", "0", "name", "option", 3, "change"], ["type", "radio", "value", "1", "name", "option", 3, "change"], ["type", "radio", "value", "2", "name", "option", 3, "change"], ["type", "radio", "value", "3", "name", "option", 3, "change"], ["class", "card-footer text-right mt-3 bgtest", 4, "ngIf", "ngIfElse"], ["finish", ""], [1, "card-footer", "text-right", "mt-3", "bgtest"], [1, "btn", "btn-primary", 3, "disabled", "click"]], template: function QuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuestionsComponent_Template_input_change_9_listener($event) { return ctx.changeAnswer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuestionsComponent_Template_input_change_12_listener($event) { return ctx.changeAnswer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuestionsComponent_Template_input_change_15_listener($event) { return ctx.changeAnswer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuestionsComponent_Template_input_change_18_listener($event) { return ctx.changeAnswer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, QuestionsComponent_div_20_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, QuestionsComponent_ng_template_21_Template, 3, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Question " + ctx.currentQuestionNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentQuestion[0].question);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx.currentQuestion[0].optionA, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx.currentQuestion[0].optionB, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx.currentQuestion[0].optionC, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx.currentQuestion[0].optionD, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestionNumber < 5)("ngIfElse", _r1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_finish_test_finish_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/finish-test/finish-test.component */ "vswt");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/questions/questions.component */ "nzub");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_start_test_start_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/start-test/start-test.component */ "JbZv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    { path: "candidates/register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: "candidates/login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "candidates/startTest", component: _components_start_test_start_test_component__WEBPACK_IMPORTED_MODULE_6__["StartTestComponent"] },
    { path: "questions/:questionNumber", component: _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_4__["QuestionsComponent"] },
    { path: "finish", component: _components_finish_test_finish_test_component__WEBPACK_IMPORTED_MODULE_1__["FinishTestComponent"] },
    { path: "", redirectTo: "/home", pathMatch: "full" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vswt":
/*!*****************************************************************!*\
  !*** ./src/app/components/finish-test/finish-test.component.ts ***!
  \*****************************************************************/
/*! exports provided: FinishTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishTestComponent", function() { return FinishTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_questions_questions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/questions/questions.service */ "zP5E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FinishTestComponent {
    constructor(questionService, router) {
        this.questionService = questionService;
        this.router = router;
        this.questionService.finishTest().subscribe((res) => {
            console.log("Total correct answers given : " + res);
            this.correctAnswers = res;
        });
    }
    ngOnInit() {
    }
    leaveEventHandler() {
        this.router.navigateByUrl('candidates/login');
    }
}
FinishTestComponent.ɵfac = function FinishTestComponent_Factory(t) { return new (t || FinishTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_questions_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FinishTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FinishTestComponent, selectors: [["app-finish-test"]], decls: 20, vars: 4, consts: [[1, "container-fluid"], [1, "bg-warning", "justify-content-center"], [1, "mt-1", "bg-success"], [1, "mt-2"], [1, "bg-danger"], [1, "bg-warning"], [1, "bg-success"], [1, "mt-3"], [1, "btn", "btn-primary", 3, "click"]], template: function FinishTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Congratulations! You have completed the test.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Thanks for attending the test.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Your total score is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Total correct Answers are : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinishTestComponent_Template_button_click_18_listener() { return ctx.leaveEventHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total correct answers : ", ctx.correctAnswers, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.correctAnswers, " / 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.correctAnswers, "/", 5, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaW5pc2gtdGVzdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "zP5E":
/*!*********************************************************!*\
  !*** ./src/app/services/questions/questions.service.ts ***!
  \*********************************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class QuestionsService {
    constructor(http) {
        this.http = http;
        this.questionArray = new Array();
        this.questionUrl = 'http://localhost:5000/questions';
    }
    getAllQuestion() {
        return this.questionArray;
    }
    getCurrentQuestion(curr) {
        return this.http.get(this.questionUrl + `/${curr}`);
    }
    submitCurrentQuestion(currQuestion) {
        console.log("Jo user ne tick kiya hai wo : ", currQuestion);
        return this.http.post(this.questionUrl + `/${currQuestion.questionNumber}`, currQuestion);
    }
    finishTest() {
        return this.http.get(this.questionUrl + `/finish/test`);
    }
}
QuestionsService.ɵfac = function QuestionsService_Factory(t) { return new (t || QuestionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
QuestionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionsService, factory: QuestionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map