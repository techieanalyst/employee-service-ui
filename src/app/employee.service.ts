import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';
import {Address} from './address';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  sortEmployeeListByAttribute(attribute: string): Observable<Employee[]> {
    const httpHeaders = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Employee[]>('http://localhost:8080/employee-service/v1/employees/younger/than/' + attribute, {
      headers: httpHeaders,
      responseType: 'json'
    }).pipe(map((response: any) => response.employees));
  }
}
