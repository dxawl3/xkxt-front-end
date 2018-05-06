import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {StudentService} from '../core/service/student.service';
import {AppGlobalField} from '../core/config/app-global-field';
import {Student} from '../core/domain/entity/student';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-setting',
  templateUrl: './student-setting.component.html',
  styleUrls: ['./student-setting.component.css']
})
export class StudentSettingComponent implements OnInit {

  showMessage: string;

  constructor(private location: Location,
              private route: Router,
              private studentService: StudentService) {
  }

  ngOnInit() {
  }

  changePassword(oldPassword: string, newPassword: string, againPassword: string): void {
    if (newPassword !== againPassword) {
      this.showMessage = '【两次输入密码不一致】';
    } else {
      this.studentService.changePassword(
        JSON.parse(localStorage.getItem(AppGlobalField.currentLoginUser)).studyNumber,
        oldPassword, newPassword
      ).subscribe(result => this.handleChangePassword(result));
    }
  }

  private handleChangePassword(student: Student) {
    if (student.studyNumber != null) {
      // 密码修改成功
      this.showMessage = '【密码修改成功！ 请重新登录】';
      localStorage.clear();
      setTimeout(() => this.route.navigateByUrl('/login'), 1000);
    } else if (student.error != null) {
      // 密码修改失败
      this.showMessage = '【密码修改失败】' + student.message;
    } else {
      console.log(student);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
