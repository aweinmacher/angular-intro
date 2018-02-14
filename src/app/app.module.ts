import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DogService } from './dog.service';
import { LoginService } from './login.service';

import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogEditorComponent } from './dog-editor/dog-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DogService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
