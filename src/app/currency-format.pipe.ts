import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'CurrencyFormatPipe'})

export class CurrencyFormatPipe implements PipeTransform {
  transform(exponent: string): string {
    exponent = exponent.replace(/ /g,'').trim();
    return exponent + ' руб.';
  }
}
