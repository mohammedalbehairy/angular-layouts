import { RouterModule } from '@angular/router';
import { PostsComponent } from './../posts/posts.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
