import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieDataOutput } from 'src/app/interfaces/movie-data-output';

@Component({
  selector: 'app-excluded-movie',
  templateUrl: './excluded-movie.component.html',
  styleUrls: ['./excluded-movie.component.css']
})
export class ExcludedMovieComponent {


  @Input() movie!: MovieDataOutput;
  @Input() isCardEven: boolean = false;
  @Output() movieEmiter: EventEmitter<MovieDataOutput> = new EventEmitter<MovieDataOutput>;
  @Output() movieDeleteEmitter:  EventEmitter<MovieDataOutput> = new EventEmitter<MovieDataOutput>;

  onRestoreClick(movie: MovieDataOutput) {
    this.movieEmiter.emit(movie);
  }

  onDeleteClick(movie: MovieDataOutput) {
    this.movieDeleteEmitter.emit(movie);
  }
}
