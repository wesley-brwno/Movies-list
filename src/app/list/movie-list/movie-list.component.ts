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
  displayConfirmModal: boolean = false;
  modalAnswer: boolean = false;
  movieToBeRemovedFromBin!: MovieDataOutput;
  moviesSeachedList: MovieDataOutput[] = [];
  toggleList: string = 'favourite-list';
  sectionHref: string = '#main_list';
  toggleSecion: boolean = false;
  
  ngOnInit(): void {
    
  }

  deleteMovie($event: MovieDataOutput) {
    this.movieToBeDeleted.emit($event);
  }

  editMovie($event: MovieDataOutput) {
    this.movieToBeEdited.emit($event);
  }

  getListHref(sectionId: string): string {
    return sectionId;
  }

  hideConfimModalAndBackDrop() {
    this.displayConfirmModal = false;
  }

  onConfirmDeletion(deleteMovie: boolean) {
    if(deleteMovie) {
      let movie = this.movieToBeRemovedFromBin;
      let index = this.moviesExcludedList.indexOf(movie);
      this.moviesExcludedList.splice(index, 1);
    }
    this.hideConfimModalAndBackDrop();
  }

  onChangeHref() {    
    if(this.sectionHref === '#main_list') {
      this.sectionHref = '#secondary_list';
      return;
    }
    this.sectionHref = '#main_list';
  }

  onDeleteFromBin($event: MovieDataOutput) {
    this.movieToBeRemovedFromBin = $event;
    this.showConfirmModal();
  }

  onFilterList($event: MovieDataOutput[]) {    
    this.moviesSeachedList = $event;
  }

  onToggleSection() {
    this.toggleSecion = !this.toggleSecion;
  }

  restoreMovie($event: MovieDataOutput) {
    this.movieToBeRestored.emit($event);
  }

  showConfirmModal() {
    this.displayConfirmModal = true;
  } 

  toggleFavourite($event: MovieDataOutput) {
    this.movieToToggleFav.emit($event);      
  }
}
