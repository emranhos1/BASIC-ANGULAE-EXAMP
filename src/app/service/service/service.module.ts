import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpComponent } from './emp/emp.component';
import { CountryComponent } from './country/country.component';



@NgModule({
  declarations: [
    EmpComponent,
    CountryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmpComponent,
    CountryComponent
  ]
})
export class ServiceModule { }
