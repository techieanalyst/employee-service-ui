import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';
import {Address} from './address';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/employee-service/v1/employees/younger/than/23', {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json').append('Accept', 'application/json'),
      responseType: 'json'
    });
  }
}
