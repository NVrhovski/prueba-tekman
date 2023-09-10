import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/interfaces/course';
import { ClassesService } from 'src/app/services/classes/classes.service';
import { CourseChangeService } from 'src/app/services/course-change/course-change.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{

  courses: Course[];
  currentCourse: Course;
  loading: boolean;

  constructor(
    _titleService: Title, 
    private _classesService: ClassesService,
    private _courseChangeService: CourseChangeService,
    private _route: ActivatedRoute)
    {
    _titleService.setTitle('Prueba Tekman | Dashboard');
  }

  ngOnInit(): void {
    this.getCourses();
    this._courseChangeService.courseChange.subscribe((res) => {
      const index = this.courses.findIndex((course) => course.id.toString() == res)
      this.currentCourse = this.courses[index]
    })
  }

  getCourses(): void{
    this.loading = true;
    this._classesService.getAll().subscribe((res) => {
      this.courses = res.payload
      this._route.queryParams.subscribe((params) => {
        if(params['course'])
        {
          const index = this.courses.findIndex((course) => course.id.toString() == params['course'])
          if(index == -1)
          {
            this.currentCourse = this.courses[0];
          }else
          {
            this.currentCourse = this.courses[index];
          }
        }else
        {
          this.currentCourse = this.courses[0];
        }
      })
      this.loading = false;
      this._courseChangeService.emitCourses(res.payload)
    })
  }
}
