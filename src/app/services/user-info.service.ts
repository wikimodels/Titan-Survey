import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, of, from } from 'rxjs';
import { catchError, map, tap, finalize, switchMap } from 'rxjs/operators';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import {
  GET_ALL_ANSWERED_USERS,
  GET_ALL_USERS_GROUPED_BY_LOCATION,
  GET_USER_INFO_BY_IP,
  IPIFY_IP,
} from '../consts/urls.consts';
import {
  AnsweredGroupedUser,
  AnsweredUser,
  UserInfo,
} from 'src/models/user-info.model';
import { DeviceDetectorService } from 'ngx-device-detector';
import { QuestionnaireAnswersService } from './questionnaire-answers.service';

//import { findIP, addIP } from '../../assets/scripts/ip';

const formatDisplayDate = 'DD-MM-YY';
const formatDisplayTime = 'HH:mm';
declare global {
  interface Window {
    ActiveXObject: any;
  }
}
declare var ActiveXObject: (type: string) => void;
@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor(
    private readonly http: HttpClient,
    private deviceService: DeviceDetectorService,
    private questionnaireService: QuestionnaireAnswersService
  ) {}

  getUserInfo() {
    return this.http
      .get(IPIFY_IP())
      .pipe(
        map((value) => {
          const ip = value['ip'].split(',')[0];
          return ip;
        }),
        switchMap((value) => {
          return this.http.get<UserInfo>(GET_USER_INFO_BY_IP(value));
        }),
        map((value: UserInfo) => {
          const deviceInfo = this.deviceService.getDeviceInfo();
          console.log('UI', deviceInfo);
          value.location = {
            type: 'Point',
            coordinates: [value.lon, value.lat],
          };
          value.os_version = deviceInfo.os_version;
          value.browser = deviceInfo.browser;
          return value;
        })
      )
      .subscribe((value: UserInfo) => {
        console.log('USER Info', value);
        this.questionnaireService.addUserInfo(value);
      });
  }

  getAllAnsweredUsers() {
    this.http
      .get<AnsweredUser[]>(GET_ALL_ANSWERED_USERS())
      .pipe(
        catchError((error) => {
          console.log(error);
          return from([]);
        })
      )
      .subscribe((value: AnsweredUser[]) => {
        console.log('answered users', value);
      });
  }

  getAllUsersGroupedByLocation() {
    this.http
      .get<AnsweredGroupedUser[]>(GET_ALL_USERS_GROUPED_BY_LOCATION())
      .pipe(
        catchError((error) => {
          console.log(error);
          return from([]);
        })
      )
      .subscribe((value: AnsweredUser[]) => {
        console.log('answered grouped users', value);
      });
  }
}
