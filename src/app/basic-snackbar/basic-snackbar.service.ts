import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarRef,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { BasicSnackbarComponent } from 'src/app/basic-snackbar/basic-snackbar.component';
import { MessageType } from './models/message-type';

@Injectable({
  providedIn: 'root',
})
export class BasicSnackbarService {
  //create an instance of MatSnackBar
  snackBarRef: MatSnackBarRef<any>;
  private snackBarConfig: MatSnackBarConfig;
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  private snackBarAutoHide = '3000';
  constructor(private snackBar: MatSnackBar) {}

  open(message: string, type: MessageType) {
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.horizontalPosition = this.horizontalPosition;
    this.snackBarConfig.verticalPosition = this.verticalPosition;
    this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
    const sbClass =
      type === MessageType.INFO ? 'info-snackbar' : 'warning-snackbar';
    this.snackBarConfig.panelClass = sbClass;
    this.snackBarConfig.data = message;

    this.snackBar.openFromComponent(
      BasicSnackbarComponent,
      this.snackBarConfig
    );
  }
}
