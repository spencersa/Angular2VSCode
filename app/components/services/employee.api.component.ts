import "rxjs/Rx"
import {Http, Headers, RequestOptions, Response } from "@angular/http";
import {Injectable} from "@angular/core";
import { Employee } from "../classes/employee";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeApiService {
    webUrl: string;
    headers: Headers;
    constructor(private _http: Http) {
        this.webUrl = "http://localhost:56128";
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json')
    }

  getEmployees(): Observable<Employee[]> {
    return this._http.get(this.webUrl + "/api/EmployeeManagement/GetEmployees")
      .map((response: Response) => <Employee[]>response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  searchEmployee (name: string): Observable<Employee[]> {
    let body = JSON.stringify({ name: name });
    let options = new RequestOptions({ headers: this.headers });
    return this._http.post(this.webUrl + "/api/EmployeeManagement/SearchEmployees", body, options)
                    .map((response: Response) => <Employee[]>response.json())
                    .catch(this.handleError);
  }

  getAppSettingById (id: number): Observable<string>{
    let body = JSON.stringify({ id: id });
    let options = new RequestOptions({ headers: this.headers });
    return this._http.post(this.webUrl + "/api/EmployeeManagement/GetAppSettingById", body, options)
                    .map((response: Response) => <string>response.json())
                    .catch(this.handleError);
  }
  
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
