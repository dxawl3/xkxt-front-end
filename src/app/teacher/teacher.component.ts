import {Component, OnInit} from '@angular/core';
import {AppGlobalField} from '../core/config/app-global-field';
import {SubjectListResponse} from '../core/domain/response/subject-list-response';
import {Teacher} from '../core/domain/entity/teacher';
import {Router} from '@angular/router';
import {TeacherService} from '../core/service/teacher.service';
import {Subject} from '../core/domain/entity/subject';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  showMessage: string;
  dataReady: boolean;

  teacher: Teacher;
  subjectListResponse: SubjectListResponse;

  constructor(private teacherService: TeacherService,
              private route: Router) { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.dataReady = false;
    this.teacher = JSON.parse(localStorage.getItem(AppGlobalField.currentLoginUser));
    this.getSubject();
    setTimeout(() => this.dataReady = true, 500);
  }

  getSubject() {
    this.teacherService.getSubject(this.teacher.name)
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

  agreeSelect(subjectName: string, teacherIsAgree: string): void {
    this.teacherService.agreeSelect(subjectName, teacherIsAgree)
      .subscribe(result => this.handleAgreeSelect(result));
  }

  private handleAgreeSelect(subject: Subject) {
    if (subject.name != null) {
      // 审核操作成功
      this.getSubject();
    } else if (subject.error != null) {
      // 审核操作出现问题
      this.showMessage = subject.message;
    } else {
      console.log(subject);
    }
  }

  updateScore(name: string) {
    this.route.navigateByUrl('teacher/update-score/' + name);
  }

  deleteSubject(subjectName: string): void {
    this.teacherService.deleteSubject(subjectName)
      .subscribe(result => this.handleDeleteSubject());
  }

  private handleDeleteSubject() {
    this.getSubject();
  }

  goCreateSubject(): void {
    this.route.navigateByUrl('teacher/create-subject');
  }

  getlog(name: string) {
    this.route.navigateByUrl('student-log/' + name);
  }
}
