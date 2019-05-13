import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movies-list/movie-details/movie-details.component';

const routes: Routes = [
  { path: 'movies', component: MoviesListComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: '', redirectTo: 'movies', pathMatch : 'full'}
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
