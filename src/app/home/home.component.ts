import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, finalize, switchMap } from 'rxjs/operators';
import { UserInfoService } from '../services/user-info.service';
import { QuestionnaireService } from '../services/questionnaire.service';
import { Router } from '@angular/router';

import { QuestionType } from 'src/models/questionnaire.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
