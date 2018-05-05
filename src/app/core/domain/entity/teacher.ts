import {BaseEntity} from './base-entity';

export class Teacher extends BaseEntity {
  teacherNumber: string;
  name: string;
  password: string;
  college: string;
  allowMax: number;
}
