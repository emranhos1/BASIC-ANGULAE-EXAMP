import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };

  curentValue="";
  curentValue1="";
  
  myEvent(evt: any){
    console.log(evt)
  }

  setText(evt: any){ 
    this.curentValue = evt; 
  }

  setTextByButtonClicked(evt: any){ 
    this.curentValue1 = evt; 
  }
}
