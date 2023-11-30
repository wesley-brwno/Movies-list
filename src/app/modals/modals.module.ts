import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieFormModalComponent } from './movie-form-modal/movie-form-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';



@NgModule({
  declarations: [
    MovieFormModalComponent,
    EditMovieComponent,
    DeleteMovieComponent
  ],
  exports: [
    MovieFormModalComponent,
    EditMovieComponent,
    DeleteMovieComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ModalsModule { }
