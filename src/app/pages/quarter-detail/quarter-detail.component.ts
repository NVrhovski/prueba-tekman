import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/interfaces/course';
import { Quarter } from 'src/app/interfaces/quarter';
import { ClassesService } from 'src/app/services/classes/classes.service';
import { CourseChangeService } from 'src/app/services/course-change/course-change.service';

@Component({
  selector: 'app-quarter-detail',
  templateUrl: './quarter-detail.component.html',
  styleUrls: ['./quarter-detail.component.scss']
})
export class QuarterDetailComponent implements OnInit, OnDestroy {

  currentCourse: Course;
  currentQuarter: Quarter;
  quarterId: string;
  loading: boolean;
  courses: Course[];
  courseSubscription: Subscription;
  courseChangeSubscription: Subscription;

  constructor(
    private _titleService: Title, 
    private _route: ActivatedRoute,
    private _router: Router,
    private _classesService: ClassesService,
    private _courseChangeService: CourseChangeService)
  {
    this.quarterId = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getCourses();
    this.courseChangeSubscription = this._courseChangeService.courseChange.subscribe((res) => {
      this._router.navigate([''], {queryParams: {course: res}})
    })
  }

  getCourses(): void{
    this.loading = true;
    this.courseSubscription = this._classesService.getAll().subscribe((res) => {
      this.courses = res.payload;
      this.courses.forEach((course) => {
        course.quarters.forEach((quarter) => {
          if(quarter.id.toString() == this.quarterId)
          {
            this.currentQuarter = quarter
          }
        })
        if(this.currentQuarter && !this.currentCourse)
        {
          this.currentCourse = course
        }
      })
      this._titleService.setTitle(`Prueba Tekman | ${this.currentQuarter?.name}`);
      this._courseChangeService.emitCourses(res.payload)
      this.loading = false
    })
  }

  ngOnDestroy(): void {
    this.courseSubscription.unsubscribe();
    this.courseChangeSubscription.unsubscribe();
  }
}
