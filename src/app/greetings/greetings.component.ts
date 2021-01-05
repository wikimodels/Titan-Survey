import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { IsLoadingService } from '@service-work/is-loading';
import { DeviceDetectorService } from 'ngx-device-detector';
import { QuestionnaireService } from '../services/questionnaire.service';
@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css'],
})
export class GreetingsComponent implements OnInit, AfterViewInit {
  constructor(
    private router: Router,
    private questionnaireService: QuestionnaireService,
    public deviceService: DeviceDetectorService
  ) {}

  show = false;
  frame = '';

  chartWidth = '';
  chartHeight = '';
  ngOnInit(): void {
    if (this.deviceService.isMobile()) {
      this.chartWidth = '340';
      this.chartHeight = '280';
      this.frame = 'mobile';
    } else {
      this.chartWidth = '640';
      this.chartHeight = '480';
      this.frame = 'mobile';
    }
  }
  startSurvey() {
    window.navigator.vibrate(10);
    const url = this.questionnaireService.getFirstQuestionUrl();
    console.log('IsMobile', this.deviceService.isMobile());
    this.router.navigate([url]);
  }

  ngAfterViewInit() {}

  loadIframe() {
    this.frame = 'desktop';
  }
}
