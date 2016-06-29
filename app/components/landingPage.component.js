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
var core_1 = require('@angular/core');
var employee_api_component_1 = require("./services/employee.api.component");
var router_1 = require('@angular/router');
var LandingPage = (function () {
    function LandingPage(service) {
        this.service = service;
    }
    LandingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getWelcomeMessage();
        this.service.getEmployees().subscribe(function (employees) { return _this.employees = employees; }, function (error) { return _this.errorMessage = error; });
        this.service.searchEmployee("s").subscribe(function (searchEmployees) { return _this.searchEmployees = searchEmployees; }, function (error) { return _this.errorMessage = error; });
    };
    LandingPage.prototype.getWelcomeMessage = function () {
        var _this = this;
        this.service.getAppSettingById(1).subscribe(function (welcomeMessage) { return _this.welcomeMessage = welcomeMessage; }, function (error) { return _this.errorMessage = error; });
    };
    LandingPage = __decorate([
        core_1.Component({
            selector: 'landing-page',
            templateUrl: '/app/views/landingPage.html',
            providers: [employee_api_component_1.EmployeeApiService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [employee_api_component_1.EmployeeApiService])
    ], LandingPage);
    return LandingPage;
}());
exports.LandingPage = LandingPage;
//# sourceMappingURL=landingPage.component.js.map