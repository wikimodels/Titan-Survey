import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Subscription } from 'rxjs';
import { MessageType } from 'src/models/message-types.model';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { ImageSingleAnswerService } from '../services/question-services/image-single-answer.service';
import { QuestionnaireAnswersService } from '../services/questionnaire-answers.service';
import { QuestionnaireService } from '../services/questionnaire.service';
import { SnackBarService } from '../services/snackbar.service';
import { UserInfoService } from '../services/user-info.service';

@Component({
  selector: 'app-image-answer-card',
  templateUrl: './image-single-answer.component.html',
  styleUrls: ['./image-single-answer.component.css'],
})
export class ImageSingleAnswerComponent implements OnInit, OnDestroy {
  gridStyle: string;
  columns: number;
  question: Question;
  showBackwardButton: boolean;
  sub: Subscription;
  rippleColor = 'rgba(255, 0, 0, 0.1)';
  gridWidth = '';
  rowheight = '';

  constructor(
    private deviceService: DeviceDetectorService,
    private route: ActivatedRoute,
    private router: Router,
    private questionnaireService: QuestionnaireService,
    private snackbarService: SnackBarService,
    private imageQuestionService: ImageSingleAnswerService,
    private questionnaireAnsweredService: QuestionnaireAnswersService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.sub = this.questionnaireService.questionnaireSubj$.subscribe(
      (questionnaire: Questionnaire) => {
        if (questionnaire.questions.length > 0) {
          const urlQuestionId = +this.route.snapshot.params['question_id'];
          this.question = questionnaire.questions.find(
            (q) => q.question_id === urlQuestionId
          );

          if (this.deviceService.isMobile()) {
            this.gridStyle = 'xs-grid';
            this.columns = 2;
            this.rowheight = '1:1';
          } else {
            this.gridStyle = 'xl-grid';
            this.columns = this.question.question_answers.length;
            this.gridWidth = `${this.columns * 200}px`;
            this.rowheight = '200px';
          }

          this.showBackwardButton =
            this.question.question_id === 1 ? false : true;
        }
      }
    );
  }

  choseAnswer(answerId: number) {
    let question = this.imageQuestionService.setAnswers(
      answerId,
      this.question
    );
    question = this.imageQuestionService.setImgsStyles(question);
    this.questionnaireService.updateInternally(question);
  }

  onSubmit() {
    window.navigator.vibrate(10);
    if (
      this.question.question_answers.every(
        (q) => q.answer_boolean_reply === false
      )
    ) {
      this.snackbarService.open(
        'Пожалуйста, выберите ответ на вопрос',
        'x',
        MessageType.WARNING
      );
    } else {
      this.questionnaireAnsweredService.addAnsweredQuestion(this.question);
      this.router.navigate([this.question.next_question_url]);
    }
  }

  goBack() {
    window.navigator.vibrate(10);
    this.router.navigate([this.question.previous_question_url]);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
