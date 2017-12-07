import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Task} from "../model/task";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Response } from '@angular/http';


@Injectable()
export class TasksService {
  private  resourceUrl ='http://localhost:3000/tasks';
  private datos = JSON.parse(localStorage.getItem('data'));

  constructor(private http: Http) { }

  getTask(): Observable<Task[]>{
    const headers = new Headers();
    headers.append('x-access-token', this.datos.token);

    return this.http.get(`${this.resourceUrl}`,{headers: headers}).map((res: Response) => {
      return res.json() as Task[];
    });
  }
  postTask(task:Task){
    const headers = new Headers();
    headers.append('x-access-token', this.datos.token);
    this.http.post(`${this.resourceUrl}`,task,{headers: headers}).subscribe( res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      });

  }
  deleteTask(id:number){
    const headers = new Headers();
    headers.append('x-access-token', this.datos.token);
    this.http.delete(`${this.resourceUrl}/${id}`,{headers:headers}).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      });

  }

}
