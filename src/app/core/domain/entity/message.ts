import {BaseEntity} from './base-entity';

export class Message extends BaseEntity {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    super();
    this.title = title;
    this.content = content;
  }
}
