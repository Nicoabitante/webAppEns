import { Component, OnInit } from '@angular/core';
import {TasksService} from "./tasks.service";
import {Task} from "../model/task";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  private tasks:any[];
  private task:Task

  closeResult: string;


  constructor( private taskService : TasksService, private modalService : NgbModal) {this.task = new Task;}

  ngOnInit() {
    this.getTask()
  }
  getTask(){
    this.taskService.getTask().subscribe( data =>this.tasks= data );

  }
  postTask(task:Task){
     this.taskService.postTask(task);
    
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.postTask(this.task); this.getTask();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  logout(){
    localStorage.clear()
  }

}
