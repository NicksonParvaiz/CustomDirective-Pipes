import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'customDirectiveAndPipe';
  selectedPage = 'directives';
  navigate(page: string) {
    this.selectedPage = page;
  }
}
