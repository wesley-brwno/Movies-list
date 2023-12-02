import { Component, OnInit } from '@angular/core';
import { MovieDataInput } from './interfaces/movie-data-input';
import { MovieDataOutput } from './interfaces/movie-data-output';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  exibitEditModal: boolean = false;
  exibirModal: boolean = false;
  isBackDropActive: boolean = false;
  movieToBeEdited!: MovieDataOutput;
  movieList: Array<MovieDataOutput> = [];
  moviesFavList!: Array<MovieDataOutput>;
  movieExcludedList: Array<MovieDataOutput> = new Array<MovieDataOutput>();


  ngOnInit(): void {
    this.movieList = this.fetchData();
    this.moviesFavList = this.movieList.filter((m) => m.is_favourite);
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
    this.movieList.unshift(
      {
        id: this.movieList.length + 1,
        title: movieInput.title,
        imageUrl: movieInput.imageUrl,
        rating: movieInput.rating,
        created_at: new Date()
      }
    );
  }


  onDeleteMovie(movie: MovieDataOutput) {
    if (!movie.is_deleted) {
      let index = this.movieList.indexOf(movie);
      this.movieList.splice(index, 1);
      movie.is_deleted = true;
      this.movieExcludedList.push(movie);
      this.updateFavMoviesList();
      return;
    }
    let index = this.movieExcludedList.indexOf(movie);
    this.movieExcludedList.splice(index, 1);
  }

  onEditMovie(movie: MovieDataOutput) {
    let index = this.movieList.findIndex((m) => m.id === movie.id);
    this.movieList[index] = movie;
  }

  onRestoreMovie(movie: MovieDataOutput) {
    let index = this.movieExcludedList.indexOf(movie);
    this.movieExcludedList.splice(index, 1);
    delete movie.is_deleted;
    this.movieList.push(movie);
    this.updateFavMoviesList();
  }

  onToggleFav(movie: MovieDataOutput) {
    let index = this.movieList.indexOf(movie);
    this.movieList[index] = movie;
    this.updateFavMoviesList();
  }

  updateFavMoviesList() {
    this.moviesFavList = this.movieList.filter((m) => m.is_favourite);
    this.moviesFavList.sort((a, b) => a.title.localeCompare(b.title));
  }

  fetchData() {
    return [
      {
        id: 1,
        title: "The Shawshank Redemption",
        imageUrl: "https://upload.wikimedia.org/wikipedia/pt/thumb/7/7f/Kimi-no-Na-wa-poster.jpg/240px-Kimi-no-Na-wa-poster.jpg",
        rating: 5,
        created_at: new Date()
      },
      {
        id: 2,
        title: "The Empire of Corpses",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMjY5MjkxMjMtYjcwZC00MDUyLWIzMWMtZTc3MzA5OGQyMGUzXkEyXkFqcGdeQXVyNjUyOTYyNTM@._V1_.jpg",
        rating: 1,
        created_at: new Date()
      },
      {
        id: 3,
        title: "Puss in Boots: The Last Wish",
        imageUrl: "https://play-lh.googleusercontent.com/oiOeeMjfYLLSMMdMllZKqlPu57XMJfisSHBa3G3FD6JlCkfua5jYbhdLIgdl9YAObw4lAwxO-jDUyXp8mcI",
        rating: 5,
        created_at: new Date()
      },
      {
        id: 4,
        title: "Gulliver's Travels",
        imageUrl: "https://resizing.flixster.com/Bw2f8-pb2xjU-IxdiwbXwQDt2OE=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p1674_p_v8_aa.jpg",
        rating: 2,
        created_at: new Date()
      },
      {
        id: 5,
        title: "Scooby-Doo on Zombie Island",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Scooby-doo-on-zombie-island.jpg/220px-Scooby-doo-on-zombie-island.jpg",
        rating: 3,
        created_at: new Date()
      },
      {
        id: 6,
        title: "Flipped",
        imageUrl: "https://d3tvwjfge35btc.cloudfront.net/Assets/25/703/L_p0015270325.jpg",
        rating: 5,
        created_at: new Date()
      }
    ];
  }
}
