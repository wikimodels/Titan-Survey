import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { BasicSnackbarService } from 'src/app/basic-snackbar/basic-snackbar.service';
import { MessageType } from 'src/app/basic-snackbar/models/message-type';
import { SURVEY_LOG_CHANNEL } from 'src/app/consts/urls.consts';

@Injectable({
  providedIn: 'root',
})
export class SlackService {
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };

  constructor(
    private http: HttpClient,
    private snackbarService: BasicSnackbarService
  ) {}

  errorHandling(error: HttpErrorResponse) {
    console.log('SLACK ERROR', error);
    const message = this.getErrorMessage(error);
    return this.http
      .post(SURVEY_LOG_CHANNEL(), message, {
        ...this.options,
        responseType: 'text',
      })
      .pipe(
        tap(() => {
          this.snackbarService.open('Ошибка Сервера 504', MessageType.WARNING);
        }),
        switchMap(() => throwError(error))
      );
  }

  private getErrorMessage(error: HttpErrorResponse) {
    const errorMessage = {
      fallback: 'This is an error message from Titan Report',
      //username: '',
      text: 'Error Message: ' + error.message,
      attachments: [
        {
          author_name: window.location.href,
          color: 'danger',
          title: 'Error Sub-Message',
          text: error.error.message,
        },
        {
          author_name: window.location.href,
          color: 'danger',
          title: 'Error Status Text',
          text: error.statusText,
        },
        {
          author_name: window.location.href,
          color: 'danger',
          title: 'Error URL',
          text: error.url,
        },
        {
          author_name: window.location.href,
          color: 'danger',
          title: 'Error Name',
          text: error.name,
        },
      ],
    };
    return errorMessage;
  }
}
