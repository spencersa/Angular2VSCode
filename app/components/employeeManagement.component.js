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
var EmployeeManagement = (function () {
    function EmployeeManagement(service) {
        this.service = service;
    }
    EmployeeManagement = __decorate([
        core_1.Component({
            selector: 'employee-management',
            templateUrl: '/app/views/employeeManagement.html',
            providers: [employee_api_component_1.EmployeeApiService]
        }), 
        __metadata('design:paramtypes', [employee_api_component_1.EmployeeApiService])
    ], EmployeeManagement);
    return EmployeeManagement;
}());
exports.EmployeeManagement = EmployeeManagement;
//# sourceMappingURL=employeeManagement.component.js.map