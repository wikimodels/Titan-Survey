import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnswerCardComponent } from './text-answer.component';

describe('TextAnswerCardComponent', () => {
  let component: TextAnswerCardComponent;
  let fixture: ComponentFixture<TextAnswerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextAnswerCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAnswerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
