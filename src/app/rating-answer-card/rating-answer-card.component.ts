import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { QuestionnaireAnswersService } from '../services/questionnaire-answers.service';
import { QuestionnaireService } from '../services/questionnaire.service';
import { SnackBarService } from '../services/snackbar.service';

@Component({
  selector: 'app-rating-answer-card',
  templateUrl: './rating-answer-card.component.html',
  styleUrls: ['./rating-answer-card.component.css'],
})
export class RatingAnswerCardComponent implements OnInit {
  labelPosition: 'before' | 'after' = 'after';
  answersForm: FormGroup;
  question: Question;
  questionnaire: Questionnaire;
  showBackwardButton: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private testQ: QuestionnaireService,
    private snackbarService: SnackBarService,
    private questionnaireAnsweredService: QuestionnaireAnswersService
  ) {}

  ngOnInit(): void {
    const question_id = +this.route.snapshot.params['question_id'];
    this.questionnaire = this.testQ.getQuestionnaireSubj();
    this.question = this.questionnaireAnsweredService
      .getQuestionnaireSubj()
      .questions.find((q) => q.question_id === question_id);
    console.log('answeredQuestion', this.question);
    if (this.question === undefined) {
      this.question = this.questionnaire.questions.find(
        (q) => q.question_id === question_id
      );
    }
    // Create Form
    this.answersForm = new FormGroup({
      rating: new FormControl(2),
    });

    // Define Backward Button
    this.showBackwardButton = this.question.question_id === 1 ? false : true;
  }
  onSubmit() {
    console.log(this.answersForm.value);
  }

  goBack() {
    const url = this.testQ.getRouterForPreviousQuestion(this.question);
    this.router.navigate([url]);
  }
}
