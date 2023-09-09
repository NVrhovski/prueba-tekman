import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  isOpen: boolean;

  constructor()
  {
    this.isOpen = false;
  }

  handleTab(option: boolean): void
  {
    this.isOpen = option
  }

}
