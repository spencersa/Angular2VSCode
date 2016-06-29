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
require("rxjs/Rx");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require('rxjs/Observable');
var EmployeeApiService = (function () {
    function EmployeeApiService(_http) {
        this._http = _http;
        this.webUrl = "http://localhost:56128";
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    EmployeeApiService.prototype.getEmployees = function () {
        return this._http.get(this.webUrl + "/api/EmployeeManagement/GetEmployees")
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    EmployeeApiService.prototype.searchEmployee = function (name) {
        var body = JSON.stringify({ name: name });
        var options = new http_1.RequestOptions({ headers: this.headers });
        return this._http.post(this.webUrl + "/api/EmployeeManagement/SearchEmployees", body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeApiService.prototype.getAppSettingById = function (id) {
        var body = JSON.stringify({ id: id });
        var options = new http_1.RequestOptions({ headers: this.headers });
        return this._http.post(this.webUrl + "/api/EmployeeManagement/GetAppSettingById", body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeApiService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    EmployeeApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeApiService);
    return EmployeeApiService;
}());
exports.EmployeeApiService = EmployeeApiService;
//# sourceMappingURL=employee.api.component.js.map