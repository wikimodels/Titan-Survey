import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleButtonAnswerComponent } from './button-single-answer.component';

describe('SingleButtonAnswerComponent', () => {
  let component: SingleButtonAnswerComponent;
  let fixture: ComponentFixture<SingleButtonAnswerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SingleButtonAnswerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleButtonAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
