import {BaseEntity} from '../entity/base-entity';
import {Student} from '../entity/student';

export class StudentListResponse extends BaseEntity {
  students: Student[];
}
