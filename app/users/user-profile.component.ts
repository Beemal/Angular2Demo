import {Component, Input} from '@angular/core';
import {Users} from '../model/user';


@Component({
    selector:'user-profile',
    template:`
     <div class="jumbotron" *ngIf="user">
                <h2>{{user.email}} <small>({{user.password}})</small></h2>
                <input class="form-control" [(ngModel)]="user.name">
            </div>
    `
})

export class UserProfileComponent{
    @Input() user: Users;
}
