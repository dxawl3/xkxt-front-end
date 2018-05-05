import {BaseEntity} from './base-entity';

export class Teacher extends BaseEntity {
  teacherNumber: string;
  name: string;
  password: string;
  college: string;
  allowMax: number;

  constructor(teacherNumber: string, name: string, college: string, allowMax: number, password: string) {
    super();
    this.teacherNumber = teacherNumber;
    this.name = name;
    this.password = password;
    this.college = college;
    this.allowMax = allowMax;
  }
}
