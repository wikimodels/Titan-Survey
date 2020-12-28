import { Component, OnInit } from '@angular/core';
import { IsLoadingService } from '@service-work/is-loading';
@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css'],
})
export class GreetingsComponent implements OnInit {
  constructor(private isLoadingService: IsLoadingService) {}

  show = false;
  ngOnInit(): void {
    this.isLoadingService.isLoading$().subscribe((v) => {
      console.log('loading...', v);
      this.show = v;
    });
  }
}
