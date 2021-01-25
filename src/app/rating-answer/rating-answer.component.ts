import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { BasicSnackbarService } from '../basic-snackbar/basic-snackbar.service';
import { MessageType } from '../basic-snackbar/models/message-type';
import { RatingSingleAnswerService } from '../services/question-services/rating-single-answer.service';
import { QuestionnaireAnswersService } from '../services/questionnaire-answers.service';
import { QuestionnaireService } from '../services/questionnaire.service';
import { GlobalObjectService } from '../services/shared/global-object.service';
import * as defaults from '../../assets/utils/defaults.json';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { BasicSnackbarComponent } from '../basic-snackbar/basic-snackbar.component';
@Component({
  selector: 'app-rating-answer',
  templateUrl: './rating-answer.component.html',
  styleUrls: ['./rating-answer.component.css'],
})
export class RatingAnswerComponent implements OnInit, OnDestroy {
  answersForm: FormGroup;
  question: Question;
  questionnaire: Questionnaire;
  showBackwardButton: boolean;
  sub: Subscription;
  windowRef: any;
  constructor(
    windowRef: GlobalObjectService,
    @Inject(PLATFORM_ID) private platformId: object,
    private route: ActivatedRoute,
    private router: Router,
    private questionnaireService: QuestionnaireService,
    private snackbarService: BasicSnackbarService,
    private questionnaireAnsweredService: QuestionnaireAnswersService,
    private ratingService: RatingSingleAnswerService
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
    if (isPlatformBrowser(this.platformId)) {
      window.navigator.vibrate(10);
    }
    const answerValue = this.answersForm.value['rating'];
    if (answerValue < 1) {
      this.snackbarService.open(
        defaults.missingAnswerWarningMsg,
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
