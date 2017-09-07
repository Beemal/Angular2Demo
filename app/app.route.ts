// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {AppComponent} from './app.component';
import { HomeComponent} from './home/home.component'
// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
      path: 'login-page', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
},
  {
    path: 'about-page', component: AboutComponent
},
  { path: '**', component: AnimationEvent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
