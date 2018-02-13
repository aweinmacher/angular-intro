import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  title = 'Dogs';
  dogs: any[];
  dogName: string = 'Rex';
  dogWeight: number = 7;
  birthDate: Date;
  constructor(
    private dogService: DogService) { }

  ngOnInit() {
    this.dogs = this.dogService.getDogs();
  }
  addDog() {
    this.dogs.push({
      name: this.dogName,
      weight: this.dogWeight,
      birthDate: this.birthDate,
      toggle: false
    });
  }
  toggle(i) { this.dogs[i].toggle ? this.dogs[i].toggle = false : this.dogs[i].toggle = true }
  getFormat(i) { return this.dogs[i].toggle ? 'shortDate' : 'fullDate'; }
  getBtn(i) { return this.dogs[i].toggle ? '+' : '-'; }
  deleteDog(i) { return this.dogService.deleteDog(i); }
}
