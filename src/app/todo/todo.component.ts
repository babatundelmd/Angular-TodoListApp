import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.css' ]
})
export class TodoComponent implements OnInit {
  todoListArray: any[];

  constructor (private todoService: TodoService, private toastr: ToastrService) { }

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
  // Add Todo Item
  onAdd (itemTitle) {
    if (!itemTitle.value) {
      console.log(itemTitle.value)
      this.toastr.warning('Enter a task, input field can\'t be empty', 'Add Task');
    }
    else {
      this.todoService.addTitle(itemTitle.value);
      this.toastr.success('Task Successfully Added!', 'Add Task');
    }
    itemTitle.value = null;

  }
  // Check Item
  alterCheck ($key: string, isChecked) {
    this.todoService.checkOrUncheckTitle($key, !isChecked);
    this.toastr.info('You have completed a task', 'Task Completed');
  }
  // Delete a Todo Item
  onDelete ($key: string) {
    this.todoService.removeTitle($key);
    this.toastr.error('Task Removed Successfully!', 'Remove Todo Task');

  }

}
