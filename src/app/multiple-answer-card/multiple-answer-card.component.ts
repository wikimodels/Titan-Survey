import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageType } from 'src/models/message-types.model';
import { Question, Questionnaire } from 'src/models/questionnaire.model';
import { QuestionnaireAnswersService } from '../services/questionnaire-answers.service';
import { SnackBarService } from '../services/snackbar.service';
import { QuestionnaireService } from '../services/questionnaire.service';

@Component({
  selector: 'app-multiple-answer-card',
  templateUrl: './multiple-answer-card.component.html',
  styleUrls: ['./multiple-answer-card.component.css'],
})
export class MultipleAnswerCardComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  answersForm: FormGroup;
  question: Question;
  questionnaire: Questionnaire;
  showBackwardButton: boolean;

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
    const objectValues = Object.values(this.answersForm.value);
    if (objectValues.every((key) => key === false)) {
      this.snackbarService.open(
        'Ответьте, пожалуйста, на вопрос!',
        'X',
        MessageType.WARNING
      );
    } else {
      const objectEntries = Object.entries(this.answersForm.value);
      console.log('OBJ ENTries', objectEntries);

      for (const [key, value] of objectEntries) {
        this.question.question_answers[+key - 1].answer_boolean_reply = !!value;
      }

      this.questionnaireAnsweredService.addAnsweredQuestion(this.question);
      const url = this.testQ.getRouterForNextQuestion(this.question);
      this.router.navigate([url]);
    }

    // Define BackwardButtons
    this.showBackwardButton = this.question.question_id === 1 ? false : true;
  }

  goBack() {
    const url = this.testQ.getRouterForPreviousQuestion(this.question);
    this.router.navigate([url]);
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
