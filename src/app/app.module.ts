import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {ReactiveFormsModule, FormGroup,FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TodoComponent } from './todo/todo.component';
import { DiaryComponent } from './diary/diary.component';

const appRoutes:Routes =[
  { path:'' ,component: MenuComponent},
  { path:'file-upload' ,component: FileUploadComponent},
  { path:'todo' ,component: TodoComponent},
  { path:'diary' ,component: DiaryComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    TodoComponent,
    DiaryComponent,
    FileUploadComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
