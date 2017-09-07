import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.route';
import { AboutComponent } from './about/about.component';
import { HomeComponent} from './home/home.component';
import {DataBindComponent} from './users/dataBind.component';
import {UserFormComponent} from './users/user-form.component';
import {UserProfileComponent} from './users/user-profile.component';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        routing
        ],
    declarations: [
         AppComponent, NavbarComponent, LoginComponent, AboutComponent, HomeComponent,
         DataBindComponent, UserFormComponent, UserProfileComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}