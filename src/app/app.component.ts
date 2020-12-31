import { Component, OnInit } from '@angular/core';
import {
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IsLoadingService } from '@service-work/is-loading';
import { QuestionnaireService } from './services/questionnaire.service';
import { UserInfoService } from './services/user-info.service';
import { GREETIGNS } from './consts/routes.consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Titan Surver';
  isLoading$: Observable<boolean>;
  constructor(
    private userInfoService: UserInfoService,
    private qService: QuestionnaireService,
    private isLoadingService: IsLoadingService,
    private router: Router
  ) {}
  ngOnInit() {
    this.router.navigate(['/rating-answer/6']);
    this.userInfoService.getUserInfo();
    this.qService.getQuestionnaireByQid('d0819d57-e5d9-44f0-ab42-af03b231aefe');

    this.isLoading$ = this.isLoadingService.isLoading$();

    this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError
        )
      )
      .subscribe((event) => {
        // If it's the start of navigation, `add()` a loading indicator
        if (event instanceof NavigationStart) {
          this.isLoadingService.add();
          return;
        }

        // Else navigation has ended, so `remove()` a loading indicator
        this.isLoadingService.remove();
      });
  }
}
