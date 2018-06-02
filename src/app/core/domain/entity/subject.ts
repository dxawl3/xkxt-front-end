import {BaseEntity} from './base-entity';
import {Profession} from './profession';

export class Subject extends BaseEntity {
  name: string;
  whoCreate: string;
  selectBy: string;
  info: string;
  score: string;
  profession: string;
  adminIsPass: boolean;
  teacherIsAgree: boolean;
  adminNotPassInfo: string;


  constructor(name: string, whoCreate: string, selectBy: string, info: string, score: string, profession: string, adminIsPass: boolean, teacherIsAgree: boolean, adminNotPassInfo: string) {
    super();
    this.name = name;
    this.whoCreate = whoCreate;
    this.selectBy = selectBy;
    this.info = info;
    this.score = score;
    this.profession = profession;
    this.adminIsPass = adminIsPass;
    this.teacherIsAgree = teacherIsAgree;
    this.adminNotPassInfo = adminNotPassInfo;
  }
}
