import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dog } from '../dogs/dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-editor',
  templateUrl: './dog-editor.component.html',
  styleUrls: ['./dog-editor.component.css']
})

export class DogEditorComponent implements OnInit {
  @Input() dog: Dog = new Dog();
  @Output() dogAdded : EventEmitter<Dog> = new EventEmitter();
  @Output() dogEdited : EventEmitter<Dog> = new EventEmitter();
  
  constructor(private dogService: DogService) { }
  
  ngOnInit() { }

  addDog() {
    this.dogService.addDog(this.dog); 
    this.dogAdded.emit(this.dog);   
    this.dog = new Dog();
  }

  submitEdit() {
    console.log(this.dog);
    this.dogService.editDog(this.dog.id, this.dog); 
    this.dogEdited.emit(this.dog);
    this.dog = new Dog();
  }

  cancelEdit() {this.dog = new Dog();}

}
