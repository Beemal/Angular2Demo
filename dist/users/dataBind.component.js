"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataBindComponent = /** @class */ (function () {
    function DataBindComponent() {
        this.users = [{
                id: 25,
                email: 'Bimal',
                password: 'bimalparajuli'
            }];
    }
    DataBindComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
        console.log(this.activeUser);
    };
    DataBindComponent.prototype.onUserCreated = function (event) {
        this.users.push(event.user);
    };
    DataBindComponent = __decorate([
        core_1.Component({
            selector: 'data-bind',
            template: "<div class=\"row\">\n    <div class=\"col-sm-4\">\n        <div *ngIf=\"users\">\n            <ul class=\"list-group users-list\">\n                <li class=\"list-group-item\" *ngFor=\"let user of users\" \n                (click)=\"selectUser(user)\" \n                [class.active]=\"user === activeUser\">\n                    {{user.email}} ({{user.password}})\n                </li>\n            </ul>\n        </div>\n\n        <user-form (userCreated)=\"onUserCreated($event)\"></user-form>\n    </div>\n\n    <div class=\"col-sm-8\">\n       \n<user-profile [user] = \"activeUser\"></user-profile>\n\n        <div class=\"jumbotron\" *ngIf=\"!activeUser\">\n            <span class=\"glyphicon glyphicon-hand-left\"></span>\n            <h2>Choose a user or person</h2>\n        </div>\n    </div>\n</div>"
        })
    ], DataBindComponent);
    return DataBindComponent;
}());
exports.DataBindComponent = DataBindComponent;
//# sourceMappingURL=dataBind.component.js.map