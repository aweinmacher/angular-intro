import { Component, OnInit, OnDestroy } from '@angular/core';
import { DogService } from './dog.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  userName: string;
  password: string;
  access: boolean = false;

  title = 'my first Angular 2.0 adventure';
  sayHello: any;
  constructor(
    private loginService: LoginService
  ) {}
  ngOnInit() {
    // this.sayHello = window.setInterval(() => console.log('Hello!'),  1000);
  }
  ngOnDestroy() {
    window.clearInterval(this.sayHello);	
  }
  
  login() { this.access = this.loginService.checkUser(this.userName, this.password); }
}
