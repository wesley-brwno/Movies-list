import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludedMovieComponent } from './excluded-movie.component';

describe('ExcludedMovieComponent', () => {
  let component: ExcludedMovieComponent;
  let fixture: ComponentFixture<ExcludedMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcludedMovieComponent]
    });
    fixture = TestBed.createComponent(ExcludedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
