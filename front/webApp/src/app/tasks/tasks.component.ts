import { Component, OnInit } from '@angular/core';
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  private tasks:any[];
  private datos = JSON.parse(localStorage.getItem('data'));


  constructor(taskSerive : TasksService) { }

  ngOnInit() {
    this.getTask()
  }
  getTask(){
    console.log(this.datos);
    console.log(this.datos.token)
    // this.id = this.datos.data.id;
    // this.token = this.datos.token;
    // console.log(this.id);
    // console.log(this.token);
  }

  logout(){
    localStorage.clear()
  }

}
