import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // @ts-ignore
  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService,
              private router: Router) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.reloadData();
  }

  // tslint:disable-next-line:typedef
  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  // tslint:disable-next-line:typedef
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  // tslint:disable-next-line:typedef
  employeeUpdate(id: number){
    this.router.navigate(['update', id]);
  }

}
