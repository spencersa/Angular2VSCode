import { Component, OnInit } from '@angular/core';
import {EmployeeApiService} from "./services/employee.api.component";
import { Employee } from "./classes/employee";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'employee-management',
  templateUrl: '/app/views/employeeManagement.html',
  providers: [EmployeeApiService]
})

export class EmployeeManagement { 
  employees: Employee[];
  searchEmployees: Employee[];
  errorMessage: string;
  constructor(private service: EmployeeApiService) {

   }

}
