import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show= false
  isActive= 'yes'
  color = 'green'

  getRevarse(){
    this.show = !this.show
  }

  getRevarse1(){
    this.isActive = 'No'
  }
}
