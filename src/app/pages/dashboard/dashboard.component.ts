import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Course } from 'src/app/interfaces/course';
import { CourseChangeService } from 'src/app/services/course-change/course-change.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{

  currentCourse: Course;
  loading: boolean

  constructor(_titleService: Title, private _courseChange: CourseChangeService){
    _titleService.setTitle('Prueba Tekman | Dashboard')
  }

  ngOnInit(): void {
    this.loading = true;
    this._courseChange.courseChange.subscribe((res) => {
      this.currentCourse = res;
      this.loading = false;
    })
  }
}
