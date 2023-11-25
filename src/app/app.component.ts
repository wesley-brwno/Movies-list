import { Component, OnInit } from '@angular/core';
import { MovieDataInput } from './interfaces/movie-data-input';
import { MovieDataOutput } from './interfaces/movie-data-output';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isBackDropActive: boolean = false;
  exibirModal: boolean = false;
  exibitEditModal: boolean = false;
  movieToBeEdited!: MovieDataOutput;
  movieList!: Array<MovieDataOutput>;

  ngOnInit(): void {

    this.movieList = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      imageUrl: "https://upload.wikimedia.org/wikipedia/pt/thumb/7/7f/Kimi-no-Na-wa-poster.jpg/240px-Kimi-no-Na-wa-poster.jpg",
      rating: 5
    },
    {
      id: 2,
      title: "The Empire of Corpses",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjY5MjkxMjMtYjcwZC00MDUyLWIzMWMtZTc3MzA5OGQyMGUzXkEyXkFqcGdeQXVyNjUyOTYyNTM@._V1_.jpg",
      rating: 1
    }];
  }


  onDisplayModal($event: any) {
    this.exibirModal = true;
    this.isBackDropActive = true;
  }

  onDisplayEditModal(movie: MovieDataOutput) {
    this.exibitEditModal = true;
    this.isBackDropActive = true;
    this.movieToBeEdited = movie;    
  }

  onHideModal() {
    this.exibirModal = false;
    this.exibitEditModal = false;
    this.isBackDropActive = false;
  }
  hideElements() {
    this.exibirModal = false;
    this.exibitEditModal = false;
    this.isBackDropActive = false;
  }

  onAddNewMovie(movieInput: MovieDataInput) {
    this.movieList.push(
      {
        id: this.movieList.length + 1,
        title: movieInput.title,
        imageUrl: movieInput.imageUrl,
        rating: movieInput.rating
      }
    );
  }

  onDeleteMovie(movie: MovieDataOutput) {
    let index = this.movieList.indexOf(movie);   
    this.movieList.splice(index, 1);
  }
  
  onEditMovie(movie: MovieDataOutput) {
    let index = this.movieList.findIndex((m) => m.id === movie.id);
    this.movieList[index] = movie;  
  }
}
