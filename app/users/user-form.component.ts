import {Component, Output, EventEmitter} from '@angular/core';
import {Users} from '../model/User';

@Component({
    selector:'user-form',
    styles: [`
    form {
        padding: 10px;
        background: #ECF0F1;
        border-radius: 3px;
        margin-bottom: 30px;
    }
    `],
    template:`
    <form #form="ngForm" (ngSubmit)="onSubmit()" *ngIf="active">
    <div class="form-group" [ngClass]="{'has-error':email.invalid && email.touched}">
        <input type="text" class="form-control" name="email" placeholder="Email"
        required
         [(ngModel)]="newUser.email" #email="ngModel">
        
    <span class="help-block" *ngIf="email.invalid && email.touched"> Email is required.</span>
   
    </div>
 <div class="form-group" [ngClass]="{'has-error':password.invalid && password.touched}">
        <input type="text" class="form-control"
         name="password" placeholder="Password" required 
         [(ngModel)]="newUser.password" #password="ngModel">
    <span class="help-block" *ngIf="password.invalid && password.touched"> Password is required.</span>
   
    </div>
<button type="submit" class="btn btn-lg btn-block btn-primary" [disabled]="form.invalid">
    Create User</button>
    </form>
    `
})

export class UserFormComponent{
    @Output() userCreated = new EventEmitter();
    newUser: Users = new Users();

    active : boolean = true;

    onSubmit(){
        // show the event the user was userCreated

        this.userCreated.emit({ Users: this.newUser});

        console.log(this.newUser);

        this.newUser = new Users();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}