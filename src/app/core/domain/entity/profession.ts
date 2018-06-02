import {BaseEntity} from './base-entity';

export class Profession extends BaseEntity {
  name: string;
  belongCollege: string;


  constructor(name: string, belongCollege: string) {
    super();
    this.name = name;
    this.belongCollege = belongCollege;
  }
}
