import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fruits  = ['Apple', 'Banana', 'Pineapple', 'jackfruit']
  details = [
    {
      name  : 'Emran',
      age   : 30,
      code  : '0178',
      email : 'abc@gmail.com'
    },
    {
      name: 'Imran',
      age : 29,
      code  : '0198',
      email : 'xyz@gmail.com'
    },
    {
      name: 'Estiak',
      age : 28,
      code  : '0154',
      email : 'pql@gmail.com'
    }
  ]
}
