import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageType } from 'src/models/message-types.model';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { QuestionnaireAnswersService } from '../services/questionnaire-answers.service';
import { SnackBarService } from '../services/snackbar.service';
import { QuestionnaireService } from '../services/questionnaire.service';
import { Subscription } from 'rxjs';
import { CheckboxMultiAnswerService } from '../services/question-services/checkbox-multi-answer.service';

@Component({
  selector: 'app-checkbox-multiple-card',
  templateUrl: './checkbox-multiple-answer.component.html',
  styleUrls: ['./checkbox-multiple-answer.component.css'],
})
export class CheckboxMultipleAnswerComponent implements OnInit, OnDestroy {
  labelPosition: 'before' | 'after' = 'after';
  answersForm: FormGroup;
  question: Question;
  showBackwardButton: boolean;
  sub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionnaireService: QuestionnaireService,
    private snackbarService: SnackBarService,
    private questionnaireAnsweredService: QuestionnaireAnswersService,
    private chbxMultiAnswerService: CheckboxMultiAnswerService
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

  onSubmit() {
    console.log('onSubmit formValue', this.answersForm.value);
    const objectValues = Object.values(this.answersForm.value);
    if (objectValues.every((key) => key === false)) {
      this.snackbarService.open(
        'Ответьте, пожалуйста, на вопрос!',
        'X',
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
    this.router.navigate([this.question.previous_question_url]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
