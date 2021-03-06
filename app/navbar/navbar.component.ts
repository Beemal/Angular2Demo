import {Component} from '@angular/core';

@Component({
    selector : 'Mynavbar',
    template : `<nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">MyApp</a>
      </div>
  
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
        <ul class="nav navbar-nav">
          <li class="active"><a routerLink="/home">Home <span class="sr-only">(current)</span></a></li>
          <li><a routerLink="/about-page">About</a></li>
          <li><a routerLink="/data-bind">Data-Bind</a></li>
         <!-- <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a></li>
              <li class="divider"></li>
              <li><a href="#">One more separated link</a></li>
            </ul> 
          </li>  -->
        </ul>
      
        <ul class="nav navbar-nav navbar-right">
          <li><a routerLink="/login-page">Login</a></li>
        </ul>
      </div>
    </div>
  </nav>`
})

export class NavbarComponent{

}