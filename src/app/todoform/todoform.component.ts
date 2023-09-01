import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoItem } from '../todolist/todolist.component';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css'],
})
export class TodoformComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  todoForm: FormGroup;
  isSubmit: boolean = false;
  ngOnInit(): void {
    this.name = new FormControl('');

    this.todoForm = new FormGroup({
      title: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      deadline: new FormControl('', Validators.required),
    });
  }

  id = 1;
  submit() {
    this.isSubmit = true;
    console.log('this.todoForm', this.todoForm);
    if (this.todoForm.valid) {
      let data: TodoItem = {
        id: this.id,
        title: this.todoForm.controls.title.value,
        type: this.todoForm.controls.type.value,
        deadline: this.todoForm.controls.deadline.value,
      };
      console.log('data', data);
      this.todoService.setData(data);
      this.id++;
    }
  }

  name: FormControl;
}
