import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MovieDataOutput } from 'src/app/interfaces/movie-data-output';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnChanges{



  @Input() moviesList: Array<MovieDataOutput> = [];
  @Output() movieToBeDeleted: EventEmitter<MovieDataOutput> = new EventEmitter<MovieDataOutput>;
  @Output() movieToBeEdited: EventEmitter<MovieDataOutput> = new EventEmitter<MovieDataOutput>;

  ngOnChanges(changes: SimpleChanges): void {


  }

  deleteMovie($event: MovieDataOutput) {
    this.movieToBeDeleted.emit($event);
  }
  editMovie($event: MovieDataOutput) {
    this.movieToBeEdited.emit($event);
  }

  onOrderByName() {
    const listBeforeChange = this.moviesList.slice();
    this.moviesList.sort((a, b) => a.title.localeCompare(b.title));
    
    if(this.compareLists(listBeforeChange, this.moviesList)) {
      this.moviesList.reverse();
    } 
  }

  onOderByRating() {
    const listBeforeChange =this.moviesList.slice();
    this.moviesList.sort((a, b) => a.rating - b.rating);

    if(this.compareLists(listBeforeChange, this.moviesList)) {
      this.moviesList.reverse();
    } 
  }
    

  compareLists(listA: Array<MovieDataOutput>, listB: Array<MovieDataOutput>) {
    return JSON.stringify(listA) === JSON.stringify(listB);
  }
    
}
