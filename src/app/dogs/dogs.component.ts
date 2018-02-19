import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DogService } from '../dog.service';
import { Dog } from './dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: any[];
  title: string;
  selectedDog: Dog = new Dog();
  lastUpdated: string = '';
  searchName: string = '';

  constructor(private dogService: DogService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.title = "Our dogs";
    this.dogs = this.dogService.getDogs();

    this.route.queryParams.subscribe(queryParams => {
      console.log("name query param is: " + queryParams.name); // http://localhost:4200/?name=woof
      if (queryParams.name) {
        this.dogs = this.dogService.getDogsByName(queryParams.name);
      }
    });
  }

  toggle(i) { this.dogs[i].toggle ? this.dogs[i].toggle = false : this.dogs[i].toggle = true }
  getFormat(i) { return this.dogs[i].toggle ? 'shortDate' : 'fullDate'; }
  deleteDog(i) { return this.dogService.deleteDog(i); }

  editDog(dog: Dog) { // puts the dog into edit-form
    this.selectedDog = Object.assign({}, dog);
  }

  addLastUpdated(dog) {
    this.lastUpdated = "Last dog added: " + new Date().toString() + ", name: " + dog.name;
  }

  addWasEdited(dog) {
    dog.wasEdited = true;
  }

}
