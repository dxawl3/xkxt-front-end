import { Component, OnInit } from '@angular/core';
import {CommonService} from '../core/service/common.service';
import {ProfessionListResponse} from '../core/domain/response/profession-list-response';
import {Location} from '@angular/common';
import {TeacherService} from '../core/service/teacher.service';
import {AppGlobalField} from '../core/config/app-global-field';
import {Teacher} from '../core/domain/entity/teacher';
import {Subject} from '../core/domain/entity/subject';
import {Profession} from '../core/domain/entity/profession';

@Component({
  selector: 'app-teacher-create-subject',
  templateUrl: './teacher-create-subject.component.html',
  styleUrls: ['./teacher-create-subject.component.css']
})
export class TeacherCreateSubjectComponent implements OnInit {

  showMessage: string;
  dataReady: boolean;
  teacher: Teacher;

  professionListResponse: ProfessionListResponse;

  constructor(private teacherService: TeacherService,
              private commonService: CommonService,
              private location: Location) {
  }

  ngOnInit() {
    this.initData();
  }

  initData(): void {
    this.dataReady = false;
    this.getAllProfession();
    this.teacher = JSON.parse(localStorage.getItem(AppGlobalField.currentLoginUser));
    setTimeout(() => this.dataReady = true, 500);
  }

  getAllProfession(): void {
    this.commonService.getAllProfession()
      .subscribe(result => this.handleGetAllProfession(result));
  }

  private handleGetAllProfession(professionListResponse: ProfessionListResponse) {
    if (professionListResponse.professions != null) {
      this.professionListResponse = professionListResponse;
    } else if (professionListResponse.error != null) {
      this.showMessage = professionListResponse.message;
    } else {
      console.log(professionListResponse);
    }
  }

  createSubject(name: string, info: string, profession: string): void {
    const subject: Subject = new Subject(name, this.teacher.name, null, info, null, profession, null, null, null);
    // console.log(subject.name);
    // console.log(subject.info);
    // console.log(subject.professions);
    this.teacherService.createSubject(subject)
      .subscribe(result => this.handleCreateStudent(result));
  }

  private handleCreateStudent(subject: Subject) {
    if (subject.name != null) {
      // 添加课题成功
      this.showMessage = '【课题添加成功】';
      setTimeout(() => this.goBack(), 1000);
    } else if (subject.error != null) {
      // 添加学生失败
      this.showMessage = '【课题添加失败】' + subject.message;
    } else {
      console.log(subject);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
