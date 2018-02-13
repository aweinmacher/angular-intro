import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatService } from './cat.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'my first Angular 2.0 adventure';
  userName: string;
  password: string;
  access: boolean = false;
  sayHello: any;
  cats:any[];
  constructor(
    private catService: CatService,
    private loginService: LoginService
  ) {}
  ngOnInit() {
    this.cats = this.catService.getCats();
    // this.sayHello = window.setInterval(() => console.log('Hello!'),  1000);
  }
  ngOnDestroy() {
    window.clearInterval(this.sayHello);	
  }
  login() { this.access = this.loginService.checkUser(this.userName, this.password); }
}
