import {BaseEntity} from './base-entity';

export class Student extends BaseEntity {
  studyNumber: string;
  name: string;
  password: string;
  profession: string;
  classes: string;
  selectedSubject: string;
  teacherIsAgree: boolean;
  score: string;

  constructor(studyNumber: string, name: string, profession: string, classes: string, password: string) {
    super();
    this.studyNumber = studyNumber;
    this.name = name;
    this.password = password;
    this.profession = profession;
    this.classes = classes;
  }
}
