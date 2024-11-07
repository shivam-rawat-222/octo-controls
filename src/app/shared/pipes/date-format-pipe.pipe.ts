import { Pipe, PipeTransform } from '@angular/core';
import { DATE_FORMAT } from '../constants/constants';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormatPipe'
})
export class DateFormatPipePipe implements PipeTransform {
  constructor(
    private datePipe: DatePipe
  ) {
  }
  transform(value: string) {
    value = this.datePipe.transform(value, DATE_FORMAT)!;
    return value;
  }
}

