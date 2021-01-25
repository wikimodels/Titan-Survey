import {
  Component,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { QuestionnaireAnswersService } from '../services/questionnaire-answers.service';
import { QuestionnaireService } from '../services/questionnaire.service';
import { Subscription } from 'rxjs';
import { CheckboxMultiAnswerService } from '../services/question-services/checkbox-multi-answer.service';
import { BasicSnackbarService } from '../basic-snackbar/basic-snackbar.service';
import { MessageType } from '../basic-snackbar/models/message-type';
import { isPlatformBrowser } from '@angular/common';
import { GlobalObjectService } from '../services/shared/global-object.service';
import * as defaults from '../../assets/utils/defaults.json';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { BasicSnackbarComponent } from '../basic-snackbar/basic-snackbar.component';

@Component({
  selector: 'app-checkbox-multiple-card',
  templateUrl: './checkbox-multiple-answer.component.html',
  styleUrls: ['./checkbox-multiple-answer.component.css'],
})
export class CheckboxMultipleAnswerComponent implements OnInit, OnDestroy {
  windowRef: any;
  labelPosition: 'before' | 'after' = 'after';
  answersForm: FormGroup;
  question: Question;
  showBackwardButton: boolean;
  sub: Subscription;
  constructor(
    windowRef: GlobalObjectService,
    @Inject(PLATFORM_ID) private platformId: object,
    private route: ActivatedRoute,
    private router: Router,
    private questionnaireService: QuestionnaireService,
    private snackbarService: BasicSnackbarService,
    private questionnaireAnsweredService: QuestionnaireAnswersService,
    private chbxMultiAnswerService: CheckboxMultiAnswerService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
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
          console.log('THIS Q', this.question);
          const formControls = this.chbxMultiAnswerService.getFormControlsForAnswers(
            this.question
          );
          this.answersForm = new FormGroup(formControls);
          this.showBackwardButton =
            this.question.question_id === 1 ? false : true;
        }
      }
    );
  }

  click() {
    if (isPlatformBrowser(this.platformId)) {
      window.navigator.vibrate(10);
    }
  }

  onSubmit() {
    if (isPlatformBrowser(this.platformId)) {
      window.navigator.vibrate(10);
    }
    console.log('onSubmit formValue', this.answersForm.value);
    const objectValues = Object.values(this.answersForm.value);
    if (objectValues.every((key) => key === false)) {
      this.snackbarService.open(
        defaults.missingAnswerWarningMsg,
        MessageType.WARNING
      );
    } else {
      let question = this.chbxMultiAnswerService.setAnswers(
        objectValues,
        this.question
      );
      this.questionnaireService.updateInternally(question);
      this.questionnaireAnsweredService.addAnsweredQuestion(question);
      this.router.navigate([this.question.next_question_url]);
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
