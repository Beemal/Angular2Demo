"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var navbar_component_1 = require("./navbar/navbar.component");
var login_component_1 = require("./login/login.component");
var app_route_1 = require("./app.route");
var about_component_1 = require("./about/about.component");
var home_component_1 = require("./home/home.component");
var dataBind_component_1 = require("./users/dataBind.component");
var user_form_component_1 = require("./users/user-form.component");
var user_profile_component_1 = require("./users/user-profile.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_route_1.routing
            ],
            declarations: [
                app_component_1.AppComponent, navbar_component_1.NavbarComponent, login_component_1.LoginComponent, about_component_1.AboutComponent, home_component_1.HomeComponent,
                dataBind_component_1.DataBindComponent, user_form_component_1.UserFormComponent, user_profile_component_1.UserProfileComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map