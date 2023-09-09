import { Component, Input } from '@angular/core';
import { Quarter } from 'src/app/interfaces/quarter';

@Component({
  selector: 'app-ongoing-courses',
  templateUrl: './ongoing-courses.component.html',
  styleUrls: ['./ongoing-courses.component.scss']
})
export class OngoingCoursesComponent{

  @Input() quarters: Quarter[];

}
