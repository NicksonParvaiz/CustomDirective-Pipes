import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
enum PasswordStrength {
  Weak = 'weak',
  Medium = 'medium',
  Strong = 'strong',
}
@Directive({
  selector: '[appPasswordStrength]',
})
export class PasswordStrengthDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input') onInput() {
    const inputValue = (this.el.nativeElement as HTMLInputElement).value;
    const strength = this.calculateStrength(inputValue);
    this.updateBorderStyle(strength);
  }

  private calculateStrength(password: string): PasswordStrength {
    // Implement your password strength evaluation logic here
    // For this example, we'll use a simple length-based approach
    if (password.length < 8) {
      return PasswordStrength.Weak;
    } else if (password.length < 12) {
      return PasswordStrength.Medium;
    } else {
      return PasswordStrength.Strong;
    }
  }

  private updateBorderStyle(strength: PasswordStrength) {
    const inputElement = this.el.nativeElement;
    inputElement.classList.remove(
      PasswordStrength.Weak,
      PasswordStrength.Medium,
      PasswordStrength.Strong
    );
    inputElement.classList.add(strength);

    const siblingSpan = this.el.nativeElement.nextElementSibling;
    if (siblingSpan && siblingSpan.classList.contains('password-status')) {
      const strengthText = strength;
      this.renderer.setProperty(siblingSpan, 'innerHTML', strengthText);
    }
  }
}
