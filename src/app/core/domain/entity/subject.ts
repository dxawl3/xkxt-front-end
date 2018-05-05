import {BaseEntity} from './base-entity';
import {Profession} from './profession';

export class Subject extends BaseEntity {
  name: string;
  whoCreate: string;
  selectBy: string;
  info: string;
  score: string;
  professions: Profession;
  adminIsPass: boolean;
  teacherIsAgree: boolean;
  adminNotPassInfo: string;
}
