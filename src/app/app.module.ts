import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomDirectiveModule } from './custom-directive/custom-directive.module';
import { CustomPipeModule } from './custom-pipe/custom-pipe.module';
import { FormExampleComponent } from './form-example/form-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistItemComponent } from './todolist/todolist-item/todolist-item.component';
import { TempDrivenVsReactiveComponent } from './temp-driven-vs-reactive/temp-driven-vs-reactive.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    TodolistComponent,
    TodoformComponent,
    TodolistItemComponent,
    TempDrivenVsReactiveComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    CustomDirectiveModule,
    CommonModule,
    CustomPipeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
