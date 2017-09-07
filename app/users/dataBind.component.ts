import {Component} from '@angular/core';
import{Users} from '../model/User';

@Component({
    selector: 'data-bind',
    template: `<div class="row">
    <div class="col-sm-4">
        <div *ngIf="users">
            <ul class="list-group users-list">
                <li class="list-group-item" *ngFor="let user of users" 
                (click)="selectUser(user)" 
                [class.active]="user === activeUser">
                    {{user.email}} ({{user.password}})
                </li>
            </ul>
        </div>

        <user-form (userCreated)="onUserCreated($event)"></user-form>
    </div>

    <div class="col-sm-8">
       
<user-profile [user] = "activeUser"></user-profile>

        <div class="jumbotron" *ngIf="!activeUser">
            <span class="glyphicon glyphicon-hand-left"></span>
            <h2>Choose a user or person</h2>
        </div>
    </div>
</div>`
})

export class DataBindComponent{
    users :Users[]= [{
        id: 25,
        email: 'Bimal',
        password: 'bimalparajuli'
    }];
    activeUser :Users;
    
        selectUser(user) {
            this.activeUser = user;
            console.log(this.activeUser);
        }
    
        onUserCreated(event){
            this.users.push(event.user);
        }
}