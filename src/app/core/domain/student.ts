import {BaseEntity} from './base-entity';

export class Student extends BaseEntity {
  studyNumber: string;
  name: string;
  classes: string;
  selectedSubject: string;
  password: string;
  grade: string;
}
