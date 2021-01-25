import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { GET_VIBER_GROUP } from '../../app/consts/urls.consts';
import { QuestionnaireAnswersService } from '../services/questionnaire-answers.service';
import { GlobalObjectService } from '../services/shared/global-object.service';
@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.css'],
})
export class CompletionComponent implements OnInit {
  viber_group = GET_VIBER_GROUP();
  windowRef: any;
  constructor(
    windowRef: GlobalObjectService,
    @Inject(PLATFORM_ID) private platformId: object,
    private qAnswers: QuestionnaireAnswersService
  ) {
    this.windowRef = windowRef.getWindow();
  }

  ngOnInit(): void {
    this.qAnswers.saveAnswersToCloud();
  }
  vibrate() {
    if (isPlatformBrowser(this.platformId)) {
      window.navigator.vibrate(10);
    }
  }
}
