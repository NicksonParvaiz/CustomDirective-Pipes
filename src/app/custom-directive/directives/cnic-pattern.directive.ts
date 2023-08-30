import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCnicPattern]',
})
export class CnicPatternDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    const formattedValue = this.formatValue(inputValue);
    (event.target as HTMLInputElement).value = formattedValue;
  }

  private formatValue(value: string): string {
    const sanitizedValue = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    let formattedValue = '';

    for (let i = 0; i < sanitizedValue.length; i++) {
      if (i === 5 || i === 12) {
        formattedValue += '-' + sanitizedValue[i];
      } else {
        formattedValue += sanitizedValue[i];
      }
    }

    return formattedValue;
  }
}
