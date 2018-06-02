import {Component, OnInit} from '@angular/core';

import {Student} from '../core/domain/entity/student';
import {AppGlobalField} from '../core/config/app-global-field';
import {StudentService} from '../core/service/student.service';
import {Router} from '@angular/router';
import {SubjectListResponse} from '../core/domain/response/subject-list-response';
import {Subject} from '../core/domain/entity/subject';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  showMessage: string;
  dataReady: boolean;

  student: Student;
  subjectListResponse: SubjectListResponse;

  constructor(private studentService: StudentService,
              private route: Router) {
  }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.dataReady = false;
    this.student = JSON.parse(localStorage.getItem(AppGlobalField.currentLoginUser));
    this.getSubject();
    setTimeout(() => this.dataReady = true, 500);
  }

  getSubject() {
    this.studentService.getSubject()
      .subscribe(result => this.handleGetSubject(result));
  }

  private handleGetSubject(subjectListResponse: SubjectListResponse) {
    if (subjectListResponse.subjects != null) {
      this.subjectListResponse = subjectListResponse;
    } else if (subjectListResponse.error != null) {
      this.showMessage = subjectListResponse.message;
    } else {
      console.log(subjectListResponse);
    }
  }

  selectSubject(studyNumber: string, subjectName: string) {
    this.studentService.selectSubject(studyNumber, subjectName)
      .subscribe(result => this.handleSelectSubject(result));
  }

  private handleSelectSubject(subject: Subject) {
    if (subject.name != null) {
      // 审核操作成功
      this.getSubject();
      this.student.selectedSubject = subject.name;
    } else if (subject.error != null) {
      // 审核操作出现问题
      this.showMessage = subject.message;
    } else {
      console.log(subject);
    }
  }

  changeSelectedSubject(studyNumber: string, oldSubjectName: string, newSubjectName: string) {
    this.studentService.changeSelectedSubject(studyNumber, oldSubjectName, newSubjectName)
      .subscribe(result => this.handleChangeSelectedSubject(result));
  }

  private handleChangeSelectedSubject(subject: Subject) {
    console.log(subject.name);
    if (subject.name != null) {
      // 审核操作成功
      this.getSubject();
      this.student.selectedSubject = subject.name;
    } else if (subject.error != null) {
      // 审核操作出现问题
      this.showMessage = subject.message;
    } else {
      console.log(subject);
    }
  }

  pushlog() {
    this.route.navigateByUrl('student/push-log');
  }

  getlog(name: string) {
    this.route.navigateByUrl('student-log/' + name);
  }
}
