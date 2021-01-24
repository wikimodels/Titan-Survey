import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../services/questionnaire.service';
import { UserInfoService } from '../services/user-info.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private router: Router,
    private userS: UserInfoService,
    private testQ: QuestionnaireService //private testQ: TestQuestionnaireService
  ) {}

  ngOnInit(): void {}

  uploadQuestionnaire() {
    this.testQ.uploadQuestionnaire();
  }
  goHome() {
    this.router.navigate(['/']);
  }

  startQ() {
    const url = this.testQ.getQuestionnaireSubj().first_question_url;
    this.router.navigate([url]);
  }
  getAllUsers() {
    this.userS.getAllAnsweredUsers();
  }
  getAllGroupedUsers() {
    this.userS.getAllUsersGroupedByLocation();
  }
}
