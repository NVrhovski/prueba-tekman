import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLessonComponent } from './current-lesson.component';

describe('CurrentLessonComponent', () => {
  let component: CurrentLessonComponent;
  let fixture: ComponentFixture<CurrentLessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentLessonComponent]
    });
    fixture = TestBed.createComponent(CurrentLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
