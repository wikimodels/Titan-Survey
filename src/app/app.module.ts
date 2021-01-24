import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { AnalyticsModule } from './analytics-module/analytics.module';
import { SpecialImageMultiAnswerComponent } from './special-image-multi-answer/special-image-multi-answer.component';
import { BasicSnackbarModule } from './basic-snackbar/basic-snackbar.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    GreetingsComponent,
    CompletionComponent,
    TextAnswerComponent,
    RatingAnswerComponent,
    QuestionCounterComponent,
    ImageMultiAnswerComponent,
    SingleRadioAnswerComponent,
    ImageSingleAnswerComponent,
    ButtonSingleAnswerComponent,
    CheckboxMultipleAnswerComponent,
    SpecialImageMultiAnswerComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AnalyticsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    RatingInputModule,
    AppMaterialModule,
    BasicSnackbarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BackButtonDisableModule.forRoot(),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
