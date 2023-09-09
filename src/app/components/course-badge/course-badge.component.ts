import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Quarter } from 'src/app/interfaces/quarter';

@Component({
  selector: 'app-course-badge',
  templateUrl: './course-badge.component.html',
  styleUrls: ['./course-badge.component.scss']
})
export class CourseBadgeComponent implements OnChanges{

  @Input() quarter: Quarter;
  @Input() isDetail: boolean | undefined;
  completedPercentage: number;
  
  ngOnChanges(changes: SimpleChanges): void {
    this.completedPercentage = (changes['quarter'].currentValue?.viewedLessons * 100) / changes['quarter'].currentValue?.totalLessons
  }
}
