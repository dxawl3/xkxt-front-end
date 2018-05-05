import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateStudentComponent } from './admin-create-student.component';

describe('AdminCreateStudentComponent', () => {
  let component: AdminCreateStudentComponent;
  let fixture: ComponentFixture<AdminCreateStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
