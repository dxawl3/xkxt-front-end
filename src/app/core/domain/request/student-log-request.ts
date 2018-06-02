import {StudentLog} from '../model/student-log';

export class StudentLogRequest {
  studyNumber: string;
  studentLog: StudentLog;


  constructor(studyNumber: string, studentLog: StudentLog) {
    this.studyNumber = studyNumber;
    this.studentLog = studentLog;
  }
}
