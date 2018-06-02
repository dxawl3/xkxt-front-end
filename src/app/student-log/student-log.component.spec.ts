import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLogComponent } from './student-log.component';

describe('StudentLogComponent', () => {
  let component: StudentLogComponent;
  let fixture: ComponentFixture<StudentLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
