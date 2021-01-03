import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuestionCounterComponent } from './question-counter.component';

describe('QuestionCounterComponent', () => {
  let component: QuestionCounterComponent;
  let fixture: ComponentFixture<QuestionCounterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
