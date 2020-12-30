import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageType } from 'src/models/message-types.model';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { RatingSingleAnswerService } from '../services/question-services/rating-single-answer.service';
import { QuestionnaireAnswersService } from '../services/questionnaire-answers.service';
import { QuestionnaireService } from '../services/questionnaire.service';
import { SnackBarService } from '../services/snackbar.service';

@Component({
  selector: 'app-rating-answer',
  templateUrl: './rating-answer.component.html',
  styleUrls: ['./rating-answer.component.css'],
})
export class RatingAnswerComponent implements OnInit, OnDestroy {
  //labelPosition: 'before' | 'after' = 'after';
  answersForm: FormGroup;
  question: Question;
  questionnaire: Questionnaire;
  showBackwardButton: boolean;
  sub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionnaireService: QuestionnaireService,
    private snackbarService: SnackBarService,
    private questionnaireAnsweredService: QuestionnaireAnswersService,
    private ratingService: RatingSingleAnswerService
  ) {}

  ngOnInit(): void {
    this.sub = this.questionnaireService.questionnaireSubj$.subscribe(
      (questionnaire: Questionnaire) => {
        if (questionnaire.questions.length > 0) {
          const urlQuestionId = +this.route.snapshot.params['question_id'];
          this.question = questionnaire.questions.find(
            (q) => q.question_id === urlQuestionId
          );
          const answer_id = this.ratingService.getAnswerId(this.question);
          this.answersForm = new FormGroup({
            rating: new FormControl(answer_id + 1),
          });
          this.showBackwardButton =
            this.question.question_id === 1 ? false : true;
        }
      }
    );
  }

  onSubmit() {
    const answerValue = this.answersForm.value['rating'];
    if (answerValue < 1) {
      this.snackbarService.open(
        'Пожалуйста, ответься на вопрос!',
        'x',
        MessageType.WARNING
      );
    } else {
      let question = this.ratingService.setAnswer(answerValue, this.question);
      this.questionnaireService.updateInternally(question);
      this.questionnaireAnsweredService.addAnsweredQuestion(this.question);

      this.router.navigate([this.question.next_question_url]);
    }
  }

  goBack() {
    this.router.navigate([this.question.previous_question_url]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}