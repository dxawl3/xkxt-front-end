import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Teacher} from '../domain/entity/teacher';
import {AppBackEndUrl} from '../config/app-back-end-url';
import {Subject} from '../domain/entity/subject';
import {SubjectListResponse} from '../domain/response/subject-list-response';

@Injectable()
export class TeacherService {

  constructor(private http: HttpClient) {
  }

  login(teacherNumber: string, password: string): Observable<Teacher> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    const myParameters = new HttpParams()
      .append('teacherNumber', teacherNumber)
      .append('password', password);
    return this.http.post<Teacher>(AppBackEndUrl.teacherLogin, myParameters, myHeaders);
  }

  changePassword(teacherNumber: string, oldPassword: string, newPassword: string): Observable<Teacher> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    const myParameters = new HttpParams()
      .append('teacherNumber', teacherNumber)
      .append('oldPassword', oldPassword)
      .append('newPassword', newPassword);
    return this.http.post<Teacher>(AppBackEndUrl.studentChangePassword, myParameters, myHeaders);
  }

  createSubject(subject: Subject): Observable<Subject> {
    const myHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Subject>(AppBackEndUrl.teacherCreateSubject, subject, myHeaders);
  }

  deleteSubject(subjectName: string): void {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    const myParameters = new HttpParams()
      .append('subjectName', subjectName);
    this.http.post(AppBackEndUrl.teacherDeleteSubject, myParameters, myHeaders);
  }

  updateScore(subjectName: string, score: string): Observable<Subject> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    const myParameters = new HttpParams()
      .append('subjectName', subjectName)
      .append('score', score);
    return this.http.post<Subject>(AppBackEndUrl.teacherUpdateScore, myParameters, myHeaders);
  }

  getSubject(teacherNumber: string): Observable<SubjectListResponse> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    const myParameters = new HttpParams()
      .append('teacherNumber', teacherNumber);
    return this.http.post<SubjectListResponse>(AppBackEndUrl.teacherGetSubject, myParameters, myHeaders);
  }

  agreeSelect(subjectName: string, teacherIsAgree: string): Observable<Subject> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    const myParameters = new HttpParams()
      .append('subjectName', subjectName)
      .append('teacherIsAgree', teacherIsAgree);
    return this.http.post<Subject>(AppBackEndUrl.teacherAgreeSelect, myParameters, myHeaders);
  }
}
