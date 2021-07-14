import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username =''
  age      =''
  phoneNo  =''
  password =''

  getValues(val: any){
    this.username = val.username,
    this.age      = val.age,
    this.phoneNo  = val.phoneNo,
    this.password = val.password
  }

}
