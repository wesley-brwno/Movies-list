import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieDataInput } from 'src/app/interfaces/movie-data-input';

@Component({
  selector: 'app-movie-form-modal',
  templateUrl: './movie-form-modal.component.html',
  styleUrls: ['./movie-form-modal.component.css']
})
export class MovieFormModalComponent {
  @Output() 
  addedMovie: EventEmitter<MovieDataInput> = new EventEmitter<MovieDataInput>();
  @Input() 
  displayModal: boolean = false;
  movieForm: FormGroup;
  @Output() 
  hideModal: EventEmitter<void> = new EventEmitter();
  invalidInputs: Array<string> = [];

  constructor(private formBuilder: FormBuilder) {
    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      imageUrl: ['', Validators.required],
      rating:  new FormControl('5')
    });
  }

  clearForm() {
    this.movieForm.reset();
    this.invalidInputs.splice(0, this.invalidInputs.length);
  }

  closeModal() {
    this.hideModal.emit();
    this.movieForm.reset();
    this.invalidInputs.splice(0, this.invalidInputs.length);
  }

  isDataValid(): boolean {
    return this.movieForm.valid;
  }

  onSubmit(): void {    
    if (this.isDataValid()) {
      const movieData = {
        title: this.movieForm.get('title')!.value,
        imageUrl: this.movieForm.get('imageUrl')!.value,
        rating: Number(this.movieForm.get('rating')!.value)
      };
      
      this.addedMovie.emit(movieData);      
      this.closeModal();
      return;
    }
    this.warnUserOfInvalidData();
  }
  
  warnUserOfInvalidData(): void {
    this.invalidInputs.splice(0, this.invalidInputs.length);

    if(!this.movieForm.get('title')?.valid) {
      this.invalidInputs.push("Title cannot be empty!");
    }
    if(!this.movieForm.get('imageUrl')?.valid) {
      this.invalidInputs.push("Image URL cannot be empty!");
    }
    if(!this.movieForm.get('rating')?.valid) {
      this.invalidInputs.push("Rating must be between 1 and 5!");
    }    
  }
}
