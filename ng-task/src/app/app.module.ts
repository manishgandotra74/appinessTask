import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { RepoComponent } from './components/repo/repo.component';
import { ServService } from './service/serv.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AntdModule } from './antd-module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule,
    AntdModule
  ],
  providers: [ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
