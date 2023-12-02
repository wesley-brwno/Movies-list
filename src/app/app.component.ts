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
        title: "Alita: Battle Angel",
        imageUrl: "https://br.web.img3.acsta.net/c_310_420/pictures/19/01/31/11/55/2714336.jpg",
        rating: 4,
        created_at: new Date()
      },
      {
        id: 7,
        title: "Puss in Boots: The Last Wish",
        imageUrl: "https://play-lh.googleusercontent.com/oiOeeMjfYLLSMMdMllZKqlPu57XMJfisSHBa3G3FD6JlCkfua5jYbhdLIgdl9YAObw4lAwxO-jDUyXp8mcI",
        rating: 5,
        created_at: new Date(),
        is_favourite: true
      },
      {
        id: 6,
        title: "Flipped",
        imageUrl: "https://d3tvwjfge35btc.cloudfront.net/Assets/25/703/L_p0015270325.jpg",
        rating: 5,
        created_at: new Date(),
        is_favourite: true
      },
      {
        id: 8,
        title: "Blade Runner 2049",
        imageUrl: "https://br.web.img3.acsta.net/c_310_420/pictures/17/08/25/11/58/463146.jpg",
        rating: 4,
        created_at: new Date(),
        is_favourite: true
      },
      {
        id: 5,
        title: "Scooby-Doo on Zombie Island",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Scooby-doo-on-zombie-island.jpg/220px-Scooby-doo-on-zombie-island.jpg",
        rating: 3,
        created_at: new Date(),
      },
      {
        id: 4,
        title: "Gulliver's Travels",
        imageUrl: "https://resizing.flixster.com/Bw2f8-pb2xjU-IxdiwbXwQDt2OE=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p1674_p_v8_aa.jpg",
        rating: 2,
        created_at: new Date()
      },
      {
        id: 2,
        title: "Your Name",
        imageUrl: "https://upload.wikimedia.org/wikipedia/pt/thumb/7/7f/Kimi-no-Na-wa-poster.jpg/240px-Kimi-no-Na-wa-poster.jpg",
        rating: 5,
        created_at: new Date()
      },
      {
        id: 3,
        title: "The Empire of Corpses",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMjY5MjkxMjMtYjcwZC00MDUyLWIzMWMtZTc3MzA5OGQyMGUzXkEyXkFqcGdeQXVyNjUyOTYyNTM@._V1_.jpg",
        rating: 1,
        created_at: new Date()
      },
      {
        id: 9,
        title: "All Quiet on the Western Front",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/All_quiet_on_the_western_front_%282022_film%29.jpg/220px-All_quiet_on_the_western_front_%282022_film%29.jpg",
        rating: 3,
        created_at: new Date()
      },
      {
        id: 10,
        title: "A Silent Voice",
        imageUrl: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/47/Koe-no-Katachi-poster-film.jpg/240px-Koe-no-Katachi-poster-film.jpg",
        rating: 5,
        created_at: new Date()
      },
    ];
  }
}
