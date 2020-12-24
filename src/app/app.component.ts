import { Component, OnInit } from '@angular/core';
import { UserInfoService } from './services/user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Titan Surver';
  constructor(private userInfoService: UserInfoService) {}
  ngOnInit() {
    this.userInfoService.getUserInfo();
  }
}
