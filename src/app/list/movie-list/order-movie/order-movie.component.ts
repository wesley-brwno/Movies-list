import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-movie',
  templateUrl: './order-movie.component.html',
  styleUrls: ['./order-movie.component.css']
})
export class OrderMovieComponent {

  @Output() orderByNameEmitter: EventEmitter<any> = new EventEmitter<any>;
  @Output() orderByRatingEmitter: EventEmitter<any> = new EventEmitter<any>;

  onOrderbyNameClick() {
    this.orderByNameEmitter.emit();
  }

  onOrderbyRatingClick() {
    this.orderByRatingEmitter.emit();
  }
  
}
