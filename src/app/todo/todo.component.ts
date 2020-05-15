import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  todos= []
todoForm = this.fb.group({
todo :['',Validators.required],
})
  ngOnInit() {
  }
addTodo(){
  this.todos.unshift(this.todoForm.get('todo').value)
  this.todoForm.reset()
}
editTodo(item){
this.todoForm.patchValue({
  todo:this.todos[item]
})
this.todos.splice(item,1)
}
deleteTodo(item){
  this.todos.splice(item,1)
}
clearAllTodo(){
  this.todos =[]
}
}
