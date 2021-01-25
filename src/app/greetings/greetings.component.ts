import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Subscription } from 'rxjs';
import { Questionnaire } from 'src/models/questionnaire.model';
import { QuestionnaireService } from '../services/questionnaire.service';
import { GlobalObjectService } from '../services/shared/global-object.service';
@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css'],
})
export class GreetingsComponent implements OnInit, OnDestroy {
  windowRef: any;
  sub: Subscription;
  questionnaire: Questionnaire;

  constructor(
    windowRef: GlobalObjectService,
    @Inject(PLATFORM_ID) private platformId: object,
    private router: Router,
    private questionnaireService: QuestionnaireService,
    public deviceService: DeviceDetectorService,
    private title: Title,
    private meta: Meta
  ) {
    this.windowRef = windowRef.getWindow();
  }
  data = {
    title: 'Опрос: Тренировки и Здоровье Позвоночника и Суставов',
    description:
      'Мы хотим узнать, как мы можем помочь Вам оставаться сильными, красивыми и здоровыми',
    image: 'assets/images/open-graph.jpg',
    type: 'website',
    locale: 'en_us',
  };

  ngOnInit(): void {
    this.sub = this.questionnaireService.questionnaire$.subscribe((value) => {
      this.questionnaire = value;
    });
    // this.title.setTitle('Titan Survey');
    // this.meta.addTags([
    //   { name: 'twitter:card', content: 'summary' },
    //   { name: 'og:url', content: '/greetings' },
    //   { name: 'og:title', content: this.data.title },
    //   { name: 'og:description', content: this.data.description },
    //   { name: 'og:image', content: this.data.image },
    // ]);
  }
  startSurvey() {
    if (isPlatformBrowser(this.platformId)) {
      window.navigator.vibrate(10);
    }
    console.log('IsMobile', this.deviceService.isMobile());
    this.router.navigate([this.questionnaire.first_question_url]);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
