import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  allData: any =[];
  constructor(private http:HttpClient) { 
    this.http.get("http://localhost:8888/profile/taxDetailses").subscribe(data=>{
      this.allData = data
      // console.log("data comes from API")
      console.log(data)
    })
  }

  ngOnInit(): void {
  }
}
