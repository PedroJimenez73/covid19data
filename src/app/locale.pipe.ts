import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locale'
})
export class LocalePipe implements PipeTransform {

  transform(value: any): any {
    let number = value.toLocaleString('de-DE')
    return number;
  }

}
