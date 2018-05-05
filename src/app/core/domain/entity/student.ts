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
}
