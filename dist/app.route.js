"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var about_component_1 = require("./about/about.component");
var home_component_1 = require("./home/home.component");
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