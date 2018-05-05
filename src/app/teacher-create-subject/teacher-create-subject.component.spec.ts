import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCreateSubjectComponent } from './teacher-create-subject.component';

describe('TeacherCreateSubjectComponent', () => {
  let component: TeacherCreateSubjectComponent;
  let fixture: ComponentFixture<TeacherCreateSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCreateSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCreateSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
