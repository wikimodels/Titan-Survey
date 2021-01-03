import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImageMultiAnswerComponent } from './image-multi-answer.component';

describe('ImageMultiAnswerComponent', () => {
  let component: ImageMultiAnswerComponent;
  let fixture: ComponentFixture<ImageMultiAnswerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageMultiAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageMultiAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
