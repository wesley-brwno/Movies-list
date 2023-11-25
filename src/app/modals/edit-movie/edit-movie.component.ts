import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieDataOutput } from 'src/app/interfaces/movie-data-output';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit{
  @Output() 
  editedMovie: EventEmitter<MovieDataOutput> = new EventEmitter<MovieDataOutput>();
  @Input() 
  displayModal: boolean = false;
  @Input()
  movieToBeEdited: MovieDataOutput = {id: 1, title: '', imageUrl: '', rating: 0, created_at: new Date().getFullYear};
  movieForm: FormGroup;
  @Output() 
  hideModal: EventEmitter<void> = new EventEmitter();
  invalidInputs: Array<string> = [];

  constructor(private formBuilder:FormBuilder) {
    this.movieForm = formBuilder.group({
       title: ['', Validators.required],
       imageUrl: ['', Validators.required],
       rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }
  ngOnInit(): void {
    this.movieForm.controls['title'].setValue(this.movieToBeEdited.title);
    this.movieForm.controls['imageUrl'].setValue(this.movieToBeEdited.imageUrl);
    this.movieForm.controls['rating'].setValue(this.movieToBeEdited.rating);
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
        id: this.movieToBeEdited.id,
        title: this.movieForm.get('title')!.value,
        imageUrl: this.movieForm.get('imageUrl')!.value,
        rating: this.movieForm.get('rating')!.value,
        created_at: this.movieToBeEdited.created_at
      };
      this.editedMovie.emit(movieData);      
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

  get imageUrl(): string {
    return this.movieForm.get('imageUrl')!.value;
  }

  get rating(): string {
    return this.movieForm.get('rating')!.value;
  }

  get title(): string {
    return this.movieForm.get('title')!.value;
  }
}
