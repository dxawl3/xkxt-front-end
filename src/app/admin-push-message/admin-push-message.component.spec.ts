import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPushMessageComponent } from './admin-push-message.component';

describe('AdminPushMessageComponent', () => {
  let component: AdminPushMessageComponent;
  let fixture: ComponentFixture<AdminPushMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPushMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPushMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
