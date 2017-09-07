"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User_1 = require("../model/User");
var UserFormComponent = /** @class */ (function () {
    function UserFormComponent() {
        this.userCreated = new core_1.EventEmitter();
        this.newUser = new User_1.Users();
        this.active = true;
    }
    UserFormComponent.prototype.onSubmit = function () {
        // show the event the user was userCreated
        var _this = this;
        this.userCreated.emit({ Users: this.newUser });
        console.log(this.newUser);
        this.newUser = new User_1.Users();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserFormComponent.prototype, "userCreated", void 0);
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'user-form',
            styles: ["\n    form {\n        padding: 10px;\n        background: #ECF0F1;\n        border-radius: 3px;\n        margin-bottom: 30px;\n    }\n    "],
            template: "\n    <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"active\">\n    <div class=\"form-group\" [ngClass]=\"{'has-error':email.invalid && email.touched}\">\n        <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\"\n        required\n         [(ngModel)]=\"newUser.email\" #email=\"ngModel\">\n        \n    <span class=\"help-block\" *ngIf=\"email.invalid && email.touched\"> Email is required.</span>\n   \n    </div>\n <div class=\"form-group\" [ngClass]=\"{'has-error':password.invalid && password.touched}\">\n        <input type=\"text\" class=\"form-control\"\n         name=\"password\" placeholder=\"Password\" required \n         [(ngModel)]=\"newUser.password\" #password=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"password.invalid && password.touched\"> Password is required.</span>\n   \n    </div>\n<button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"form.invalid\">\n    Create User</button>\n    </form>\n    "
        })
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map