import { Component, OnInit } from '@angular/core';
import {TasksService} from "./tasks.service";
import {Task} from "../model/task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  private tasks:any[];
  private datos = JSON.parse(localStorage.getItem('data'));


  constructor( private taskService : TasksService) { }

  ngOnInit() {
    this.getTask()
  }
  getTask(){
    this.taskService.getTask(2,this.datos.token).subscribe( data =>this.tasks= data );
    console.log(this.tasks);
  }

  logout(){
    localStorage.clear()
  }

}
