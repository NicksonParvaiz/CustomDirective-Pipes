import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeFromDobPipe } from './pipes/age-from-dob.pipe';
import { TextOverflowEllipsisPipe } from './pipes/text-overflow-ellipsis.pipe';
import { CustomPipeExampleComponent } from './custom-pipe-example/custom-pipe-example.component';

@NgModule({
  declarations: [
    AgeFromDobPipe,
    TextOverflowEllipsisPipe,
    CustomPipeExampleComponent,
  ],
  imports: [CommonModule],
  exports: [CustomPipeExampleComponent],
})
export class CustomPipeModule {}
