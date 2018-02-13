import { Injectable } from '@angular/core';

const DOGS = [
  { name: 'Rex', weight: 20, birthDate: new Date(2006, 2, 21), toggle: false },
  { name: 'Woof', weight: 8, birthDate: new Date(2011, 8, 12), toggle: false },
  { name: 'Chuck', weight: 28, birthDate: new Date(2015, 5, 6), toggle: false },
  { name: 'Barkley', weight: 4, birthDate: new Date(2012, 3, 15), toggle: false },
  { name: 'Prince', weight: 65, birthDate: new Date(2017, 5, 4), toggle: false }
];

@Injectable()
export class DogService {

  constructor() { }
  getDogs() { return DOGS; }
  deleteDog(index:number) {
    DOGS.splice(index, 1);
  }

}
