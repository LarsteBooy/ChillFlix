import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSidescrollerComponent } from './movie-sidescroller.component';

describe('MovieSidescrollerComponent', () => {
  let component: MovieSidescrollerComponent;
  let fixture: ComponentFixture<MovieSidescrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSidescrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSidescrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
