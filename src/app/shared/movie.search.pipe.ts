import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieSearch'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, input: any): any {

    if (input) {
      input = input.toLowerCase();

      return value.filter(function (el: any) {
        return el['name'].toLowerCase().indexOf(input) > -1;
      })
      
    }
    return value;
  }
}
