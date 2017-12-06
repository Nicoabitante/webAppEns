import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from "./login/login.service";
import {Http, HttpModule} from "@angular/http";
import { TasksComponent } from './tasks/tasks.component';
import {TasksService} from "./tasks/tasks.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  providers: [LoginService, TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
