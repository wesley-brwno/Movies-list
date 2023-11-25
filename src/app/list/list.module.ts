import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieComponent
  ],
  exports: [
    MovieListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListModule { }
