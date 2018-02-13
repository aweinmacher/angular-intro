import { Component, OnInit, OnDestroy } from '@angular/core';
import { DogService } from './dog.service';
import { CatService } from './cat.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'my first Angular 2.0 adventure';
  sayHello: any;
  dogs:any[];
  cats:any[];
  dogName: string = 'Rex';
  dogWeight: number = 7;
  birthDate: Date;
  constructor(
    private dogService: DogService,
    private catService: CatService,
    private loginService: LoginService
  ) {}
  ngOnInit() { 
    this.dogs = this.dogService.getDogs();
    this.cats = this.catService.getCats();
    // this.sayHello = window.setInterval(() => console.log('Hello!'),  1000);
  }
  ngOnDestroy() {
    window.clearInterval(this.sayHello);	
  }
  addDog(){
    this.dogs.push({
      name: this.dogName, 
      weight: this.dogWeight, 
      birthDate: this.birthDate,
      toggle:false
    }); 
  }
  toggle(i){ this.dogs[i].toggle ? this.dogs[i].toggle=false : this.dogs[i].toggle=true }
  getFormat(i) { return this.dogs[i].toggle ? 'shortDate' : 'fullDate';}
  getBtn(i) { return this.dogs[i].toggle ? '+' : '-';}
  deleteDog(i) { return this.dogService.deleteDog(i); } 
  userName: string;
  password: string;
  access: boolean = false;
  login() { this.access = this.loginService.checkUser(this.userName, this.password); }
}
