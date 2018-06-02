import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherUpdateScoreComponent } from './teacher-update-score.component';

describe('TeacherUpdateScoreComponent', () => {
  let component: TeacherUpdateScoreComponent;
  let fixture: ComponentFixture<TeacherUpdateScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherUpdateScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherUpdateScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
