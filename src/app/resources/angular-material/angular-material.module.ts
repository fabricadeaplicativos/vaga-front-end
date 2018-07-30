import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatButtonToggleModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatButtonToggleModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
