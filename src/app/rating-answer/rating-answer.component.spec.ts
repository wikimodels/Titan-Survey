import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingAnswerCardComponent } from './rating-answer.component';

describe('RatingAnswerCardComponent', () => {
  let component: RatingAnswerCardComponent;
  let fixture: ComponentFixture<RatingAnswerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RatingAnswerCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingAnswerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
