(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-1\"><img src=\"assets\\profile-image.png\" alt=\"profile-image\" style=\"height: 50px; padding: 10px;\"></div>\n  <div class=\"col-11\"><h2>{{Name}}</h2></div>\n</div>\n<div class=\"row\">\n\n  <!-- Start of navbar -->\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark \" style=\"width: 100%; \">\n        <a class=\"navbar-brand\" href=\"#\">Home</a>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n          <ul class=\"navbar-nav \">\n            <li class=\"nav-item\" >\n              <a class=\"nav-link\">Profile</a>\n            </li>\n            <li class=\"nav-item\" >\n              <a class=\"nav-link\" >Tasks</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Favourites</a>\n            </li>\n            <li class=\"nav-item\" >\n                <a class=\"nav-link\">Watches</a>\n              </li>\n              <li class=\"nav-item\" >\n                <a class=\"nav-link\" >Drafts</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">Networks</a>\n              </li>\n              <li class=\"nav-item\" >\n                  <a class=\"nav-link\">Settings</a>\n                </li>\n                <li class=\"nav-item\" >\n                  <a class=\"nav-link\" >Workflow</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#\">Org Chart</a>\n                </li>\n          </ul>\n        </div>\n      </nav>\n      <!-- End of navbar -->\n</div>\n\n<div class=\"row border\">\n    <!-- Start of side bar -->\n    <div class=\"col-2 border-right\" >\n        <div class=\"card\" style=\"width: 18rem; border: none;\">\n        <ul class=\"list-group list-group-flush\" >\n            <li class=\"list-group-item\">Profile</li>\n            <li class=\"list-group-item\">Profile Picture</li>\n            <li class=\"list-group-item\">Edit Profile</li>\n        </ul>\n        </div>\n    </div>\n    <!-- End of side bar -->\n\n    <!-- Start of profile -->\n    <div class=\"col-10\" >\n        <div class=\"row\">\n            <div class=\"col\" >\n\n                <!-- Start of profile details --> \n                  <form [formGroup]=\"form\" [ngClass]=\"{'editing': editing}\" (ngSubmit)=\"onSubmit()\" >\n                      <h3>Personal</h3>\n                      <div class=\"form-group\" >\n                        <label for=\"\">Full Name</label>\n                        <input [(ngModel)]=\"Name\" id=\"Name\" formControlName=\"Name\" class=\"form-control\" type=\"text\" placeholder=\"Joe\" />\n                        <div class=\"value\">{{Name}}</div>\n                      </div>\n      \n                      <div class=\"form-group\" >\n                        <label for=\"\">Email</label>\n                        <input [(ngModel)]=\"Email\" id=\"Email\" formControlName=\"Email\" class=\"form-control\" type=\"text\" placeholder=\"Joe\" />\n                        <div class=\"value\">{{Email}}</div>\n                      </div>\n      \n                      <h3>Contact Information</h3>\n                      <div class=\"form-group\" >\n                        <label for=\"\">Phone</label>\n                        <input  [(ngModel)]=\"Phone\" id=\"Phone\" formControlName=\"Phone\" class=\"form-control\" type=\"text\" placeholder=\"Joe\" />\n                        <div class=\"value\">{{Phone}}</div>\n                      </div>\n      \n                      <h3>Individual Information</h3>\n                      <div class=\"form-group\" >\n                        <label for=\"\">Position</label>\n                        <input [(ngModel)]=\"Position\" id=\"Position\" formControlName=\"Position\" class=\"form-control\" type=\"text\" placeholder=\"Joe\" />\n                        <div class=\"value\">{{Position}}</div>\n                      </div>\n      \n                      <div class=\"form-group\" >\n                        <label for=\"\">Supervisor</label>\n                        <input [(ngModel)]=\"Supervisor\" id=\"Supervisor\" formControlName=\"Supervisor\" class=\"form-control\" type=\"text\" placeholder=\"Joe\" />\n                        <div class=\"value\">{{Supervisor}}</div>\n                      </div>\n      \n                      <div class=\"form-group\" >\n                        <label for=\"\">Website</label>\n                        <input [(ngModel)]=\"Website\" id=\"Website\" formControlName=\"Website\" class=\"form-control\" type=\"text\" placeholder=\"Joe\" />\n                        <div class=\"value\">{{Website}}</div>\n                      </div>\n      \n                      <div class=\"form-group\" >\n                        <label for=\"\">Department</label>\n                        <input [(ngModel)]=\"Department\" id=\"Department\" formControlName=\"Department\" class=\"form-control\" type=\"text\" placeholder=\"Joe\" />\n                        <div class=\"value\">{{Department}}</div>\n                      </div>\n      \n                      <h3>Loacation</h3>\n                      <div class=\"form-group\" >\n                        <label for=\"\">Branch</label>\n                        <input [(ngModel)]=\"Branch\" id=\"Branch\" formControlName=\"Branch\" class=\"form-control\" type=\"text\" placeholder=\"Joe\" />\n                        <div class=\"value\">{{Branch}}</div>\n                      </div>\n      \n                      <div class=\"form-group\" >\n                        <label for=\"\">Country</label>\n                        <input [(ngModel)]=\"Country\" id=\"Country\" formControlName=\"Country\" class=\"form-control\" type=\"text\" placeholder=\"Joe\" />\n                        <div class=\"value\">{{Country}}</div>\n                      </div>\n      \n                      <h3>Expertise</h3>\n                      <div class=\"form-group\" >\n                        <label for=\"\">Applications</label>\n                        <input [(ngModel)]=\"Applications\" id=\"Applications\" formControlName=\"Applications\" class=\"form-control\" type=\"text\" placeholder=\"Joe\" />\n                        <div class=\"value\">{{Applications}}</div>\n                      </div>\n      \n                      <div class=\"form-group\" >\n                        <label for=\"\">Langauges</label>\n                        <input [(ngModel)]=\"Langauges\" id=\"Langauges\" formControlName=\"Langauges\" class=\"form-control\" type=\"text\" placeholder=\"Joe\" />\n                        <div class=\"value\">{{Langauges}}</div>\n                      </div>\n\n                      <div class=\"form-button-group\" *ngIf=\"!editing\">\n                        <button class=\"btn btn-success\" type=\"submit\" (click)=\"toggleEdit()\">Save Changes</button>\n                      </div>\n                  </form>\n\n            </div>  \n                        \n            <div class=\"col\">\n                <img src=\"assets\\profile-image.png\" alt=\"profile-image\">\n                <h4>Activity</h4>\n                <h6>Recently Updated</h6>\n                <ul>\n                    <a href=\"#\">The key to Enterprise</a>\n                    <p>Date: 25/1/18</p>\n                    <a href=\"#\">The key to Enterprise</a>\n                    <p>Date: 25/1/18</p>\n                    <a href=\"#\">The key to Enterprise</a>\n                    <p>Date: 25/1/18</p>\n                    <a href=\"#\">The key to Enterprise</a>\n                    <p>Date: 25/1/18</p>\n                    <a href=\"#\">The key to Enterprise</a>\n                    <p>Date: 25/1/18</p>\n                    <a href=\"#\">The key to Enterprise</a>\n                    <p>Date: 25/1/18</p>\n                </ul >\n            </div>\n            \n            <!-- Edit button -->\n            <div class=\"col-2\">\n              <div class=\"form-button-group\">\n                <button class=\"btn btn-dark\" (click)=\"toggleEdit()\">Edit Profile</button>\n              </div> \n            </div>\n        </div>\n    </div>\n     <!-- End of profile details-->\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    padding: 20px;\r\n}\r\n\r\np{\r\n    font-family: Lato;\r\n}\r\n\r\nform{\r\n    margin-left: 60px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.form-group{\r\n    margin-left: 50px;\r\n}\r\n\r\n.form-group label{\r\n    display: inline-block;\r\n    min-width: 100px;\r\n    text-align: right;\r\n}\r\n\r\n.form-group .value{\r\n display: none;\r\n margin-left: 20px;\r\n}\r\n\r\n.editing .value{\r\n    display: inline;\r\n}\r\n\r\n.editing input{\r\n    display: none;\r\n}\r\n\r\ninput{\r\n    display: inline;\r\n    box-sizing: border-box;\r\n    margin-left: 5px;\r\n    max-width: 400px;\r\n}\r\n\r\n#row li{\r\n    text-decoration: none;\r\n}\r\n\r\nbutton{\r\n    margin: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGlCQUFpQjtBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGxhYmVse1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCAudmFsdWV7XHJcbiBkaXNwbGF5OiBub25lO1xyXG4gbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5lZGl0aW5nIC52YWx1ZXtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4uZWRpdGluZyBpbnB1dHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4jcm93IGxpe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let AppComponent = class AppComponent {
    constructor() {
        // Variables for detail
        this.Name = 'Joe Blogs';
        this.Email = 'JoeBlogs@gmail.com';
        this.Phone = '022 2039848';
        this.Position = 'Public Relations';
        this.Supervisor = 'Micael Miller';
        this.Website = 'www.jbworks.com';
        this.Department = 'Public relations';
        this.Branch = 'Hamilton';
        this.Country = 'New Zealand';
        this.Applications = 'something';
        this.Langauges = 'English';
        // variable to toggle editing
        this.editing = true;
        // Form group and control for editing the details
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.Name),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.Email),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.Phone),
            Position: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.Position),
            Supervisor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.Supervisor),
            Website: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.Website),
            Department: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.Department),
            Branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.Branch),
            Country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.Country),
            Applications: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.Applications),
            Langauges: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.Langauges),
        });
    }
    // Toggle function to show editing form
    toggleEdit() {
        this.editing = !this.editing;
    }
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ihaka\Desktop\profile\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map