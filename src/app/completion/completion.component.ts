import { Component, OnInit } from '@angular/core';
import { GET_VIBER_GROUP } from '../../app/consts/urls.consts';
import { QuestionnaireAnswersService } from '../services/questionnaire-answers.service';
@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.css'],
})
export class CompletionComponent implements OnInit {
  viber_group = ''; //GET_VIBER_GROUP();
  constructor(private qAnswers: QuestionnaireAnswersService) {}

  ngOnInit(): void {
    this.qAnswers.saveAnswersToCloud();
  }
  vibrate() {
    window.navigator.vibrate(10);
  }
}
