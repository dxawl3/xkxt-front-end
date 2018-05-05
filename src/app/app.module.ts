import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './/app-routing.module';
import {StudentService} from './core/service/student.service';
import {StudentComponent} from './student/student.component';
import {HttpClientModule} from '@angular/common/http';
import {AdminService} from './core/service/admin.service';
import {CommonService} from './core/service/common.service';
import {TeacherComponent} from './teacher/teacher.component';
import {AdminComponent} from './admin/admin.component';
import {StudentSettingComponent} from './student-setting/student-setting.component';
import {TeacherSettingComponent} from './teacher-setting/teacher-setting.component';
import {StudentPushLogComponent} from './student-push-log/student-push-log.component';
import {TeacherCreateSubjectComponent} from './teacher-create-subject/teacher-create-subject.component';
import {AdminPushMessageComponent} from './admin-push-message/admin-push-message.component';
import {TeacherService} from './core/service/teacher.service';
import {AdminAddComponent} from './admin-add/admin-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    StudentComponent,
    TeacherComponent,
    AdminComponent,
    StudentSettingComponent,
    TeacherSettingComponent,
    StudentPushLogComponent,
    TeacherCreateSubjectComponent,
    AdminPushMessageComponent,
    AdminAddComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StudentService, AdminService, CommonService, TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
