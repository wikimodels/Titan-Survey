import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageType } from 'src/models/message-types.model';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { QuestionnaireAnswersService } from '../services/questionnaire-answers.service';
import { SnackBarService } from '../services/snackbar.service';
import { TestQuestionnaireService } from '../services/questionnaire.service';

@Component({
  selector: 'app-single-answer-card',
  templateUrl: './single-answer-card.component.html',
  styleUrls: ['./single-answer-card.component.css'],
})
export class SingleAnswerCardComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  question: Question;
  questionnaire = this.testQ.getQuestionnaireSubj();
  answersForm: FormGroup;
  showBackwardButton: boolean;

  constructor(
    private testQ: TestQuestionnaireService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbarService: SnackBarService,
    private questionnaireAnsweredService: QuestionnaireAnswersService
  ) {}

  ngOnInit(): void {
    console.log('params', this.route.snapshot.params);
    const question_id = +this.route.snapshot.params['question_id'];
    console.log('question_id', question_id);

    //Pick up Question if it is already answered
    this.question = this.questionnaireAnsweredService
      .getQuestionnaireSubj()
      .questions.find((q) => q.question_id === question_id);
    console.log('answeredQuestion', this.question);

    // If Quesion is not ansered pick it up from Questionnaire
    if (this.question === undefined) {
      this.question = this.questionnaire.questions.find(
        (q) => q.question_id === question_id
      );
    }

    // Find what answered is picked up by user
    const answer_id = this.getDefaultValueForRadionButtonGroup(this.question);

    // Create Form
    this.answersForm = new FormGroup({
      answer_id: new FormControl(answer_id),
    });

    // Define Backward Button
    this.showBackwardButton = this.question.question_id === 1 ? false : true;
  }

  onSubmit() {
    const userAnswer = this.answersForm.value;

    if (userAnswer['answer_id'] == '') {
      this.snackbarService.open(
        'Ответьте, пожалуйста, на вопрос!',
        'X',
        MessageType.WARNING
      );
    } else {
      this.question.question_answers.forEach((answer) => {
        answer.answer_boolean_reply =
          answer.answer_id == userAnswer['answer_id'] ? true : false;
      });
      console.log(this.question);
      this.questionnaireAnsweredService.addAnsweredQuestion(this.question);
      const url = this.testQ.getRouterForNextQuestion(this.question);
      console.log(url);
      this.router.navigate([url]);
    }
  }

  goBack() {
    const url = this.testQ.getRouterForPreviousQuestion(this.question);
    this.router.navigate([url]);
  }

  getDefaultValueForRadionButtonGroup(question: Question) {
    const answer = question.question_answers.find(
      (answer) => answer.answer_boolean_reply == true
    );
    let answer_id = answer != undefined ? answer.answer_id : 0;
    return answer_id;
  }
}
