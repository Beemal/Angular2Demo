import {Component} from '@angular/core';
import {Users} from '../model/User';
import {Router} from '@angular/router';
@Component({
    selector :'login-page',
    styleUrls :['./app/assets/style.css'], 
    templateUrl : './app/login/login.html'
})

export class LoginComponent{
    private _router : Router;
    user : Users =  new Users();
    login(){
        if(this.user.email === "a@a.com" && this.user.password === "a")
            // this._router.navigate(['/profile']);
            console.log("Login Success");
        else
        console.log("Login Error");
    }
}