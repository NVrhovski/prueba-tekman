import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Course } from 'src/app/interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CourseChangeService {

  courseChange: Subject<string> = new Subject<string>();
  loadCourses: Subject<Course[]> = new Subject<Course[]>();

  constructor() { }

  changeCourse(courseId: string): void
  {
    this.courseChange.next(courseId);
  }

  emitCourses(courses: Course[])
  {
    this.loadCourses.next(courses);
  }

}
