import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieDataOutput } from 'src/app/interfaces/movie-data-output';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {

  @Input() movie!: MovieDataOutput;
  @Input() isCardEven: boolean = false;
  @Output() movieEmiter: EventEmitter<MovieDataOutput> = new EventEmitter<MovieDataOutput>;
  @Output() movieEditEmitter:  EventEmitter<MovieDataOutput> = new EventEmitter<MovieDataOutput>;
  @Output() movieFavEmitter:  EventEmitter<MovieDataOutput> = new EventEmitter<MovieDataOutput>;



  onDeleteClick(movie: MovieDataOutput) {
    this.movieEmiter.emit(movie);
  }

  onEditClick(movie: MovieDataOutput) {
    //todo create confirm edit modal
    this.movieEditEmitter.emit(movie);
  }

  onFavoriteClick(movie: MovieDataOutput) {
    if(!movie.is_favourite) {
      movie.is_favourite = true;
      this.movieFavEmitter.emit(movie);
      return;
    }
    delete movie.is_favourite;
    this.movieFavEmitter.emit(movie);
  }
}
