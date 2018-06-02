import { Component, OnInit } from '@angular/core';
import {Subject} from '../core/domain/entity/subject';
import {TeacherService} from '../core/service/teacher.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-teacher-update-score',
  templateUrl: './teacher-update-score.component.html',
  styleUrls: ['./teacher-update-score.component.css']
})
export class TeacherUpdateScoreComponent implements OnInit {

  showMessage: string;
  id: string;

  constructor(private teacherService: TeacherService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
  }

  getName(): string {
    this.id = this.route.snapshot.paramMap.get('id');
    return this.id;
  }
  updateScore(subjectName: string, score: string): void {
    this.teacherService.updateScore(subjectName, score)
      .subscribe(result => this.handleUpdateScore(result));
  }

  private handleUpdateScore(subject: Subject) {
    if (subject.name != null) {
      // 审核操作成功
      this.goBack();
    } else if (subject.error != null) {
      // 审核操作出现问题
      this.showMessage = subject.message;
    } else {
      console.log(subject);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
