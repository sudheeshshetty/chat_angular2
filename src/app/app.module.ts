import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component';
import { ChatComponent } from './chat.component';


@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule, RouterModule ],
  declarations: [ AppComponent, LoginComponent, ChatComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
