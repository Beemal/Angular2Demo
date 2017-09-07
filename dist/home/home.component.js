"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: "\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n      <!-- Indicators -->\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n      </ol>\n      <div class=\"carousel-inner\" role=\"listbox\">\n        <div class=\"item active\">\n          <img class=\"first-slide\" src=\"./app/assets/images/barbara-tower.jpg\" alt=\"First slide\">\n          <div class=\"container\">\n            <div class=\"carousel-caption\">\n              <h1>Example headline.</h1>\n              <p>Note: If you're viewing this page via a <code>file://</code> URL, the \"next\" and \"previous\" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>\n              <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <img class=\"second-slide\" src=\"./app/assets/images/beach.jpg\" alt=\"Second slide\">\n          <div class=\"container\">\n            <div class=\"carousel-caption\">\n              <h1>Another example headline.</h1>\n              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n              <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Learn more</a></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <img class=\"third-slide\" src=\"./app/assets/images/hollywood.jpg\" alt=\"Third slide\">\n          <div class=\"container\">\n            <div class=\"carousel-caption\">\n              <h1>One more for good measure.</h1>\n              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n              <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Browse gallery</a></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>"
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map