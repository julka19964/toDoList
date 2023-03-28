import {
  NgModule
} from '@angular/core';
import {
  MatCardModule
} from '@angular/material/card';
import {
  MatListModule
} from '@angular/material/list';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatDividerModule
} from '@angular/material/divider';
import {
  MatIconModule
} from '@angular/material/icon';

const materialModules = [MatCardModule];
const matButtonModule = [MatButtonModule];
const matListModule = [MatListModule];
const matDividerModule = [MatDividerModule];
const matIconModule = [MatIconModule];

@NgModule({
  declarations: [],
  imports: [
    materialModules,
    matButtonModule,
    matListModule,
    matDividerModule,
    matIconModule
  ],
  exports: [
    materialModules,
    matButtonModule,
    matListModule,
    matDividerModule,
    matIconModule
  ]
})
export class MaterialModule {}
