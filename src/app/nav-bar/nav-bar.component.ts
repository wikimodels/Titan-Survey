import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestQuestionnaireService } from '../services/questionnaire.service';
import { getTestQuestionnaire } from './../consts/test-data';
const q = getTestQuestionnaire();
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private router: Router,
    private testQ: TestQuestionnaireService //private testQ: TestQuestionnaireService
  ) {}

  ngOnInit(): void {}

  getTestQ() {
    this.testQ.getTestQ(q);
  }
  goHome() {
    this.router.navigate(['/']);
  }
}
