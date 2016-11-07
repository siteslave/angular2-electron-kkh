import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NewComponent } from './new/new.component';
import { AboutComponent } from './about/about.component';

import { routing } from './app.routing';
import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NewComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    { provide: 'API_URL', useValue: 'http://localhost:3000' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
