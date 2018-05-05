import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {AdminService} from '../core/service/admin.service';
import {Student} from '../core/domain/entity/student';
import {CommonService} from '../core/service/common.service';
import {ProfessionListResponse} from '../core/domain/response/profession-list-response';
import {CollegeListResponse} from '../core/domain/response/college-list-response';
import {Teacher} from '../core/domain/entity/teacher';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  showMessage: string;
  dataReady: boolean;

  professionListResponse: ProfessionListResponse;
  collegeListResponse: CollegeListResponse;

  constructor(private adminService: AdminService,
              private commonService: CommonService,
              private location: Location) {
  }

  ngOnInit() {
    this.initData();
  }

  initData(): void {
    this.dataReady = false;
    this.getAllProfession();
    this.getAllCollege();
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

  getAllCollege(): void {
    this.commonService.getAllCollege()
      .subscribe(result => this.handleGetAllCollege(result));
  }

  private handleGetAllCollege(collegeListResponse: CollegeListResponse) {
    if (collegeListResponse.colleges != null) {
      this.collegeListResponse = collegeListResponse;
    } else if (collegeListResponse.error != null) {
      this.showMessage = collegeListResponse.message;
    } else {
      console.log(collegeListResponse);
    }
  }

  createStudent(studyNumber: string, name: string, profession: string, classes: string, password: string): void {
    const student: Student = new Student(studyNumber, name, profession, classes, password);
    this.adminService.createStudent(student)
      .subscribe(result => this.handleCreateStudent(result));
  }

  private handleCreateStudent(student: Student) {
    if (student.studyNumber != null) {
      // 添加学生成功
      this.showMessage = '【学生添加成功】';
      setTimeout(() => this.goBack(), 1000);
    } else if (student.error != null) {
      // 添加学生失败
      this.showMessage = '【学生添加失败】' + student.message;
    } else {
      console.log(student);
    }
  }

  createTeacher(teacherNumber: string, name: string, college: string, allowMax: number, password: string): void {
    const teacher: Teacher = new Teacher(teacherNumber, name, college, allowMax, password);
    this.adminService.createTeacher(teacher)
      .subscribe(result => this.handleCreateTeacher(result));
  }

  private handleCreateTeacher(teacher: Teacher) {
    if (teacher.teacherNumber != null) {
      // 添加教师成功
      this.showMessage = '【教师添加成功】';
      setTimeout(() => this.goBack(), 1000);
    } else if (teacher.error != null) {
      // 添加教师失败
      this.showMessage = '【教师添加失败】' + teacher.message;
    } else {
      console.log(teacher);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
