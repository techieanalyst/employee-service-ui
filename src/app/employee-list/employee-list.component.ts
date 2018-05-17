import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Array<any>;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getAll().subscribe(data => {
      this.employees = data.employees;
    });
  }
}
