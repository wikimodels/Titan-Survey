import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialImageMultiAnswerComponent } from './special-image-multi-answer.component';

describe('SpecialImageMultiAnswerComponent', () => {
  let component: SpecialImageMultiAnswerComponent;
  let fixture: ComponentFixture<SpecialImageMultiAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialImageMultiAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialImageMultiAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
