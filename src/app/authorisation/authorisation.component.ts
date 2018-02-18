import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-authorisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.css']
})

export class AuthorisationComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() { this.loginService.checkUser(this.userName, this.password); }

}
