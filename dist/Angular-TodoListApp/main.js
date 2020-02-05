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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8 offset-md-2\">\n      <app-todo></app-todo>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular-TodoListApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/todo.service */ "./src/app/services/todo.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_8__["TodoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot() // ToastrModule added
            ],
            providers: [
                _services_todo_service__WEBPACK_IMPORTED_MODULE_9__["TodoService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/todo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var TodoService = /** @class */ (function () {
    function TodoService(firebasedb) {
        this.firebasedb = firebasedb;
    }
    TodoService.prototype.getTodoList = function () {
        return this.todoList = this.firebasedb.list('titles');
    };
    TodoService.prototype.addTitle = function (title) {
        this.todoList.push({
            title: title,
            isChecked: false
        });
    };
    TodoService.prototype.checkOrUncheckTitle = function ($key, flag) {
        return this.todoList.update($key, { isChecked: flag });
    };
    TodoService.prototype.removeTitle = function ($key) {
        return this.todoList.remove($key);
    };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\r\n    height: auto;\r\n}\r\n\r\n.hover-cursor{\r\n    cursor: pointer;\r\n}\r\n\r\nul li:hover {\r\n    background-color: aliceblue;\r\n    -webkit-transition: .2s all ease-in-out;\r\n    transition: .2s all ease-in-out;\r\n    box-shadow: 0 10px 20px rgba(124, 124, 124, 0.19), 0 6px 6px rgba(145, 145, 145, 0.23);\r\n}\r\n\r\n.jumbotron{\r\n    padding: 45px 0px;\r\n    margin-top: 100px;\r\n}\r\n\r\n.addBg{\r\n    background-color: #ecffec;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix1Q0FBK0I7SUFBL0IsK0JBQStCO0lBQy9CLHNGQUFzRjtBQUMxRjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmhvdmVyLWN1cnNvcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudWwgbGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMTI0LCAxMjQsIDEyNCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDE0NSwgMTQ1LCAxNDUsIDAuMjMpO1xyXG59XHJcbi5qdW1ib3Ryb257XHJcbiAgICBwYWRkaW5nOiA0NXB4IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4uYWRkQmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmZmVjO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h4 class=\"text-center\">\n    Todo List App\n  </h4>\n</div>\n\n<div class=\"input-group mb-3\">\n  <input type=\"text\" class=\"form-control\" #itemTitle style=\"height: auto\" aria-label=\"Text input with icon\"\n    (keydown.enter)=\"onAdd(itemTitle)\">\n  <div class=\"input-group-text\" (click)=\"onAdd(itemTitle)\">\n    <i class=\"fa fa-plus-circle fa-2x\"></i>\n  </div>\n</div>\n\n<div style=\"margin: 5px 0px\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let item of todoListArray\" style=\"margin-bottom: 5px\"\n      [ngClass]=\"item.isChecked?'addBg':'null'\">\n      <span class=\"hover-cursor\" [class.text-success]=\"item.isChecked\" (click)=\"alterCheck(item.$key, item.isChecked)\">\n        <i class=\"fa fa-lg\" [ngClass]=\"item.isChecked?'fa-check-circle-o':'fa-circle-thin'\"></i>\n      </span>\n      {{item.title}}\n      <span class=\"hover-cursor text-danger pull-right\" (click)=\"onDelete(item.$key)\">\n        <i class=\"fa fa-trash-o fa-lg\"></i>\n      </span>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/todo.service */ "./src/app/services/todo.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var TodoComponent = /** @class */ (function () {
    function TodoComponent(todoService, toastr) {
        this.todoService = todoService;
        this.toastr = toastr;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getTodoList().snapshotChanges()
            .subscribe(function (item) {
            _this.todoListArray = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.todoListArray.push(x);
            });
            // sort array isChecked false -> true
            _this.todoListArray.sort(function (a, b) { return a.isChecked - b.isChecked; });
        });
    };
    // Add Todo Item
    TodoComponent.prototype.onAdd = function (itemTitle) {
        if (!itemTitle.value) {
            console.log(itemTitle.value);
            this.toastr.warning('Enter a task, input field can\'t be empty', 'Add Task');
        }
        else {
            this.todoService.addTitle(itemTitle.value);
            this.toastr.success('Task Successfully Added!', 'Add Task');
        }
        itemTitle.value = null;
    };
    // Check Item
    TodoComponent.prototype.alterCheck = function ($key, isChecked) {
        this.todoService.checkOrUncheckTitle($key, !isChecked);
        this.toastr.info('You have completed a task', 'Task Completed');
    };
    // Delete a Todo Item
    TodoComponent.prototype.onDelete = function ($key) {
        this.todoService.removeTitle($key);
        this.toastr.error('Task Removed Successfully!', 'Remove Todo Task');
    };
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], TodoComponent);
    return TodoComponent;
}());



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
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD2_-C6mYJSQYXUfvJvNJlewMDzIKYOOEM",
        authDomain: "todolistapp-7faac.firebaseapp.com",
        databaseURL: "https://todolistapp-7faac.firebaseio.com",
        projectId: "todolistapp-7faac",
        storageBucket: "todolistapp-7faac.appspot.com",
        messagingSenderId: "636899308954",
        appId: "1:636899308954:web:34944302df2485cf307623"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Repo\Angular-TodoListApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map