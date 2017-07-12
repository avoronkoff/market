import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'currencyFormatPipe'})

export class currencyFormatPipe implements PipeTransform {
  transform(exponent: string): string {
    exponent = exponent.replace(/ /g,'').trim();
    return exponent + " руб.";
  }
}
