import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myName = "Emran Hossain"

  getName(){
    alert("Md. Emran Hossain")
  }

  passName(name: any){
    alert(name)
  }
}
