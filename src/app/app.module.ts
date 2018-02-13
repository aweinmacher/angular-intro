import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DogService } from './dog.service';
import { CatService } from './cat.service';
import { LoginService } from './login.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DogService, CatService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
