import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsLoadingService } from '@service-work/is-loading';
import { QuestionnaireService } from '../services/questionnaire.service';
@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css'],
})
export class GreetingsComponent implements OnInit {
  constructor(
    private router: Router,
    private questionnaireService: QuestionnaireService
  ) {}

  show = false;
  ngOnInit(): void {}
  startSurvey() {
    const url = this.questionnaireService.getFirstQuestionUrl();
    this.router.navigate([url]);
  }
}
