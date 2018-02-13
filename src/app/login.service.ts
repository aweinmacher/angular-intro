import { Injectable } from '@angular/core';

const userName: string = 'a';
const password: string = '123';

@Injectable()
export class LoginService {
  constructor() { }
  checkUser(name, pass) {return userName===name && password===pass ? true : false;}

}
