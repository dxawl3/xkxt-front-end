import {Component, OnInit} from '@angular/core';
import {StudentService} from '../core/service/student.service';
import {Student} from '../core/domain/entity/student';
import {AppGlobalField} from '../core/config/app-global-field';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showMessage: string;

  constructor(private studentService: StudentService,
              private route: Router) {
  }

  ngOnInit() {
  }

  studentLogin(studyNumber: string, password: string): void {
    this.studentService.login(studyNumber, password)
      .subscribe(result => this.handleStudentLogin(result));
  }

  handleStudentLogin(student: Student): void {
    if (student.studyNumber != null) {
      // 登录成功
      localStorage.setItem(AppGlobalField.currentLoginUser, JSON.stringify(student));
      this.route.navigateByUrl('/student');
    } else if (student.error != null) {
      // 登录失败
      this.showMessage = student.message;
    } else {
      // 未知错误
      console.log(student);
    }
  }

  teacherLogin(): void {

  }

  adminLogin(): void {

  }
}
