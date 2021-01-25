import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { QuestionnaireAnswersService } from '../services/questionnaire-answers.service';

import { QuestionnaireService } from '../services/questionnaire.service';
import { Subscription } from 'rxjs';
import { RadioSingleAnswerService } from '../services/question-services/radio-single-answer.service';
import { BasicSnackbarService } from '../basic-snackbar/basic-snackbar.service';
import { MessageType } from '../basic-snackbar/models/message-type';
import { isPlatformBrowser } from '@angular/common';
import { GlobalObjectService } from '../services/shared/global-object.service';
import * as defaults from '../../assets/utils/defaults.json';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { BasicSnackbarComponent } from '../basic-snackbar/basic-snackbar.component';

@Component({
  selector: 'app-single-radio-answer',
  templateUrl: './single-radio-answer.component.html',
  styleUrls: ['./single-radio-answer.component.css'],
})
export class SingleRadioAnswerComponent implements OnInit, OnDestroy {
  windowRef: any;
  labelPosition: 'before' | 'after' = 'after';
  question: Question;
  answersForm: FormGroup;
  showBackwardButton: boolean;
  sub: Subscription;

  constructor(
    windowRef: GlobalObjectService,
    @Inject(PLATFORM_ID) private platformId: object,
    private questionnaireService: QuestionnaireService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbarService: BasicSnackbarService,
    private questionnaireAnsweredService: QuestionnaireAnswersService,
    private radioAnswerService: RadioSingleAnswerService
  ) {
    this.windowRef = windowRef.getWindow();
  }

  ngOnInit(): void {
    this.sub = this.questionnaireService.questionnaire$.subscribe(
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
    if (isPlatformBrowser(this.platformId)) {
      window.navigator.vibrate(10);
    }
    const answerId = this.answersForm.value['answer_id'];
    if (this.answersForm.value['answer_id'] == -1) {
      this.snackbarService.open(
        defaults.missingAnswerWarningMsg,
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
    if (isPlatformBrowser(this.platformId)) {
      window.navigator.vibrate(10);
    }
  }
  goBack() {
    if (isPlatformBrowser(this.platformId)) {
      window.navigator.vibrate(10);
    }
    this.router.navigate([this.question.previous_question_url]);
  }

  ngOnDestroy() {
    this.snackbarService.dismiss();
    this.sub.unsubscribe();
  }
}
