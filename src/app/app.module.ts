import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DogService } from './dog.service';
import { LoginService } from './login.service';

import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogEditorComponent } from './dog-editor/dog-editor.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { AuthorisationComponent } from './authorisation/authorisation.component';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogEditorComponent,
    AboutComponent,
    AuthorisationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DogService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
