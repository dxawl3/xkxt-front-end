import {Component, OnInit} from '@angular/core';
import {StudentService} from '../core/service/student.service';
import {Student} from '../core/domain/entity/student';
import {AppGlobalField} from '../core/config/app-global-field';
import {Router} from '@angular/router';
import {AdminService} from '../core/service/admin.service';
import {TeacherService} from '../core/service/teacher.service';
import {Teacher} from '../core/domain/entity/teacher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showMessage: string;

  constructor(private route: Router,
              private adminService: AdminService,
              private studentService: StudentService,
              private teacherService: TeacherService) {
  }

  ngOnInit() {
    this.goToAlreadyLogin();
  }

  goToAlreadyLogin(): void {
    const currentLoginRole: string = localStorage.getItem(AppGlobalField.currentLoginRole);
    if (currentLoginRole != null) {
      this.route.navigateByUrl('/' + currentLoginRole);
    }
  }

  studentLogin(studyNumber: string, studentPassword: string): void {
    this.studentService.login(studyNumber, studentPassword)
      .subscribe(result => this.handleStudentLogin(result));
  }

  private handleStudentLogin(student: Student) {
    if (student.studyNumber != null) {
      // 登录成功
      localStorage.setItem(AppGlobalField.currentLoginUser, JSON.stringify(student));
      localStorage.setItem(AppGlobalField.currentLoginRole, AppGlobalField.studentRole);
      this.route.navigateByUrl('/student');
    } else if (student.error != null) {
      // 登录失败
      this.showMessage = student.message;
    } else {
      // 未知错误
      console.log(student);
    }
  }

  teacherLogin(teacherNumber: string, teacherPassword: string): void {
    this.teacherService.login(teacherNumber, teacherPassword)
      .subscribe(result => this.handleTeacherLogin(result));
  }

  private handleTeacherLogin(teacher: Teacher) {
    if (teacher.teacherNumber != null) {
      // 登录成功
      localStorage.setItem(AppGlobalField.currentLoginUser, JSON.stringify(teacher));
      localStorage.setItem(AppGlobalField.currentLoginRole, AppGlobalField.teacherRole);
      this.route.navigateByUrl('/teacher');
    } else if (teacher.error != null) {
      // 登录失败
      this.showMessage = teacher.message;
    } else {
      // 未知错误
      console.log(teacher);
    }
  }

  adminLogin(adminUsername: string, adminPassword: string): void {
    this.adminService.login(adminUsername, adminPassword)
      .subscribe(result => this.handleAdminLogin());
  }

  private handleAdminLogin() {
    // 登录成功
    localStorage.setItem(AppGlobalField.currentLoginRole, AppGlobalField.adminRole);
    this.route.navigateByUrl('/admin');
  }
}
