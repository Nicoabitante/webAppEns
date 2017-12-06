import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {User} from "../model/user";

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(user: User){
    this.http.post('http://localhost:3000/login',{"username": user.username, "password": user.password
    }).subscribe( data => localStorage.setItem("token", data.text()),
      err => console.log(err.text()),
      () => console.log("ok"))
  }

}
