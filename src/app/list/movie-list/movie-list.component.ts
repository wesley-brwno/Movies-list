import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MovieDataOutput } from 'src/app/interfaces/movie-data-output';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() moviesList: Array<MovieDataOutput> = [];
  @Input() moviesExcludedList: Array<MovieDataOutput> = [];
  @Input() moviesFavList: MovieDataOutput[] = [];
  @Output() movieToBeDeleted: EventEmitter<MovieDataOutput> = new EventEmitter<MovieDataOutput>;
  @Output() movieToBeEdited: EventEmitter<MovieDataOutput> = new EventEmitter<MovieDataOutput>;
  @Output() movieToBeRestored: EventEmitter<MovieDataOutput> = new EventEmitter<MovieDataOutput>();
  @Output() movieToToggleFav: EventEmitter<MovieDataOutput> = new EventEmitter<MovieDataOutput>();
  toggleList: string = 'favourite-list';
  displayConfirmModal: boolean = false;
  modalAnswer: boolean = false;
  movieToBeRemovedFromBin!: MovieDataOutput;

  
  ngOnInit(): void {
    
  }

  deleteMovie($event: MovieDataOutput) {
    this.movieToBeDeleted.emit($event);
  }

  onConfirmDeletion(deleteMovie: boolean) {
    if(deleteMovie) {
      let movie = this.movieToBeRemovedFromBin;
      let index = this.moviesExcludedList.indexOf(movie);
      this.moviesExcludedList.splice(index, 1);
    }
    this.hideConfimModalAndBackDrop();
  }

  onDeleteFromBin($event: MovieDataOutput) {
    this.movieToBeRemovedFromBin = $event;
    this.showConfirmModal();
  }

  editMovie($event: MovieDataOutput) {
    this.movieToBeEdited.emit($event);
  }

  restoreMovie($event: MovieDataOutput) {
    this.movieToBeRestored.emit($event);
  }

  toggleFavourite($event: MovieDataOutput) {
    this.movieToToggleFav.emit($event);      
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

  showConfirmModal() {
    this.displayConfirmModal = true;
  }

  hideConfimModalAndBackDrop() {
    this.displayConfirmModal = false;
  }
  
  compareLists(listA: Array<MovieDataOutput>, listB: Array<MovieDataOutput>) {
    return JSON.stringify(listA) === JSON.stringify(listB);
  }  
}
