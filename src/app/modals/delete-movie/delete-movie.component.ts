import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent {

  @Output() deleteMovie: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() displayModal!: boolean;

  onDeleteClick() {
    this.deleteMovie.emit(true);
  }
  onCancleClick() {
    this.deleteMovie.emit(false);
  }
}
