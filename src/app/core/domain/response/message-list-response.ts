import {BaseEntity} from '../entity/base-entity';
import {Message} from '../entity/message';

export class MessageListResponse extends BaseEntity {
  messages: Message[];
}
