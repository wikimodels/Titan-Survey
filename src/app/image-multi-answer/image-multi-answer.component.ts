import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Subscription } from 'rxjs';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { BasicSnackbarService } from '../basic-snackbar/basic-snackbar.service';
import { MessageType } from '../basic-snackbar/models/message-type';
import { ImageMultiAnswerService } from '../services/question-services/image-multi-answer.service';
import { QuestionnaireAnswersService } from '../services/questionnaire-answers.service';
import { QuestionnaireService } from '../services/questionnaire.service';
import { GlobalObjectService } from '../services/shared/global-object.service';
import * as defaults from '../../assets/utils/defaults.json';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { BasicSnackbarComponent } from '../basic-snackbar/basic-snackbar.component';

@Component({
  selector: 'app-image-multi-answer',
  templateUrl: './image-multi-answer.component.html',
  styleUrls: ['./image-multi-answer.component.css'],
})
export class ImageMultiAnswerComponent implements OnInit, OnDestroy {
  gridStyle: string;
  columns: number;
  question: Question;
  showBackwardButton: boolean;
  sub: Subscription;
  rowHeight = '';
  gridWidth = '';
  rippleColor = 'rgba(255, 0, 0, 0.1)';
  windowRef: any;
  constructor(
    windowRef: GlobalObjectService,
    @Inject(PLATFORM_ID) private platformId: object,
    private deviceService: DeviceDetectorService,
    private route: ActivatedRoute,
    private router: Router,
    private questionnaireService: QuestionnaireService,
    private snackbarService: BasicSnackbarService,
    private imgService: ImageMultiAnswerService,
    private questionnaireAnsweredService: QuestionnaireAnswersService
  ) {
    this.windowRef = windowRef.getWindow();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.sub = this.questionnaireService.questionnaire$.subscribe(
      (questionnaire: Questionnaire) => {
        if (questionnaire.questions.length > 0) {
          const urlQuestionId = +this.route.snapshot.params['question_id'];
          this.question = questionnaire.questions.find(
            (q) => q.question_id === urlQuestionId
          );
          if (this.deviceService.isMobile()) {
            this.gridStyle = 'xs-grid';
            this.columns = 2;
            this.rowHeight = '1:1';
          } else {
            this.gridStyle = 'xl-grid';
            this.columns = this.question.question_answers.length;
            this.gridWidth = `${this.columns * 200}px`;
            this.rowHeight = '200px';
          }
          this.showBackwardButton =
            this.question.question_id === 1 ? false : true;
        }
      }
    );
  }

  choseAnswer(answerId: number) {
    let question = this.imgService.setAnswers(answerId, this.question);
    question = this.imgService.setImgsStyles(question);
    this.questionnaireService.updateInternally(question);
  }

  onSubmit() {
    if (isPlatformBrowser(this.platformId)) {
      window.navigator.vibrate(10);
    }
    if (
      this.question.question_answers.every(
        (q) => q.answer_boolean_reply === false
      )
    ) {
      this.snackbarService.open(
        defaults.missingAnswerWarningMsg,
        MessageType.WARNING
      );
    } else {
      this.questionnaireAnsweredService.addAnsweredQuestion(this.question);
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
