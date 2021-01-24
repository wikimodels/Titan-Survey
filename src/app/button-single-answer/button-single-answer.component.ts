import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { BasicSnackbarService } from '../basic-snackbar/basic-snackbar.service';
import { MessageType } from '../basic-snackbar/models/message-type';
import { ButtonSingleAnswerService } from '../services/question-services/button-single-answer.service';
import { QuestionnaireAnswersService } from '../services/questionnaire-answers.service';
import { QuestionnaireService } from '../services/questionnaire.service';

@Component({
  selector: 'app-single-button-answer',
  templateUrl: './button-single-answer.component.html',
  styleUrls: ['./button-single-answer.component.css'],
})
export class ButtonSingleAnswerComponent implements OnInit, OnDestroy {
  question: Question;
  showBackwardButton: boolean;
  sub: Subscription;

  constructor(
    private questionnaireService: QuestionnaireService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbarService: BasicSnackbarService,
    private questionnaireAnswersService: QuestionnaireAnswersService,
    private bsaService: ButtonSingleAnswerService
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
          this.showBackwardButton =
            this.question.question_id === 1 ? false : true;
        }
      }
    );
  }

  onClick(answerId: number) {
    let question = this.bsaService.setAnswers(answerId, this.question);
    question = this.bsaService.setImgsStyles(question);
    console.log('clicked q', question);
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
        MessageType.WARNING
      );
    } else {
      this.questionnaireAnswersService.addAnsweredQuestion(this.question);
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
