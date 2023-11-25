import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMovieComponent } from './order-movie.component';

describe('OrderMovieComponent', () => {
  let component: OrderMovieComponent;
  let fixture: ComponentFixture<OrderMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderMovieComponent]
    });
    fixture = TestBed.createComponent(OrderMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
