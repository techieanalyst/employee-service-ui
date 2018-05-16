import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeeService} from './employee.service';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  obsEmploy: Observable<Employee[]>;


  constructor(private http: HttpClient, private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.obsEmploy = this.employeeService.sortEmployeeListByAttribute('salary');
    //    this.http.get('http://localhost:8080/employee-service/v1/employees/younger/than/25', {responseType: 'json'});
  }

}
