import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   private user: User;
  constructor( private loginService: LoginService) {this.user = new User;}

  ngOnInit() {}

    login() {
      this.loginService.login(this.user)

    }

}
