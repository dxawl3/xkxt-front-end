import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Student} from '../domain/student';
import {AppBackEndUrl} from '../app-back-end-url';

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
}
