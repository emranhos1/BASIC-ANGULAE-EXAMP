import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchcase',
  templateUrl: './switchcase.component.html',
  styleUrls: ['./switchcase.component.css']
})
export class SwitchcaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color = 'gray'

  redColor(){
    this.color='red'
  }

  greenColor(){
    this.color='green'
  }
  
  blueColor(){
    this.color='blue'
  }
  defaultColor(){
    this.color='gray'
  }
}
