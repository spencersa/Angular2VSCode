import { Component, OnInit } from '@angular/core';
import {EmployeeApiService} from "./services/employee.api.component";
import { Employee } from "./classes/employee";
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: '/app/views/home.html',
  providers: [EmployeeApiService],
  directives: [ROUTER_DIRECTIVES], 
})

export class AppComponent implements OnInit { 
    datetime: Date;
    ngOnInit() {
        this.datetime = new Date();
    }

}
