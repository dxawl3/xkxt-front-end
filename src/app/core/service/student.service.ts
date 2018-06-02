import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Student} from '../domain/entity/student';
import {AppBackEndUrl} from '../config/app-back-end-url';
import {Subject} from '../domain/entity/subject';
import {SubjectListResponse} from '../domain/response/subject-list-response';
import {StudentLogRequest} from '../domain/request/student-log-request';
import {StudentLog} from '../domain/model/student-log';

@Injectable()
export class StudentService {

  constructor(private http: HttpClient) {
  }

  login(studyNumber: string, password: string): Observable<Student> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    const myParameters = new HttpParams()
      .append('studyNumber', studyNumber)
      .append('password', password);
    return this.http.post<Student>(AppBackEndUrl.studentLogin, myParameters, myHeaders);
  }

  changePassword(studyNumber: string, oldPassword: string, newPassword: string): Observable<Student> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    const myParameters = new HttpParams()
      .append('studyNumber', studyNumber)
      .append('oldPassword', oldPassword)
      .append('newPassword', newPassword);
    return this.http.post<Student>(AppBackEndUrl.studentChangePassword, myParameters, myHeaders);
  }

  selectSubject(studyNumber: string, subjectName: string): Observable<Subject> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    const myParameters = new HttpParams()
      .append('studyNumber', studyNumber)
      .append('subjectName', subjectName);
    return this.http.post<Subject>(AppBackEndUrl.studentSelectSubject, myParameters, myHeaders);
  }

  changeSelectedSubject(studyNumber: string, oldSubjectName: string, newSubjectName: string): Observable<Subject> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    const myParameters = new HttpParams()
      .append('studyNumber', studyNumber)
      .append('oldSubjectName', oldSubjectName)
      .append('newSubjectName', newSubjectName);
    return this.http.post<Subject>(AppBackEndUrl.studentChangeSelectedSubject, myParameters, myHeaders);
  }

  getSubject(): Observable<SubjectListResponse> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    return this.http.get<SubjectListResponse>(AppBackEndUrl.studentGetSubject, myHeaders);
  }

  pushLog(studentLogRequest: StudentLogRequest): Observable<Student> {
    const myHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Student>(AppBackEndUrl.studentPushLog, studentLogRequest, myHeaders);
  }

  getLogs(name: string): Observable<StudentLog[]> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    return this.http.get<StudentLog[]>(AppBackEndUrl.studentGetLogs + '?name=' + name, myHeaders);
  }

}
