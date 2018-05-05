import {BaseEntity} from '../entity/base-entity';
import {Teacher} from '../entity/teacher';

export class TeacherListResponse extends BaseEntity {
  teachers: Teacher[];
}
