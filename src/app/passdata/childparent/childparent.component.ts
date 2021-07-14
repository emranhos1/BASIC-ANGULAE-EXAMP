import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childparent',
  templateUrl: './childparent.component.html',
  styleUrls: ['./childparent.component.css']
})
export class ChildparentComponent implements OnInit {

  @Output() parentMethod: EventEmitter <any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    
  }

  sendData(){
    let data = {
        name : "Md Emran Hossain",
        age  : 28
      }
    this.parentMethod.emit(data)
  }

}
