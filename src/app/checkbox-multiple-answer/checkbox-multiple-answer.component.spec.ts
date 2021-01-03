import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultipleAnswerCardComponent } from './checkbox-multiple-answer.component';

describe('MultipleAnswerCardComponent', () => {
  let component: MultipleAnswerCardComponent;
  let fixture: ComponentFixture<MultipleAnswerCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleAnswerCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleAnswerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
