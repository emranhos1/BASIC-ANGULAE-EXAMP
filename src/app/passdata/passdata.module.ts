import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentchildComponent } from './parentchild/parentchild.component';
import { ChildparentComponent } from './childparent/childparent.component';



@NgModule({
  declarations: [
    ParentchildComponent,
    ChildparentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParentchildComponent,
    ChildparentComponent
  ]
})
export class PassdataModule { }
