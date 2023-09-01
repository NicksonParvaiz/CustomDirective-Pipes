import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../todolist.component';

@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.css']
})
export class TodolistItemComponent implements OnInit {

  constructor() { }
  @Input() item : TodoItem;
  ngOnInit(): void {
  }

}
