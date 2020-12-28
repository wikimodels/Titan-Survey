import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleButtonAnswerComponent } from './button-single-answer.component';

describe('SingleButtonAnswerComponent', () => {
  let component: SingleButtonAnswerComponent;
  let fixture: ComponentFixture<SingleButtonAnswerComponent>;

  beforeEach(async(() => {
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
