import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
`
import { MultipleAnswerCardComponent } from './multiple-answer-card/multiple-answer-card.component';`;
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SnackBarService } from './services/snackbar.service';
import { SingleRadioAnswerComponent } from './single-radio-answer/single-radio-answer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { CompletionComponent } from './completion/completion.component';
import { TextAnswerComponent } from './text-answer/text-answer.component';
import { RatingAnswerComponent } from './rating-answer/rating-answer.component';
import { RatingInputModule } from './rating-module/rating-input.module';
import { ImageSingleAnswerComponent } from './image-single-answer/image-single-answer.component';
import { QuestionCounterComponent } from './question-counter/question-counter.component';
import { ImageMultiAnswerComponent } from './image-multi-answer/image-multi-answer.component';
import { CheckboxMultipleAnswerComponent } from './checkbox-multiple-answer/checkbox-multiple-answer.component';
import { ButtonSingleAnswerComponent } from './button-single-answer/button-single-answer.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckboxMultipleAnswerComponent,
    SingleRadioAnswerComponent,
    NavBarComponent,
    CompletionComponent,
    TextAnswerComponent,
    RatingAnswerComponent,
    ImageSingleAnswerComponent,
    QuestionCounterComponent,
    ButtonSingleAnswerComponent,
    ImageMultiAnswerComponent,
    GreetingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RatingInputModule,
  ],
  providers: [SnackBarService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
