import { Injectable } from '@angular/core';
import { TodoItem } from './todolist/todolist.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  data: TodoItem[] = [
    // { id: 1, title: 'Task 1', type: 'Urgent', deadline: new Date() },
    // { id: 2, title: 'Task 2', type: 'Normal', deadline: new Date() },
    // { id: 3, title: 'Task 3', type: 'Urgent', deadline: new Date() },
  ];



  getData(){
    return this.data;
  }

  setData(item:TodoItem){
    this.data.push(item);
  }

}
