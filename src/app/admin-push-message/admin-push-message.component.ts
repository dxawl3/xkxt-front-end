import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Message} from '../core/domain/entity/message';
import {AdminService} from '../core/service/admin.service';

@Component({
  selector: 'app-admin-push-message',
  templateUrl: './admin-push-message.component.html',
  styleUrls: ['./admin-push-message.component.css']
})
export class AdminPushMessageComponent implements OnInit {

  showMessage: string;

  constructor(private adminService: AdminService,
              private location: Location) {
  }

  ngOnInit() {
  }

  pushMessage(title: string, content: string): void {
    const message: Message = new Message(title, content);
    this.adminService.pushMessage(message)
      .subscribe(result => this.handlePushMessage(result));
  }

  private handlePushMessage(message: Message) {
    if (message.title != null) {
      // 发布成功
      this.showMessage = '【公告发布成功】';
      setTimeout(() => this.goBack(), 1000);
    } else if (message.error != null) {
      // 发布失败
      this.showMessage = '【公告发布失败】' + message.message;
    } else {
      console.log(message);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
