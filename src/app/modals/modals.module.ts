import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieFormModalComponent } from './movie-form-modal/movie-form-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MovieFormModalComponent
  ],
  exports: [
    MovieFormModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ModalsModule { }
