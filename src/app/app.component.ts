import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first Project of Angular';
  name = "Md. Emran Hossain";

  getName(){
    return this.name
  }

  arr = ["Md.", "Emran", "Hossain"]
  obj = {
    name: "Emon",
    age : 30
  }

  usersData = [
  	{
      name  : "Emran",
      age   : 26,
      email : "abc@gmail.com"
    },
  	{
      name  : "Hossain",
      age   : 30,
      email : "xyz@gmail.com"
    }
  ]

  siteUrl = window.location.href

  age=''
  parentFunction(data: any){
    console.log(data)
    this.age=data.age
  }
}
