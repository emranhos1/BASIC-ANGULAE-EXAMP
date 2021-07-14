import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfelseComponent } from './ifelse/ifelse.component';
import { SwitchcaseComponent } from './switchcase/switchcase.component';



@NgModule({
  declarations: [
    IfelseComponent,
    SwitchcaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IfelseComponent,
    SwitchcaseComponent
  ]
})
export class ConditionModule { }
