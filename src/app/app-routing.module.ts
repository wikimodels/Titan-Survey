import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  BASE,
  HOME,
  SINGLE_ANSWER,
  MULTI_ANSWER,
  TEXT_ANSWER,
  COMPLETION,
} from '../app/consts/routes.consts';
import { CompletionComponent } from './completion/completion.component';

import { HomeComponent } from './home/home.component';
import { MultipleAnswerCardComponent } from './multiple-answer-card/multiple-answer-card.component';
import { SingleAnswerCardComponent } from './single-answer-card/single-answer-card.component';
import { TextAnswerCardComponent } from './text-answer-card/text-answer-card.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/`,
    pathMatch: 'full',
    //canActivate: [AngularFireAuthGuard],
    //data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: SINGLE_ANSWER + '/:question_id',
    component: SingleAnswerCardComponent,
    //canActivate: [AngularFireAuthGuard],
    //data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: MULTI_ANSWER + '/:question_id',
    component: MultipleAnswerCardComponent,
    //canActivate: [AngularFireAuthGuard],
    //data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: TEXT_ANSWER + '/:question_id',
    component: TextAnswerCardComponent,
    //canActivate: [AngularFireAuthGuard],
    //data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: COMPLETION,
    component: CompletionComponent,
    //canActivate: [AngularFireAuthGuard],
    //data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
