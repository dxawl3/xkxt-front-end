import {BaseEntity} from '../entity/base-entity';
import {Subject} from '../entity/subject';

export class SubjectListResponse extends BaseEntity {
  subjects: Subject[];
}
