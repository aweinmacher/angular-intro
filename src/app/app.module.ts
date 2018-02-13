import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DogService } from './dog.service';
import { CatService } from './cat.service';
import { LoginService } from './login.service';

import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DogService, CatService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
