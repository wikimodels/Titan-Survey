import { Component, Inject, OnInit } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-basic-snackbar',
  templateUrl: './basic-snackbar.component.html',
  styleUrls: ['./basic-snackbar.component.css'],
})
export class BasicSnackbarComponent implements OnInit {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: string,
    private _snackRef: MatSnackBarRef<BasicSnackbarComponent>
  ) {
    this._snackRef.afterDismissed().subscribe((v) => {
      console.log('Snackbar dismissed', v);
    });
    this._snackRef.afterOpened().subscribe((v) => {
      console.log('Snackbar afterOpened', v);
    });
  }

  ngOnInit(): void {}
  dismiss() {
    this._snackRef.dismiss();
  }
}
