import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MultipleAnswerCardComponent } from './multiple-answer-card/multiple-answer-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SnackBarService } from './services/snackbar.service';
import { SingleAnswerCardComponent } from './single-answer-card/single-answer-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { CompletionComponent } from './completion/completion.component';
import { TextAnswerCardComponent } from './text-answer-card/text-answer-card.component';
import { RatingAnswerCardComponent } from './rating-answer-card/rating-answer-card.component';
import { RatingInputModule } from './rating-module/rating-input.module';
import { ImageAnswerCardComponent } from './image-answer-card/image-answer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MultipleAnswerCardComponent,
    SingleAnswerCardComponent,
    NavBarComponent,
    CompletionComponent,
    TextAnswerCardComponent,
    RatingAnswerCardComponent,
    ImageAnswerCardComponent,
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
  providers: [SnackBarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
