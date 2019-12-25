import { LoginComponent } from './../../login/login.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthDefaultComponent } from './auth-default/auth-default.component';



@NgModule({
  declarations: [LoginComponent, AuthDefaultComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutAuthModule { }
