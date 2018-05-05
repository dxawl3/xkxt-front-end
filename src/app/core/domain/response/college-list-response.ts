import {BaseEntity} from '../entity/base-entity';
import {College} from '../entity/college';

export class CollegeListResponse extends BaseEntity {
  colleges: College[];
}
