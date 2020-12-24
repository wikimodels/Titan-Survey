import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, of, from } from 'rxjs';
import { catchError, map, tap, finalize, switchMap } from 'rxjs/operators';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { GET_USER_INFO_BY_IP, IPIFY_IP } from '../consts/urls.consts';
import { UserInfo } from 'src/models/user-info.model';
import { DeviceDetectorService } from 'ngx-device-detector';
import { QuestionnaireAnswersService } from './questionnaire-answers.service';

const formatDisplayDate = 'DD-MM-YY';
const formatDisplayTime = 'HH:mm';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor(
    private readonly http: HttpClient,
    private deviceService: DeviceDetectorService,
    private questionnaireService: QuestionnaireAnswersService
  ) {}

  // private _userInfoSubj = new BehaviorSubject<UserInfo>(null);
  // userInfoSubj$ = this._userInfoSubj.asObservable();

  // getUserInfoSubj(): UserInfo {
  //   return this._userInfoSubj.getValue();
  // }

  // setUserInfoSubj(userInfo: UserInfo) {
  //   this._userInfoSubj.next(userInfo);
  // }

  getUserInfo() {
    return this.http
      .get(IPIFY_IP())
      .pipe(
        switchMap((value) => {
          return this.http.get<UserInfo>(GET_USER_INFO_BY_IP(value['ip']));
        }),
        map((value) => {
          const deviceInfo = this.deviceService.getDeviceInfo();
          value.os = deviceInfo.os;
          value.os_version = deviceInfo.os_version;
          value.browser = deviceInfo.browser;
          return value;
        })
      )
      .subscribe((value: UserInfo) => {
        this.questionnaireService.addUserInfo(value);
      });
  }
}
