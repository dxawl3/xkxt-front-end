import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ProfessionListResponse} from '../domain/response/profession-list-response';
import {AppBackEndUrl} from '../config/app-back-end-url';
import {CollegeListResponse} from '../domain/response/college-list-response';
import {MessageListResponse} from '../domain/response/message-list-response';

@Injectable()
export class CommonService {

  constructor(private http: HttpClient) {
  }

  getAllProfession(): Observable<ProfessionListResponse> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    return this.http.get<ProfessionListResponse>(AppBackEndUrl.commonGetAllProfession, myHeaders);
  }

  getAllCollege(): Observable<CollegeListResponse> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    return this.http.get<CollegeListResponse>(AppBackEndUrl.commonGetAllCollege, myHeaders);
  }

  getAllMessage(): Observable<MessageListResponse> {
    const myHeaders = {
      headers: new HttpHeaders({})
    };
    return this.http.get<MessageListResponse>(AppBackEndUrl.commonGetAllMessage, myHeaders);
  }
}
