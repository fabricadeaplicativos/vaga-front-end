import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
