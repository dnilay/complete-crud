import { Employee } from '../employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number | undefined;
  employee: Employee | undefined;

  constructor(private route: ActivatedRoute, private router: Router,
              private employeeService: EmployeeService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params.id;

    // @ts-ignore
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  list(){
    this.router.navigate(['employees']);
  }
}
