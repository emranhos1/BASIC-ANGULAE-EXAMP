import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentchild',
  templateUrl: './parentchild.component.html',
  styleUrls: ['./parentchild.component.css']
})
export class ParentchildComponent implements OnInit {

  @Input() person: any;
  @Input() personData: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.person)
    console.log(this.personData)
  }

}
