import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomDirectiveModule } from './custom-directive/custom-directive.module';
import { CustomPipeModule } from './custom-pipe/custom-pipe.module';
import { FormExampleComponent } from './form-example/form-example.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, FormExampleComponent],
  imports: [
    BrowserModule,
    CustomDirectiveModule,
    CommonModule,
    CustomPipeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
