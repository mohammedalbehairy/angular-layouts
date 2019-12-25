import { DashboardComponent } from '../../dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAdminComponent } from './layout-admin.component';



@NgModule({
  declarations: [LayoutAdminComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutAdminModule { }
