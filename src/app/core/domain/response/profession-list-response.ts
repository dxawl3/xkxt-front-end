import {BaseEntity} from '../entity/base-entity';
import {Profession} from '../entity/profession';

export class ProfessionListResponse extends BaseEntity {
  professions: Profession[];
}
