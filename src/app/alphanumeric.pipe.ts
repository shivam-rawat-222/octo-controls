import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphanumeric'
})
export class AlphanumericPipe implements PipeTransform {
  transform(value: string): boolean {
    return /^[a-zA-Z]+$/.test(value);
  }
}
