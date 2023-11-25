import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieFormModalComponent } from './movie-form-modal/movie-form-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditMovieComponent } from './edit-movie/edit-movie.component';



@NgModule({
  declarations: [
    MovieFormModalComponent,
    EditMovieComponent
  ],
  exports: [
    MovieFormModalComponent,
    EditMovieComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ModalsModule { }
