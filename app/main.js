"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./components/app.component');
var http_1 = require("@angular/http");
var routes_component_1 = require('./components/routes.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, routes_component_1.APP_ROUTER_PROVIDERS]);
//# sourceMappingURL=main.js.map