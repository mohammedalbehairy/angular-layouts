import { LayoutAuthModule } from './layout/layout-auth/layout-auth.module';
import { LayoutAdminModule } from './layout/layout-admin/layout-admin.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutAdminModule,
    LayoutAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
