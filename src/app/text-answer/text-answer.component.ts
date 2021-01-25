import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { QuestionnaireAnswersService } from '../services/questionnaire-answers.service';
import { QuestionnaireService } from '../services/questionnaire.service';
import { GlobalObjectService } from '../services/shared/global-object.service';

@Component({
  selector: 'app-text-answer',
  templateUrl: './text-answer.component.html',
  styleUrls: ['./text-answer.component.css'],
})
export class TextAnswerComponent implements OnInit {
  question: Question;
  answersForm: FormGroup;
  showBackwardButton: boolean;
  sub: Subscription;
  windowRef: any;

  constructor(
    windowRef: GlobalObjectService,
    @Inject(PLATFORM_ID) private platformId: object,
    private questionnaireService: QuestionnaireService,
    private route: ActivatedRoute,
    private router: Router,
    private questionnaireAnsweredService: QuestionnaireAnswersService
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
          const textValue = this.question.question_text_answer;
          this.answersForm = new FormGroup({
            wishes: new FormControl(textValue),
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
    const textValue = this.answersForm.value['wishes'];
    console.log(textValue);
    this.question.question_text_answer = this.answersForm.value['wishes'];
    this.questionnaireService.updateInternally(this.question);
    this.questionnaireAnsweredService.addAnsweredQuestion(this.question);
    this.router.navigate([this.question.next_question_url]);
  }

  goBack() {
    if (isPlatformBrowser(this.platformId)) {
      window.navigator.vibrate(10);
    }
    this.router.navigate([this.question.previous_question_url]);
  }

  supressEnterPropagation(event: KeyboardEvent) {
    if (event.which === 13 || event.keyCode === 13 || event.key === 'Enter') {
      event.stopImmediatePropagation();
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
