import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-counter',
  templateUrl: './question-counter.component.html',
  styleUrls: ['./question-counter.component.css'],
})
export class QuestionCounterComponent implements OnInit {
  @Input() currentQuestion: number;
  @Input() questionsTotalNumber: number;
  constructor() {}

  ngOnInit(): void {}
}
