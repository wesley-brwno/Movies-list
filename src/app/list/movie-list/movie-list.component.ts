import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MovieDataOutput } from 'src/app/interfaces/movie-data-output';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {


  @Input() moviesList: Array<MovieDataOutput> = [];
  @Output() movieToBeDeleted: EventEmitter<MovieDataOutput> = new EventEmitter<MovieDataOutput>;
  @Output() movieToBeEdited: EventEmitter<MovieDataOutput> = new EventEmitter<MovieDataOutput>;

  deleteMovie($event: MovieDataOutput) {
    this.movieToBeDeleted.emit($event);
  }
  editMovie($event: MovieDataOutput) {
    this.movieToBeEdited.emit($event);
  }
}
