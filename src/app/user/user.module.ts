import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    EmployeeComponent,
    AdminComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule.forRoot([
    //   { path: 'employee', component: EmployeeComponent },
    //   { path: 'admin', component: AdminComponent }
    // ])
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    EmployeeComponent,
    AdminComponent,
    PageNotFoundComponent
  ]
})
export class UserModule { }
