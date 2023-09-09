import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBadgeComponent } from './course-badge.component';

describe('CourseBadgeComponent', () => {
  let component: CourseBadgeComponent;
  let fixture: ComponentFixture<CourseBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseBadgeComponent]
    });
    fixture = TestBed.createComponent(CourseBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
