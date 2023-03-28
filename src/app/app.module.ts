import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  AppComponent
} from './app.component';
import {
  NewTaskComponent
} from './new-task/new-task.component';
import {
  dropdownDirective
} from './new-task/pop-up/dropdown.directive';
import {
  MaterialModule
} from './shared/material.module';
import {
  ReactiveFormsModule
} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    dropdownDirective
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
