import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageType } from 'src/models/message-types.model';
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
    private questionnaireService: QuestionnaireService,
    private snackbarService: SnackBarService,
    private questionnaireAnsweredService: QuestionnaireAnswersService
  ) {}

  ngOnInit(): void {
    const question_id = +this.route.snapshot.params['question_id'];
    this.questionnaire = this.questionnaireService.getQuestionnaireSubj();

    // Check if answer is in answered questionnaire
    this.question = this.questionnaireAnsweredService
      .getQuestionnaireSubj()
      .questions.find((q) => q.question_id === question_id);

    console.log('answeredQuestion', this.question);

    // If answer is unanswered pick it up from questionnaire unanswered
    if (this.question === undefined) {
      this.question = this.questionnaire.questions.find(
        (q) => q.question_id === question_id
      );
    }

    // Create Form
    const starIndex = this.getStarIndex(this.question);
    this.answersForm = new FormGroup({
      rating: new FormControl(starIndex),
    });

    // Define Backward Button
    this.showBackwardButton = this.question.question_id === 1 ? false : true;
  }

  onSubmit() {
    if (this.answersForm.value['rating'] == 0) {
      this.snackbarService.open(
        'Пожалуйста, ответься на вопрос!',
        'x',
        MessageType.WARNING
      );
    } else {
      // Set answered question
      this.question.question_answers.forEach((answer) => {
        answer.answer_boolean_reply = false;
      });
      const index = this.answersForm.value['rating'] - 1;
      this.question.question_answers[index].answer_boolean_reply = true;
      this.questionnaireAnsweredService.addAnsweredQuestion(this.question);

      //Set url
      const url = this.questionnaireService.getRouterForNextQuestion(
        this.question
      );
      this.router.navigate([url]);
      console.log(this.questionnaireAnsweredService.getQuestionnaireSubj());
    }
  }

  goBack() {
    const url = this.questionnaireService.getRouterForPreviousQuestion(
      this.question
    );
    this.router.navigate([url]);
  }

  getStarIndex(question: Question) {
    let index;
    if (question) {
      index =
        this.question.question_answers.findIndex(
          (answer) => answer.answer_boolean_reply === true
        ) + 1;
    } else {
      index = -1;
    }
    return index;
  }
}
