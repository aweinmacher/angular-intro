import { Injectable } from '@angular/core';

const userName: string = 'a';
const password: string = '123';

@Injectable()
export class LoginService {
  access: boolean = true; // or it constantly appears, e.g. for /about route
  constructor() { }
  checkUser(name, pass) {
    if (userName===name && password===pass) {
      this.access = true;
    }
    return this.access;
  }

}
