"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User_1 = require("../model/User");
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.user = new User_1.Users();
    }
    LoginComponent.prototype.login = function () {
        if (this.user.email === "a@a.com" && this.user.password === "a")
            this._router.navigate(['profile']);
        else
            console.log("Error");
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-page',
            styleUrls: ['./app/assets/style.css'],
            templateUrl: './app/login/login.html'
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map