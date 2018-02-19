import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dog } from '../dogs/dog';
import { DogService } from '../dog.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-dog-editor',
  templateUrl: './dog-editor.component.html',
  styleUrls: ['./dog-editor.component.css']
})

export class DogEditorComponent implements OnInit {
  dog: Dog = new Dog();
 
  constructor(private dogService: DogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.dog = Object.assign({},this.dogService.getDogs().find(item => item.id === Number(params.id)));
      }
    });
  }

  addDog() {
    this.dogService.addDog(this.dog);
    this.dog = new Dog();
  }

  submitEdit() {
    console.log(this.dog);
    this.dogService.editDog(this.dog.id, this.dog);
    this.dog = new Dog();
  }

  cancelEdit() { this.dog = new Dog(); }

}
