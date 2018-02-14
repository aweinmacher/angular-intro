import { Component, OnInit } from '@angular/core';
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
  constructor(private dogService: DogService) { }

  ngOnInit() {
    this.title = "Our dogs";
    this.dogs = this.dogService.getDogs();
  }

  toggle(i) { this.dogs[i].toggle ? this.dogs[i].toggle = false : this.dogs[i].toggle = true }
  getFormat(i) { return this.dogs[i].toggle ? 'shortDate' : 'fullDate'; }
  deleteDog(i) { return this.dogService.deleteDog(i); }
}
