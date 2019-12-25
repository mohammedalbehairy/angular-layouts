import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AuthDefaultComponent } from './layout/layout-auth/auth-default/auth-default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { DefaultComponent } from './core/default/default.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =
  [
    {
      path: '',
      component: DefaultComponent,
      children: [
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'posts',
          component: PostsComponent
        }
      ]
    },
    {
      path: 'admin',
      component: LayoutAdminComponent,
      children: [
        {
          path: '',
          component: DashboardComponent
        },
        {
          path: '**',
          redirectTo: ''
        }
      ]
    },
    {
      path: 'auth',
      component: AuthDefaultComponent,
      children: [
        {
          path: 'sign-up',
          component: SignUpComponent
        },
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: '**',
          redirectTo: ''
        }
      ]
    },
    {
      path: '**',
      component: HomeComponent
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
