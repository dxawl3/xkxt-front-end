import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {StudentComponent} from './student/student.component';
import {AdminComponent} from './admin/admin.component';
import {AdminCreateStudentComponent} from './admin-create-student/admin-create-student.component';
import {AdminCreateTeacherComponent} from './admin-create-teacher/admin-create-teacher.component';
import {AdminPushMessageComponent} from './admin-push-message/admin-push-message.component';
import {StudentSettingComponent} from './student-setting/student-setting.component';
import {StudentPushLogComponent} from './student-push-log/student-push-log.component';
import {TeacherComponent} from './teacher/teacher.component';
import {TeacherCreateSubjectComponent} from './teacher-create-subject/teacher-create-subject.component';
import {TeacherSettingComponent} from './teacher-setting/teacher-setting.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/create-student', component: AdminCreateStudentComponent},
  {path: 'admin/create-teacher', component: AdminCreateTeacherComponent},
  {path: 'admin/push-message', component: AdminPushMessageComponent},
  {path: 'student', component: StudentComponent},
  {path: 'student/setting', component: StudentSettingComponent},
  {path: 'student/push-log', component: StudentPushLogComponent},
  {path: 'teacher', component: TeacherComponent},
  {path: 'teacher/setting', component: TeacherSettingComponent},
  {path: 'teacher/create-subject', component: TeacherCreateSubjectComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
