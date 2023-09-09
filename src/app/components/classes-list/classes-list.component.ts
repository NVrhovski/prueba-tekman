import { Component, Input } from '@angular/core';
import { Quarter } from 'src/app/interfaces/quarter';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent {

  @Input() quarter: Quarter
  selectedLesson: number;
  showPopup: boolean

  constructor()
  {
    this.selectedLesson = 0;
    this.showPopup = false;
  }

  handleLessonSelection(id: number)
  {
    this.selectedLesson = id;
  }

  handleLessonPlay()
  {
    this.showPopup = true;
  }

  handleClosePopup()
  {
    this.showPopup = false;
  }
}
