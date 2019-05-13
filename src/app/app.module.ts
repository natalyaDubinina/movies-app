import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movies-list/movie-details/movie-details.component';
import { SearchPipe } from './shared/movie.search.pipe';
import { GenrePipe } from './shared/movie.genre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    SearchPipe,
    GenrePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    FlexLayoutModule
  ],
  exports: [
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
