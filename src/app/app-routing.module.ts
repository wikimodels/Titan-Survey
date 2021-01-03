import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ANALYTICS, COMPLETION, GREETINGS } from '../app/consts/routes.consts';
import { CompletionComponent } from './completion/completion.component';

import { HomeComponent } from './home/home.component';
import { ImageSingleAnswerComponent } from './image-single-answer/image-single-answer.component';
import { CheckboxMultipleAnswerComponent } from './checkbox-multiple-answer/checkbox-multiple-answer.component';
import { RatingAnswerComponent } from './rating-answer/rating-answer.component';
import { SingleRadioAnswerComponent } from './single-radio-answer/single-radio-answer.component';

import { TextAnswerComponent } from './text-answer/text-answer.component';
import { ImageMultiAnswerComponent } from './image-multi-answer/image-multi-answer.component';
import { ButtonSingleAnswerComponent } from './button-single-answer/button-single-answer.component';
import { QuestionType } from 'src/models/questionnaire.model';
import { GreetingsComponent } from './greetings/greetings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: GREETINGS,
    pathMatch: 'full',
  },
  {
    path: QuestionType.RADIO_SINGLE_ANSWER + '/:question_id',
    component: SingleRadioAnswerComponent,
  },
  {
    path: QuestionType.BUTTON_SINGLE_ANSWER + '/:question_id',
    component: ButtonSingleAnswerComponent,
  },
  {
    path: QuestionType.CHECKBOX_MULTIPLE_ANSWER + '/:question_id',
    component: CheckboxMultipleAnswerComponent,
  },
  {
    path: QuestionType.TEXT + '/:question_id',
    component: TextAnswerComponent,
  },
  {
    path: QuestionType.RATING_ANSWER + '/:question_id',
    component: RatingAnswerComponent,
  },
  {
    path: QuestionType.IMAGE_SINGLE_ANSWER + '/:question_id',
    component: ImageSingleAnswerComponent,
  },
  {
    path: QuestionType.IMAGE_MULTI_ANSWER + '/:question_id',
    component: ImageMultiAnswerComponent,
  },
  {
    path: GREETINGS,
    component: GreetingsComponent,
  },
  {
    path: ANALYTICS,
    loadChildren: () =>
      import('./analytics-module/analytics.module').then(
        (m) => m.AnalyticsModule
      ),
  },
  {
    path: COMPLETION,
    component: CompletionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
