import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from './services/questionnaire.service';
import { UserInfoService } from './services/user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Titan Surver';
  constructor(
    private userInfoService: UserInfoService,
    private qService: QuestionnaireService
  ) {}
  ngOnInit() {
    this.userInfoService.getUserInfo();
    this.qService.getTestQ();
  }
}
