import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  obj = {
    name    : "Md. Emran Hossain",
    age     : 30,
    email   : "emranhos1@gmail.com"
  }
  getData(){
    return this.obj
  }
}
