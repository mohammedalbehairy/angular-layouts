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
          //loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule)
        },
        {
          path: 'posts',
          component: PostsComponent
          //loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule)
        },
        {
          path: '**',
          redirectTo: '/home'
        }
      ]
    },
    {
      path: '**',
      redirectTo: 'products/home'
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
