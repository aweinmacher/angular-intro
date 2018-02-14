import { Component, OnInit } from '@angular/core';
import { Dog } from '../dogs/dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-editor',
  templateUrl: './dog-editor.component.html',
  styleUrls: ['./dog-editor.component.css']
})

export class DogEditorComponent implements OnInit {
  dog:Dog = new Dog();
  constructor(private dogService: DogService) { }
  ngOnInit() {}
  addDog(){ this.dogService.addDog(this.dog); }
}
