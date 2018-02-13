import { Injectable } from '@angular/core';

const CATS = [
  { name: 'Begemot', weight: 2, birthDate: new Date(2006, 2, 21) },
  { name: 'InBoots', weight: 4, birthDate: new Date(2011, 8, 12) },
  { name: 'Cheshire', weight: 5, birthDate: new Date(2015, 5, 6) },
];

@Injectable()
export class CatService {

  constructor() { }
  getCats() { return CATS; }
}
