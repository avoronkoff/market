import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'CurrencyFormatPipe'})

export class CurrencyFormatPipe implements PipeTransform {
  transform(exponent: string): string {
    return exponent.replace(/ /g,'').trim() + ' руб.';
  }
}
