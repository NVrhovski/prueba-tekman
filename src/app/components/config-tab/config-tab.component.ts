import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
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

  constructor( 
    private _courseChange: CourseChangeService)
    {
    this.selectedLanguage = "Españól";
  }

  ngOnInit(): void {
    this._courseChange.loadCourses.subscribe((res) => {
      this.courses = res
      if(!this.selectedCourse)
      {
        this.selectedCourse = res[0].id.toString();
        this.oldCourse = this.selectedCourse;
      }
    })
  }

  handleTabClose(): void
  {
    this.selectedCourse = this.oldCourse;
    this.closeTabEvent.emit(true);
  }

  handleCourseChange(courseId: string)
  {
    this.selectedCourse = courseId;
  }

  handleSubmit()
  {
    this._courseChange.changeCourse(this.selectedCourse);
    this.oldCourse = this.selectedCourse;
    this.closeTabEvent.emit(true);
  }
}
