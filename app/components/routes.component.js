"use strict";
var router_1 = require('@angular/router');
var landingPage_component_1 = require('./landingPage.component');
var employeeManagement_component_1 = require('./employeeManagement.component');
exports.routes = [
    { path: '', redirectTo: 'landing-page', terminal: true },
    { path: 'landing-page', component: landingPage_component_1.LandingPage },
    { path: 'employee-management', component: employeeManagement_component_1.EmployeeManagement }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=routes.component.js.map