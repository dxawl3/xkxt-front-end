import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPushLogComponent } from './student-push-log.component';

describe('StudentPushLogComponent', () => {
  let component: StudentPushLogComponent;
  let fixture: ComponentFixture<StudentPushLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPushLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPushLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
