import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
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
import { GREETINGS } from './consts/routes.consts';
import { CookieService } from 'ngx-cookie-service';
import { Questionnaire } from 'src/models/questionnaire.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Titan Surver';
  isLoading$: Observable<boolean>;

  constructor(
    private userInfoService: UserInfoService,
    private questionnaireService: QuestionnaireService,
    private isLoadingService: IsLoadingService,
    private router: Router,
    private coockieService: CookieService,
    private cd: ChangeDetectorRef
  ) {}
  ngOnInit() {
    if (this.coockieService.get('areadyBeenHere')) {
      console.log('AREADY BEEN HERE');
    } else {
      this.coockieService.set('areadyBeenHere', '');
    }
    this.router.navigate([GREETINGS]);

    this.userInfoService.getUserInfo();
    // this.qService.getQuestionnaireByQid('d0819d57-e5d9-44f0-ab42-af03b231aefe');
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
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}

//TODO: don't forget to specify the region of ssr function in firebase.json file
//TODO: try again to disable the back-button by installing package for fixing Universal window issue and disable-back-button package.
//TODO:Refacto Questionnaire RxJS to make it work nicely
//TODO: Fix landscape for large mobiles
