import { AfterViewInit, Component, OnInit } from '@angular/core';
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
})
export class ImageAnswerCardComponent implements OnInit, AfterViewInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';

  question: Question;
  questionnaire: Questionnaire;
  showBackwardButton: boolean;
  imgStyle = 'initial';
  //chosenAnswersIds = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionnaireService: QuestionnaireService,
    private snackbarService: SnackBarService,
    private questionnaireAnsweredService: QuestionnaireAnswersService
  ) {}

  ngOnInit(): void {
    const question_id = +this.route.snapshot.params['question_id'];
    this.questionnaire = this.questionnaireService.getQuestionnaireSubj();
    this.question = this.questionnaireAnsweredService
      .getQuestionnaireSubj()
      .questions.find((q) => q.question_id === question_id);

    if (this.question === undefined) {
      this.question = this.questionnaire.questions.find(
        (q) => q.question_id === question_id
      );
    }

    // Define Backward Button
    this.showBackwardButton = this.question.question_id === 1 ? false : true;
  }

  ngAfterViewInit() {
    this.setImgsStyles(this.question);
  }

  choseAnswer(event: Event) {
    const firstImgId = this.question.question_answers[0].answer_id.toString();

    let clickedImgId: string = (event.target as Element).id;

    let clickedImgClassName = (event.target as Element).attributes['class']
      .value;

    if (clickedImgId === firstImgId && clickedImgClassName == 'initial') {
      const imgs = document.getElementsByTagName('img');
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].className = 'initial';
      }
    }

    if (clickedImgId != firstImgId && clickedImgClassName == 'initial') {
      document.getElementById(firstImgId).className = 'initial';
    }

    (event.target as Element).className =
      clickedImgClassName === 'initial' ? 'clicked' : 'initial';
  }

  onSubmit() {
    const clickedElements = document.getElementsByClassName('clicked');
    if (clickedElements.length == 0) {
      this.snackbarService.open(
        'Пожалуйста, выберите ответ на вопрос',
        'x',
        MessageType.WARNING
      );
    } else {
      this.question.question_answers.forEach((answer) => {
        answer.answer_boolean_reply = false;
      });

      for (let i = 0; i < clickedElements.length; i++) {
        let imgId = clickedElements[i].id;
        this.question.question_answers[+imgId - 1].answer_boolean_reply = true;
      }

      this.questionnaireAnsweredService.addAnsweredQuestion(this.question);

      //Set url
      const url = this.questionnaireService.getRouterForNextQuestion(
        this.question
      );
      this.router.navigate([url]);
      console.log(this.questionnaireAnsweredService.getQuestionnaireSubj());
    }
  }

  setImgsStyles(question: Question) {
    console.log('number of q', question.question_answers);
    if (question.question_answers.length > 0) {
      question.question_answers.forEach((answer) => {
        let element = document.getElementById(answer.answer_id.toString());
        element.className =
          answer.answer_boolean_reply === true ? 'clicked' : 'initial';
      });
    }
  }

  goBack() {
    const url = this.questionnaireService.getRouterForPreviousQuestion(
      this.question
    );
    this.router.navigate([url]);
  }
}
