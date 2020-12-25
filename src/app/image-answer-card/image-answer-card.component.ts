import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageType } from 'src/models/message-types.model';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { QuestionnaireAnswersService } from '../services/questionnaire-answers.service';
import { QuestionnaireService } from '../services/questionnaire.service';
import { SnackBarService } from '../services/snackbar.service';

@Component({
  selector: 'app-image-answer-card',
  templateUrl: './image-answer-card.component.html',
  styleUrls: ['./image-answer-card.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ), //Not sure if this init state is necessary here, please leave a comment and I edit this answer.
      transition(':enter', [
        style({ opacity: '0' }),
        animate('0.2s 100ms ease-in', style({ opacity: '1' })),
      ]),
      transition(':leave', [
        style({ opacity: '1' }),
        animate('0.2s ease-out', style({ opacity: '0' })),
      ]),
    ]),
  ],
})
export class ImageAnswerCardComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  answersForm: FormGroup;
  question: Question;
  questionnaire: Questionnaire;
  showBackwardButton: boolean;
  imgStyle = 'initial';
  chosenAnswersIds = [];
  enableAnimation = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private testQ: QuestionnaireService,
    private snackbarService: SnackBarService,
    private questionnaireAnsweredService: QuestionnaireAnswersService
  ) {}

  ngOnInit(): void {
    const question_id = +this.route.snapshot.params['question_id'];
    this.questionnaire = this.testQ.getQuestionnaireSubj();
    this.question = this.questionnaireAnsweredService
      .getQuestionnaireSubj()
      .questions.find((q) => q.question_id === question_id);
    console.log('answeredQuestion', this.question);
    if (this.question === undefined) {
      this.question = this.questionnaire.questions.find(
        (q) => q.question_id === question_id
      );
    }
    const answersIds = this.getFormControlsMembers(this.question);
    this.answersForm = new FormGroup(answersIds);
  }

  onSubmit() {
    console.log(this.answersForm.value);
  }

  goBack() {
    const url = this.testQ.getRouterForPreviousQuestion(this.question);
    this.router.navigate([url]);
  }

  choseAnswer(event: Event) {
    let clickedImgId: string = (event.target as Element).id;
    let clickedImgClassName = (event.target as Element).attributes['class']
      .value;
    this.enableAnimation = true;
    const answersIds = this.question.question_answers.reduce((acc, cur) => {
      if (cur.answer_id != 1) {
        acc.push(cur.answer_id);
      }
      return acc;
    }, []);

    clickedImgClassName =
      clickedImgClassName === 'initial' ? 'clicked' : 'initial';
    (event.target as Element).className = clickedImgClassName;
    const imgs = answersIds.reduce((acc, cur) => {
      const el = document.getElementById(cur);
      acc.push(el);
      return acc;
    }, []);

    if (clickedImgId == '1' && clickedImgClassName == 'clicked') {
      imgs.forEach((img) => {
        img.className = 'initial';
      });
      (event.target as Element).className = 'clicked';
    } else {
      let element = document.getElementById('1');
      element.className = 'initial';
    }

    // PICK UP ALL CLICKED IMAGES
    let clickedImgs = document.getElementsByClassName('clicked');
    const chosenAnswersIds = [];

    for (let i = 0; i < clickedImgs.length; i++) {
      chosenAnswersIds.push(+clickedImgs[i].id);
    }

    this.chosenAnswersIds = chosenAnswersIds;
    console.log(chosenAnswersIds);
  }

  private getFormControlsMembers(question: Question) {
    const answersIds = {};
    question.question_answers.forEach((answer) => {
      answersIds[answer['answer_id']] = new FormControl(
        answer.answer_boolean_reply
      );
    });
    return answersIds;
  }
}
