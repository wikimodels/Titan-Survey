import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../services/questionnaire.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private router: Router,
    private testQ: QuestionnaireService //private testQ: TestQuestionnaireService
  ) {}

  ngOnInit(): void {}

  getTestQ() {
    this.testQ.getTestQ();
  }
  goHome() {
    this.router.navigate(['/']);
  }
}
