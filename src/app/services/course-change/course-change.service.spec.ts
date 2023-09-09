import { TestBed } from '@angular/core/testing';

import { CourseChangeService } from './course-change.service';

describe('CourseChangeService', () => {
  let service: CourseChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
