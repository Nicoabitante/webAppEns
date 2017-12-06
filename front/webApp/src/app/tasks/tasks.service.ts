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

  constructor(private http: Http) { }

  getTask(id: number, token: string): Observable<Task>{
    const headers = new Headers();
    headers.append('x-access-token', token);

    return this.http.get(`${this.resourceUrl}/${id}`,{headers: headers}).map((res: Response) => {
      return res.json();
    });
  }

}
