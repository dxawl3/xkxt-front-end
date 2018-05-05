import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AppBackEndUrl} from '../config/app-back-end-url';
import {Student} from '../domain/entity/student';
import {Observable} from 'rxjs/Observable';
import {Teacher} from '../domain/entity/teacher';
import {Message} from '../domain/entity/message';
import {StudentListResponse} from '../domain/response/student-list-response';
import {TeacherListResponse} from '../domain/response/teacher-list-response';
import {SubjectListResponse} from '../domain/response/subject-list-response';
import {Subject} from '../domain/entity/subject';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) {
  }

  login(adminUsername: string, password: string): void {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    const myParameters = new HttpParams()
      .append('adminUsername', adminUsername)
      .append('password', password);
    this.http.post(AppBackEndUrl.adminLogin, myParameters, myHeaders);
  }

  createStudent(student: Student): Observable<Student> {
    const myHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Student>(AppBackEndUrl.adminCreatStudent, student, myHeaders);
  }

  deleteStudent(studyNumber: string): void {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    const myParameters = new HttpParams()
      .append('studyNumber', studyNumber);
    this.http.post(AppBackEndUrl.adminDeleteStudent, myParameters, myHeaders);
  }

  createTeacher(teacher: Teacher): Observable<Teacher> {
    const myHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Teacher>(AppBackEndUrl.adminCreateTeacher, teacher, myHeaders);
  }

  deleteTeacher(teacherNumber: string): void {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    const myParameters = new HttpParams()
      .append('teacherNumber', teacherNumber);
    this.http.post(AppBackEndUrl.adminDeleteTeacher, myParameters, myHeaders);
  }

  pushMessage(message: Message): Observable<Message> {
    const myHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Message>(AppBackEndUrl.adminPushMessage, message, myHeaders);
  }

  getAllStudent(): Observable<StudentListResponse> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    return this.http.get<StudentListResponse>(AppBackEndUrl.adminGetAllStudent, myHeaders);
  }

  getAllTeacher(): Observable<TeacherListResponse> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    return this.http.get<TeacherListResponse>(AppBackEndUrl.adminGetAllTeacher, myHeaders);
  }

  getAllSubject(): Observable<SubjectListResponse> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    return this.http.get<SubjectListResponse>(AppBackEndUrl.adminGetAllSubject, myHeaders);
  }

  passSubject(subjectName: string, adminIsPass: string): Observable<Subject> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    const myParameters = new HttpParams()
      .append('subjectName', subjectName)
      .append('adminIsPass', adminIsPass);
    return this.http.post<Subject>(AppBackEndUrl.adminPassSubject, myParameters, myHeaders);
  }
}
