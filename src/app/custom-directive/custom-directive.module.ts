import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrengthDirective } from './directives/password-strength.directive';
import { CnicPatternDirective } from './directives/cnic-pattern.directive';
import { CustomDirectiveExampleComponent } from './custom-directive-example/custom-directive-example.component';

@NgModule({
  declarations: [
    PasswordStrengthDirective,
    CnicPatternDirective,
    CustomDirectiveExampleComponent,
  ],
  imports: [CommonModule],
  exports: [CustomDirectiveExampleComponent],
})
export class CustomDirectiveModule {}
