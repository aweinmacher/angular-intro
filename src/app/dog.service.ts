import { Injectable } from '@angular/core';
import { Dog } from './dogs/dog';

const DOGS:Array<Dog> = [
  { id: 1, name: 'Rex', weight: 20, birthDate: new Date(2006, 2, 21), toggle: false },
  { id: 2, name: 'Woof', weight: 8, birthDate: new Date(2011, 8, 12), toggle: false },
  { id: 3, name: 'Chuck', weight: 28, birthDate: new Date(2015, 5, 6), toggle: false },
  { id: 4, name: 'Barkley', weight: 4, birthDate: new Date(2012, 3, 15), toggle: false },
  { id: 5, name: 'Prince', weight: 65, birthDate: new Date(2017, 5, 4), toggle: false }
];

@Injectable()
export class DogService {
  dogs:Dog[] = DOGS;
  constructor() { }

  getDogs(): Dog[] { return this.dogs; }
  deleteDog(index:number) { DOGS.splice(index, 1); }
  
  generateId(): number {
  	return this.dogs[this.dogs.length - 1].id + 1;
  }

  addDog(newDog: Dog){
  	newDog.id = this.generateId();
  	this.dogs.push(newDog);
  }

}
