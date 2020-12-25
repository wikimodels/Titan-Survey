import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAnswerCardComponent } from './image-answer-card.component';

describe('ImageAnswerCardComponent', () => {
  let component: ImageAnswerCardComponent;
  let fixture: ComponentFixture<ImageAnswerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageAnswerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAnswerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
