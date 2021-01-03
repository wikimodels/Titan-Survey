import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ANALYTICS, USERS } from 'src/app/consts/routes.consts';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private router: Router //private userS: UserInfoService, //private testQ: QuestionnaireService //private testQ: TestQuestionnaireService
  ) {}

  ngOnInit(): void {}

  goToUsers() {
    this.router.navigate([ANALYTICS, { outlets: { analytics: USERS } }]);
  }
}
