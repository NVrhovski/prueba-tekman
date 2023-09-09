import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Course } from 'src/app/interfaces/course';
import { CurrentLesson } from 'src/app/interfaces/currentLesson';

@Injectable({
  providedIn: 'root'
})
export class CourseChangeService {

  courseChange: Subject<Course> = new Subject<Course>();
  currentLesson: Subject<CurrentLesson> = new Subject<CurrentLesson>();

  constructor() { }

  changeCourse(course: Course): void
  {
    this.courseChange.next(course);
  }

  changeCurrentLesson(lesson: CurrentLesson)
  {
    this.currentLesson.next(lesson);
    console.log(this.currentLesson)
  }
}
