import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayPopupComponent } from './play-popup.component';

describe('PlayPopupComponent', () => {
  let component: PlayPopupComponent;
  let fixture: ComponentFixture<PlayPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayPopupComponent]
    });
    fixture = TestBed.createComponent(PlayPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
