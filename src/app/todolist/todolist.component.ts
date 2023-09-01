import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  constructor(private todoService : TodoService) {}

  data: TodoItem[] = [];
  ngOnInit(): void {
    this.data = this.todoService.getData();
  }


}

export interface TodoItem {
  id: number;
  title: string;
  type: string;
  deadline: Date;
}
