"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var about_component_1 = require("./about/about.component");
var home_component_1 = require("./home/home.component");
var dataBind_component_1 = require("./users/dataBind.component");
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'login-page', component: login_component_1.LoginComponent
    },
    {
        path: 'data-bind', component: dataBind_component_1.DataBindComponent
    },
    {
        path: 'home', component: home_component_1.HomeComponent
    },
    {
        path: 'about-page', component: about_component_1.AboutComponent
    },
    { path: '**', component: AnimationEvent }
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.route.js.map