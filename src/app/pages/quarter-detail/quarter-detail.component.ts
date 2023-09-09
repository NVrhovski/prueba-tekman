import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/interfaces/course';
import { Quarter } from 'src/app/interfaces/quarter';
import { CourseChangeService } from 'src/app/services/course-change/course-change.service';

@Component({
  selector: 'app-quarter-detail',
  templateUrl: './quarter-detail.component.html',
  styleUrls: ['./quarter-detail.component.scss']
})
export class QuarterDetailComponent implements OnInit {

  currentCourse: Course;
  currentQuarter: Quarter;
  quarterId: string;
  loading: boolean;

  constructor(
    private _titleService: Title, 
    private _route: ActivatedRoute, 
    private _courseChange: CourseChangeService)
  {
    this.quarterId = this._route.snapshot.paramMap.get('id');
    this.loading = true
  }

  ngOnInit(): void {
    this._courseChange.courseChange.subscribe((res) => {
      this.currentCourse = res;
      const index = this.currentCourse.quarters.findIndex((quarter) => quarter.id.toString() == this.quarterId);
      this.currentQuarter = this.currentCourse.quarters[index];
      this._titleService.setTitle(`Prueba Tekman | ${this.currentQuarter.name}`);
      this.loading = false;
    })
  }

}
