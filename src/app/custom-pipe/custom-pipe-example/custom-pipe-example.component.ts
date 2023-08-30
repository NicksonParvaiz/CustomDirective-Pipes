import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-example',
  templateUrl: './custom-pipe-example.component.html',
  styleUrls: ['./custom-pipe-example.component.css'],
})
export class CustomPipeExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  price = 123;
  dob: Date = new Date(new Date().setFullYear(2000));
  desc: string =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati duci';
}
