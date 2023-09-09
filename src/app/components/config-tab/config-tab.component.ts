import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/interfaces/course';
import { ClassesService } from 'src/app/services/classes/classes.service';
import { CourseChangeService } from 'src/app/services/course-change/course-change.service';

@Component({
  selector: 'app-config-tab',
  templateUrl: './config-tab.component.html',
  styleUrls: ['./config-tab.component.scss']
})
export class ConfigTabComponent implements OnInit{
  
  @Input() isOpen: boolean;
  @Output() closeTabEvent = new EventEmitter<boolean>();
  selectedLanguage: string;
  selectedCourse: string;
  oldCourse: string;
  courses: Course[];

  constructor(private classesService: ClassesService, private _router: Router ,private _courseChange: CourseChangeService){
    this.selectedLanguage = "Españól";
  }

  ngOnInit(): void {
    this.getCourses();
  }

  handleTabClose(): void
  {
    this.selectedCourse = this.oldCourse;
    this.closeTabEvent.emit(true);
  }

  getCourses(): void{
    this.classesService.getAll().subscribe((res) => {
      this.courses = res.payload
      this.selectedCourse = this.courses[0].id.toString();
      this.oldCourse = this.selectedCourse;
      this._courseChange.changeCourse(this.courses[0]);
      this._router.events.subscribe((res) => {
        this.handleSubmit()
      })
    })
  }

  handleCourseChange(courseId: string)
  {
    this.selectedCourse = courseId;
  }

  handleSubmit()
  {
    const index = this.courses.findIndex((course) => course.id.toString() == this.selectedCourse);
    this._courseChange.changeCourse(this.courses[index]);
    this.oldCourse = this.selectedCourse;
    this.closeTabEvent.emit(true);
  }
}
