import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConditionModule } from './condition/condition.module';
import { EventModule } from './event/event.module';
import { HeaderfooterModule } from './headerfooter/headerfooter.module';
import { LoopModule } from './loop/loop.module';
import { PropertybindModule } from './propertybind/propertybind.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserModule } from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PassdataModule } from './passdata/passdata.module';
import { ReusableComponentModule } from './reusable-component/reusable-component.module';
import { PipeModule } from './pipe/pipe.module';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './user/employee/employee.component';
import { AdminComponent } from './user/admin/admin.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { PageNotFoundComponent } from './user/page-not-found/page-not-found.component';
import { ServiceModule } from './service/service/service.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes =[
  { path: 'employee', component: EmployeeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    UserModule,
    EventModule,
    PropertybindModule,
    ConditionModule,
    LoopModule,
    FormsModule,
    HeaderfooterModule,
    NgbModule,
    PassdataModule,
    ReusableComponentModule,
    PipeModule,
    
    RouterModule.forRoot(routes),

    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
