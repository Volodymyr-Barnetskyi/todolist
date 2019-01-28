import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TodoComponent implements OnInit {
  public tasks = [];
  public forma: FormGroup = new FormGroup({
    task: new FormControl('')
  });
  confirm() {
    this.tasks.push(this.forma.value.task);
    this.forma.reset();
  }
  constructor() { }

  ngOnInit() {
  }

}
