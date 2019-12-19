import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: AngularFireList<Todo>;

  constructor (private firebasedb: AngularFireDatabase) { }

  getTodoList () {
    return this.todoList = this.firebasedb.list('titles')
  }

  addTitle (title: string) {
    this.todoList.push({
      title: title,
      isChecked: false
    })
  }

  checkOrUncheckTitle ($key: string, flag: boolean) {
    return this.todoList.update($key, { isChecked: flag });
  }

  removeTitle ($key: string) {
    return this.todoList.remove($key);
  }
}
