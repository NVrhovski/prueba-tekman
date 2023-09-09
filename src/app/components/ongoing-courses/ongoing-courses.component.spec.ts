import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingCoursesComponent } from './ongoing-courses.component';

describe('OngoingCoursesComponent', () => {
  let component: OngoingCoursesComponent;
  let fixture: ComponentFixture<OngoingCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OngoingCoursesComponent]
    });
    fixture = TestBed.createComponent(OngoingCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
