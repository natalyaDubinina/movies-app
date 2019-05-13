import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieGenre'
})
export class GenrePipe implements PipeTransform {

  transform(movies: any, genre: any): any {

    if (genre) {
      return movies.filter(function (el: any) {
         return el['genres'].indexOf(genre) > -1;
      })
    }
    return movies;
  }
}
