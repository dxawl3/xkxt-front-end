import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../core/service/student.service';
import {StudentLog} from '../core/domain/model/student-log';
import {Location} from '@angular/common';

@Component({
  selector: 'app-student-log',
  templateUrl: './student-log.component.html',
  styleUrls: ['./student-log.component.css']
})
export class StudentLogComponent implements OnInit {
  id: string;

  dataReady: boolean;
  studentLogs: StudentLog[];

  constructor(private studentService: StudentService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.dataReady = false;
    this.getLogs();
    setTimeout(() => this.dataReady = true, 500);
  }

  getName(): string {
    this.id = this.route.snapshot.paramMap.get('id');
    return this.id;
  }

  getLogs() {
    this.studentService.getLogs(this.getName())
      .subscribe(result => this.handleGetLogs(result));
  }

  private handleGetLogs(studentLogs: StudentLog[]) {
    console.log(studentLogs[0].title);
    if (studentLogs != null) {
      if (studentLogs[0].title != null) {
        this.studentLogs = studentLogs;
    }
    } else {
      console.log(studentLogs);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
