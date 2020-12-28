import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCounterComponent } from './question-counter.component';

describe('QuestionCounterComponent', () => {
  let component: QuestionCounterComponent;
  let fixture: ComponentFixture<QuestionCounterComponent>;

  beforeEach(async(() => {
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
