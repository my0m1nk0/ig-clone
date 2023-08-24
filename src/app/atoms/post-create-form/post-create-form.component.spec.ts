import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreateFormComponent } from './post-create-form.component';

describe('PostCreateFormComponent', () => {
  let component: PostCreateFormComponent;
  let fixture: ComponentFixture<PostCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCreateFormComponent]
    });
    fixture = TestBed.createComponent(PostCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
