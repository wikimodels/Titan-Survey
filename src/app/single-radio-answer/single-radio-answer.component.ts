import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageType } from 'src/models/message-types.model';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { QuestionnaireAnswersService } from '../services/questionnaire-answers.service';
import { SnackBarService } from '../services/snackbar.service';
import { QuestionnaireService } from '../services/questionnaire.service';
import { Subscription } from 'rxjs';
import { RadioSingleAnswerService } from '../services/question-services/radio-single-answer.service';

@Component({
  selector: 'app-single-radio-answer',
  templateUrl: './single-radio-answer.component.html',
  styleUrls: ['./single-radio-answer.component.css'],
})
export class SingleRadioAnswerComponent implements OnInit, OnDestroy {
  labelPosition: 'before' | 'after' = 'after';
  question: Question;
  answersForm: FormGroup;
  showBackwardButton: boolean;
  sub: Subscription;

  constructor(
    private questionnaireService: QuestionnaireService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbarService: SnackBarService,
    private questionnaireAnsweredService: QuestionnaireAnswersService,
    private radioAnswerService: RadioSingleAnswerService
  ) {}

  ngOnInit(): void {
    this.sub = this.questionnaireService.questionnaireSubj$.subscribe(
      (questionnaire: Questionnaire) => {
        if (questionnaire.questions.length > 0) {
          const urlQuestionId = +this.route.snapshot.params['question_id'];
          this.question = questionnaire.questions.find(
            (q) => q.question_id === urlQuestionId
          );
          const answer_id = this.radioAnswerService.getAnswerId(this.question);
          this.answersForm = new FormGroup({
            answer_id: new FormControl(answer_id),
          });
          this.showBackwardButton =
            this.question.question_id === 1 ? false : true;
        }
      }
    );
  }

  onSubmit() {
    window.navigator.vibrate(10);
    const answerId = this.answersForm.value['answer_id'];
    if (this.answersForm.value['answer_id'] == -1) {
      this.snackbarService.open(
        'Ответьте, пожалуйста, на вопрос!',
        'X',
        MessageType.WARNING
      );
    } else {
      const question = this.radioAnswerService.setAnswer(
        answerId,
        this.question
      );
      this.questionnaireService.updateInternally(question);
      this.questionnaireAnsweredService.addAnsweredQuestion(question);
      this.router.navigate([this.question.next_question_url]);
    }
  }

  vibrate() {
    window.navigator.vibrate(10);
  }
  goBack() {
    window.navigator.vibrate(10);
    this.router.navigate([this.question.previous_question_url]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
