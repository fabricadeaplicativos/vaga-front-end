import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressBarModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressBarModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
