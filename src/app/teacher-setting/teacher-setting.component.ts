import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {TeacherService} from '../core/service/teacher.service';
import {AppGlobalField} from '../core/config/app-global-field';
import {Teacher} from '../core/domain/entity/teacher';

@Component({
  selector: 'app-teacher-setting',
  templateUrl: './teacher-setting.component.html',
  styleUrls: ['./teacher-setting.component.css']
})
export class TeacherSettingComponent implements OnInit {

  showMessage: string;

  constructor(private route: Router,
              private location: Location,
              private teacherService: TeacherService) {
  }

  ngOnInit() {
  }

  changePassword(oldPassword: string, newPassword: string, againPassword: string): void {
    if (newPassword !== againPassword) {
      this.showMessage = '【两次输入密码不一致】';
    } else {
      this.teacherService.changePassword(
        JSON.parse(localStorage.getItem(AppGlobalField.currentLoginUser)).teacherNumber,
        oldPassword, newPassword
      ).subscribe(result => this.handleChangePassword(result));
    }
  }

  private handleChangePassword(teacher: Teacher) {
    if (teacher.teacherNumber != null) {
      // 密码修改成功
      this.showMessage = '【密码修改成功！ 请重新登录】';
      localStorage.clear();
      setTimeout(() => this.route.navigateByUrl('/login'), 1000);
    } else if (teacher.error != null) {
      // 密码修改失败
      this.showMessage = '【密码修改失败】' + teacher.message;
    } else {
      console.log(teacher);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
