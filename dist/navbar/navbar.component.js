"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'Mynavbar',
            template: "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-2\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"/\">MyApp</a>\n      </div>\n  \n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-2\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a></li>\n          <li><a routerLink=\"/about-page\">About</a></li>\n          <li><a routerLink=\"/data-bind\">Data-Bind</a></li>\n         <!-- <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a href=\"#\">Action</a></li>\n              <li><a href=\"#\">Another action</a></li>\n              <li><a href=\"#\">Something else here</a></li>\n              <li class=\"divider\"></li>\n              <li><a href=\"#\">Separated link</a></li>\n              <li class=\"divider\"></li>\n              <li><a href=\"#\">One more separated link</a></li>\n            </ul> \n          </li>  -->\n        </ul>\n      \n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a routerLink=\"/login-page\">Login</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>"
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map