import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileIconComponent } from './user-profile-icon.component';

describe('UserProfileIconComponent', () => {
  let component: UserProfileIconComponent;
  let fixture: ComponentFixture<UserProfileIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileIconComponent]
    });
    fixture = TestBed.createComponent(UserProfileIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
