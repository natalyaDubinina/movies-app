import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/shared/movie.mock-data.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {Location} from '@angular/common'
import { IFilm } from 'src/app/shared/movie.interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: IFilm;

  constructor(
    private route: ActivatedRoute,
    private movieServise: MockDataService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.movie = this.movieServise.getMovie(id);
  }
  goBack(){
    this.location.back()
  }
}
