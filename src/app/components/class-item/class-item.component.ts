import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Lesson } from 'src/app/interfaces/lesson';

@Component({
  selector: 'app-class-item',
  templateUrl: './class-item.component.html',
  styleUrls: ['./class-item.component.scss']
})
export class ClassItemComponent {

  @Input() lesson: Lesson;
  @Input() index: number;
  @Input() selected: number;
  @Output() selectLessonEvent = new EventEmitter<number>();
  @Output() playLessonEvent = new EventEmitter<boolean>();
  
  handleLessonSelection()
  {
    if(this.lesson.available)
    {
      this.selectLessonEvent.emit(this.lesson.id);
    }
  }

  handleLessonPlay()
  {
    this.playLessonEvent.emit(true);
  }
}
