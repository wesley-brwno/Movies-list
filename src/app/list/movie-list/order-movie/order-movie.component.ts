import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieDataOutput } from 'src/app/interfaces/movie-data-output';

@Component({
  selector: 'app-order-movie',
  templateUrl: './order-movie.component.html',
  styleUrls: ['./order-movie.component.css']
})
export class OrderMovieComponent implements OnInit{


  @Input() moviesList: MovieDataOutput[] = [];
  @Output() searchedMoviesListEmitter: EventEmitter<Array<MovieDataOutput>> = new  EventEmitter<Array<MovieDataOutput>>;
  searchMovie: string = '';
  moviesListCopy: MovieDataOutput[] = [];
  filteredMovies: Set<MovieDataOutput> = new Set<MovieDataOutput>();

  ngOnInit(): void {
    this.moviesListCopy = [...this.moviesList];
  }

  onMovieSearch() {
    const sortedList = this.moviesList.filter((m) => m.title.toLocaleLowerCase().includes(this.searchMovie.trim().toLocaleLowerCase()));        
    this.searchedMoviesListEmitter.emit(sortedList);
  }


  onOderByDate() {    
    const listBoforeSort = this.moviesList.slice();
    this.moviesList.sort((a, b) => a.created_at - b.created_at);

    if (this.compareLists(listBoforeSort, this.moviesList)) {
      this.moviesList.reverse();
    }
  }

  onOrderByName() {
    const listBeforeChange = this.moviesList.slice();
    this.moviesList.sort((a, b) => a.title.localeCompare(b.title));
    
    if(this.compareLists(listBeforeChange, this.moviesList)) {
      this.moviesList.reverse();
    } 
  }

  onOderByRating() {
    const listBeforeChange = this.moviesList.slice();
    this.moviesList.sort((a, b) => a.rating - b.rating);

    if(this.compareLists(listBeforeChange, this.moviesList)) {
      this.moviesList.reverse();
    } 
  }

  compareLists(listA: Array<MovieDataOutput>, listB: Array<MovieDataOutput>) {
    return JSON.stringify(listA) === JSON.stringify(listB);
  }  
}
