import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
              private employeeService: EmployeeService) { }

  // @ts-ignore
  id: number;
  // @ts-ignore
  employee: Employee;

  // tslint:disable-next-line:typedef
  submitted: any;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params.id;

    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.updateEmployee();
  }
  // tslint:disable-next-line:typedef
  gotoList() {
    this.router.navigate(['/employees']);
  }
}
