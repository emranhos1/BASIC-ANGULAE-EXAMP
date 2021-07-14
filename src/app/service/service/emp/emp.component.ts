import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  name    =''
  age     =0
  email   =''
  constructor(private emp: EmployeeService) { 
    let  data = emp.getData()
    this.name = data.name
    this.age = data.age
    this.email = data.email
  }

  ngOnInit(): void {
  }

}
