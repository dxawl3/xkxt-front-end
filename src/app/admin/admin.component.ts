import {Component, OnInit} from '@angular/core';
import {AdminService} from '../core/service/admin.service';
import {StudentListResponse} from '../core/domain/response/student-list-response';
import {TeacherListResponse} from '../core/domain/response/teacher-list-response';
import {SubjectListResponse} from '../core/domain/response/subject-list-response';
import {Subject} from '../core/domain/entity/subject';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  showMessage: string;
  dataReady: boolean;

  studentListResponse: StudentListResponse;
  teacherListResponse: TeacherListResponse;
  subjectListResponse: SubjectListResponse;

  constructor(private adminService: AdminService,
              private route: Router) {
  }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.dataReady = false;
    this.getAllStudent();
    this.getAllTeacher();
    this.getAllSubject();
    setTimeout(() => this.dataReady = true, 500);
  }

  getAllStudent(): void {
    this.adminService.getAllStudent()
      .subscribe(result => this.handleGetAllStudent(result));
  }

  private handleGetAllStudent(studentListResponse: StudentListResponse) {
    if (studentListResponse.students != null) {
      this.studentListResponse = studentListResponse;
    } else if (studentListResponse.error != null) {
      this.showMessage = studentListResponse.message;
    } else {
      console.log(studentListResponse);
    }

  }

  getAllTeacher(): void {
    this.adminService.getAllTeacher()
      .subscribe(result => this.handleGetallTeacher(result));
  }

  private handleGetallTeacher(teacherListResponse: TeacherListResponse) {
    if (teacherListResponse.teachers != null) {
      this.teacherListResponse = teacherListResponse;
    } else if (teacherListResponse.error != null) {
      this.showMessage = teacherListResponse.message;
    } else {
      console.log(teacherListResponse);
    }
  }

  getAllSubject(): void {
    this.adminService.getAllSubject()
      .subscribe(result => this.handleGetAllSubject(result));
  }

  private handleGetAllSubject(subjectListResponse: SubjectListResponse) {
    if (subjectListResponse.subjects != null) {
      this.subjectListResponse = subjectListResponse;
    } else if (subjectListResponse.error != null) {
      this.showMessage = subjectListResponse.message;
    } else {
      console.log(subjectListResponse);
    }
  }

  goToAdd(): void {
    this.route.navigateByUrl('/admin/add');
  }

  goToPushMessage(): void {
    this.route.navigateByUrl('/admin/push-message');
  }

  deleteStudent(studyNumber: string): void {
    this.adminService.deleteStudent(studyNumber)
      .subscribe(result => this.handleDeleteStudent());
  }

  private handleDeleteStudent() {
    this.getAllStudent();
  }

  deleteTeacher(teacherNumber: string): void {
    this.adminService.deleteTeacher(teacherNumber)
      .subscribe(result => this.handleDeleteTeacher());
  }

  private handleDeleteTeacher() {
    this.getAllTeacher();
  }

  passSubject(subjectName: string, adminIsPass: string): void {
    this.adminService.passSubject(subjectName, adminIsPass)
      .subscribe(result => this.handlePassSubject(result));
  }

  private handlePassSubject(subject: Subject) {
    if (subject.name != null) {
      // 审核操作成功
      this.getAllSubject();
    } else if (subject.error != null) {
      // 审核操作出现问题
      this.showMessage = subject.message;
    } else {
      console.log(subject);
    }
  }
}
