import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {StudentService} from '../core/service/student.service';
import {StudentLogRequest} from '../core/domain/request/student-log-request';
import {AppGlobalField} from '../core/config/app-global-field';
import {Student} from '../core/domain/entity/student';
import {StudentLog} from '../core/domain/model/student-log';

@Component({
  selector: 'app-student-push-log',
  templateUrl: './student-push-log.component.html',
  styleUrls: ['./student-push-log.component.css']
})
export class StudentPushLogComponent implements OnInit {

  showMessage: string;
  student: Student;

  constructor(private studentService: StudentService,
              private location: Location) { }

  ngOnInit() {
    this.student = JSON.parse(localStorage.getItem(AppGlobalField.currentLoginUser));
  }

  pushLog(title: string, content: string): void {
    const studentLog: StudentLog = new StudentLog(title, null, content);
    const studentLogRequest: StudentLogRequest = new StudentLogRequest(this.student.studyNumber, studentLog);
    this.studentService.pushLog(studentLogRequest)
      .subscribe(result => this.handlePushLog(result));
  }

  private handlePushLog(student: Student) {
    if (student != null) {
      // 发布成功
      this.showMessage = '【进度提交成功】';
      setTimeout(() => this.goBack(), 1000);
    } else if (student.error != null) {
      // 发布失败
      this.showMessage = '【进度提交失败】' + student.message;
    } else {
      console.log(student);
    }
  }

  goBack(): void {
    this.location.back();
  }
}


