import { Component, Input } from '@angular/core';
import { CurrentLesson } from 'src/app/interfaces/currentLesson';

@Component({
  selector: 'app-current-lesson',
  templateUrl: './current-lesson.component.html',
  styleUrls: ['./current-lesson.component.scss']
})
export class CurrentLessonComponent {

  @Input() currentLesson: CurrentLesson

  handleLessonPlay()
  {
    console.log(this.currentLesson);
    console.log('Aca reproduciria el audio')
  }
}
