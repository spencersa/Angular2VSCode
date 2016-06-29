import { Component, OnInit } from '@angular/core';
import {EmployeeApiService} from "./services/employee.api.component";
import { Employee } from "./classes/employee";
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'landing-page',
  templateUrl: '/app/views/landingPage.html',
  providers: [EmployeeApiService],
  directives: [ROUTER_DIRECTIVES]
})

export class LandingPage implements OnInit {
  employees: Employee[];
  searchEmployees: Employee[];
  errorMessage: string;
  welcomeMessage: string;
  constructor(private service: EmployeeApiService) {

  }

  ngOnInit() {
    this.getWelcomeMessage();

    this.service.getEmployees().subscribe(
      employees => this.employees = employees,
      error => this.errorMessage = <any>error);

    this.service.searchEmployee("s").subscribe(
      searchEmployees => this.searchEmployees = searchEmployees,
      error => this.errorMessage = <any>error);
  }

  private getWelcomeMessage() {
    this.service.getAppSettingById(1).subscribe(
      welcomeMessage => this.welcomeMessage = welcomeMessage,
      error => this.errorMessage = <any>error);
  }

}
