import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageFromDob',
})
export class AgeFromDobPipe implements PipeTransform {
  transform(birthdate: Date): number {
    if (!birthdate) {
      return 0;
    }

    const today = new Date();
    const birthDate = new Date(birthdate);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }
}
