import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DogsComponent } from './dogs/dogs.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: DogsComponent},
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
