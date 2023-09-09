import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-popup',
  templateUrl: './play-popup.component.html',
  styleUrls: ['./play-popup.component.scss']
})
export class PlayPopupComponent implements OnInit{

  @Output() closePopupEvent = new EventEmitter<boolean>();
  triggerAnimation: boolean;

  handleClosePopup(){
    this.triggerAnimation = false
    setTimeout(() => {
      this.closePopupEvent.emit(true);
      console.log('Aca reproduciria el audio');
    }, 400)
  }

  ngOnInit(): void {
    this.triggerAnimation = false
    setTimeout(() => {
      this.triggerAnimation = true
    },0)
  }
}
