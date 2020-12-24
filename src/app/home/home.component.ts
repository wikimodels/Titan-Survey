import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, finalize, switchMap } from 'rxjs/operators';
import { UserInfoService } from '../services/user-info.service';
import { TestQuestionnaireService } from '../services/questionnaire.service';
import { Router } from '@angular/router';
import {
  BASE,
  HOME,
  SINGLE_ANSWER,
  MULTI_ANSWER,
  TEXT_ANSWER,
} from '../../app/consts/routes.consts';
import { QuestionType } from 'src/models/questionnaire.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  q = null;
  constructor(
    private testQ: TestQuestionnaireService,
    private router: Router
  ) {}
  ngOnInit() {
    this.testQ.questionnaireSubj$.subscribe((v) => {
      this.q = v;
      console.log('TEST Q', this.q);
    });
  }

  startQ() {
    const url = this.testQ.getRouterForFirstQuestion();
    this.router.navigate([url]);
  }
}
