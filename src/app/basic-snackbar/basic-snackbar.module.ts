import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicSnackbarComponent } from './basic-snackbar.component';
import { AppMaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [BasicSnackbarComponent],
  imports: [CommonModule, FlexLayoutModule, AppMaterialModule],
  entryComponents: [BasicSnackbarComponent],
  exports: [BasicSnackbarComponent],
})
export class BasicSnackbarModule {}
