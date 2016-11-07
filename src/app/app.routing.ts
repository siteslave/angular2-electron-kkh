import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component'
import { AboutComponent } from './about/about.component'
import { NewComponent } from './new/new.component'
import { LoginComponent } from './login/login.component'

const appRoutes: Routes = [
  { path: '', component: LoginComponent },// http://localhost:4200/
  { path: 'login', component: LoginComponent }, // http://localhost:4200/login
  { path: 'users', component: UsersComponent },// http://localhost:4200/users
  { path: 'about', component: AboutComponent },// http://localhost:4200/about
  { path: 'new', component: NewComponent },// http://localhost:4200/new
  { path: ':id', component: NewComponent }, // http://localhost:4200/123456
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);