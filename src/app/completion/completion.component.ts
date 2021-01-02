import { Component, OnInit } from '@angular/core';
import { GET_VIBER_GROUP } from '../../app/consts/urls.consts';
@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.css'],
})
export class CompletionComponent implements OnInit {
  viber_group = ''; //GET_VIBER_GROUP();
  constructor() {}

  ngOnInit(): void {}
}
