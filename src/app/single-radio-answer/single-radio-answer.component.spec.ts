import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleAnswerCardComponent } from './single-radio-answer.component';

describe('SingleAnswerCardComponent', () => {
  let component: SingleAnswerCardComponent;
  let fixture: ComponentFixture<SingleAnswerCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SingleAnswerCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAnswerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
