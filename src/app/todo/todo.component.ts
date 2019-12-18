import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.css' ]
})
export class TodoComponent implements OnInit {
  todoListArray: any[];

  constructor (private todoService: TodoService) { }

  ngOnInit () {
    this.todoService.getTodoList().snapshotChanges()
      .subscribe(item => {
        this.todoListArray = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x[ "$key" ] = element.key;
          this.todoListArray.push(x)
        });
        // sort array isChecked false -> true
        this.todoListArray.sort((a, b) => a.isChecked - b.isChecked);
      });
  }

  onAdd (itemTitle) {
    this.todoService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }
}
