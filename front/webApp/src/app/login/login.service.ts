import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {User} from "../model/user";

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(user: User){
    this.http.post('http://localhost:3000/login',{"username": user.username, "password": user.password
    }).map(response => response.json().data as User)
      .subscribe( data => localStorage.setItem("data", JSON.stringify(data)),
      err => console.log(err.text()),
      () => console.log(localStorage.getItem("data")));
  }
  isAuthenticated(){
    if(localStorage.getItem("data")){
      return true
    }
    else {
      return false
    }
  }
}
