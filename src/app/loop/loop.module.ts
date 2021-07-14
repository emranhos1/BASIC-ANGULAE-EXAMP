import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForComponent } from './for/for.component';



@NgModule({
  declarations: [
    ForComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ForComponent
  ]
})
export class LoopModule { }
